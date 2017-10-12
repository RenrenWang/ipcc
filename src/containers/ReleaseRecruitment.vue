<template>
  <div class="release-recruitment">
         <VHeader  :isSubPage="false" title="我的发布" :isFixed="true"/>
         <div class="recruit-list mescroll" id="mescroll">
		
            <ul id="dataList" class="data-list" v-if="!isError">
                  <RecruitItem v-for="(v,index) in pdlist"  :key="index" :rData="v" :selectIndex='index' @deleteItem="showAlertConfirm"/>
            </ul>
         </div>
     <FooterButton  btnName="发布" @fBtnAction="btnAction()"/>
     <AlertConfirm  v-show="isShowAlertConfirm"  alertTitle="删除" alertContent="删除后，该信息将无法被老师所看到。" @cancelActive="AlertCancelActive" @confirmActive="AlertConfirmActive"/>

  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  RecruitItem   from '../components/RecruitItem.vue'
import FooterButton from '../components/FooterButton.vue'
import AlertConfirm from '../components/AlertConfirm.vue'
export default {
  name: 'releaseRecruitment',
  data () {
    return {
      pdlist:[],
	  isShowAlertConfirm:false,
	  deleteId:-1,
	  deleteIndex:-1,
	  mescroll:Object,
	  isError:false
    }
  },
  mounted(){
	 if(this.pdlist.length<=0)
     this.initMescroll();
  },
  methods:{

	AlertCancelActive(){
         this.isShowAlertConfirm=false;
      },
      AlertConfirmActive(){
          console.log(api.recruitDelete+this.deleteId);
          this.$http.get(api.recruitDelete+this.deleteId)
          .then((response)=>{
			  console.log(JSON.stringify(response.data));
			  if(response.data.result=='success'){
               this.isShowAlertConfirm=false;
			
			 
			   console.log(this.pdlist.splice(this.deleteIndex,1));
			  }else{
				   alert('删除失败！'+this.deleteIndex);
			  }
			  
          });
        
      },
      showAlertConfirm(array){
	
       this.isShowAlertConfirm=true;
	   this.deleteId=array[0];
	   this.deleteIndex=array[1];
      },
   btnAction(){
      this.$router.push({name:'RecruitPost'});
   },
 
		initMescroll() {
			//创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
			//解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
              let self=this;
			this.mescroll = new MeScroll("mescroll", {
				down: {
					use: false,
					callback() {
						console.log(1);
					}
				},

				up: {
					callback: this.upCallback, //上拉回调
					auto: true,
					//以下参数可删除,不配置
					//page:{size:8}, //可配置每页8条数据,默认10
					toTop: { //配置回到顶部按钮
						src: "/static/images/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
						//offset : 1000
					},
					htmlNodata: '<p class="upwarp-nodata">-- 没有更多数据 --</p>',
					page: {
						
						size: 10,
						time:3000
					},
					
					empty: { //配置列表无任何数据的提示
						warpId: "dataList",
						icon: "/static/images/mescroll-empty.png",
						tip: "亲,暂无相关数据哦~",
						btntext: "去逛逛 >",
						btnClick() {
							alert("点击了去逛逛按钮");
						}
					}
				}
			});

			//初始化vue后,显示vue模板布局
			document.getElementById("dataList").style.display = "block";
		},
		//上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
		upCallback(page) {
			console.log("page.num==" + page.num + ", page.size==" + page.size);
			//联网加载数据
                console.log("------->"+page.num);
			this.$http.get(api.recruitList + 'isAll=N&pinfoId='+GetQueryString('pinfoId')+'&pageno=' + page.num).then((response) => {
				//data=[]; //打开本行注释,可演示列表无任何数据empty的配置
				let data = response.data.data;
				// this.pdlist = data.data;


				//data=[]; //打开本行注释,可演示列表无任何数据empty的配置
				//如果是第一页需手动制空列表
			   if (page.num == 1) this.pdlist = [];

			
				//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
				//传参:数据的总数; mescroll会自动判断列表是否有无下一页数据,如果数据不满一页则提示无更多数据;
				this.mescroll.endSuccess(data.length);
				console.log(this.mescroll);
					//更新列表数据
				this.pdlist = this.pdlist.concat(data);
				//console.log("this.pdlist.length==" + this.pdlist.length);

			}).catch(error=>{
				this.mescroll.endErr();
				if(this.pdlist<=0){
                     this.isError=true;
				}
				//this.mescroll.endSuccess(this.pdlist<0?);

			})

		}

  },
  components:{
     VHeader,
     RecruitItem,
     FooterButton,
	 AlertConfirm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.release-recruitment{
   
    
  
    background:#bbbbbb;
    .recruit-list{
	-webkit-overflow-scrolling : touch; 
     position: fixed;
    top: rem(100px);
    bottom:  rem(100px);
    height: auto;
      
      >ul{
        	padding: 0 10px;
      }
    }
    
}
</style>

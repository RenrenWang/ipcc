<template>
	<div class="resume">
		<VHeader :isSubPage="false" title="招聘信息大全" :isFixed="true" />
		<SearchNavbar @searchNavLeftBtn="selectAddressCity" :sCity="city" :isAll="true"/>
		<SearchKey :searchKeys="keyList" />
		<div class="resume-list mescroll" id="mescroll">
			<ul id="dataList" class="data-list">
				<RecruitItem v-for="(v,index) in pdlist"  :key="index" :rData="v"  :isAll="true"/>
            </ul>
		</div>
      
	</div>
</template>

<script>
import VHeader from '../components/Header.vue'
import SearchNavbar from '../components/SearchNavbar.vue'
import SearchKey from '../components/SearchKey.vue'
import  RecruitItem   from '../components/RecruitItem.vue'
import  SelectMapCity   from '../components/SelectMapCity.vue'
export default {
	name: 'Resume',
	data() {
		return {
			isSelectAddressCity:false,
			city:'杭州市',
			keyList: [
				{
					name: "兼全职", kinds: [
						{
							title: "",
							classData: [{codeName:'C', codeValue: '兼职', isSelect: true }, {codeName:'J', codeValue: '全职', isSelect: false }]
						}
					]
				},
				{
					name: "艺术种类", kinds: [
						{
							title: "",
							classData: []
						}
					]
				},
				{
					name: "性别", kinds: [
						{
							title: "",
							classData: [{codeName:"男", codeValue: '男', isSelect: true }, {codeName:'女', codeValue: '女', isSelect: false }]
						}
					]
				},
			],
			pdlist: [],
			page: 1
		}
	},
	// mounted() {

	//  this.moreData(document.body,this.getData());
	// },
	mounted() {
		this.getKindsData();
		this.initMescroll();
	},
	methods: {
		selectAddressCity(){
		
		  AMapUI.loadUI(['misc/MobiCityPicker'],(MobiCityPicker)=> {

          var cityPicker = new MobiCityPicker();
         
            cityPicker.show();
             
            // AMap.event.addDomListener(document.getElementById('openBtn'), 'click', function(e) {

            //     cityPicker.show();
            // });
            cityPicker.on('citySelected', (cityInfo)=> {
                //隐藏城市列表
                cityPicker.hide();
                this.city=cityInfo.name;
                //选中的城市信息
                console.log(JSON.stringify(cityInfo));
               });
            });
            this.isSelectAddressCity=!this.isSelectAddressCity;  
		},
    getKindsData(){
		 this.$http.get(api.kindList)
		 .then(response=>{
			 let data=response.data;
			 data.fieldsData.map((item,index)=>{
				item.classData.map((sitem,sindex)=>{
					sitem.isSelect=false;
				})
			 })
			 	
			 this.keyList[1]['kinds']=data.fieldsData;
		 })
		},
		initMescroll() {
			//创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
			//解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;

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
						num: 0,
						size: 10,
						time: 5
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

			this.$http.get(api.recruitList + 'pinfoId=32&pageno=' + page.num).then((response) => {
				//data=[]; //打开本行注释,可演示列表无任何数据empty的配置
				let data = response.data.data;
				// this.pdlist = data.data;


				//data=[]; //打开本行注释,可演示列表无任何数据empty的配置
				//如果是第一页需手动制空列表
			if (page.num == 1) this.pdlist = [];
	           this.mescroll.endSuccess(data.length);
				//更新列表数据
				this.pdlist = this.pdlist.concat(data);
				console.log("this.pdlist.length==" + this.pdlist.length);

				//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
				//传参:数据的总数; mescroll会自动判断列表是否有无下一页数据,如果数据不满一页则提示无更多数据;
			
			}).catch(error=>{
					this.mescroll.endSuccess(0);
			})

		},
	},

	components: {
		VHeader,
		SearchNavbar,
		SearchKey,
		RecruitItem
	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.resume {

	background: #edebe8;
	.resume-list {
  height: auto;
    position: fixed;
	top: rem(100px) * 2 + rem(80px);
	bottom: 0;
		ul {
			padding: 0 10px;
		}
	}
}
</style>

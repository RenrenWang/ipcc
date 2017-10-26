<template>
  <div class="purchased">
       <VHeader  :isSubPage="false" :title="$route.query.type?'已联系':'已购买'" :isFixed="true"/>
      <SearchKey :searchKeys="keyList"/> 
    <ul class="resume-list">
         	<ResumeItem v-for="(v,index) in pdlist" :key="index" :resume="v" />
       </ul>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  SearchNavbar   from '../components/SearchNavbar.vue'
import  SearchKey   from '../components/SearchKey.vue'
import  ResumeItem   from '../components/ResumeItem.vue'
export default {
  name: 'Purchased',
  data () {
    return {
      pdlist:[],
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
    }
  },
  mounted(){
   this.getData();
   this.getKindsData();
  },
  methods:{
    getData(){
      
       this.$http.get(api.gmJLList+GetQueryString('pinfoId')).then((response) => {
         let data=response.data;
          this.pdlist=data.data;

        })
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
  },
  components:{
      VHeader,
      SearchNavbar,
      SearchKey,
      ResumeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.purchased{
    min-height:100%;
     background:#edebe8;
     .search-key{
         border-top:1px solid #bbbbbb;
         top:rem(100px);
     }
    .resume-list{
     padding:rem(100px) + rem(80px) 10px 0 10px;
  
  }
}

</style>

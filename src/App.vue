<template>
  <div id="app"  style="height:100%">
 
    <router-view :user="user"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
   	return {
			user:{
				pinfoId:0,
				pinfoPname:'',
				pinfoSname:'',//昵称
				pinfoSex:'',
				pinfoPhone:'',
				pinfoUri:''
			}
		}
	},
  created(){
	    
		this.$http.get(api.person+this.GetQueryString('pinfoId'))
		.then(response=>{
			let data=response.data;
			if(data.result='success'){
				console.log(data);
				let sdata=data.data[0];
				let user={};
				user.pinfoId=sdata.pinfoId;
				user.pinfoPname=sdata.pinfoPname;
				user.pinfoSname=sdata.pinfoSname;
				user.pinfoSex=sdata.pinfoSex;
				user.pinfoPhone=sdata.pinfoPhone;
				user.pinfoUri=sdata.pinfoUri;
				localStorage.setItem('user',JSON.stringify(user));
			}
     
		})
  },
  methods:{
	 GetQueryString(name){
	  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }
  }


}
</script>

<style>

 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
html,body{
 
 height:100%;
 -webkit-overflow-scrolling : touch; 
	
}
body {

	line-height: 1;
	 color: #141514;
  background:#edebe8;
}
ol, ul {
	list-style: none;
}
input{
	outline: none;
}
a{
	 background: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

	 color: #141514;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>

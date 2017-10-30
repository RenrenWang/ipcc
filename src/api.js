//const BaseUrl='http://120.26.85.17:6080/appsrv';
//const BaseUrl='http://www.ipengcaca.com/appsrv/';
const BaseUrl='/appsrv';
//const BaseUrl='http://www.hzrongzhi.com/appsrv';
//const BaseUrl='http://www.ipengcaca.com/appsrv/';
const Api={
  selectMapAddress:'https://m.amap.com/picker/?center=116.40,39.97&key=1683a75e3995650aafd98176386ccb9a',
  address:'https://m.amap.com/navi/?hideRouteIcon=1&key=1683a75e3995650aafd98176386ccb9a',
  imgUrl:'http://120.26.85.17/imgsrv/',
  kindList:BaseUrl+'/ippcInfoAction.action?classInfo=',
  resumeList:BaseUrl+'/ippcInfoAction.action?newsType=RM&',
  resumeD:BaseUrl+'/ippcInfoAction.action?newsType=RMDR&rsmIds=',
  resumePost:BaseUrl+'/ippcInfoAction.action?newsType=RMADD&',
  resumeDelete:BaseUrl+'/ippcInfoAction.action?newsType=RMDT&rsmIds=',
  recruitList:BaseUrl+'/ippcInfoAction.action?newsType=PR&',
  recruitD:BaseUrl+'/ippcInfoAction.action?newsType=PRD&infoIds=',
  recruitDelete:BaseUrl+'/ippcInfoAction.action?newsType=PRDT&infoIds=',
  recruitAddAOrRevise:BaseUrl+'/ippcInfoAction.action?newsType=PRADD&',
  gmJLList:BaseUrl+'/ippcInfoAction.action?newsType=SELLRM&pinfoId=',
   presumeD:BaseUrl+'/ippcInfoAction.action?newsType=RMD&pinfoId=',
   person:BaseUrl+'/homeInfo.action?homeType=UR&pinfoId=',
   pUpdata:BaseUrl+'/homeInfo.action?homeType=UP&pinfoId=',
    pay:BaseUrl+'/weixinPaycontrollerAction.action?applType=WXPAYw'
};
export{BaseUrl,Api}
//const BaseUrl='http://www.hzrongzhi.com/appsrv';
const BaseUrl='/appsrv';
//http://120.26.85.1
const Api={
  selectMapAddress:'https://m.amap.com/picker/?center=116.40,39.97&key=1683a75e3995650aafd98176386ccb9a',
  address:'https://m.amap.com/navi/?hideRouteIcon=1&key=1683a75e3995650aafd98176386ccb9a',
  imgUrl:'http://www.hzrongzhi.com/imgsrv/',
  kindList:BaseUrl+'/ippcInfoAction.action?classInfo=',
  resumeList:BaseUrl+'/ippcInfoAction.action?newsType=RM&',
  resumeD:BaseUrl+'/ippcInfoAction.action?newsType=RMD&rsmIds=',
  resumePost:BaseUrl+'/ippcInfoAction.action?newsType=RMADD&',
  resumeDelete:BaseUrl+'/ippcInfoAction.action?newsType=RMDT&rsmIds=',
  recruitList:BaseUrl+'/ippcInfoAction.action?newsType=PR&',
  recruitD:BaseUrl+'/ippcInfoAction.action?newsType=PRD&infoIds=',
  recruitDelete:BaseUrl+'/ippcInfoAction.action?newsType=PRDT&infoIds=',
  recruitAddAOrRevise:BaseUrl+'/ippcInfoAction.action?newsType=PRADD&'
};
export{BaseUrl,Api}
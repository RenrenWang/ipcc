//const BaseUrl='http://www.hzrongzhi.com/appsrv';
const BaseUrl='/appsrv';

const Api={
  selectMapAddress:'https://m.amap.com/picker/?center=116.40,39.97&key=1683a75e3995650aafd98176386ccb9a',
  address:'https://m.amap.com/navi/?hideRouteIcon=1&key=1683a75e3995650aafd98176386ccb9a',
  imgUrl:'http://120.26.85.17/imgsrv',
  kindList:BaseUrl+'/ippcInfoAction.action?classInfo=',
  resumeList:BaseUrl+'/ippcInfoAction.action?newsType=RM&',
  resumeD:BaseUrl+'/ippcInfoAction.action?newsType=RMD&rsmIds=',
  recruitList:BaseUrl+'/ippcInfoAction.action?newsType=PR&',
  recruitD:BaseUrl+'/ippcInfoAction.action?newsType=PRD&infoIds=',
  recruitDelete:BaseUrl+'/ippcInfoAction.action?newsType=PRDT&infoIds=',
  recruitAddAOrRevise:BaseUrl+'/ippcInfoAction.action?newsType=PRADD&'
};
export{BaseUrl,Api}
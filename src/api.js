//const BaseUrl='http://120.26.85.17/appsrv';
const BaseUrl='/appsrv';

const Api={
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
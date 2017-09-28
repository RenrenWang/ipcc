<template>
    <div class="recruit-d">
        <VHeader :isSubPage="false" title="我的发布" :isFixed="true" />
        <div class="recruit-d-content">
            <div class="recruit-d-t">
                <div class="recruit-d-item">
                    <p>发布者</p>
                </div>
                <div class="recruit-d-item">
                    <img src="/static/images/avater.jpeg" class="avater-img">
                    <p class="top-panel-item-txt">
                        <span>神仙姐姐有点黑</span>
                    </p>
                </div>
                <div class="recruit-d-item">
                    <p>倒计时29天</p>
                </div>
            </div>
            <div class="recruit-d-c">
                <h3>IPCC舞蹈工作室</h3>
                <ul class="demand-keyword">
                    <li v-for="v in 3">兼职</li>
                </ul>
                <div class="dy-box">
                    <p>薪资待遇：</p>
                    <p>500/小时</p>
                </div>
                <div class="nl-box">
                     <h3 style="border:none">工作内容与要求</h3>
                     <p>需要什么事没什么没事没事没事慢慢。必须怎么么么哒就开始加快大数据库的奥斯卡的鸡啊实践活动考级坑我呢农村教师肯定会就开始的那四大美女啊四大皆空技能</p>
                </div>
                <div class="map-box">
                    <p>工作地点</p>
                    <p>详细地址：5号楼308室</p>
                </div>
                <div class="imgs-box">
                    <p>机构图片</p>
                    <ul class="imgs-list">
                      <li v-for="v in 3"><img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506357907929&di=17891aed4bd8314ffb10436f97b8bc79&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffcfaaf51f3deb48f856b141ef91f3a292cf578eb.jpg"/></li>
                   </ul>
                </div>
            </div>
        </div>
         <FooterButton  btnName="删除"/>
    </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'

export default {
    name: 'recruitD',
    data() {
        return {

        }
    },
    components: {
        VHeader,
        FooterButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";

.recruit-d {
    height: 100%;
    font-size: 14px;
     background:#fff;
    .recruit-d-content {
        
        padding: rem(100px) 0px;
    }
    .recruit-d-t {

        padding: 15px 0;
        display: flex;

        justify-content: center;
        flex-direction: row;


        .recruit-d-item {

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            flex: 1;
            &:nth-of-type(1) {
                p {
                    width: rem(125px);
                    height: rem(60px);
                    line-height: rem(60px);
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.18);
                    border-radius: 4px;
                }
            }
            &:nth-of-type(2) {
                p {
                    margin-top: 10px;
                }
            }
            &:nth-of-type(3) {
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: flex-start;
                color: #f00;
            }
        }
        .avater-img {
            height: rem(120px);
            width: rem(120px);
            border-radius: 50%;
        }
    }
    .recruit-d-c {
       text-align:center;
        border-radius: 25px 25px 0 0;
        border-top: 1px solid #bbb;
        background: #edebe8;
    
        width:100%;
        h3 {
            padding: 10px 5px 15px 5px;
            margin: 0 rem(100px);
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #bbb;
        }
        .demand-keyword{
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            
            li{
              background: #FFC800;
              padding: 3px 20px;
              margin: 10px;
              border-radius: 5px;
              border:1px solid #bbbbbb;
            }
        }
        .dy-box{
              text-align: center;
             
            p{
                margin:15px auto;
                &:nth-of-type(2){
                    font-size: 14px;
                    padding: 8px 0px;
                    width:rem(300px);
                    border:1px solid #bbbbbb;
                     background: #FFC800;
                      border-radius: 5px;
                }
            }
        }
        .nl-box{
         margin:0 25px;
         p{
             line-height: 20px;
         padding: 20px 10px;     
        border:1px solid #bbbbbb;
           background: #FFC800;
           border-radius: 5px;} 
        }.map-box{
          
            margin:20px rem(100px);
            border-top:1px solid #bbb;
            border-bottom:1px solid #bbb;
        }
        .imgs-box{
            margin:20px 0 15px 0;
            font-size: 16px;
            text-align: center;
        }
        .imgs-list{
              display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            li{
                margin: 5px 10px;
                img{
                    height: 100%;
                    width:100%;
                }
            }
        }
    }
}
</style>
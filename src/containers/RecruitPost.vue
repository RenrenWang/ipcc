<template>
  <div class="recruit-post">
    <VHeader :isSubPage="false" title="发布" :isFixed="true" />
    <div class="post-content">
      <div class="input-group">
        <div class="input-box">
          <span style="font-weight:bold;"> 机构名称或标题：</span> <input type="text" v-model="rTitle" placeholder="不超过十个字" />
        </div>
        <div class="input-box">
          <span style="font-weight:bold;">艺术种类：</span>
          <span class="addressBtn" :style="{textAlign:'center',color:selectKinds.length>0?'#444':'#bbb'}" @click="showPanel">{{selectKindsStr}}</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="input-group">
        <p>工作地点：</p>
        <div class="input-box">
          <span style="font-weight:bold;"> 请选择定位：</span>
          <div class="addressBtn">
            <span class="iconfont icon-dizhi" style="font-size:20px;"></span>
            <span style="font-size:16px;font-weight:bold;">点击选择地址</span>
          </div>
          <span class="iconfont icon-xiangyou"></span>
        </div>
        <div class="input-box">
          <span style="font-weight:bold;">详细地址：</span> <input type="text" v-model="rAddress" placeholder="例：5号308室" />
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="selection">
        <p>性别</p>
        <div class="select-group">
          <span :class="['select-box',{'selectBtnbox':this.rSex=='男'}]" @click="selectSex('男')">男</span>
          <span :class="['select-box',{'selectBtnbox':this.rSex=='女'}]" @click="selectSex('女')">女</span>
        </div>
      </div>
      <div class="selection">
        <p>兼全职</p>
        <div class="select-group">
          <span :class="['select-box',{'selectBtnbox':this.rZKind=='C'}]" @click="selectJqz('C')">全职</span>
          <span :class="['select-box',{'selectBtnbox':this.rZKind=='J'}]" @click="selectJqz('J')">兼职</span>
        </div>
      </div>
      <div class="selection">
        <p>薪资待遇</p>
        <div class="select-group">
          <div class="rmb-box">
            <input type="text" v-model="rmb" />
            <span v-show="this.rZKind=='C'">/月</span>
            <span v-show="this.rZKind=='J'">/小时</span>
          </div>
        </div>
      </div>
      <div class="selection">
        <p>工作内容与要求</p>
        <div class="select-group">
          <div class="work-demand">
            <textarea v-model="workDemand" placeholder="对老师的要求，不超过100字" />

          </div>
        </div>
      </div>
      <div class="selection">
        <p>机构图片上传</p>
        <ul class="imgs-list">
          <li v-for="v in 3"><img src="../assets/images/picIcon.png" /></li>
        </ul>
      </div>
    </div>
   <div style="background:#fff;position:fixed;width:100%;height:100%;z-index:999999999"> <iframe  id="test" style="width:100%;height:100%" src='https://m.amap.com/picker/?center=116.40,39.97&key=1683a75e3995650aafd98176386ccb9a'></iframe></div>
    <FooterButton btnName="确认发布" @fBtnAction="btnAction()" />
    <KindPanel v-show="isShowPanel" @closePanel="ishowKindPanel" :sKinds="kinds" :selectIndex='1' sName="艺术种类" />
  </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'
import KindPanel from '../components/KindPanel.vue'
export default {
  name: 'recruitPost',
  data() {
    return {
      rTitle: '',
      rmb: '',
      rClass: '',
      rSex: '男',
      rZKind: 'C',
      workDemand: '',
      postString: '',
      rAddress: '',
      isShowPanel: false,
      kinds: [],
      selectKinds:[],
      selectKindsStr:'点击选择'
    }
  },
mounted(){
   var iframe = document.getElementById('test').contentWindow;
    document.getElementById('test').onload = function(){
      iframe.postMessage('hello','https://m.amap.com/picker/');
    };
    window.addEventListener("message", function(e){
      alert('您选择了:' + e.data.name + ',' + e.data.location)
    }, false);

},
  
  methods: {
  selectKindsAction() {
       
      let kindStr = '';
     
     
      switch(this.selectKinds.length) {
        case 5:
          kindStr += this.selectKinds[4]['codeValue'] + '、';

        case 4:
          kindStr += this.selectKinds[3]['codeValue'] + '、';

        case 3:
          kindStr += this.selectKinds[2]['codeValue'] + '、';

        case 2:
          kindStr += this.selectKinds[1]['codeValue'] + '、';

        case 1:
          kindStr += this.selectKinds[0]['codeValue'] + '、';
          break;
        case 0:

          kindStr='点击选择';
      }
      this.selectKindsStr=kindStr.slice(0,-1);
    },
    getKindsData() {

      this.$http.get(api.kindList)
        .then(response => {
          let data = response.data;
          data.fieldsData.map((item, index) => {
            item.classData.map((sitem, sindex) => {
              sitem.isSelect = false;
            })
          })

          this.kinds = data.fieldsData;
        })
    },
    showPanel() {
      if (!this.kinds || this.kinds.length <= 0)
      this.getKindsData();
       this.isShowPanel = !this.isShowPanel;
    },
    ishowKindPanel(setArray) {
      this.selectKinds = setArray;
      this.isShowPanel = !this.isShowPanel;
      this.selectKindsAction();
    },
    selectSex(sex) {
      this.rSex = sex;
    },
    selectJqz(str) {
      this.rZKind = str;
    },
    postRecruit(str) {
      this.$http.get(api.recruitAddAOrRevise + str)
        .then(response => {
          // console.log(JSON.stringify(response.data));
          if (response.data.result == "success") {
            alert('发布成功');
          }
        })
    },
    btnAction() {
      if (this.rTitle == '' || !this.rTitle) {
        alert('标题不能为空');
        return;
      }
      if (this.rTitle.length > 10) {
        alert('标题不能超过十个字');
        return;
      }
      let kindStr = '';
      switch (this.selectKinds.length) {
        case 5:
          kindStr += '&titleExt5=' + this.selectKinds[4]['codeName'];

        case 4:
          kindStr += '&titleExt4=' + this.selectKinds[3]['codeName'];

        case 3:
          kindStr += '&titleExt3=' + this.selectKinds[2]['codeName'];

        case 2:
          kindStr += '&titleExt2=' + this.selectKinds[1]['codeName'];

        case 1:
          kindStr += '&titleExt1=' + this.selectKinds[0]['codeName'];
          break;
        case 0:
          alert('艺术种类不能为空');
          return;
      }
      if (kindStr == '')
        if (this.rAddress == '' || !tthis.rAddress) {
          alert('地址不能为空');
          return;
        }

      if (this.workDemand == '' || !this.workDemand) {
        alert('内容不能为空');
        return;
      }
      if (this.workDemand.length > 100) {
        alert('内容不能超过100个字');
        return;
      }



      this.postString = 'infoTitle=' + this.rTitle + '&titleClass=' + this.rZKind + '&salaryClass=A&titleDesc=' + this.workDemand + '&titleAddr=' + this.rAddress + '&pinfoSex=' + this.rSex + kindStr + '&pinfoId=32';
      console.log(this.postString);
      this.postRecruit(this.postString);
    }
  },
  components: {
    VHeader,
    FooterButton,
    KindPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.recruit-post {
  height: 100%;

  .post-content {

    width: 100%;
    position: fixed;
    overflow-y: scroll;
    top: rem(100px);
    bottom: rem(100px);
    background-color: rgb(237, 235, 232);
    .input-group {
      .input-box {
        span:nth-of-type(1) {
          width: 120px;
          text-align: center;
        }
        $inputHeight:rem(100px);
        background:#fff;
        font-size:14px;
        display: flex;
        padding:0 10px;
        flex-direction: row;
        align-items: center;

        height: $inputHeight;
        border-top:1px solid #bbbbbb;
        border-bottom:1px solid #bbbbbb;

        input {
          font-size: 14px;
          border: none;
          outline: none;
          flex: 1;
          height: $inputHeight - rem(30px);
        }
      }
      &:nth-of-type(1) {
        .input-box {
          margin: 10px 0;
          input {
            text-align: center;
          }
        }
      }

      &:nth-of-type(2),
      &:nth-of-type(1) {
        p {
          padding: 10px;
          font-size: 16px;
          font-weight: bold;
        }

        .input-box {
          display: flex;

          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .addressBtn {

            flex: 1;
          }
          &:nth-of-type(2) {
            border-top: none;
          }
        }
      }
    }
  }
  .selection {
    margin: 20px;
    border-bottom: 1px solid #bbb;
    p {
      margin: 15px 0 10px 0;
      font-size: 16px;
      text-align: center;
      color: #101010;
    }
    .select-group {
      margin: 20px 0;
      text-align: center
    }
    .select-box {
      display: inline-block;
      margin: 0 25px;
      font-size: 14px;
      width: 75px;
      padding: 5px 0;
      border: 1px solid #bbbbbb;
      background: #fff;
      border-radius: 5px;
    }
    .rmb-box,
    .work-demand {
      margin: 0 auto;
      width: rem(300px);
      height: rem(70px);
      border: 1px solid #bbbbbb;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      input {
        text-align: center;
        width: rem(150px);
        border: none;
      }
      span {
        font-size: 14px;
      }
    }
    .work-demand {
      width: 80%;
      height: 150px;
      ;
      textarea {
        line-height: 150px *0.8;

        text-align: center;
        height: 80%;
        width: 80%;
        border: none;
        resize: none;
        font-size: 14px;
      }
    }
    &:nth-last-of-type(1) {
      border: none;
    }
    .imgs-list {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      li {
        text-align: center;
        margin: 0 2px;
        img {

          height: auto;
          width: 80%;
        }
      }
    }
  }
  .selectBtnbox {
    background: #ffc800 !important;
  }
}
</style>

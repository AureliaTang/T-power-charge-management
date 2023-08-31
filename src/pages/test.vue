<template>
  <div class="box_12 flex-col">
    <div class="nav-bar_2 flex-row">
      <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng049064115903a357059c820bc7483d7e353bcfc21447d7b8fc82f482fb91c2c6"
      />
      <span class="text_2">Fleet&nbsp;manage&nbsp;system</span>
      <div class="icon_1 flex-col"></div>
    </div>
    <div class="section_2 flex-col">
      <span class="text_3">Charge&nbsp;list</span>
    </div><br><br>
    <div class="search">
      <input v-model="searchQuery" type="text" placeholder=" Pile ID" />&nbsp;
      <button class="custom-button" @click="search"><img class="search-icon" src="@/assets/search.png" alt="search" /></button>
    </div><br>
    <div class="box_3 flex-col">
      <div class="group_1 flex-row">
        <div class="text-wrapper_1 flex-col">
          <span class="text_4">1</span>
        </div>
        <span class="text_5">123456789（PILE&nbsp;ID）</span>
        <img
            class="switch_1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge9462864e547c705ed2496170fe61d75164ad56c4e9f46404e9035f123a3dcc0"
        />
<!--        <button type="primary"  size="large" >start</button>-->
      </div>
      <div class="group_2 flex-row justify-between">
        <div class="box_6 flex-col"></div>
        <span class="text_6">Online</span>
      </div>
      <div class="group_3 flex-row">
        <div class="text-group_7 flex-col">
          <span class="text_7">220&nbsp;V</span><br>
          <span class="text_8">Voltage</span>
        </div>
        <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e65ab9700a99f1496415eddfcd5cfddc7fda651173c5a60b642447f56170095"
        />
        <div class="text-group_8 flex-col">
          <span class="text_9">75&nbsp;Kw</span><br>
          <span class="text_10">Power</span>
        </div>
        <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e65ab9700a99f1496415eddfcd5cfddc7fda651173c5a60b642447f56170095"
        />
        <div class="text-group_9 flex-col">
          <span class="text_11">30&nbsp;Kwh</span><br>
          <span class="text_12">Capacity</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Button} from "ant-design-vue";

// export default {
//   components: {Button},
//   data() {
//     return {
//       items: [
//         { id: 1, text: 'Item 1' , buttonText: 'start', buttonHeight: '30px'},
//         { id: 2, text: 'Item 2' , buttonText: 'start', buttonHeight: '30px'},
//         { id: 3, text: 'Item 3' , buttonText: 'start', buttonHeight: '30px'},
//
//         // ... more items
//       ],
//       itemsPerPage: 10, // Number of items per page
//     };
//   },
//   computed: {
//     paginatedItems() {
//       const paginated = [];
//       for (let i = 0; i < this.items.length; i += this.itemsPerPage) {
//         paginated.push(this.items.slice(i, i + this.itemsPerPage));
//       }
//       return paginated;
//     },
//   },
// };
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      // 在这里可以执行搜索操作，使用this.searchQuery来获取搜索关键字
      console.log('Performing search for:', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.box_12 {
  margin-bottom: 33px;
  padding: 13px 0 1px 0;
}

.nav-bar_2 {
  width: 374px;
  //align-items: center;
  margin: 14px 0 0 1px;
  padding: 15px 14px 6px 14px;
  display: flex;
  align-items: center;
}

.flex-row {
  display: flex;
  align-items: center;
}

.image_2 {
  width: 36px;
  height: 14px;
  margin: 5px 0 5px 0;
}

.text_2 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  //font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 24px;
  margin-left: 46px;
}

.icon_1 {
  //border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/58e9daebe9364284a9c5d71b4d9d1b8b_mergeImage.png);
  width: 22px;
  height: 22px;
  margin: 1px 0 1px 65px;
}

.section_2 {
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13c423bd59eb11eebf8f0dd99fad3ebc0162a615d750416d71caa50d987d032f)
  0px 0px no-repeat;
  background-size: 375px 182px;
  margin-top: 5px;
  position: relative;
  padding: 127px 267px 30px 15px;
}

.text_3 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  //font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 24px;
}

.box_3 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  height: 138px;
  width: 346px;
  position: absolute;
  //left: 15px;
  //top: 161px;
  padding: 16px 13px 16px 13px;
}

.group_1 {
}

.text-wrapper_1 {
  background-color: rgba(39, 164, 58, 1);
  border-radius: 50%;
  padding: 1px 7px 1px 7px;
}

.text_4 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  //font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 20px;
}

.text_5 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 15px;
  //font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 1px 0 0 12px;
}

.switch_1 {
  width: 38px;
  height: 20px;
  margin: 1px 0 1px 57px;
}

.group_2 {
  width: 48px;
  margin: 7px 238px 0 34px;
}

.box_6 {
  background-color: rgba(39, 164, 58, 1);
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 5px 0 4px 0;
}

.text_6 {
  overflow-wrap: break-word;
  color: rgba(39, 164, 58, 1);
  font-size: 12px;
  //font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.group_3 {
  margin: 20px 14px 0 8px;
}

.text-group_7 {
}

.text_7 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  //font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 19px;
  align-self: center;
}

.text_8 {
  overflow-wrap: break-word;
  color: rgba(115, 121, 129, 1);
  font-size: 13px;
  //font-family: PingFangSC-Regular;
  //font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 6px;
}

.image_3 {
  width: 1px;
  height: 22px;
  margin: 11px 0 10px 35px;
}

.text-group_8 {
  margin-left: 39px;
}

.text_9 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  //font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 19px;
}



.image_4 {
  width: 1px;
  height: 22px;
  margin: 11px 0 10px 40px;
}

.text-group_9 {
  margin-left: 39px;
}

.text_11 {
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  //font-family: DINAlternate-Bold;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  line-height: 19px;
  margin: 0 1px 0 2px;
}

.text_12 {
  overflow-wrap: break-word;
  color: rgba(115, 121, 129, 1);
  font-size: 13px;
  //font-family: PingFangSC-Regular;
  //font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 6px;
}

.search{
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh; /* 可以根据需要调整容器高度 */
}

.custom-button {
  //background-color: #3498db;
  //color: white;
  //border: none;
  //width: 2px;
  //height: 2px;
  //border-radius: 3px;
  padding: 0px 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-icon {
  width: 20px; /* 调整图标的宽度 */
  height: 20px; /* 调整图标的高度 */
}
</style>

<template>
  <div class="container" v-loading="data.loading" element-loading-text="操作中...">
    <div class="content">
      <div class="item-row-box">
        <div class="item-left-box">
          <div class="item-text">Charge No.</div>
          <input type="text" class="input-style" placeholder="Pile Number" v-model="data.id_tag" @change="inputBtn1"/>
        </div>
        <div class="item-left-box">
          <div class="item-text">Gun No.</div>
          <input type="text" class="input-style" placeholder="Gun No." v-model="data.connector_id" @change="inputBtn2"/>
        </div>
      </div>
      <div class="item-row-box">
        <div class="item-left-box">
          <div class="item-text">Electric Meter</div>
          <div class="input-style3">
            {{ parseFloat(data.listInfo.meter_start) > -1 ?  parseFloat(data.listInfo.meter_start) / 1000:'--' }}
            <span class="symbol">{{ parseFloat(data.listInfo.meter_start) > -1 ?'KW':'' }}</span>
          </div>
        </div>
        <div class="item-left-box">
          <div class="item-text">Capacity</div>
          <div class="input-style3">
            {{ parseFloat(data.listInfo.charge_capacity) > -1 ? parseFloat(data.listInfo.charge_capacity) :'--' }}
            <span class="symbol">{{ parseFloat(data.listInfo.charge_capacity)> -1 ?'WH':'' }}</span>
          </div>
        </div>
      </div>
      <div class="item-row-box">
        <div class="item-left-box">
          <div class="item-text">Power</div>
          <div class="input-style3">
            {{ parseFloat(data.listInfo.power) > -1 ? parseFloat(data.listInfo.power) / 1000:'--' }}
            <span class="symbol">{{ parseFloat(data.listInfo.power) > -1 ?'KW':'' }}</span>
          </div>
        </div>
        <div class="item-left-box">
          <div class="item-text">SOC</div>
          <div class="input-style3">{{ parseFloat(data.listInfo.soc) > -1 ? parseFloat(data.listInfo.soc):'--' }}
            <span class="symbol">{{ parseFloat(data.listInfo.soc) > -1 ?'%':'' }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item-row-box1">
        <div class="item-left-box">
          <div class="item-text">Time</div>
          <div class="input-style3">{{ data.timeStr ? data.timeStr : '--' }}</div>
        </div>
        <div class="item-left-box2">
          <div class="item-text">COST</div>
          <input type="text" class="input-style" placeholder="- -" disabled/>
          <!-- <span class="symbol">$</span> -->
        </div>
        <div class="item-left-box2">
          <div class="item-text">Voltage</div>
          <div class="input-style3">{{ parseFloat(data.listInfo.voltage)> -1 ? parseFloat(data.listInfo.voltage):'--' }}<span class="symbol">{{ data.listInfo.voltage> -1 ? 'V':'' }}</span></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item-row-box1">
        <div class="item-left-box2">
          <div class="item-text">Current</div>
          <div class="input-style3">{{ data.listInfo.current ? data.listInfo.current : '--' }}<span class="symbol">{{ data.listInfo.current> -1 ?'A':'' }}</span></div>
        </div>
        <div class="button-box">
          <!-- <el-button type="success" @click="UseRemote_start">START</el-button> -->
          <el-button :type="data.isStartType ? 'info' : 'success'" @click="UseRemote_start">
            START
          </el-button>

          <el-button :type="data.isStartType ? 'success': 'info' " @click="UseRemote_stop">
            STOP
          </el-button>
        </div>
      </div>
    </div>
    <div class="button-style-bottom">
      <div class="footer-button" @click="isBtn('btn1')">Power Setting</div>
      <div class="footer-button" @click="isBtn('btn2')">Remote Download Logs</div>
      <div class="footer-button" @click="isBtn('btn3')">Remote Upgrade</div>
      <div class="footer-button" @click="isBtn('btn4')">Remote Hardware Start</div>
      <div class="footer-button" @click="isBtn('btn5')">Remote Software Start</div>
    </div>
    <!-- 功率设置弹窗 -->
    <div class="pop-content" v-show="data.isPop">
      <div class="pop-box">
        <span class="setUp">Power Setting</span>
        <img :src="CLOSE_IMG" class="icon" style="cursor: pointer;" @click="close('btn1')"/>
        <div class="pop-row">
          <div class="pop-item-row">
            <div class="pop-title">Charge No.</div>
            <input type="text" placeholder="Charge No." class="pop-input" style="width: 500px !important;" />
          </div>
          <div class="pop-item-row1">
            <div style="color: #2eaa2e;margin-bottom: 30px;font-size: 16px;font-weight: 500;">Power Setting</div>
            <div style="display: flex;align-items: center;">
              <div class="pop-title">Power</div>
              <input type="text" placeholder="Power" class="pop-input" />
            </div>
          </div>
          <div class="pop-item-row1">
            <div style="color: #2eaa2e;margin-top: 30px;margin-bottom: 30px;font-size: 16px;font-weight: 500;">Timer Function</div>
            <div class="timeStyle">
              <div class="pop-title">Start Time</div>
              <el-time-picker v-model="data.timeValue" placeholder="Start Time" class="time-box"/>
            </div>
            <div class="timeStyle1">
              <div class="pop-title">End Time</div>
              <el-time-picker v-model="data.timeValue1" placeholder="End Time" class="time-box"/>
            </div>
          </div>
          <el-button type="success" style="margin: 15% auto 0 auto;display: flex;">Save</el-button>
        </div>
      </div>
    </div>
    <!-- 远程日志下载 -->
    <div class="pop-content" v-show="data.isPop1">
      <div class="pop-box1">
        <span class="setUp1">Remote Download Logs</span>
        <img :src="CLOSE_IMG" class="icon" style="cursor: pointer;" @click="close('btn2')"/>
        <div class="pop-row">
          <div class="pop-item-row">
            <div class="pop-title">Charge No.</div>
            <input type="text" placeholder="Charge No." class="pop-input1" />
            <el-button style="height: 35px;margin-left: 8px;" type="success">Download</el-button>
          </div>
          <!-- <div class="pop-item-row">
            <div class="pop-title">输入桩号：</div>
            <input type="text" placeholder="请输入桩号" class="pop-input1" />
            <el-button type="success" style="width: 60px;height: 35px;margin-left: 8px;">下载</el-button>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 远程升级 -->
    <div class="pop-content" v-show="data.isPop2">
      <div class="pop-box2">
        <span class="setUp1">Remote Upgrade </span>
        <img :src="CLOSE_IMG" class="icon" style="cursor: pointer;" @click="close('btn3')"/>
        <div class="pop-row">
          <div class="pop-item-row">
            <div class="pop-title">Charge No.</div>
            <input type="text" placeholder="Charge No." class="pop-input1" />
          </div>
          <el-upload
          v-model:file-list="data.fileList"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
          >
          <template #trigger>
            <el-button style="height: 35px;" type="success">Upload File</el-button>
          </template>
         </el-upload>
        </div>
        <el-button type="success" style="margin: 0% auto 0 auto;display: flex;">Save</el-button>
      </div>
    </div>
    <!-- 远程重启 HARDWARE -->
    <div class="pop-content" v-show="data.isPop3">
      <div class="pop-box1">
        <span class="setUp1">Remote Hardware Start</span>
        <img :src="CLOSE_IMG" class="icon" style="cursor: pointer;" @click="close('btn4')"/>
        <div class="pop-row">
          <div class="pop-item-row">
            <div class="pop-title">Charge No.</div>
            <input type="text" placeholder="Charge No." class="pop-input1" v-model="data.id_tag1"/>
          </div>
        </div>
        <el-button type="success" style="margin: 15% auto 0 auto;display: flex;" @click="UseRemoteResetHard">Start</el-button>
      </div>
    </div>
    <!-- 远程重启 SOFTWARE -->
    <div class="pop-content" v-show="data.isPop4">
      <div class="pop-box1">
        <span class="setUp1">Remote Software Start</span>
        <img :src="CLOSE_IMG" class="icon" style="cursor: pointer;" @click="close('btn5')"/>
        <div class="pop-row">
          <div class="pop-item-row">
            <div class="pop-title">Charge No.</div>
            <input type="text" placeholder="Charge No." class="pop-input1" v-model="data.id_tag2"/>
          </div>
        </div>
        <el-button type="success" style="margin: 15% auto 0 auto;display: flex;" @click="UseRemoteResetSoft">Start</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, watch, inject } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus';
import { getChargeInfo, getRemote_start, getRemote_stop, getRemoteResetHard, getRemoteResetSoft } from '../apis/api.js';
import { useRouter, useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { queryList, createOne, modifyOne, deleteOne, deleteMany,startOne, chargeInfo, stopOne} from '@/apis/pile';
import CLOSE_IMG from "../assets/close.svg"

const router = useRouter()
const route = useRoute()

const getTimeALl = (time) => {
  var year = time.getFullYear(); // 年
    var month = (time.getMonth() + 1).toString().padStart(2, '0'); // 月
    var date = time.getDate().toString().padStart(2, '0'); // 日
    var hour = time.getHours().toString().padStart(2, '0'); // 时
    var minute = time.getMinutes().toString().padStart(2, '0'); // 分
    return (
      year + "-" + month + "-" + date + " " + hour + ":" + minute
    )
}

const refresh = inject("reload");
const data = reactive({
  codeValue: "",
  isPop: false,
  isPop1: false,
  isPop2: false,
  isPop3: false,
  isPop4: false,
  timeValue: '',
  timeValue1: '',
  fileList: [],
  // connector_id: JSON.parse(window.localStorage.getItem('connector_id')) || '',
  connector_id: route.params.no || '',
  id_tag: route.params.sn || '',
  id_tag1: '',
  id_tag2: '',
  userInfo: {},
  loading: false,
  isStartType: false,
  timeStr: JSON.parse(window.localStorage.getItem('timeStr')) || '',
  // listInfo: JSON.parse(window.localStorage.getItem('list')) || {},
  listInfo:  {},
  intervalld: null,
});

const getTimes = new Date().getTime();
const time = new Date(getTimes);

watch(() => data.isStartType, () => {
  if (data.isStartType == true) {
    data.intervalld = setInterval(() => {
      useChargeInfo();
    }, 8000);
  } else {
    clearInterval(data.intervalld);
  }
}, { deep: false, immediate: true });


const isBtn = (type) => {
  if (type === 'btn1') {
    data.isPop = true;
  }
  if (type === 'btn2') {
    data.isPop1 = true;
  }
  if (type === 'btn3') {
    data.isPop2 = true;
  }
  if (type === 'btn4') {
    data.isPop3 = true;
  }
  if (type === 'btn5') {
    data.isPop4 = true;
  }
};

const close = (type) => {
  if (type === 'btn1') {
    data.isPop = false;
  }
  if (type === 'btn2') {
    data.isPop1 = false;
  }
  if (type === 'btn3') {
    data.isPop2 = false;
  }
  if (type === 'btn4') {
    data.isPop3 = false;
  }
  if (type === 'btn5') {
    data.isPop4 = false;
  }
};

const inputBtn1 = () => {
  window.localStorage.setItem("id_tag", JSON.stringify(data.id_tag));
};

const inputBtn2 = () => {
  window.localStorage.setItem("connector_id", JSON.stringify(data.connector_id));
};

const UseRemote_start = async () => {
  console.log(999)
  if (data.connector_id === null || data.connector_id === '') {
    ElMessage({
      message: '请输入充电桩号',
      type: 'warning',
    });
    return;
  }

  if (data.id_tag === null || data.id_tag === '') {
    ElMessage({
      message: '请输入枪号',
      type: 'warning',
    });
    return;
  }

  data.loading = true;

  let params = {
    user_token: localStorage.getItem("token"),
    order_start_time: getTimeAll(time),
    connector_id: data.connector_id,
    id_tag: data.id_tag,
  };
  
  let res = await startOne(params)

  if (res.code === 200) {
    data.loading = false;
    let isStartType = false;
    window.localStorage.setItem("isStart", JSON.stringify(!isStartType));
    ElMessage({
      message: '已启动',
      type: 'warning',
    });
    let chargeRes = await chargeInfo(params);
    console.log('======')
    console.log(chargeRes)
    if (chargeRes.code === 200) {
        data.loading = false;
        data.listInfo = chargeRes.data.charge_data;
        // window.localStorage.setItem("list", JSON.stringify(data.listInfo));
        chargeRes.data.charge_data.forEach((item, index) => {
          getAllTime(item.start_time, item.timestamp);
          console.log(111111, item)
      });
    }
    if (res.data.data.order_number) {
      useChargeInfo();
    }
    refresh();
  } else {
    data.loading = false;
  }
};

// const getNewChargeInfo = () => {

// }


const UseRemoteResetHard = async () => {
  if (data.isStartType === false) {
    ElMessage({
      message: '请先START',
      type: 'warning',
    });
    return;
  }
  let params = {
    id_tag: data.id_tag1,
  };
  let res = await getRemoteResetHard(params);
  if (res.data.code === 200) {
    console.log(res);
  }
};

const UseRemoteResetSoft = async () => {
  if (data.isStartType === false) {
    ElMessage({
      message: '请先START',
      type: 'warning',
    });
    return;
  }
  let params = {
    id_tag: data.id_tag2,
  };
  let res = await getRemoteResetSoft(params);
};

const useChargeInfo = async () => {
  let res = await getChargeInfo();
  if (res.code === 200) {
    data.loading = false;
    data.listInfo = res.data.charge_data;
    

    console.log(data.listInfo);
    // window.localStorage.setItem("list", JSON.stringify(data.listInfo));
    res.data.charge_data.forEach((item, index) => {
      getAllTime(item.start_time, item.timestamp);
    });
  }
};

const getAllTime = (time, time1) => {
  var sTime = new Date(time).getTime();
  var eTime = new Date(time1).getTime();
  var divNumSecond = 1000;
  var divNumMinute = 1000 * 60;
  var divNumHour = 1000 * 3600;
  var divNumDay = 1000 * 3600 * 24;
  const day = parseInt((eTime - sTime) / parseInt(divNumDay));
  const hour = parseInt(((eTime - sTime) % parseInt(divNumDay)) / parseInt(divNumHour));
  const minute = parseInt((parseInt(((eTime - sTime) % parseInt(divNumDay)) % parseInt(divNumHour))) / parseInt(divNumMinute));
  const str = `${day !== 0 ? day + '天' : ''}` + `${hour !== 0 ? hour + '小时' : ''}` + minute + '分';
  data.timeStr = str;
  window.localStorage.setItem("timeStr", JSON.stringify(data.timeStr));
};

const UseRemote_stop = async () => {
  if (data.connector_id === '') {
    ElMessage({
      message: '请输入充电桩号',
      type: 'warning',
    });
    return;
  }
  if (data.id_tag === '') {
    ElMessage({
      message: '请输入抢号',
      type: 'warning',
    });
    return;
  }
  data.loading = true;
  clearInterval(data.intervalld);
  // data.isStartType = '';
  let params = {
    user_token: localStorage.getItem("token"),
    order_stop_time: getTimeAll(time),
    connector_id: data.connector_id,
    id_tag: data.id_tag,
  };

  let res = await stopOne(params);

  if (res.code === 200) {
    window.localStorage.removeItem("isStart");
    data.loading = false;
    data.connector_id = '';
    data.id_tag = '';
    data.listInfo = {}
    ElMessage({
      message: '已停止',
      type: 'warning',
    });
    refresh();
  } else {
    data.loading = false;
    data.connector_id = '';
    data.id_tag = '';
    localStorage.removeItem("isStart");
  }
};

const getTimeAll = (time) => {
  var year = time.getFullYear();
  var month = (time.getMonth() + 1).toString().padStart(2, '0');
  var date = time.getDate().toString().padStart(2, '0');
  var hour = time.getHours().toString().padStart(2, '0');
  var minute = time.getMinutes().toString().padStart(2, '0');
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute
  );
};

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};

onMounted(async() => {
  let params = {
    user_token: localStorage.getItem("token"),
    order_start_time: getTimeAll(time),
    connector_id: data.connector_id,
    id_tag: data.id_tag,
  };
  data.userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  data.isStartType = JSON.parse(window.localStorage.getItem('isStart'));

  let chargeRes = await chargeInfo(params);
  if (chargeRes.code === 200) {
        data.loading = false;
        data.listInfo = chargeRes.data.charge_data;
        // window.localStorage.setItem("list", JSON.stringify(data.listInfo));
        chargeRes.data.charge_data.forEach((item, index) => {
          getAllTime(item.start_time, item.timestamp);
      });
    }
});

</script>

<style scoped>
.container {
  width: 1200px;
  margin: 30px auto 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 5px 24px rgba(0, 0, 0, 0.04);
  padding-bottom: 30px;
  box-sizing: border-box;
  position: relative;
}
.content {
  display: flex;
  align-items: center;
}
.item-row-box {
  padding-top: 30px;
}
.item-row-box1 {
  display: flex;
  align-items: center;
}
.item-left-box {
  width: 380px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 5px 24px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-left: 15px;
}
.item-left-box1 {
  width: 380px;
  height: 260px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 5px 24px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-left: 15px;
}
.item-left-box1 :deep(.el-button) {
  width: 120px;
  height: 50px;
  margin-left: 20px;
}
.item-left-box2 {
  width: 380px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 5px 24px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-left: 15px;
}
.item-text {
  color: #2eaa2e;
  font-size: 15px;
  padding-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  font-weight: 500;
}
.input-style {
  /* width: 25%; */
  border: none;
  font-size: 16px;
  padding-left: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  color: #000;
  background: transparent;
}
.input-style1 {
  width: 90%;
  height: 40px;
  border: none;
  box-sizing: border-box;
  color: #000;
  background: transparent;
  border-bottom: 1px solid #f5f5f5;
  margin-left: 20px;
  padding-bottom: 10px;
  font-size: 15px;
}
.input-style2 {
  width: 40%;
  border: none;
  font-size: 18px;
  margin-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  color: #000;
  background: transparent;
}
.input-style3 {
  border: none;
  font-size: 18px;
  margin-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  color: #000;
  background: transparent;
}
.button-box {
  width: 380px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0 5px 24px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-left: 15px;
}
.symbol {
  font-size: 18px;
  margin-left: 5px;
}
.button-style-bottom {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0 auto;
}
.footer-button {
  width: 200px;
  height: 40px;
  line-height: 40px;
  background: #f5f7fa;
  border: 1px solid #dcdfe6;
  margin-right: 20px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
}
.pop-content {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.pop-box {
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pop-box1 {
  width: 600px;
  height: 300px;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pop-box2{
  width: 500px;
  height: 310px;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon {
  width: 30px;
  height: 30px;
  margin-top: 15px;
  margin-right: 15px;
  float: right;
}
.pop-row {
  margin-top: 15%;
  margin-left: 20px;
}
.pop-item-row {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.pop-item-row1{
  display: flex;
  flex-direction: column;
}
.pop-title {
  white-space: nowrap; 
  margin-right: 10px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
}
.pop-input {
  width: 75%;
  height: 40px;
  font-size: 14px;
  padding-left: 5px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #dcdfe6;
  background: transparent;
}
.pop-input1 {
  width: 65%;
  height: 40px;
  font-size: 14px;
  padding-left: 5px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #dcdfe6;
  background: transparent;
}
.setUp{
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 18px;
}
.setUp1{
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 18px;
}
.timeStyle{
  display: flex;
  align-items: center;
}
.timeStyle1{
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: relative;
}
.time-box{
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%,-50%);
}
:deep(.el-upload-list){
  width: 83%;
  height: 50px;
}
:deep(.el-button) {
  width: 100px;
  height: 50px;
}
input::-webkit-input-placeholder {
  font-size: 14px;
  color: #909399;
}
</style>

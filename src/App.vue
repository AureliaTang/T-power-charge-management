<template>
  <ConfigProvider>
    <router-view></router-view>
  </ConfigProvider>
</template>

<script setup>
  import { ConfigProvider } from 'ant-design-vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  dayjs.locale('zh-cn');
  
</script>
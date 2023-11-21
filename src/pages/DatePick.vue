<template>
  <Form
    :model="formState"
    name="time_related_controls"
    v-bind="formItemLayout"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <FormItem name="date-picker" class="pick-date" label="Date Picker" :wrapper-col="{ span: 9 }">
      <RangePicker
       v-model:value="formState.dateRangeVal"
       />
    </FormItem>
    <FormItem name="select" label="Pile SN" class="select_item" :wrapper-col="{ span: 8 }">
      <Select
        showSearch
        placeholder="Select a pile sn"
        v-model:value="formState.dropVal"
        :options="optionsList"
      />
    </FormItem>
    <Button type="primary" html-type="submit" class="submit">Download</Button>
  </Form>
</template>
<script setup>
import { reactive, onMounted, ref } from 'vue';
import { Button, message, Form, FormItem, Select, DatePicker } from 'ant-design-vue';
import dayjs from 'dayjs';
import { download, getSelectList } from '@/apis/datemanage'


const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const formState = reactive({
  dateRangeVal: '',
  dropVal: ''
});
const optionsList = ref([])

const onFinish = async() => {
  const params = {
    start_date: dayjs(formState.dateRangeVal[0]).format('YYYY-MM-DD'),
    end_date: dayjs(formState.dateRangeVal[1]).format('YYYY-MM-DD'),
    Pile_sn: '1000002'
  }
  const resp = await download(params)
  if(resp.code == 200) {
      return window.location.href=resp.pdf_download_url
    }else{
      message.error(response.msg)
    }
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const getData = async () => {
    const resp = await getSelectList()
    optionsList.value = resp.data.map(item => ({
      value: item,
      label: item
    }))
}

onMounted(
  () => {
    getData()
  }
)
</script>
<style lang="less" scoped>
.submit {
  margin-left: 40%;
}
.pick-date {
  margin-top: 20px;
}
</style>
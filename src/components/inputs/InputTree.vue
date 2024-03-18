<template>
  <Card size="small">
    <template #title>
      <Input.Search
        placeholder="Input Search Word"
        :style="{
          maxWidth:'200px',
          marginLeft: '5px'
        }"
      ></Input.Search>
    </template>
    <template #extra>
      <div>
        <Space>
          <Button @click="checkedKeys=allKeys" :disabled="checkedKeys && checkedKeys.length === allKeys.length">
            <template #icon><CheckOutlined/></template>
            Select All
          </Button>
          <Button @click="checkedKeys=[]" :disabled="checkedKeys && checkedKeys.length === 0">
            <template #icon><ClearOutlined/></template>
            Cancel All
          </Button>
          <!-- <Button>全部展开</Button>
          <Button>全部收起</Button> -->
        </Space>
      </div>
    </template>
    <div style="max-height: 300px;overflow: auto;">
      <Tree
        checkable
        blockNode
        :tree-data="treeData"
        :selectable="false"
        v-model:expanded-keys="expandedKeys"
        v-model:checked-keys="checkedKeys"
        v-bind="treeProps"
      ></Tree>
    </div>
  </Card>
</template>

<script setup>
import { Tree, Card, Space, Button, Input} from 'ant-design-vue'
import { getDirKeys, getAllKeys} from '@/utils/treeData'
import { computed, onMounted, ref} from 'vue';
import { CheckOutlined, ClearOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  value: [String, Number, Array],
  treeData: Array,
  treeProps: Object,
  keyField: {
    type: String,
    default: 'id'
  }
})

const emit = defineEmits(['update:value'])

const expandedKeys = ref([])

const dirKeys = computed(()=>{
  const res = getDirKeys(props.treeData, props.keyField);
  return res || []
})

const allKeys = computed(()=>{
  const res = getAllKeys(props.treeData, props.keyField);
  return res || []
})

const checkedKeys = computed({
  set(val){
    emit('update:value', val)
  },
  get(){
    return props.value ? props.value : []
    // return props.value ? props.value.filter(el=>!dirKeys.value.includes(el)) : []
  }
})

onMounted(()=>{
  expandedKeys.value = dirKeys.value
})

</script>
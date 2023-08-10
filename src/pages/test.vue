<template>
  <div>
    <div class="grid-container">
      <div class="logo">
        <!-- Your logo content -->
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div v-for="(page, pageIndex) in paginatedItems" :key="pageIndex" class="page">
        <div v-for="item in page" :key="item.id" class="grid-item">
          <!-- Your content for each div item -->
          {{ item.text }}
          <button :style="{ height: item.buttonHeight }">{{ item.buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' , buttonText: 'start', buttonHeight: '30px'},
        { id: 2, text: 'Item 2' , buttonText: 'start', buttonHeight: '30px'},
        { id: 3, text: 'Item 3' , buttonText: 'start', buttonHeight: '30px'},

        // ... more items
      ],
      itemsPerPage: 10, // Number of items per page
    };
  },
  computed: {
    paginatedItems() {
      const paginated = [];
      for (let i = 0; i < this.items.length; i += this.itemsPerPage) {
        paginated.push(this.items.slice(i, i + this.itemsPerPage));
      }
      return paginated;
    },
  },
};
</script>

<style scoped>
.grid-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.logo {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.grid-item {
  width: 400px;
  height: 300px;
  background-color: #9dcbec;
  margin-left: 40px;
  margin-top: 30px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  margin-bottom: 100px;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
}

.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.grid-item {
  width: 365px;
  height: 300px;
  //background-color: #fffdfd;
  margin-left: 10px;
  //margin-top: 30px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* 垂直堆叠子元素 */
  justify-content: space-between; /* 垂直均匀分布子元素 */
  align-items: center; /* 水平居中子元素 */
  margin-bottom: 100px;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
}

.grid-item button {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: transparent;
  cursor: pointer;
  background-color: #f7fafa;
  transition: background-color 0.3s, color 0.3s;
  margin-top: auto; /* 将按钮推到容器底部 */
  margin-bottom: 10px; /* 在按钮底部添加一些距离 */
}

.grid-item button:hover {
  background-color: #ccc;
  color: white;
}
</style>

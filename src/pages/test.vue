<!--<script setup>-->

<!--</script>-->

<!--<template>-->

<!--</template>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div class="grid-container">
    <div class="logo">
      <!-- Your logo content -->
      <img src="logo.png" alt="Logo" />
    </div>
    <div v-for="item in items" :key="item.id" class="grid-item">
      <!-- Your content for each div item -->
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        // Add more items as needed
      ]
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* Additional styling for the container as needed */
}

.logo {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  /* Additional styling for the logo as needed */
}

.grid-item {
  width: 200px;
  height: 200px;
  background-color: #ddd;
  margin-bottom: 20px;
  /* Additional styling for the items as needed */
}

/* Media query for mobile layout */
@media (max-width: 768px) {
  .grid-container {
    flex-direction: column;
    align-items: center;
  }

  .grid-item {
    width: 80%; /* You can adjust the width as needed */
    margin: 10px 0;
  }
}
</style>

<template>
  <div class="card">
    <img :src="img" alt="Image" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-info">{{ name }}</p>
      <p class="card-info">{{ date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    title: String,
    name: String,
    date: String,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-info {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>

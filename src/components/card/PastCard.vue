<template>
  <div class="card">
    <div class="card-content">
      <img :src="img" alt="Image" class="card-image" />
      <div class="text-content">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-info">{{ name }}</p>
        <p class="card-info">{{ date }}</p>
      </div>
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

.card-content {
  display: flex;
}

.card-image {
  width: 150px; /* 이미지 너비 설정 */
  height: auto;
  margin-right: 20px; /* 이미지와 텍스트 사이의 간격 설정 */
}

.text-content {
  flex-grow: 1; /* 텍스트 콘텐츠가 가능한 한 많은 공간을 차지하도록 설정 */
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

<!-- Card.vue -->
<template>
  <div style="width: 250px">
    <div class="card" style="height: 250px">
      <router-link to="/login">
        <img class="card-image" src="../../assets/user_logo.png" />
      </router-link>
    </div>
    <h2 class="card-title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
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
  max-width: 100%;
  max-height: 100%;
}

.card-title {
  font-size: 18px;
  margin: 10px 20px;
}
</style>

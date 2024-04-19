<template>
  <div>
    <div>
      <h2 style="text-align: left">여행</h2>
    </div>
    <div class="card-wrapper-container">
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
    </div>
  </div>
</template>
<script>
import TripCard from "../components/TripCard.vue";
export default {
  name: "WishListView",
  components: {
    TripCard,
  },
};
</script>
<style scoped>
.card-wrapper-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 카드 사이의 간격 설정 */
}
</style>

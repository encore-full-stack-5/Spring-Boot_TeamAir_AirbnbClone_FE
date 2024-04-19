<template>
  <div>
    <h1 style="text-align: left">위시리스트</h1>
    <WishCard
      img="../../assets/logo.png"
      title="Suwon City Hall Station Exit 8, Cine Park"
    />
  </div>
</template>
<script>
import WishCard from "../../components/card/WishCard.vue";

export default {
  name: "WishListView",
  components: {
    WishCard,
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

<template>
  <div
    style="
      display: flex;
      flex-direction: rows;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    "
  >
    <div>
      <h1 style="text-align: left">위시리스트</h1>
      <div
        class="card-wrapper-container"
        style="flex-direction: rows; width: 100%"
      >
        <WishCard
          img="../../assets/logo.png"
          title="Suwon City Hall Station Exit 8, Cine Park"
        />
        <WishCard
          img="../../assets/logo.png"
          title="Suwon City Hall Station Exit 8, Cine Park"
        />
        <WishCard
          img="../../assets/logo.png"
          title="Suwon City Hall Station Exit 8, Cine Park"
        />
        <WishCard
          img="../../assets/logo.png"
          title="Suwon City Hall Station Exit 8, Cine Park"
        />
        <WishCard
          img="../../assets/logo.png"
          title="Suwon City Hall Station Exit 8, Cine Park"
        />
      </div>
    </div>
    <KakaoMap width="600" height="500" />
  </div>
</template>
<script>
import WishCard from "../../components/card/WishCard.vue";
import KakaoMap from "../../components/KakaoMap.vue";
export default {
  name: "WishDetailView",
  components: {
    WishCard,
    KakaoMap,
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

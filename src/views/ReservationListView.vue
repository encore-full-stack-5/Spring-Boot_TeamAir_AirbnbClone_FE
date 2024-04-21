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
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
      <TripCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      >
      </TripCard>
    </div>
    <div style="font-size: 13px; px-4">
      <h2 style="text-align: left">이전 여행지</h2>
    </div>
    <div class="card-wrapper-container">
      <PastCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      ></PastCard>
      <PastCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      ></PastCard>
      <PastCard
        img="../assets/logo.png"
        title="palagu"
        name="박분도"
        date="2023-04-18-2023-04-20"
      ></PastCard>
    </div>
  </div>
</template>
<script>
import TripCard from "../components/card/TripCard.vue";
import PastCard from "../components/card/PastCard.vue";

export default {
  name: "ReservationListView",
  components: {
    TripCard,
    PastCard,
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

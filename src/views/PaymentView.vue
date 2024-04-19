<template>
  <div>
    <div class="leftbox"></div>

    <div class="rightbox">
      <div class="firstline">
        <img src="" alt="" />
        <div>
          <div>
            <h2>{{ "방 제목" }}</h2>
          </div>
          <div>
            <h4>{{ "대여 공간" }}</h4>
          </div>
          <div>
            <h4>{{ "별점, 후기" }}</h4>
          </div>
        </div>
      </div>
      <div class="paydetail"></div>
      <hr />
      <div class="total"></div>
      <div class="info">
        <h5>
          해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할
          수 있습니다.
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentView",
};
</script>
<style></style>

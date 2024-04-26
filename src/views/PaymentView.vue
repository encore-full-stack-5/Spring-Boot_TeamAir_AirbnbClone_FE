<template>
  <div class="main">
    <!-- Left Box -->
    <div class="leftbox">
      <div>
        <h1>확인 및 결제</h1>
      </div>
      <div>
        <div>예약 정보</div>
        <div>날짜</div>
        <div>{{ "6월 17일~22일" }}</div>
        <div>게스트</div>
        <div>게스트 {{ "1" }}명</div>
      </div>
      <hr />
      <h1>결제 방식 선택하기</h1>
      <div class="bigbox" style="width: 500px">
        <div id="app">
          지금 ₩{{ "1,871,578" }} 결제
          <input type="checkbox" v-model="arr" value="mine" />
          <hr />
          요금 일부는 지금 결제, 나머지는 나중에 결제
          <input type="checkbox" v-model="arr" value="it" />
        </div>
      </div>
      <hr />
      <h1>환불 정책</h1>
      <h3>
        6월 12일 전까지 무료로 취소하실 수 있습니다. 체크인 날짜인 6월 17일 전에
        취소하면 부분 환불을 받으실 수 있습니다.
      </h3>
      <hr />
      <a
        >아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 게스트에게 적용되는
        기본 규칙, 에어비앤비 재예약 및 환불 정책에 동의하며, 피해에 대한 책임이
        본인에게 있을 경우 에어비앤비가 결제 수단으로 청구의 조치를 취할 수
        있다는 사실에 동의하는 것입니다. 또한, 개정된 이용 약관과 결제 서비스
        약관 및 개인정보 처리방침에도 동의합니다.</a
      >
    </div>
    <!-- Right Box -->
    <div class="rightmain">
      <div class="rightbox">
        <div class="firstline">
          <div class="payinfo">
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
          <hr />
        </div>
        <div class="paydetail">
          <div>요금 세부정보</div>
          <div>₩{{ "324,000" }} X {{ "5" }}박 ₩{{ "1,620,000" }}</div>
          <div>에어비앤비 서비스 수수료 ₩{{ "251,578" }}</div>
        </div>

        <hr />
        <div>총 합계(KRW) ₩{{ "251,578" }}</div>
        <hr />

        <div class="info">
          <h5>
            해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할
            수 있습니다.
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.leftbox {
  width: 50%;
}

.home {
  width: 100px;
  display: flex;
}

.bigbox {
  width: 50%;
}
.rightbox {
  margin-left: 150px;
  margin-right: 100px;
  height: 600px;
  border-radius: 10%;
  border: 3px solid #333;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
</style>

<template>
  <div class="mainbox">
    <div class="xbutton"></div>
    <div class="contentbox">
      <div class="star">
        <div class="bigstar">
          <h1>★ {{ "4.93" }}</h1>
        </div>
        <div class="totalscorebox">
          <h5>전체 평점</h5>
          <div class="scoreline">
            <p>5</p>
            <div></div>
          </div>
        </div>

        <div class="scoreforcategory">
          <img src="" alt="" />
          <div>청결도</div>
          <div>{{ 5.0 }}</div>
        </div>
      </div>
      <div class="reviewbox">
        <div class="first line">
          <div>후기 150개</div>
          <button>최신순</button>
        </div>
        <div class="second line">
          <div>여기 검색 박스</div>
        </div>
        <div class="reviewlist">
          <div class="name">
            <img src="" alt="" />
            <div>
              <div>{{ "이름" }}</div>
              <div>{{ "지역" }}</div>
            </div>
          </div>
          <div class="star">
            <div>{{ "★★★★★" }}</div>
          </div>
          <div class="text">
            <div>{{ "리뷰내용" }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

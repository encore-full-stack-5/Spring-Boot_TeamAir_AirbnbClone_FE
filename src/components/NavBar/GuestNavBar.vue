<template>
  <div class="nav-bar">
    <div class="bar">
      <div class="bar-content">
        <img class="logo" src="../../assets/airbnb_logo.png" />
        <div style="color: red; font-size: 25px; font-family: fantasy">
          Team Air
        </div>
      </div>
      <div class="bar-content" style="justify-content: center">
        <div>숙소</div>
        <div>체험</div>
        <div>온라인 체험</div>
      </div>
      <div class="bar-content">
        <div>당신의 공간을 에어비앤비하세요</div>
        <router-link to="/login">
          <img class="logo" src="../../assets/user_logo.png" />
        </router-link>
      </div>
    </div>
    <div class="search-bar">
      <div style="width: 35%">여행지</div>
      <div style="width: 15%">체크인</div>
      <div style="width: 15%">체크아웃</div>
      <div style="width: 35%">여행자</div>
    </div>
    <div class="bar"></div>
  </div>
</template>
<script>
export default {
  name: "GuestNavBar",
};
</script>
<style>
.nav-var {
  width: 100%;
}
.bar {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.bar-content {
  display: flex;
  align-items: center;
  width: 400px;
}
.bar-content div {
  padding-inline: 10px;
}
.logo {
  display: block;
  margin: auto 10px auto 30px;
  height: 40px;
}
.search-bar {
  width: 90%;
  height: 60px;
  margin-inline: 5%;
  border: black solid 1px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
}
.search-bar div {
  text-align: left;
  padding: 15px;
  border-radius: 30px;
}
.search-bar div:hover {
  background: lightgray;
}
</style>

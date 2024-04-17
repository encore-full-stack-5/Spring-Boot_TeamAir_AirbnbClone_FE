<template>
    <div class="nav-bar">
        <div class="bar">
            <div class="bar-content">
                <img class="logo" src="../../assets/airbnb_logo.png">
                <div style="color: red; font-size: 25px; font-family: fantasy;">Team Air</div>
            </div>
            <div class="bar-content" style="justify-content: center;">
                <div>숙소</div>
                <div>체험</div>
                <div>온라인 체험</div>
            </div>
            <div class="bar-content">
                <div>당신의 공간을 에어비앤비하세요</div>
                <img class="logo" src="../../assets/user_logo.png">
            </div>
        </div>
        <div class="search-bar">
            <div style="width: 35%" @click="() => {bgOpen = true; cityOptionOpen = true;}">
                <span>여행지</span>
                <input type="text" placeholder="여행지 검색">
            </div>
            <div style="width: 15%" @click="() => {bgOpen = true; checkInOptionOpen = true;}">
                체크인
            </div>
            <div style="width: 15%" @click="() => {bgOpen = true; checkOutOptionOpen = true;}">
                체크아웃
            </div>
            <div style="width: 35%" @click="() => {bgOpen = true; guestOptionOpen = true;}">
                여행자
            </div>
        </div>
        <div class="option-container">
            <div class="black-bg" v-show="bgOpen" @click="closeOption"></div>
            <div class="select-city-container" v-show="cityOptionOpen">

            </div>
            <div class="select-check-in-container" v-show="checkInOptionOpen"></div>
            <div class="select-check-out-container" v-show="checkOutOptionOpen"></div>
            <div class="select-guest-num-container" v-show="guestOptionOpen"></div>
        </div>

    </div>
</template>
<script>
export default {
    name: "GuestNavBar",
    data(){
        return{
            bgOpen: false,
            cityOptionOpen: false,
            checkInOptionOpen: false,
            checkOutOptionOpen: false,
            guestOptionOpen: false,
            selectedCity: "서울특별시",
            checkInDate: "",
            checkOutDate: "",
            guestNum: 0,
        }
    },
    methods:{
        closeOption(){
            this.bgOpen = false;
            this.cityOptionOpen = false;
            this.checkInOptionOpen = false;
            this.checkOutOptionOpen = false;
            this.guestOptionOpen = false;
        }
    },
}
</script>
<style>
.nav-var{
    width: 100%;
}
.bar{
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}
.bar-content{
    display: flex;
    align-items: center;
    width: 400px;
}
.bar-content  div{
    padding-inline: 10px;
}
.logo{
    display: block;
    margin: auto 10px auto 30px;
    height: 40px;
}
.search-bar{
    width: 60%;
    height: 60px;
    margin-inline: auto;
    border: black solid 1px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
}
.search-bar div{
    text-align: left;
    /* padding: 15px; */
    padding-left: 20px;
    border-radius: 30px;
}
.search-bar div:hover{
    background: lightgray;
}
.search-bar span{
    display: block;
    font-size: 15px;
}
.search-bar input{
    border: 0px;
}
.black-bg{
    position: absolute;
    background-color: black; opacity: 0.3;
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
.select-city-container{
    width: 30%;
    aspect-ratio: 1/1;
    margin-left: 20%;
    display: flex;
    border: 1px black solid;
    border-radius: 20px;
    position: absolute;
    background-color: white;
    margin-top: 20px;
}
.select-check-in-container{
    width: 30%;
    aspect-ratio: 1/1;
    margin-left: 35%;
    border: 1px black solid;
    border-radius: 20px;
    position: absolute;
    background-color: white;
    margin-top: 20px;
}
.select-check-out-container{
    width: 30%;
    aspect-ratio: 1/1;
    margin-left: 35%;
    border: 1px black solid;
    border-radius: 20px;
    position: absolute;
    background-color: white;
    margin-top: 20px;
}
.select-guest-num-container{
    width: 30%;
    aspect-ratio: 1/1;
    margin-left: 50%;
    border: 1px black solid;
    border-radius: 20px;
    position: absolute;
    background-color: white;
    margin-top: 20px;
}
</style>
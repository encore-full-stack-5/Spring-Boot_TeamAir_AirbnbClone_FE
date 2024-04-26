<template>
    <div class="nav-bar">
        <div class="bar">
            <RouterLink to="/" class="bar-content">
                <img class="logo" src="../../assets/airbnb_logo.png">
                <div style="color: red; font-size: 25px; font-family: fantasy;">Team Air</div>
            </RouterLink>
            <div class="bar-content" style="justify-content: center;">
                <div>숙소</div>
                <div>체험</div>
                <div>온라인 체험</div>
            </div>
            <div class="bar-content">
                <RouterLink to="/hosting">당신의 공간을 에어비앤비하세요</RouterLink>
                <img class="logo" src="../../assets/user_logo.png" @click="() => {personMenuOpen = !personMenuOpen}">
            </div>
        </div>
        <div class="person-menu" v-show="personMenuOpen">
            <RouterLink to="/personal-info"><div>계정 관리</div></RouterLink>
            <RouterLink to="/wishlists"><div>위시리스트</div></RouterLink>
            <RouterLink to="/login" v-show="!this.getLoginState"><div>로그인</div></RouterLink>
            <RouterLink to="/" v-show="this.getLoginState" @click="logoutTry"><div>로그아웃</div></RouterLink>
        </div>
        <div class="search-bar">
            <div style="width: 35%" @click="() => {beforeOpenOption(); cityOptionOpen = true;}">
                <span>여행지</span>
                <input type="text" placeholder="여행지 검색" v-model="selectedCity">
            </div>
            <div style="width: 15%" @click="() => {beforeOpenOption(); checkInOptionOpen = true;}">
                체크인
            </div>
            <div style="width: 15%" @click="() => {beforeOpenOption(); checkOutOptionOpen = true;}">
                체크아웃
            </div>
            <div style="width: 35%" @click="() => {beforeOpenOption(); guestOptionOpen = true;}">
                여행자
                <RouterLink :to="'/search/city='+selectedCity+'&checkIn='+checkInDate+'&checkOut='+checkOutDate+'&guestNum='+guestNum" @click="closeOption">
                    찾기
                </RouterLink>
            </div>
        </div>
        <div class="option-container">
            <div class="black-bg" v-show="bgOpen" @click="closeOption"></div>
            <div class="select-city-container" v-show="cityOptionOpen">
                <div v-for="(city, i) in this.showCityList" :key="i" @click="() => {this.selectedCity = city; cityOptionOpen = false; checkInOptionOpen = true}">
                    {{city}}
                </div>
            </div>
            <div class="select-check-in-container" v-show="checkInOptionOpen"></div>
            <div class="select-check-out-container" v-show="checkOutOptionOpen"></div>
            <div class="select-guest-num-container" v-show="guestOptionOpen"></div>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "GuestNavBar",
    data(){
        return{
            bgOpen: false,
            cityOptionOpen: false,
            checkInOptionOpen: false,
            checkOutOptionOpen: false,
            guestOptionOpen: false,
            personMenuOpen: false,
            selectedCity: "",
            checkInDate: "4월22일",
            checkOutDate: "4월26일",
            guestNum: 2,
            cities: ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", 
                    "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", 
                    "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", 
                    "경상남도", "제주특별자치도", "서울특별시, 종로구", "서울특별시, 중구", "서울특별시, 용산구", 
                    "서울특별시, 성동구", "서울특별시, 광진구", "서울특별시, 동대문구", "서울특별시, 중랑구", "서울특별시, 성북구", 
                    "서울특별시, 강북구", "서울특별시, 도봉구", "서울특별시, 노원구", "서울특별시, 은평구", "서울특별시, 서대문구", 
                    "서울특별시, 마포구", "서울특별시, 양천구", "서울특별시, 강서구", "서울특별시, 구로구", "서울특별시, 금천구", 
                    "서울특별시, 영등포구", "서울특별시, 동작구", "서울특별시, 관악구", "서울특별시, 서초구", "서울특별시, 강남구", 
                    "서울특별시, 송파구", "서울특별시, 강동구", "부산광역시, 중구", "부산광역시, 서구", "부산광역시, 동구", 
                    "부산광역시, 영도구", "부산광역시, 부산진구", "부산광역시, 동래구", "부산광역시, 남구", "부산광역시, 북구", 
                    "부산광역시, 해운대구", "부산광역시, 사하구", "부산광역시, 금정구", "부산광역시, 강서구", "부산광역시, 연제구", 
                    "부산광역시, 수영구", "부산광역시, 사상구", "부산광역시, 기장군", "대구광역시, 중구", "대구광역시, 동구", 
                    "대구광역시, 서구", "대구광역시, 남구", "대구광역시, 북구", "대구광역시, 수성구", "대구광역시, 달서구", 
                    "대구광역시, 달성군", "대구광역시, 군위군", "인천광역시, 중구", "인천광역시, 동구", "인천광역시, 미추홀구", 
                    "인천광역시, 연수구", "인천광역시, 남동구", "인천광역시, 부평구", "인천광역시, 계양구", "인천광역시, 서구", 
                    "인천광역시, 강화군", "인천광역시, 옹진군", "광주광역시, 광산구", "광주광역시, 동구", "광주광역시, 서구", 
                    "광주광역시, 남구", "광주광역시, 북구", "대전광역시, 유성구", "대전광역시, 대덕구", "대전광역시, 동구", 
                    "대전광역시, 중구", "대전광역시, 서구", "울산광역시, 울주군", "울산광역시, 동구", "울산광역시, 남구", 
                    "울산광역시, 중구", "울산광역시, 북구", "경기도, 수원시", "경기도, 고양시", "경기도, 용인시", 
                    "경기도, 성남시", "경기도, 부천시", "경기도, 화성시", "경기도, 안산시", "경기도, 남양주시", 
                    "경기도, 안양시", "경기도, 평택시", "경기도, 시흥시", "경기도, 파주시", "경기도, 의정부시", 
                    "경기도, 김포시", "경기도, 광주시", "경기도, 광명시", "경기도, 군포시", "경기도, 하남시", 
                    "경기도, 오산시", "경기도, 양주시", "경기도, 이천시", "경기도, 구리시", "경기도, 안성시", 
                    "경기도, 포천시", "경기도, 의왕시", "경기도, 양평군", "경기도, 여주시", "경기도, 동두천시", 
                    "경기도, 가평군", "경기도, 과천시", "경기도, 연천군", "강원도, 춘천시", "강원도, 원주시", 
                    "강원도, 강릉시", "강원도, 동해시", "강원도, 태백시", "강원도, 속초시", "강원도, 삼척시", 
                    "강원도, 홍천군", "강원도, 횡성군", "강원도, 영월군", "강원도, 평창군", "강원도, 정선군", 
                    "강원도, 철원군", "강원도, 화천군", "강원도, 양구군", "강원도, 인제군", "강원도, 고성군", 
                    "강원도, 양양군"],
        }
    },
    computed: {
        ...mapGetters(['getLoginState']),
        showCityList() {
            return this.cities.filter((city) => city.includes(this.selectedCity))
        }
    },
    methods:{
        ...mapActions(['logout']),
        closeAllOption(){
            this.cityOptionOpen = false;
            this.checkInOptionOpen = false;
            this.checkOutOptionOpen = false;
            this.guestOptionOpen = false;
        },
        closeOption(){
            this.closeAllOption();
            this.bgOpen = false;
        },
        beforeOpenOption(){
            this.closeAllOption();
            this.bgOpen = true; 
        },
        logoutTry(){
            if( confirm("정말 로그아웃 하시겠습니까?")) this.logout();
        }
    },
}
</script>
<style>
a{
    /* text-decoration-line: none;s */
    text-decoration: none;
}
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
.person-menu{
    position: absolute;
    top: 60px;
    right: 20px;
    width: 200px;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 15px;
    padding-bottom: 15px;
}
.person-menu div{
    padding: 20px;
}
.person-menu div:hover{
    background: lightgray;
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
    background-color: transparent;
    outline: none;
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
    flex-direction: column;
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
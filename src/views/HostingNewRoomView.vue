<template>
    <div>
        
        <NavBar active="room"/>
        <div class="roomInputBox">
            <div class="roomInput">
                <p>숙소 종류</p>
                <select id="roomCategory" class="roomInfoSelect">
                    <option value="1">주택</option>
                    <option value="2">아파트</option>
                    <option value="3">보트</option>
                    <option value="4">통나무집</option>
                    <option value="555">이상한거</option>
                </select>
            </div>
            <hr>
            <div class="roomInput">
                <p>숙소 유형</p>
                <select id="roomRentalType" class="roomInfoSelect">
                    <option value="1">공간 전체</option>
                    <option value="2">방</option>
                    <option value="3">다인실</option>
                </select>
            </div>
            <hr>
            <div class="roomInput">
                <p>주소 입력</p>
                <p>우편 번호</p>
                <input id="zipNum" 
                    @click="findAddr"
                    class="roomInfoInputSmall" type="text" readonly>
                <p>기본 주소</p>
                <input id="basicAddr" 
                    @click="findAddr"
                    class="roomInfoInputLong" type="text" readonly>
                <p>상세 주소</p>
                <input id="detailAddr" 
                    class="roomInfoInputLong" type="text">
            </div>
            <hr>
            <div class="roomInput">
                <p>기본 정보</p>
                <div class="inputRow">
                    <div>
                    <p>게스트</p>
                    <input id="guestNum"
                        class="roomInfoInputNum" type="number" value="4">
                    </div>
                    <div>
                    <p>침실</p>
                    <input id="bedroomNum"
                        class="roomInfoInputNum" type="number" value="1">
                    </div>
                    <div>
                    <p>침대</p>
                    <input id="bedNum"
                        class="roomInfoInputNum" type="number" value="2">
                    </div>
                    <div>
                    <p>욕실</p>
                    <input id="BathroomNum"
                        class="roomInfoInputNum" type="number" value="1">
                    </div>
                </div>
            </div>
            <hr>

            
            <div class="roomInput">
                <p>편의시설 정보</p>
                <p style="margin-bottom: 0px; font-weight: bold;">일반 편의시설</p>
                <div class="checkBoxArea">
                    <CheckBox name="wifi" value="Wi-Fi"/>
                    <CheckBox name="tv" value="TV"/>
                    <CheckBox name="kitchen" value="주방"/>
                    <CheckBox name="washing_machine" value="세탁기"/>
                    <CheckBox name="free_parking" value="건물 내 무료 주차"/>
                    <CheckBox name="paid_parking" value="건물 부지 내 유료 주차"/>
                    <CheckBox name="air_conditioner" value="에어컨"/>
                    <CheckBox name="work_space" value="업무 전용 공간"/>
                </div>
                <p style="margin-bottom: 0px; font-weight: bold;">특별한 편의시설</p>
                <div class="checkBoxArea">
                    <CheckBox name="pool" value="수영장"/>
                    <CheckBox name="spa" value="스파 욕조"/>
                    <CheckBox name="patio" value="파티오"/>
                    <CheckBox name="bbq_grill" value="BBQ 그릴"/>
                    <CheckBox name="fire_fit" value="화로"/>
                    <CheckBox name="pool_table" value="당구대"/>
                    <CheckBox name="outside_dining_area" value="야외 식사 공간"/>
                    <CheckBox name="piano" value="피아노"/>
                    <CheckBox name="fitness" value="운동 기구"/>
                    <CheckBox name="fireplace" value="실내 벽난로"/>
                    <CheckBox name="near_lake" value="호수에 인접"/>
                    <CheckBox name="near_beach" value="해변과 인접"/>
                    <CheckBox name="outside_shower" value="야외 샤워 시설"/>
                </div>
                <p style="margin-bottom: 0px; font-weight: bold;">안전시설</p>
                <div class="checkBoxArea">
                    <CheckBox name="fire_alarm" value="화재경보기"/>
                    <CheckBox name="first_aid_kit" value="구급상자"/>
                    <CheckBox name="extinguisher" value="소화기"/>
                    <CheckBox name="co_alarm" value="일산화탄소 경보기"/>
                </div>
            </div>
            <hr>
            <div class="roomInput">
                <p>사진 추가</p>
                <div class="imgBox">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            <hr>
            <div class="roomInput">
                <p>숙소 이름</p>
                <input class="roomInfoInputLong" type="text" placeholder="숙소 이름은 언제나 변경 가능합니다.">
            </div>
            <hr>
            <div class="roomInput">
                <p>태그 선택</p>
            </div>
            <hr>
            <div class="roomInput">
                <p>숙소 설명</p>
                <!-- 이거 인풋말고 더 큰걸로 -->
                <input class="roomInfoInputLong" type="text" placeholder="숙소 설명은 언제나 변경 가능합니다.">
            </div>
            <hr>

            
            <div class="roomInput">
                <p>예약 확정 방식</p>
                <div style="align-items: start;">
                    <div class="inputRow">
                        <input type="radio" 
                            name="reserveType"
                            id="reserve1"
                            value="1">
                        <label for="1">즉시 예약</label>
                    </div>
                    <div class="inputRow">
                        <input type="radio" 
                            name="reserveType"
                            id="reserve2"
                            value="2">
                        <label for="2">확인 후 수락 또는 거절</label>
                    </div>
                </div>
            </div>
            <hr>
            <div class="roomInput">
                <p>숙박 가격</p>
                <input class="roomInfoInputSmall" type="num" placeholder="1박당 가격">
            </div>
            <hr>
            <div class="roomInput">
                <button class="confirmRoom">숙소 추가하기</button>
            </div>
        </div>
    </div>
</template>
<!--  -->
<script>
import NavBar from '../components/NavBar/HostNavBar.vue'
import CheckBox from '../components/HostCheckBox.vue'

export default {
    name: "HostingNewRoomView",
    components: {
        NavBar,
        CheckBox,
    },
    methods: {
        findAddr() {
            new window.daum.Postcode({
                oncomplete: function (data) {
                    document.getElementById("basicAddr").value = data.roadAddress;
                    document.getElementById("zipNum").value = data.zonecode;
                }
            }).open();
        },
    },
}
</script>
<style>
.roomInputBox {
    padding-top: 30px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
hr {
    width: 500px; border: 0px; border-bottom: 1px solid lightgrey;
}
.roomInput {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
.roomInput > p {
    margin: 0px;
    /* margin-top: 5px; */
    margin-bottom: 5px;
    text-align: center;
}
.roomInput > p:nth-child(1) {
    font-size: 14pt;
    font-weight: bold;
}
.checkBoxArea{
    width: 480px;
    display: grid;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: baseline;
    margin-bottom: 6px;
}
.imgBox {
    width: 450px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
}
.imgBox > img {
    width: 100px;
    height: 100px;
}
.roomInfoSelect{
    width: 140px;
    background-color: white;
    border-radius: 5px;
}
input {
    border-radius: 5px;
}
.inputRow {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.inputRow > div{
    margin-left: 10px;
    margin-right: 10px
}
.inputRow p {
    margin: 0px;
}
.roomInfoInputNum{
    width: 40px;
    height: fit-content;
    text-align: center;
    -moz-appearance: textfield;
}
.roomInfoInputNum::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
}
.roomInfoInputSmall{
    width: 80px;
    height: fit-content;
    text-align: center;
}
.roomInfoInputLong{
    width: 240px;
    height: fit-content;
    text-align: center;
}
.inputRow > div > p {
    margin: 0px;
    text-align: center;
}
.confirmRoom {
    width: 120px;
    height: 30px;
    border-radius: 50vi;
    border: 1px solid gray;
    background-color: whitesmoke;
    cursor: pointer;
}
.confirmRoom:hover {
    background-color: gainsboro;
}
</style>
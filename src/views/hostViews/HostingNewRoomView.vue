<template>
    <div>
        <NavBar active="room"/>
        <div class="roomInputBox">
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/structure -->
                <p>숙소 종류</p>
                <select id="roomStructure" class="roomInfoSelect">
                    <option value="1">주택</option>
                    <option value="2">아파트</option>
                    <option value="3">보트</option>
                    <option value="4">통나무집</option>
                    <option value="555">이상한거</option>
                </select>
            </div>
            <hr>
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/privacy-type -->
                <p>숙소 유형</p>
                <select id="roomPrivacyType" class="roomInfoSelect">
                    <option value="1">공간 전체</option>
                    <option value="2">방</option>
                    <option value="3">다인실</option>
                </select>
            </div>
            <hr>
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/location -->
                <p>주소 입력</p>
                <p>우편 번호</p>
                <input id="zipNum" 
                    @click="findAddr"
                    :value="zipNumValue"
                    class="roomInfoInputSmall" type="text" readonly>
                <p>기본 주소</p>
                <input id="basicAddr" 
                    @click="findAddr"
                    :value="basicAddrValue"
                    class="roomInfoInputLong" type="text" readonly>
                <p>상세 주소</p>
                <input id="detailAddr" 
                    :value="detailAddrValue"
                    class="roomInfoInputLong" type="text">
            </div>
            <!-- <hr> -->
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/location -->
                <p>위치 확인</p>
                <p class="smallText">지도를 움직여 정확한 위치로 이동해 주세요.</p>
                <div v-if="!mapIsVisible" class="mapBeforeSet">여기에 지도가 표시됩니다.</div>
                <KakaoMap id="map" 
                    ref="kakaomapRef"
                    :width=400 :height=300 
                    v-model:location.sync="location" 
                    :isVisible="mapIsVisible"
                    :changeMarkerToCenter="true"
                />
                <CheckBox name="locationHide" value="정확한 위치 숨기기"
                    @change="(e) => changeLocationHide(e)" />
                <p class="smallText">체크시 예약 하기 전에는 정확한 위치 대신 빨간 원을 보여줍니다.</p>
            </div>
            <hr>
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/floor-plan -->
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
                <!-- /become-a-host/{host_id}/amenities -->
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
                <!-- /become-a-host/{host_id}/photos -->
                <p>사진 추가</p>
                <div class="imgBox">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            <hr>
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/title -->
                <p>숙소 이름</p>
                <input class="roomInfoInputLong" type="text" placeholder="숙소 이름은 언제나 변경 가능합니다.">
            </div>
            <hr>
            <!-- <div class="roomInput">
                <p>태그 선택</p>
            </div>
            <hr> -->
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/description -->
                <p>숙소 설명</p>
                <textarea class="roomInfoInputArea" wrap="hard" placeholder="숙소 설명은 언제나 변경 가능합니다."></textarea>
            </div>
            <hr>

            
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/instant-book -->
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
                        <label for="2">확인 후 수락/거절</label>
                    </div>
                </div>
            </div>
            <hr>
            <div class="roomInput">
                <!-- /become-a-host/{host_id}/price -->
                <p>숙박 가격</p>
                <input class="roomInfoInputSmall" type="num" placeholder="1박당 가격">
            </div>
            <hr>
            <div class="roomInput">
                <button class="confirmRoom">숙소 추가하기</button>
            </div>
        </div>
        <div class="goTop"
            @click="gotoTop()">
            ▲
        </div>
    </div>
</template>


<script>
import NavBar from '../../components/NavBar/HostNavBar.vue'
import CheckBox from '../../components/host/HostCheckBox.vue'
import KakaoMap from '../../components/KakaoMap.vue'

export default {
    name: "HostingNewRoomView",
    components: {
        NavBar,
        CheckBox,
        KakaoMap,
    },
    data() {
      return {
        location: [],
        mapIsVisible: false,
      };
    },
    props: {
        // roomStructureValue: {},
        // roomPrivacyTypeValue: {},
        zipNumValue: {
            type: String,
            default: null
        },
        basicAddrValue: {
            type: String,
            default: null
        },
        detailAddrValue: {
            type: String,
            default: null
        },
        // 지도 init
    },
    mounted() {
        if (!(window.kakao && window.kakao.maps)) {
            this.geocoderInit();
        }
    },
    methods: {
        geocoderInit() {
            const geocoderScript = document.createElement("script");
            /* global kakao */
            geocoderScript.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=61cc89dd5d4f852a57a81b7ffd989ef6&libraries=services,clusterer&autoload=false";
            document.head.appendChild(geocoderScript);  
        },
        findAddr() {
            new window.daum.Postcode({
                oncomplete: async (data) => {
                    document.getElementById("basicAddr").value = data.roadAddress || data.jibunAddress;
                    document.getElementById("zipNum").value = data.zonecode;

                    // find coordinates using by geocoder 
                    const geocoder = new kakao.maps.services.Geocoder();
                    await geocoder.addressSearch(data.roadAddress || data.jibunAddress, (res, stat) => {
                        if (stat === kakao.maps.services.Status.OK) {
                            const result = new kakao.maps.LatLng(res[0].x, res[0].y);
                            this.mapIsVisible = true;
                            this.$refs.kakaomapRef.initSize(true);
                            this.location = [result.getLng(), result.getLat()];
                            this.$refs.kakaomapRef.displayMarker(this.location);
                        }
                    });
                }
            }).open();
        },
        gotoTop() {
            const gotoTopFunction = () => {
                const scrollBox = document.getElementsByClassName("roomInputBox")[0];
                const position = scrollBox?.scrollTop;
                // const position = document.documentElement.scrollTop || document.body.scrollTop;
                if (position) {
                    window.requestAnimationFrame(() => {
                        scrollBox.scrollTo(0, position - position / 10);
                        gotoTopFunction();
                    });
                }
            }
            gotoTopFunction();
        },
        changeLocationHide(e) {
            if(e.target.checked){
                this.$refs.kakaomapRef.displayCircle(true);
            } else {
                this.$refs.kakaomapRef.displayCircle(false);
            }
        },
    },
}
</script>
<style>
.roomInputBox {
    height: calc(100vh - 90px - 71px);
    padding-top: 30px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: auto;
}
hr {
    width: 500px; border: 0px; border-bottom: 1px solid lightgrey;
}
.goTop{
    width: 40px;
    height: 40px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 50vi;
    background-color: rgb(245, 245, 245);
    font-size: 12pt;
    text-align: center;
    line-height: 36px;
    position: fixed;
    bottom: 60px;
    right: 70px;
    cursor: pointer;
}
#map {
    width: 400px;
    height: 300px;
}
.mapBeforeSet{
    width: 400px;
    height: 300px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: rgb(235, 235, 235);
    color: gray;
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
.roomInfoInputArea {
    width: 240px;
    height: 54px;
    border-radius: 5px;
    font-size: 10pt;
    font-family: 'Circular',-apple-system,'BlinkMacSystemFont','Roboto','Helvetica Neue',sans-serif;
    resize: none;
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
    background-color: ghostwhite;
    cursor: pointer;
}
.confirmRoom:hover {
    background-color: whitesmoke;
}
.smallText {
    font-size: 11pt
}
</style>
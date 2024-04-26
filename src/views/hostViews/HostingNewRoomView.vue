<template>
  <div>
    <NavBar active="room" />
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
      <hr className="hrLine" />
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/privacy-type -->
        <p>숙소 유형</p>
        <select id="roomPrivacyType" class="roomInfoSelect">
          <option value="1">공간 전체</option>
          <option value="2">방</option>
          <option value="3">다인실</option>
        </select>
      </div>
      <hr className="hrLine" />
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/location -->
        <p>주소 입력</p>
        <p>우편 번호</p>
        <input
          id="zipNum"
          @click="findAddr"
          class="roomInfoInputSmall"
          type="text"
          readonly
        />
        <p>기본 주소</p>
        <input
          id="basicAddr"
          @click="findAddr"
          class="roomInfoInputLong"
          type="text"
          readonly
        />
        <p>상세 주소</p>
        <input
          id="detailAddr"
          class="roomInfoInputLong"
          type="text"
        />
      </div>
      <!-- <hr> -->
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/location -->
        <p>위치 확인</p>
        <p class="smallText">지도를 움직여 정확한 위치로 이동해 주세요.</p>
        <div v-if="!mapIsVisible" class="mapBeforeSet">
          여기에 지도가 표시됩니다.
        </div>
        <KakaoMap
          id="map"
          ref="kakaomapRef"
          :width="400"
          :height="300"
          v-model:location.sync="location"
          :isVisible="mapIsVisible"
          :changeMarkerToCenter="true"
        />
        <CheckBox
          name="locationHide"
          value="정확한 위치 숨기기"
          @change="(e) => changeLocationHide(e)"
        />
        <p class="smallText">
          체크시 예약 하기 전에는 정확한 위치 대신 빨간 원을 보여줍니다.
        </p>
      </div>
      <hr className="hrLine" />
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/floor-plan -->
        <p>기본 정보</p>
        <div class="inputRow">
          <div>
            <p>게스트</p>
            <input
              id="guestNum"
              class="roomInfoInputNum"
              type="number"
              value="4"
            />
          </div>
          <div>
            <p>침실</p>
            <input
              id="bedroomNum"
              class="roomInfoInputNum"
              type="number"
              value="1"
            />
          </div>
          <div>
            <p>침대</p>
            <input
              id="bedNum"
              class="roomInfoInputNum"
              type="number"
              value="2"
            />
          </div>
          <div>
            <p>욕실</p>
            <input
              id="bathroomNum"
              class="roomInfoInputNum"
              type="number"
              value="1"
            />
          </div>
        </div>
      </div>
      <hr className="hrLine" />

      <div class="roomInput">
        <!-- /become-a-host/{host_id}/amenities -->
        <p>편의시설 정보</p>
        <p style="margin-bottom: 0px; font-weight: bold">일반 편의시설</p>
        <div class="checkBoxArea">
          <CheckBox group="amenity" name="Wi-Fi" value="Wi-Fi" />
          <CheckBox group="amenity" name="TV" value="TV" />
          <CheckBox group="amenity" name="주방" value="주방" />
          <CheckBox group="amenity" name="세탁기" value="세탁기" />
          <CheckBox group="amenity" name="건물 내 무료 주차" value="건물 내 무료 주차" />
          <CheckBox group="amenity" name="건물 부지 내 유료 주차" value="건물 부지 내 유료 주차" />
          <CheckBox group="amenity" name="에어컨" value="에어컨" />
          <CheckBox group="amenity" name="업무 전용 공간" value="업무 전용 공간" />
        </div>
        <p style="margin-bottom: 0px; font-weight: bold">특별한 편의시설</p>
        <div class="checkBoxArea">
          <CheckBox group="uniqueAmenity" name="수영장" value="수영장" />
          <CheckBox group="uniqueAmenity" name="스파 욕조" value="스파 욕조" />
          <CheckBox group="uniqueAmenity" name="파티오" value="파티오" />
          <CheckBox group="uniqueAmenity" name="BBQ 그릴" value="BBQ 그릴" />
          <CheckBox group="uniqueAmenity" name="화로" value="화로" />
          <CheckBox group="uniqueAmenity" name="당구대" value="당구대" />
          <CheckBox group="uniqueAmenity" name="야외 식사 공간" value="야외 식사 공간" />
          <CheckBox group="uniqueAmenity" name="피아노" value="피아노" />
          <CheckBox group="uniqueAmenity" name="운동 기구" value="운동 기구" />
          <CheckBox group="uniqueAmenity" name="실내 벽난로" value="실내 벽난로" />
          <CheckBox group="uniqueAmenity" name="호수에 인접" value="호수에 인접" />
          <CheckBox group="uniqueAmenity" name="해변과 인접" value="해변과 인접" />
          <CheckBox group="uniqueAmenity" name="야외 샤워 시설" value="야외 샤워 시설" />
        </div>
        <p style="margin-bottom: 0px; font-weight: bold">안전시설</p>
        <div class="checkBoxArea">
          <CheckBox group="safetySupply" name="fire_alarm" value="화재경보기" />
          <CheckBox group="safetySupply" name="first_aid_kit" value="구급상자" />
          <CheckBox group="safetySupply" name="extinguisher" value="소화기" />
          <CheckBox group="safetySupply" name="co_alarm" value="일산화탄소 경보기" />
        </div>
      </div>
      <hr className="hrLine" />
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/photos -->
        <p>사진 추가</p>
        <div class="imgBox">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <hr className="hrLine" />
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/title -->
        <p>숙소 이름</p>
        <input
          id="roomName"
          class="roomInfoInputLong"
          type="text"
          placeholder="숙소 이름은 언제나 변경 가능합니다."
        />
      </div>
      <hr className="hrLine" />
      <!-- <div class="roomInput">
                <p>태그 선택</p>
            </div>
            <hr> -->
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/description -->
        <p>숙소 설명</p>
        <textarea
          id="roomDesc"
          class="roomInfoInputArea"
          wrap="hard"
          placeholder="숙소 설명은 언제나 변경 가능합니다."
        ></textarea>
      </div>
      <hr className="hrLine" />

      <div class="roomInput">
        <!-- /become-a-host/{host_id}/instant-book -->
        <p>예약 확정 방식</p>
        <div style="align-items: start">
          <div class="inputRow">
            <input type="radio" name="reserveType" id="reserve1" value="1" />
            <label for="1">즉시 예약</label>
          </div>
          <div class="inputRow">
            <input type="radio" name="reserveType" id="reserve2" value="2" />
            <label for="2">확인 후 수락/거절</label>
          </div>
        </div>
      </div>
      <hr className="hrLine" />
      <div class="roomInput">
        <!-- /become-a-host/{host_id}/price -->
        <p>숙박 가격</p>
        <input 
          id="roomPrice" 
          class="roomInfoInputSmall" 
          type="num" 
          placeholder="1박당 가격" />
      </div>
      <hr className="hrLine" />
      <div v-if="this.$route.query.roomId" class="roomInput">
        <button class="confirmRoom" @click="addRoomRequest()" >숙소 수정하기</button>
      </div>
      <div v-else class="roomInput">
        <button class="confirmRoom" @click="editRoomRequest()" >숙소 추가하기</button>
      </div>
    </div>
    <div class="goTop" @click="gotoTop()">▲</div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/HostNavBar.vue";
import CheckBox from "../../components/host/HostCheckBox.vue";
import KakaoMap from "../../components/KakaoMap.vue";
import {getData, postData} from "../../api/axios.js"

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
      roomId: null,
      // roomStructure: null,
      // roomPrivacyType: null,
      // guestNum: null,
      // bedroomNum: null,
      // bedNum: null,
      // BathroomNum: null,
      // amenities: [],
      // uniqueAmenities: [],
      // safetySupply: [],
      // roomName: null,
      // roomDesc: null,
      // reserveOpt: null,
      // roomPrice: null,
    };
  },
  props: {
    // roomStructureValue: {},
    // roomPrivacyTypeValue: {},
    zipNumValue: {
      type: String,
      default: null,
    },
    basicAddrValue: {
      type: String,
      default: null,
    },
    detailAddrValue: {
      type: String,
      default: null,
    },
    // 지도 init
  },
  mounted() {
    if (!(window.kakao && window.kakao.maps)) {
      this.geocoderInit();
    }
    this.defaultValueSet() 
  },
  methods: {
    async defaultValueSet() {
      if (!this.$route.query.roomId) return null;

        this.roomId = this.$route.query.roomId;
        const data = await getData("/room/" + this.roomId);
        console.log(data);
        document.getElementById("roomStructure").options[data.type].setAttribute("selected", "true");
        // document.getElementById("roomPrivacyType").options[data.reserveOption].setAttribute("selected", "true");
        document.getElementById("guestNum").setAttribute("value", data.maxPeople);
        document.getElementById("bedroomNum").setAttribute("value", data.bedNum);
        document.getElementById("bedNum").setAttribute("value", data.bedroomNum);
        document.getElementById("bathroomNum").setAttribute("value", data.bathroomNum);
        document.getElementById("roomName").setAttribute("value", data.name);
        document.getElementById("roomDesc").textContent = data.desc;
        document.getElementsByName("reserveType")[data.reserveOption-1].setAttribute("checked", "true");
        document.getElementById("roomPrice").setAttribute("value", data.price);
        data.amenity.forEach(e => {
          document.getElementById("check_" + e.name)&&document.getElementById("check_" + e.name).setAttribute("checked", "true");
        });
        data.uniqueAmenity.forEach(e => {
          document.getElementById("check_" + e.name)&&document.getElementById("check_" + e.name).setAttribute("checked", "true");
        });
        document.getElementById("check_fire_alarm").setAttribute("checked", data.safetySupply.fireAlarm);
        document.getElementById("check_first_aid_kit").setAttribute("checked", data.safetySupply.aidKit);
        document.getElementById("check_extinguisher").setAttribute("checked", data.safetySupply.extinguisher);
        document.getElementById("check_co_alarm").setAttribute("checked", data.safetySupply.coAlarm);
        this.location = [data.location.locationX, data.location.locationY];
    }, 
    geocoderInit() {
      const geocoderScript = document.createElement("script");
      /* global kakao */
      geocoderScript.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=61cc89dd5d4f852a57a81b7ffd989ef6&libraries=services,clusterer&autoload=false";
      document.head.appendChild(geocoderScript);
    },
    findAddr() {
      new window.daum.Postcode({
        oncomplete: async (data) => {
          document.getElementById("basicAddr").value = data.roadAddress || data.jibunAddress;
          document.getElementById("zipNum").value = data.zonecode;

          // find coordinates using by geocoder
          const geocoder = new kakao.maps.services.Geocoder();
          await geocoder.addressSearch(
            data.roadAddress || data.jibunAddress,
            (res, stat) => {
              if (stat === kakao.maps.services.Status.OK) {
                const result = new kakao.maps.LatLng(res[0].x, res[0].y);
                this.mapIsVisible = true;
                this.$refs.kakaomapRef.initSize(true);
                this.location = [result.getLng(), result.getLat()];
                this.$refs.kakaomapRef.displayMarker(this.location);
              }
            }
          );
        },
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
      };
      gotoTopFunction();
    },
    changeLocationHide(e) {
      if (e.target.checked) {
        this.$refs.kakaomapRef.displayCircle(true);
      } else {
        this.$refs.kakaomapRef.displayCircle(false);
      }
    },
    packRoomData() {
      let amenityList = [];
      document.getElementsByName("amenity").forEach((e, i) => {
        if(e.checked) amenityList.push(i+1);
      });
      let uniqueAmenityList = [];
      document.getElementsByName("uniqueAmenity").forEach((e, i) => {
        if(e.checked) uniqueAmenityList.push(i+1);
      });

      return {
        "cityId": 1,
        "name": document.getElementById("roomName").value,
        "desc": document.getElementById("roomDesc").value,
        "type": document.getElementById("roomStructure").value,
        "maxPeople": document.getElementById("guestNum").value,
        "reserveOption": document.querySelectorAll('input[name="reserveType"]:checked')[0].value,
        "bedroomNum": document.getElementById("bedroomNum").value,
        "bedNum": document.getElementById("bedNum").value,
        "bathroomNum": document.getElementById("bathroomNum").value,
        "price": document.getElementById("roomPrice").value,
        "cleaningPrice": 0, // 업슴...
        "checkInTime": 25200000, // 업슴...
        "checkOutTime": 10800000, // 업슴...
        "usingRule": "사용 규칙이 여기에 저장됨니다...",
        "reserveStartAt": "2024-01-01", // 업슴...
        "reserveEndAt": "2024-01-02", // 업슴...
        "accessibility": [],
        "amenities": amenityList,
        "uniqueAmenities": uniqueAmenityList,
        "roomLocationRequest": {
            "locationX": this.location[0],
            "locationY": this.location[1]
        },
        "safetySupplyRequest": {
            "fireAlarm": document.getElementById("check_fire_alarm").checked,
            "aidKit": document.getElementById("check_first_aid_kit").checked,
            "extinguisher": document.getElementById("check_extinguisher").checked,
            "coAlarm": document.getElementById("check_co_alarm").checked
        }
      };
    },
    async addRoomRequest() {
      const data = await postData("/room/", this.packRoomData());
      console.log(data);
    },
    async editRoomRequest() {
      const data = await postData("/room/" + this.$route.query.roomId, this.packRoomData());
      console.log(data);
    },
  },
};
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
.hrLine {
  width: 500px;
  border: 0px;
  border-bottom: 1px solid lightgrey;
}
.goTop {
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
.mapBeforeSet {
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
.checkBoxArea {
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
.roomInfoSelect {
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
.inputRow > div {
  margin-left: 10px;
  margin-right: 10px;
}
.inputRow p {
  margin: 0px;
}
.roomInfoInputNum {
  width: 40px;
  height: fit-content;
  text-align: center;
  -moz-appearance: textfield;
}
.roomInfoInputNum::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.roomInfoInputSmall {
  width: 80px;
  height: fit-content;
  text-align: center;
}
.roomInfoInputLong {
  width: 240px;
  height: fit-content;
  text-align: center;
}
.roomInfoInputArea {
  width: 240px;
  height: 54px;
  border-radius: 5px;
  font-size: 10pt;
  font-family: "Circular", -apple-system, "BlinkMacSystemFont", "Roboto",
    "Helvetica Neue", sans-serif;
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
  font-size: 11pt;
}
</style>

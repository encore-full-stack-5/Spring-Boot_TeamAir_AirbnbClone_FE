<template>
  <div class="main">
    <div class="leftBox">
      <div class="firstLine">
        <h1>
          {{
            "Nonilda B&B / 쉐프가 운영하는 프라이빗한 숙소 . 식사 무료제공- 마운틴 룸 "
          }}
        </h1>
        <button style="float: right">♡ 저장</button>
        <button style="float: right">☆ 공유하기</button>
      </div>
      <div class="imgbox">
        <img src="a" alt="" />
        <img src="a" alt="" />
        <img src="a" alt="" />
        <img src="a" alt="" />
        <img src="a" alt="" />
      </div>
      <div class="info">
        <h1>{{ "Yeongok-myeon, Gangneung-si, 한국의 방" }}</h1>
        <h2>{{ "침실 2개침대 2개전용 욕실" }}</h2>
        <h3>{{ "4.99 ★★★★★" }}</h3>
      </div>
      <hr />

      <div class="hostname">
        <h3>호스트 소개</h3>
        <img src="@/assets/logo.png" alt="호스트 프로필 사진" />
        <h3>호스트: {{ "복선 님" }}</h3>
        <h4>호스팅 경력: {{ "슈퍼호스트호스팅 경력 4년" }}</h4>
      </div>
      <hr />
      <div class="roomInformation">
        <div>
          <div>
            <h2>※ {{ "b&b의 방" }}</h2>
            <h4>
              {{ "단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다." }}
            </h4>
            <h2>※ {{ "공용 공간" }}</h2>
            <h4>
              {{ "숙소 일부 공간을 호스트 및 다른 게스트와 함께 사용합니다." }}
            </h4>
            <h2>※ {{ "전용 욕실" }}</h2>
            <h4>{{ "게스트 전용 욕실이 있는 숙소입니다." }}</h4>
            <h2>※ {{ "6월 12일 전까지 무료 취소 가능" }}</h2>
            <h4>{{ "여행 계획이 변경되어도 전액 환불받으실 수 있습니다." }}</h4>
          </div>
          <hr />
          <h1>호스트 소개</h1>
          <div class="hostProfil">
            <div class="bigbox" content="width=device-width, initial-scale=1.0">
              <div>
                <div
                  class="bigbox1"
                  content="width=device-width, initial-scale=1.0"
                >
                  <div class="profilboxs">
                    <div class="left">
                      <img src="@/assets/profil.jpg" alt="" />
                      <div>복선</div>
                      <div>슈퍼호스트</div>
                    </div>

                    <div class="right">
                      <div class="first">
                        <div>후기</div>
                        <div>{{ "143개" }}</div>
                        <hr class="profilhr" />
                      </div>
                      <div class="second">
                        <div>평점</div>
                        <div>{{ "4.99★" }}</div>
                        <hr class="profilhr" />
                      </div>
                      <div class="therd">
                        <div>호스팅 경력</div>
                        <div>{{ "4년" }}</div>
                        <hr class="profilhr" />
                      </div>
                    </div>
                  </div>
                </div>
                <h5>직업 : {{ "쉐프" }}</h5>
                <h5>구사언어 : {{ "영어, 한국어" }}</h5>
                <h5>거주지 : {{ "강릉시, 한국" }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="Roominformation">
        <h1>숙소 정보</h1>
        <div>
          {{
            "오대산과 소금강을 끼고 있는 공기좋고 조용한 시골마을의 민박입니다. 주변이 확트여있고 바로 옆에 계곡을 끼고있어 친구, 가족, 연인들이 오셔서 프라이빗하게 시간을 보내기에 좋은 곳입니다. "
          }}
        </div>
      </div>
      <hr />
      <h1>숙박 장소</h1>
      <div class="place">
        <div class="Bed">
          <div>
            <img src="@/assets/sopa.jpg " alt="" />
            <h4>{{ "침실 1" }}</h4>
            <h6>{{ "퀸사이즈 침대 1개, 요와 이불 1개" }}</h6>
          </div>
        </div>
        <div class="Bed2">
          <div>
            <img src="@/assets/sopa.jpg " alt="" />
            <h4>{{ "침실 2" }}</h4>
            <h6>{{ "소파 베드 1개, 요와 이불 1개" }}</h6>
          </div>
        </div>
      </div>
      <hr />
      <div class="amenities">
        <h1>숙소 편의시설</h1>
        <div>{{ "정원 전망" }}</div>
        <div>{{ "산 전망" }}</div>
        <div>{{ "무선 인터넷" }}</div>
        <div>{{ "건물 내 무료 주차" }}</div>
        <div>{{ "TV" }}</div>
      </div>
      <hr />
      <div class="Calendar">
        <h1>{{ "Yeongok-myeon, Gangneung-si에서 5박" }}</h1>
        <h3>{{ "2024년 6월 17일 - 2024년 6월 22일" }}</h3>
        <Calender></Calender>
      </div>
      <hr />
      <ReviewBox />
    </div>
    <div class="rightBox"></div>
  </div>
</template>
<script>
import ReviewBox from "@/components/RoomDetailView/ReviewBox.vue";
import Calender from "@/components/RoomDetailView/Calender.vue";
export default {
  name: "RoomDetailView",
  components: {
    ReviewBox,
    Calender,
  },
};
</script>
<style>
.bigbox {
  margin-left: 50px;
  width: 1450px;
  height: 500px;
  border-radius: 10%; /* Use 50% to make it a circle, adjust as needed for rounding */
  border: 3px solid #333; /* Change border color and thickness as needed */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.bigbox1 {
  margin-bottom: 10x;
  width: 600px;
  height: 230px;
  border-radius: 10%; /* Use 50% to make it a circle, adjust as needed for rounding */
  border: 3px solid #333; /* Change border color and thickness as needed */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.Bed {
  margin-left: 10x;
  width: 300px;
  height: 230px;
  border-radius: 10%; /* Use 50% to make it a circle, adjust as needed for rounding */
  border: 3px solid #333; /* Change border color and thickness as needed */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.Bed2 {
  margin-left: 10x;
  width: 300px;
  height: 230px;
  border-radius: 10%; /* Use 50% to make it a circle, adjust as needed for rounding */
  border: 3px solid #333; /* Change border color and thickness as needed */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.place {
  align-items: flex-start;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
}

.right {
  text-align: right;
}

.profilboxs {
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
}

.first {
  font-size: 17px;
  margin-top: 30px;
}

.second {
  font-size: 17px;
}

.therd {
  font-size: 17px;
}
</style>

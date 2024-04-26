<template>
  <div class="mainbox">
    <div class="xbutton" style="margin-top: 20px">
      <button style="float: Right" @click="$emit('someEvent')">X</button>
    </div>
    <div class="contentbox">
      <div class="ReviewBoxs">
        <div class="wings">
          <img src="@/assets/wingL.jpg" alt="" />
          <div>
            <h1>{{ "4.99" }}</h1>
          </div>
          <img class="wingR" src="@/assets/wingR.jpg" alt="" />
        </div>

        <div class="Reviewtitle">
          <div class="Cleanliness">
            <div>청결도</div>
            <div>{{ "5.0" }}</div>
            <img src="@/assets/cleaner.jpg " alt="" />
          </div>
          <hr />
          <div class="check">
            <div>정확도</div>
            <div>{{ "5.0" }}</div>
            <img src="@/assets/check.jpg " alt="" />
          </div>
          <hr />
          <div class="checkin">
            <div>체크인</div>
            <div>{{ "5.0" }}</div>
            <img src="@/assets/checkin.jpg " alt="" />
          </div>
          <hr />
          <div class="Message">
            <div>의사소통</div>
            <div>{{ "4.9" }}</div>
            <img src="@/assets/Message.jpg " alt="" />
          </div>
          <hr />
          <div class="Price">
            <div>가격 대비 만족도</div>
            <div>{{ "4.9" }}</div>
            <img src="@/assets/Price.jpg " alt="" />
          </div>
        </div>
      </div>

      <div class="reviewbox">
        <div class="first line">
          <div>후기 150개</div>
          <!-- <button>최신순</button> -->
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
            <div>
              <div>
                <div class="names">
                  <img src="@/assets/userprofil.jpg" alt="" />
                  {{ "아진" }}
                  <br />
                  {{ "한국" }}
                </div>
              </div>

              <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
              <div>
                {{
                  "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                }}
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
              <div>
                <div>
                  <div class="names">
                    <img src="@/assets/userprofil.jpg" alt="" />
                    {{ "아진" }}
                    <br />
                    {{ "한국" }}
                  </div>
                </div>

                <div>{{ "★★★★★" }} {{ "2024년 1월" }}</div>
                <div>
                  {{
                    "한적한 곳에 위치했고 숙소와 식사 기대 이상이었어요. 커플 가족여행 모두 좋을 것 같아요. 여름에는 옆 계곡도 즐길 수 있다고 하네요."
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewBox",
  props: {
    isReviewBoxOpen: Boolean,
  },
};
</script>

<style>
.mainbox {
  position: static;
  top: 10%;
  left: 10%;
  background-color: white;
  align-content: center;
}
.contentbox {
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 500px; /* Set maximum height for scrollbar to appear */
  /* Adjust max-height as needed */
}
</style>

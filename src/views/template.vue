<template>
  <div class="main">
    <div>
      <div class="imgbox">
        <img src="a" alt="" />
        <img src="a" alt="" />
        <img src="a" alt="" />
        <img src="a" alt="" />
        <img src="a" alt="" />
      </div>
    </div>
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

      <div class="info">
        <h1>{{ "Yeongok-myeon, Gangneung-si, 한국의 방" }}</h1>
        <h2>{{ "침실 2개침대 2개전용 욕실" }}</h2>
        <h3>{{ "4.99 ★★★★★" }}</h3>
      </div>
      <hr />

      <div class="hostname">
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
      <hr />
      <div class="totalReview">
        <div class="totalReviewL">
          <div>
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
          <div>
            <div>
              <div>
                <div class="names">
                  <img src="@/assets/userprofil.jpg" alt="" />
                  {{ "정현" }}
                  <br />
                  {{ "한국" }}
                </div>
              </div>

              <div>{{ "★★★★★" }} {{ "2023년 11월" }}</div>
              <div>
                {{
                  "엔틱한 분위기가 물씬 느껴졌어요~ 주인분들의 취향이 소소하게 묻어 소중한곳에 온 느낌이였습니다. 식사도 오랜시간 구워낸 바베큐와 그 외 반찬도 맛있었어요!"
                }}
              </div>
            </div>
          </div>
        </div>
        <div class="totalReviewR">
          <div>
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
          <div>
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

      <div class="ReviewButton">
        <button
          @click="
            () => {
              this.isReviewBoxOpen = !this.isReviewBoxOpen;
            }
          "
        >
          <ReviewBox
            v-show="this.isReviewBoxOpen"
            @some-event="
              () => {
                this.isReviewBoxOpen = !this.isReviewBoxOpen;
              }
            "
          ></ReviewBox>
          후기 {{ "74" }}개 모두 보기
        </button>
      </div>
      <hr />
      <div class="Location">
        <h1>숙소 위치</h1>
        <div>
          <KakaoMap
            style="margin-left: 10px"
            width="1500"
            height="400"
            v-bind:location="[37.74913611, 128.8784972]"
          />
          <div>
            <h3>{{ "Yeongok-myeon, Gangneung-si, 강원도, 한국" }}</h3>
            <h5>
              {{
                "오대산과 소금강을 끼고 있는 공기좋고 조용한 시골마을의 민박입니다. 주변이 확트여있고 바로 옆에 계곡을 끼고있어 친구, 가족, 연인들이 오셔서 프라이빗하게 시간을 보내기에 좋은 곳입니다. 특히, 현직 쉐프가 운영하고 있어 수준 높은 breakfast와 저녁에는 바베큐디너를 맛볼 수 있습니다.식사는 무료제공 됩니다.(2인기준)"
              }}
            </h5>
          </div>
        </div>
      </div>
      <hr />
      <h2>알아두어야 할 사항</h2>
      <div class="lastline">
        <div>
          <div>숙소 이용규칙</div>
          <div>체크인 가능 시간: {{ "오후 3:00 이후" }}</div>
          <div>체크아웃 시간: {{ "오전 11:00 전까지" }}</div>
          <div>게스트 정원: {{ "4명" }}</div>
        </div>
        <div>
          <div>안전 및 숙소</div>
          <div>{{ "숙소 내 실외 보안 카메라" }}</div>
          <div>{{ "일산화탄소 경보기" }}</div>
          <div>{{ "화재경보기" }}</div>
        </div>
        <div>
          <div>환불 정책</div>
          <div>{{ "6월 12일 전까지 무료로 취소하실 수 있습니다." }}</div>
        </div>
      </div>
      <hr />
    </div>
    <div class="rightBox">
      <div>
        <div class="pay">
          <div class="left">
            <div>₩{{ "324,000" }} /박</div>
            <div>슈퍼호스트</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

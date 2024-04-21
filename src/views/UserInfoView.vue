<template>
  <div>
    <hr />
    <div class="info-container">
      <h1>계정 관리</h1>
      <div class="info-box">
        <div>
          <div>실명</div>
          <div @click="nameBoxChange">{{ nameBoxStatus }}</div>
        </div>
        <div v-show="!nameOpen">정희석</div>
        <div v-show="nameOpen" class="modify-box">
          <div>
            허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.
          </div>
          <div class="modify-input">
            <span>이름</span>
            <input type="text" />
          </div>
          <button @click="nameChange">저장</button>
        </div>
        <hr />
      </div>
      <div class="info-box">
        <div>
          <div>이메일 주소</div>
          <div @click="emailBoxChange">{{ emailBoxStatus }}</div>
        </div>
        <div v-show="!emailOpen">t*****g@naver.com</div>
        <div v-show="emailOpen" class="modify-box">
          <div>언제든지 확인하실 수 있는 주소를 사용하세요</div>
          <div class="modify-input">
            <span>이메일 주소</span>
            <input type="email" />
          </div>
          <button @click="emailChange">저장</button>
        </div>
        <hr />
      </div>
      <div class="info-box">
        <div>
          <div>닉네임</div>
          <div @click="nicknameBoxChange">{{ nicknameBoxStatus }}</div>
        </div>
        <div v-show="!nicknameOpen">석석석석석</div>
        <div v-show="nicknameOpen" class="modify-box">
          <div>닉네임을 설정해주세요</div>
          <div class="modify-input">
            <span>닉네임</span>
            <input type="text" />
          </div>
          <button @click="nicknameBoxChange">저장</button>
        </div>
        <hr />
      </div>
      <div class="info-box">
        <div>
          <div>비밀번호</div>
          <div @click="passwordBoxChange">{{ passwordBoxStatus }}</div>
        </div>
        <div v-show="!passwordOpen">최종 수정일: 10일 전</div>
        <div v-show="passwordOpen" class="modify-box" style="height: 400px">
          <div class="modify-input" style="display: block; margin-top: 20px">
            <span>현재 비밀번호</span>
            <input type="password" />
          </div>
          <div class="modify-input">
            <span>새 비밀번호</span>
            <input type="password" />
          </div>
          <div class="modify-input">
            <span>비밀번호 확인</span>
            <input type="password" />
          </div>
          <button @click="passwordBoxChange">비밀번호 변경</button>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfoView",
  data() {
    return {
      nameOpen: false,
      nameBoxStatus: "수정",
      emailOpen: false,
      emailBoxStatus: "수정",
      nicknameOpen: false,
      nicknameBoxStatus: "수정",
      passwordOpen: false,
      passwordBoxStatus: "업데이트",
    };
  },
  methods: {
    nameBoxChange() {
      this.nameOpen = !this.nameOpen;
      this.nameBoxStatus = this.nameOpen ? "닫기" : "업데이트";
    },
    nameChange() {
      this.nameBoxChange();
    },
    emailBoxChange() {
      this.emailOpen = !this.emailOpen;
      this.emailBoxStatus = this.emailOpen ? "닫기" : "수정";
    },
    emailChange() {
      this.emailBoxChange();
    },
    nicknameBoxChange() {
      this.nicknameOpen = !this.nicknameOpen;
      this.nicknameBoxStatus = this.nicknameOpen ? "닫기" : "수정";
    },
    nicknameChange() {
      this.nicknameBoxChange();
    },
    passwordBoxChange() {
      this.passwordOpen = !this.passwordOpen;
      this.passwordBoxStatus = this.passwordOpen ? "닫기" : "수정";
    },
    passwordChange() {
      this.passwordBoxChange();
    },
  },
};
</script>
<style>
.info-container {
  width: 60%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
}
.info-box {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.info-box div:nth-child(1) {
  display: flex;
  flex: row;
  justify-content: space-between;
}
.modify-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  align-items: flex-start;
}
.modify-input {
  border: 1px solid black;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
}
.modify-input span {
  display: block;
}
.modify-input input {
  outline: none;
  border: 0px;
}
.modify-box button {
  color: white;
  background-color: black;
  padding: 10px 25px 10px 25px;
  border-radius: 15px;
}
</style>

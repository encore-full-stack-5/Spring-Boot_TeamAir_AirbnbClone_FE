<template>
  <div>
    <GuestNavBar />
    <div class="signup-container">
      <div class="signup-box">
        <h2 class="signup-title">회원가입</h2>
        <form @submit.prevent="register">
          <div>
            <input
              name="email"
              class="w3-input"
              placeholder="이메일을 입력하세요"
              v-model="email"
              type="email"
            />
          </div>
          <div>
            <input
              name="password"
              class="w3-input"
              placeholder="비밀번호를 입력하세요"
              v-model="password"
              type="password"
            />
          </div>
          <div>
            <input
              class="w3-input"
              name="username"
              placeholder="사용자 이름을 입력하세요"
              v-model="username"
            />
          </div>
          <div>
            <input
              name="nickname"
              class="w3-input"
              placeholder="닉네임을 입력하세요"
              v-model="nickname"
              type="nickname"
            />
          </div>
          <div>
            <button type="submit" class="signup-button">가입</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import GuestNavBar from "../components/NavBar/GuestNavBar.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      nickname: "",
    };
  },
  methods: {
    async register() {
      try {
        // const response = await fetch("http://example.com/api/register", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: this.email,
        //     password: this.password,
        //     username: this.username,
        //     nickname: this.nickname,
        //   }),
        // });
        console.log("회원가입 성공");
        this.$router.push("/login");

        // if (response.ok) {
        //   // 회원가입 성공
        //   console.log("회원가입 성공");
        //   this.$router.push("/login");
        // } else {
        //   // 회원가입 실패
        //   console.error("회원가입 실패");
        // }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    },
  },
  components: {
    GuestNavBar,
  },
};
</script>
<style scoped>
/* 회원가입 컨테이너 */
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
}

/* 회원가입 박스 */
.signup-box {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* 회원가입 제목 */
.signup-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

/* 회원가입 버튼 */
.signup-button {
  display: block;
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

/* 회원가입 버튼 호버 효과 */
.signup-button:hover {
  background-color: #357ae8;
}
</style>

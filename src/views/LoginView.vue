<template>
  <div>
    <GuestNavBar />
    <div class="login-container">
      <div style="text-align: center" class="login-box">
        <h2 class="login-title">Team Air</h2>
        <div id="loginForm">
          <form @submit.prevent="fnLogin">
            <div>
              <input
                class="w3-input"
                name="uid"
                placeholder="아이디"
                v-model="userId"
              />
            </div>
            <div>
              <input
                name="password"
                class="w3-input"
                placeholder="비민번호"
                v-model="password"
                type="password"
              />
            </div>
            <div>
              <button type="submit" class="login-button">Login</button>
            </div>
            <div>
              <button class="login-button" @click="goToSignup">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GuestNavBar from "../components/NavBar/GuestNavBar.vue";
import { mapActions } from 'vuex';

export default {
  name: "LoginView",
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({vuexLogin: 'login'}),
    fnLogin() {
      if (this.userId === "") {
        alert("ID를 입력하세요.");
        return;
      }

      if (this.password === "") {
        alert("비밀번호를 입력하세요.");
        return;
      }
      this.login()
      alert("로그인 되었습니다.");
      this.$router.push("/");
    },
    goToSignup() {
      this.$router.push("/signup");
    },
    login(){
      axios.post("http://192.168.80.38:9000/api/v1/user/login",{
        email: this.userId,
        password: this.password
      })
        .then((res) => {
          console.log("aaaaa");
          console.log(res.data);
          this.vuexLogin(res.data.token);
          // localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  components: {
    GuestNavBar,
  },
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 로그인 컨테이너 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 로그인 박스 */
.login-box {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* 로그인 제목 */
.login-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

/* 로그인 버튼 */
.login-button {
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

/* 로그인 버튼 호버 효과 */
.login-button:hover {
  background-color: #357ae8;
}
</style>

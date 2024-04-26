<template>
  <div>
    <GuestNavBar />
    <RouterView></RouterView>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  mounted(){
    setInterval(
      ()=>this.reissueToken(),
      1080000
    )
  },
  methods: {
    async reissueToken(){
      console.log("토큰 재발급 요청");
      if(localStorage.getItem("token") == null ? false : true){
        try {
          const response = await axios.get("http://192.168.56.1:9000/api/v1/user/token", {
            headers: {
              Authorization : `Bearer ${localStorage.getItem("token")}`
            },
          });
          localStorage.setItem("token", response.data);
        }catch (error) {
          console.error("토큰 재발행 실패", error);
        }
      }
    },
  },
};
</script>
<style>
.icon {
  color: rgb(255, 56, 92) !important;
  cursor: pointer;
}
body {
  padding: 0px;
  margin: 0px;
  box-sizing: 0px;
}
div {
  font-family: "Circular", -apple-system, "BlinkMacSystemFont", "Roboto",
    "Helvetica Neue", sans-serif;
}
</style>

<template>
  <div>
    <GuestNavBar />
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: "App",
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

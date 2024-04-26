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
/* * {
    transition-duration: 0.7s;
    transition-timing-function: ease-in-out;
}
*:hover {
    transform: rotate(360deg);
} */
</style>

<template>
    <div>
        <NavBar active="today" />
        <p>호 스 트 메 인 입 니 다</p>
    </div>
</template>
<script>
    import NavBar from '../components/NavBar/HostNavBar.vue'

    export default {
        name: "HostMainView",
        components: {
            NavBar
        }
    }
</script>
<style>
    
</style>
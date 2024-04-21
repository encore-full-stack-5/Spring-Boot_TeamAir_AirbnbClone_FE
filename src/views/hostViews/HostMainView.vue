<template>
    <div>
        <NavBar active="today" />
        <div class="hostMainBox">
            <h1>{{ hostName }}님, 안녕하세요!</h1>
            <div class="reserveHead">
                <h2 style="font-weight: bolder;">예약</h2>
                <h4 style="cursor: pointer;">모든 예약 {{ totalReserve }}개</h4>
            </div>
            <div class="reserveCategory">
                <div id="checkOut"
                    @click="ActiveCategory('checkOut')">
                    체크아웃 예정({{ checkOut }})건
                </div>
                <div id="nowHosting"
                    @click="ActiveCategory('nowHosting')">
                    현재 호스팅 중({{ nowHosting }})건
                </div>
                <div id="checkIn"
                    @click="ActiveCategory('checkIn')">
                    체크인 예정({{ checkIn }})건
                </div>
                <div id="schedule"
                    @click="ActiveCategory('schedule')">
                    예정({{ schedule }})건
                </div>
                <div id="needReview"
                    @click="ActiveCategory('needReview')">
                    작성할 후기({{ needReview }})건
                </div>
            </div>
            <div class="reserveListBox">
                
            </div>
        </div>
    </div>
</template>
<script>
    import NavBar from '../../components/NavBar/HostNavBar.vue'

    export default {
        name: "HostMainView",
        components: {
            NavBar
        },
        data() {
            return {
                activeCategory: "checkOut",
                hostName: "{name here}",
                totalReserve: 0,
                checkOut: 0,
                checkIn: 0,
                nowHosting: 0,
                schedule: 0,
                needReview: 0
            }
        },
        mounted() {
            this.ActiveCategory(this.activeCategory)
        },
        methods: {
            ActiveCategory(e) {
                const beforeCategory = document.getElementById(this.activeCategory);
                beforeCategory.style.setProperty('--bg-color', null);
                beforeCategory.style.setProperty('--border', null);
                this.activeCategory = e;
                const category = document.getElementById(this.activeCategory);
                category.style.setProperty('--bg-color', "rgb(245, 245, 245)");
                category.style.setProperty('--border', "2px solid black");
            },
        },
    }
</script>
<style>
.hostMainBox{
    max-width: 1300px;
    margin: auto;
    padding: 60px;
    padding-top: 30px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
}
.reserveHead{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
}
.reserveCategory{
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 8px;
}
.reserveCategory > div {
    border: var(--border, 1px solid lightgray);
    border-radius: 50vi;
    background-color: var(--bg-color);
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 10pt;
    cursor: pointer;
}
.reserveCategory > div:hover {
    border: var(--border, 1px solid black);
}
.reserveListBox {
    width: 100%;
    min-height: 200px;
    border-radius: 10px;
    background-color: rgb(245, 245, 245);
    margin-top: 30px;
}
</style>
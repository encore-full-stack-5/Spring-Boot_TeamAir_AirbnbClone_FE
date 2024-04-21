<template>
    <div>
        <NavBar active="room"/>
        <div class="listBox">
            <div class="listHeader">
                <h1>숙소</h1>
                <div class="listHeaderButtonBox">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 32 32" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3px; overflow: visible;" role="img" focusable="false">
                            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"/>
                        </svg>
                    </button>
                    <button>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display:block;fill:none;height:16px;width:16px;stroke:currentColor;stroke-width:3;overflow:visible" aria-label="목록 확인하기로 변경" role="img" focusable="false">
                            <path d="m29 19v10h-26v-10zm0-16v10h-26v-10z" stroke-linejoin="round" fill="none" stroke="#inherit"/>
                        </svg>
                    </button>
                    <button @click="newRoom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display:block;fill:none;height:16px;width:16px;stroke:currentColor;stroke-width:3;overflow:visible" aria-hidden="true" role="presentation" focusable="false">
                            <path d="M2 16h28M16 2v28"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="listMyRoom">
                <!-- 룸 박스 -->
                <RoomBox 
                    loacationName="붓싼"
                    roomName="개쩌는 짱짱 숙소"
                    rating="4.99"
                    infoText1="붓싼 앞바다 속 1km"
                    infoText2="4.15 ~ 4.18"
                    price="654,321"
                />
                <!-- <div class="roomBox">
                    <img src="" alt="">
                    <div class="roomDescHead">
                        <p>{{"지역" + " " + "숙소이름@@@@@@@@@@@@@@@@@@@"}}</p>
                        <p>★{{"5.00"}}</p>
                    </div>
                    <p>{{"간략한 위치"}}</p>
                    <p>{{"사용 언제부터 언제"}}</p>
                    <div class ="guestComment">
                        <p>게스트 한마디 "</p>
                        <p>{{ "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구" }}</p>
                        <P>"</P>
                    </div>
                    <p>￦{{"123,456"}} /박</p>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from '../../components/NavBar/HostNavBar.vue'
import RoomBox from '../../components/host/HostRoom.vue'

export default {
    name: "HostingListView",
    components: {
        NavBar,
        RoomBox,
    },
    methods: {
        newRoom() {
            this.$router.push({ path: '/become-a-host' })
        }
    }
}
</script>
<style>
.listBox {
    display: flex;
    flex-direction: column;
    padding-left: 80px;
    padding-right: 8%;
}
.listHeader {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.listHeaderButtonBox {
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.listHeaderButtonBox > * {
    width: 40px;
    height: 40px;
    border: 0px;
    border-radius: 50vi;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.listMyRoom {
    width: calc(26vw + 1px)
}
</style>
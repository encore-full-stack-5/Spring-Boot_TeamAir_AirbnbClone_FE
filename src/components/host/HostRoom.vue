<template>
    <div class="roomBox">
        <img src="" alt="">
        <div class="roomDescHead">
            <p>{{loacationName + " " + roomName}}</p>
            <p>★{{rating}}</p>
        </div>
        <p>{{infoText1}}</p>
        <p>{{infoText2}}</p>
        <!-- <div class ="guestComment">
            <p>게스트 한마디 "</p>
            <p>{{ "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구" }}</p>
            <P>"</P>
        </div> -->
        <p>￦{{price}} /박</p>
    </div>
</template>
  
<script>
export default {
name: 'HostRoom',
props: {
    loacationName: {
        type: String,
        default: null
    },
    roomName: {
        type: String,
        default: null
    },
    rating: {
        type: String,
        default: null
    },
    infoText1: {
        type: String,
        default: null
    },
    infoText2: {
        type: String,
        default: null
    },
    price: {
        type: String,
        default: null
    },
}
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roomBox {
    display: flex;
    flex-direction: column;
    transition-duration: 0.7s;
    transition-timing-function: ease-in-out;
    cursor: pointer;    
}
.roomBox:hover {
    transform: rotate(360deg);
}
.roomBox img{
    width: 26vw;
    height: 26vw;
    border-radius: 10px;
    border: 1px solid lightgray;
    background-color: lightgray;
}
.roomBox p {
    color: gray;
    font-size: 11pt;
    margin: 0px;
}
.roomDescHead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.roomDescHead p {
    color: black;
    font-size: 12pt;
    margin-top: 8px;
}
.roomDescHead p:nth-child(1) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.guestComment {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
}
.guestComment :nth-child(2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
}
.roomBox > :nth-last-child(1){
    color: black;
    margin-top: 4px;
}
</style>
  
<template>
    <div class="roomcard-container">
        <hr>
        <div class="roomcard" v-for="(room, i) in roomList" :key="i">

        </div>
    </div>
</template>
<script>
export default {
    name: "MainView",
    data(){
        return{
            roomList: [
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
                {
                    roomId: 1,
                    showUrlIndex: 0,
                    urlList: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/5a917f78-d811-4aca-8409-149b8a618972.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/9d271454-ca13-4b1e-8e3d-f5539e60d8b2.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/65b6151f-9197-4de2-9e87-385ea1951675.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/301a8913-fdfe-4ae9-a03d-8acda820684a.jpeg?im_w=720",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTAyMDExNDU%3D/original/66970706-fee8-49b4-b7b6-b7a9b8b96e9f.jpeg?im_w=720"
                        ],
                    city: "종로구",
                    roomType: "별장",
                    starAvg: 4.89,
                    roomName: "[서촌] 수피아 게스트하우스 - 블루룸(2-3p)",
                    bedNum: 3,
                    bedroomNum: 1,
                    pricePerDay: 150000
                },
            ]
        }
    }
}
</script>
<style>
.roomcard-container{
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
hr {
    width: 100%; border: 0px; border-bottom: 1px solid lightgrey;
}
.roomcard{
    min-width: 250px;
    width: 23%;
}
</style>
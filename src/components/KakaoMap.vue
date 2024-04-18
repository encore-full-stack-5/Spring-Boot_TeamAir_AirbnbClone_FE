<template>
    <div>
      <div id="map"></div>
    </div>
</template>

<script>
import { toRaw } from "vue";

export default {
name: "KakaoMap",
data() {
    return {
        markers: [],
    };
},
props: {
    width: {
        type: Number,
        default: 400
    },
    height: {
        type: Number,
        default: 400
    },
    location: {
        type: Array,
        default () { return [] }
    },
    isVisible: {
        type: Boolean,
        default: true
    },
    changeMarkerToCenter: {
        type: Boolean,
        default: false
    }
},
mounted() {
    this.initSize();
    if (window.kakao && window.kakao.maps) {
        this.initMap();
    } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=61cc89dd5d4f852a57a81b7ffd989ef6";
        document.head.appendChild(script);
    }
},
methods: {
    initSize(is = this.isVisible) {
        const container = document.getElementById("map");
        if (is) {
            container.style.width = `${this.width}px`;
            container.style.height = `${this.height}px`;
        } else {
            container.style.width = `0px`;
            container.style.height = `0px`;
        }
        toRaw(this.map)?.relayout();
    },
    
    initMap() {
        const container = document.getElementById("map");
        const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
        };

        this.map = new kakao.maps.Map(container, options);
        this.map.setZoomable(false);

        if (this.changeMarkerToCenter){
            kakao.maps.event.addListener(this.map, 'mouseup', () => {
                const LatLng = this.map.getCenter();
                this.displayMarker([LatLng.getLat(), LatLng.getLng()]);
            });
        }

        this.location.length > 0 && this.displayMarker();
    },

    displayMarker(l = this.location) {
        // 마커 초기화
        if (this.markers.length > 0) {
            this.markers.forEach(marker => {
                marker.setMap(null);
            });
            this.markers = [];
        }
        
        // 마커 하나 설정
        const position = new kakao.maps.LatLng(...l);
        const marker = new kakao.maps.Marker({ position });
        marker.setMap(this.map);
        this.markers.push(marker);
        // this.markers = new kakao.maps.Marker({ map: toRaw(this.map), position });

        // // 마커들의 중심 위치로 지도 위치 및 범위 재설정
        // let bounds = new kakao.maps.LatLngBounds();
        // bounds.extend(position);
        // toRaw(this.map).setBounds(bounds);

        // 지도 중심 재설정
        this.map.setCenter(position);
    },
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
    width: 10px;
    height: 10px;
    display: flex;
    flex-direction: column;
}
</style>
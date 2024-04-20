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
      marker: null,
    };
  },
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    location: {
      type: Array,
      default() {
        return [];
      },
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.initSize();
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
      document.head.appendChild(script);
    }
  },
  methods: {
    initSize() {
      const container = document.getElementById("map");
      if (this.isVisible) {
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
        center: new kakao.maps.LatLng(37.74913611, 128.8784972),
        level: 3,
      };

      this.map = new kakao.maps.Map(container, options);

      this.location.length > 0 && this.displayMarker();
    },

    displayMarker() {
      // 마커 초기화
      if (this.marker != null) this.marker = null;

      // 마커 하나 설정
      const position = new kakao.maps.LatLng(...this.location);
      this.marker = new kakao.maps.Marker({ map: toRaw(this.map), position });

      // 마커들의 중심 위치로 지도 위치 및 범위 재설정
      let bounds = new kakao.maps.LatLngBounds();
      bounds.extend(position);
      toRaw(this.map).setBounds(bounds);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 10px;
  height: 10px;
}
</style>

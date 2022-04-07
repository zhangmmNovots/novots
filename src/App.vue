<template>
  <div id="app" style="height: 100%">
    <a-config-provider :locale="locale">
      <layout v-if="showComponents"></layout>
    </a-config-provider>
  </div>
</template>
<script>
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import layout from '@/components/layout.vue'
export default {
  data() {
    return { locale: zhCN, showComponents: true, timer: null }
  },
  components: {
    aConfigProvider: ConfigProvider,
    layout,
  },
  mounted() {
    // this.initMap()
    // window.onresize = this.switchComponents;
  },
  methods: {
    // switchComponents() {
    //   if (this.timer) {
    //     clearTimeout(this.timer);
    //     this.timer = null;
    //   }
    //   this.timer = setTimeout(() => {
    //     this.showComponents = false;
    //     this.$nextTick(() => {
    //       this.showComponents = true;
    //       this.timer = null;
    //     });
    //   }, 500);
    // },
    // initMap() {
    //   const url =
    //     'https://webapi.amap.com/maps?v=1.4.15&key=48b318ebd182d7a08de1431c42d849ed&callback=onLoad'
    //   const jsapi = document.createElement('script')
    //   jsapi.charset = 'utf-8'
    //   jsapi.src = url
    //   document.head.appendChild(jsapi)
    //   window.onLoad = function () {}
    // },
  },
}
</script>

<style lang="less">
@font-face {
  font-family: 'iconfont'; /* project id 1967355 */
  src: url('//at.alicdn.com/t/font_1967355_fl14nl45jp.woff2?t=1631674333634') format('woff2');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 14px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

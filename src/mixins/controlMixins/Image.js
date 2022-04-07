
 export default {
    data() {
        return {
        }
    },
		computed: {
		},
    methods: {
      imageSrc(val) {
        let url = "";
        // 是否有文件
        if (val && val.length) {
          // 转换成数组
          const imgList = JSON.parse(val);
          // 找到第一个有url的
          url = (imgList.find((item) => item.url) || {}).url;
          // 是否是本地地址
          if (url&&url.includes("@")) {
            // 用/分隔
            const urlList = url.split("/");
            // 拿到文件名称
            url = urlList[urlList.length - 1];
            // 记载文件
            return require(`@/assets/img/${url}`);
          }
        }
        return url;
      }
    },
    created(){
            
    },
  }

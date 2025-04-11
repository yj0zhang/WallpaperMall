"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_home = require("../../mock/home.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_uv_skeletons2 = common_vendor.resolveComponent("uv-skeletons");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_uv_skeletons2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_uv_skeletons = () => "../../uni_modules/uv-skeletons/components/uv-skeletons/uv-skeletons.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_uv_skeletons + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banners = common_vendor.ref([]);
    const getBanner = async () => {
      banners.value = await mock_home.getBannerList();
    };
    getBanner();
    const notices = common_vendor.ref([]);
    const getNotices = async () => {
      notices.value = await mock_home.getNoticeList();
    };
    getNotices();
    const dailyRecommendList = common_vendor.ref([]);
    const getDailyRecommendList = async () => {
      dailyRecommendList.value = await mock_home.getDailyRecommendPapers();
      skeletonLoading.value = false;
    };
    getDailyRecommendList();
    const popularPapers = common_vendor.ref([]);
    const getPopularPaperList = async () => {
      popularPapers.value = await mock_home.getPopularPapers();
    };
    getPopularPaperList();
    const gotoDetail = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/notice/detail"
      });
    };
    const goPreview = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    const skeletonLoading = common_vendor.ref(true);
    const recommendSkeleton = common_vendor.ref([
      {
        type: "flex",
        children: [{
          type: "custom",
          style: "width:200rpx;height:430rpx;"
        }, {
          type: "custom",
          style: "width:200rpx;height:430rpx;marginLeft:15rpx;"
        }, {
          type: "custom",
          style: "width:200rpx;height:430rpx;marginLeft:15rpx;"
        }, {
          type: "custom",
          style: "width:200rpx;height:430rpx;marginLeft:15rpx;"
        }]
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(banners.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        d: common_vendor.f(notices.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: item.id,
            c: common_vendor.o(($event) => gotoDetail(), item.id)
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16",
          color: "#333"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "18"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "dd号"
        }),
        h: common_vendor.p({
          loading: skeletonLoading.value,
          skeleton: recommendSkeleton.value,
          animate: true
        }),
        i: common_vendor.f(dailyRecommendList.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.o(($event) => goPreview())
          };
        }),
        j: common_vendor.f(popularPapers.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: "1cf27b2a-8-" + i0,
            c: common_vendor.p({
              src: item.img,
              classify: item.classify
            })
          };
        }),
        k: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map

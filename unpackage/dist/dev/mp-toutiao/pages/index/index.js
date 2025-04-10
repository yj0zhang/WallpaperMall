"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banners = common_vendor.ref([
      { id: 1, img: common_assets.b1 },
      { id: 2, img: common_assets.b2 },
      { id: 3, img: common_assets.b3 }
    ]);
    const notices = common_vendor.ref([
      { id: 1, content: "这是第一个公告很长很长很长很长很长很长很长很长很长" },
      { id: 2, content: "这是第二个公告很长很长很长很长很长很长很长很长很长" },
      { id: 3, content: "这是第三个公告很长很长很长很长很长很长很长很长很长" },
      { id: 4, content: "这是第四个公告很长很长很长很长很长很长很长很长很长" }
    ]);
    const goPreview = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
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
            b: item.id
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
        h: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => goPreview())
          };
        }),
        i: common_assets._imports_0,
        j: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "1cf27b2a-7-" + i0
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
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/index/index.js.map

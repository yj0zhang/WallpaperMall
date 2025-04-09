"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const list1 = common_vendor.ref([
      { id: 1, name: "我的下载", icon: "download-filled", count: 0 },
      { id: 2, name: "我的评分", icon: "star-filled", count: 0 },
      { id: 3, name: "联系客服", icon: "chatboxes-filled", isCustomerService: true }
    ]);
    const list2 = common_vendor.ref([
      { id: 1, name: "订阅更新", icon: "notification-filled" },
      { id: 2, name: "常见问题", icon: "flag-filled" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.f(list1.value, (item, k0, i0) => {
          return common_vendor.e({
            a: "0f7520f0-0-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "20"
            }),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.count),
            e: "0f7520f0-1-" + i0,
            f: item.isCustomerService
          }, item.isCustomerService ? {} : {}, {
            g: item.id
          });
        }),
        c: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        d: common_vendor.f(list2.value, (item, k0, i0) => {
          return {
            a: "0f7520f0-2-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "20"
            }),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.count),
            e: "0f7520f0-3-" + i0,
            f: item.id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map

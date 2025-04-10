"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "classList",
  setup(__props) {
    const paperList = common_vendor.ref([]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(paperList.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-104357ab"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classList/classList.js.map

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_uni_tag = common_vendor.resolveComponent("uni-tag");
  const _component_uni_dateformate = common_vendor.resolveComponent("uni-dateformate");
  (_component_uni_tag + _component_uni_dateformate)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      inverted: true,
      text: "置顶",
      type: "error"
    }),
    b: common_vendor.p({
      date: Date.now(),
      format: "yyyy-MM-dd hh:mm:ss"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c2e4c1e"]]);
tt.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/pages/notice/notice.js.map

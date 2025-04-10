"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_systemInfo = require("../../utils/systemInfo.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  props: {
    title: {
      type: String,
      default: "壁纸"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_systemInfo.getStatusBarHeight)() + "px",
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          type: "search",
          size: "18"
        }),
        d: common_vendor.unref(utils_systemInfo.getTitleBarHeight)() + "px",
        e: common_vendor.unref(utils_systemInfo.getLeftIcon)() + "px",
        f: common_vendor.unref(utils_systemInfo.getNavBarHeight)() + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"]]);
tt.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-toutiao/components/custom-nav-bar/custom-nav-bar.js.map

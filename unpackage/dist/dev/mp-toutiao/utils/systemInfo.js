"use strict";
const common_vendor = require("../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    const { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return top - getStatusBarHeight() + 2 + height;
  } else {
    return 40;
  }
};
const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();
const getLeftIcon = () => {
  const {
    leftIcon: { left, width }
  } = tt.getCustomButtonBoundingClientRect();
  return left + width;
};
exports.getLeftIcon = getLeftIcon;
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-toutiao/utils/systemInfo.js.map

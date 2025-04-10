"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const infoPopup = common_vendor.ref(null);
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const infoList = common_vendor.ref([
      { id: 1, label: "壁纸ID", value: "323213213dsadwwsd" },
      { id: 2, label: "分类", value: "明星" },
      { id: 3, label: "发布者", value: "未知" },
      { id: 4, label: "评分", value: 4, isRate: true },
      { id: 5, label: "摘要", value: "壁纸摘要介绍壁纸摘要介绍壁纸摘要介绍壁纸摘要介绍壁纸摘要介绍" },
      { id: 6, label: "标签", value: "标签名" }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$3,
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          size: "28"
        }),
        h: common_vendor.o(clickInfo),
        i: common_vendor.p({
          type: "star",
          size: "28"
        }),
        j: common_vendor.p({
          type: "download",
          size: "24"
        })
      } : {}, {
        k: common_vendor.p({
          type: "closeempty",
          size: "18"
        }),
        l: common_vendor.o(clickInfoClose),
        m: common_vendor.f(infoList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.label),
            b: item.isRate
          }, item.isRate ? {
            c: "2dad6c07-7-" + i0 + ",2dad6c07-5",
            d: common_vendor.p({
              max: 5,
              value: item.value,
              ["allow-half"]: true,
              readonly: true,
              touchable: false
            })
          } : {}, {
            e: item.isRate
          }, item.isRate ? {
            f: common_vendor.t(item.value)
          } : {
            g: common_vendor.t(item.value)
          }, {
            h: item.id
          });
        }),
        n: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        o: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map

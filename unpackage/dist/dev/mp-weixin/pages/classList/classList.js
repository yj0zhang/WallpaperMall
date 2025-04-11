"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_home = require("../../mock/home.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const pageSize = 20;
const _sfc_main = {
  __name: "classList",
  setup(__props) {
    const loadingStatus = common_vendor.ref("more");
    const page = common_vendor.ref(1);
    const paperList = common_vendor.ref([]);
    const getMyPaperList = async () => {
      loadingStatus.value = "loading";
      const res = await mock_home.getMyPapers(page.value, pageSize);
      loadingStatus.value = res.length < pageSize ? "noMore" : "more";
      paperList.value = [...paperList.value, ...res];
      page.value += 1;
    };
    getMyPaperList();
    common_vendor.onReachBottom(() => {
      getMyPaperList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(paperList.value, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        }),
        b: common_vendor.p({
          status: loadingStatus.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-104357ab"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classList/classList.js.map

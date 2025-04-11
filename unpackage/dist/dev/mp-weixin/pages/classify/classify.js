"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_home = require("../../mock/home.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uv_skeletons2 = common_vendor.resolveComponent("uv-skeletons");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uv_skeletons2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uv_skeletons = () => "../../uni_modules/uv-skeletons/components/uv-skeletons/uv-skeletons.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uv_skeletons + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    const paperList = common_vendor.ref([]);
    const getPreviewList = async () => {
      paperList.value = await mock_home.getClassifyPapers();
      skeletonLoading.value = false;
    };
    getPreviewList();
    const skeletonLoading = common_vendor.ref(true);
    const skeleton = common_vendor.ref([
      {
        type: "flex",
        children: [{
          type: "custom",
          style: "width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;"
        }, {
          type: "custom",
          style: "width:220rpx;height:340rpx;marginRight:15rpx;"
        }, {
          type: "custom",
          style: "width:220rpx;height:340rpx;"
        }]
      },
      15,
      {
        type: "flex",
        children: [
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;"
          },
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;marginRight:15rpx;"
          },
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;"
          }
        ]
      },
      15,
      {
        type: "flex",
        children: [
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;"
          },
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;marginRight:15rpx;"
          },
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;"
          }
        ]
      },
      15,
      {
        type: "flex",
        children: [
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;"
          },
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;marginRight:15rpx;"
          },
          {
            type: "custom",
            style: "width:220rpx;height:340rpx;"
          }
        ]
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.p({
          loading: skeletonLoading.value,
          skeleton: skeleton.value,
          animate: true
        }),
        c: common_vendor.f(paperList.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: "6bcfa975-2-" + i0,
            c: common_vendor.p({
              src: item.img,
              classify: item.classify
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classify/classify.js.map

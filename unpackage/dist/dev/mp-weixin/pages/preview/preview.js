"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_systemInfo = require("../../utils/systemInfo.js");
const mock_home = require("../../mock/home.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const paperList = common_vendor.ref([]);
    const getPreviewList = async () => {
      paperList.value = await mock_home.getPreviewPapers();
    };
    getPreviewList();
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
    const scorePopup = common_vendor.ref(null);
    const clickScore = () => {
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
    };
    const userScore = common_vendor.ref(0);
    const submitScore = () => {
      scorePopup.value.close();
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:150", userScore.value);
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const currentIndex = common_vendor.ref(0);
    const currentPaper = common_vendor.computed(() => {
      return paperList.value[currentIndex.value];
    });
    const paperChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const downloadPaper = () => {
      try {
        common_vendor.index.downloadFile({
          url: currentPaper.value.img,
          success(res) {
            if (res.statusCode === 200) {
              common_vendor.index.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success() {
                  common_vendor.index.showToast({
                    title: "保存成功，请到相册查看",
                    icon: "none"
                  });
                },
                fail(err) {
                  if (err.errMsg === "saveImageToPhotosAlbum:fail cancel") {
                    common_vendor.index.showToast({
                      title: "保存失败，请重新点击下载",
                      icon: "none"
                    });
                    return;
                  }
                  common_vendor.index.showModal({
                    title: "授权提示",
                    content: "需要相册保存权限",
                    success(res2) {
                      if (res2.confirm) {
                        common_vendor.index.openSetting({
                          success(setting) {
                            if (setting.authSetting["scope.writePhotosAlbum"]) {
                              common_vendor.index.showToast({
                                title: "获取授权成功",
                                icon: "none"
                              });
                            } else {
                              common_vendor.index.showToast({
                                title: "获取权限失败",
                                icon: "none"
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              });
            }
          },
          fail() {
            common_vendor.index.showToast({
              title: "下载失败",
              icon: "none"
            });
          }
        });
      } catch (error) {
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(paperList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(maskChange, item.id),
            b: item.img,
            c: item.id
          };
        }),
        b: currentIndex.value,
        c: common_vendor.o(paperChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          size: "18"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_systemInfo.getStatusBarHeight)() + "px",
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(paperList.value.length),
        j: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.p({
          type: "star",
          size: "28"
        }),
        o: common_vendor.o(clickScore),
        p: common_vendor.p({
          type: "download",
          size: "24"
        }),
        q: common_vendor.o(downloadPaper)
      } : {}, {
        r: common_vendor.p({
          type: "closeempty",
          size: "18"
        }),
        s: common_vendor.o(clickInfoClose),
        t: common_vendor.f(infoList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.label),
            b: item.isRate
          }, item.isRate ? {
            c: "2dad6c07-8-" + i0 + ",2dad6c07-6",
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
        v: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        w: common_vendor.p({
          type: "bottom"
        }),
        x: common_vendor.p({
          type: "closeempty",
          size: "18"
        }),
        y: common_vendor.o(clickScoreClose),
        z: common_vendor.o(($event) => userScore.value = $event),
        A: common_vendor.p({
          max: 5,
          ["allow-half"]: true,
          modelValue: userScore.value
        }),
        B: common_vendor.t(userScore.value),
        C: common_vendor.o(submitScore),
        D: !userScore.value,
        E: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        F: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map

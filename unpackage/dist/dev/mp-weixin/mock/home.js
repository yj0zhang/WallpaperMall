"use strict";
const common_assets = require("../common/assets.js");
const imgList = [
  {
    classify: "未来科技",
    img: "https://gips3.baidu.com/it/u=100751361,1567855012&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280"
  },
  {
    classify: "萌宠生活",
    img: "https://gips1.baidu.com/it/u=3874647369,3220417986&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280"
  },
  {
    classify: "中国风",
    img: "https://gips0.baidu.com/it/u=567323913,331130417&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f1000_1000"
  },
  {
    classify: "萌宠生活",
    img: "https://gips0.baidu.com/it/u=3822353666,2757632348&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280"
  },
  {
    classify: "中国风",
    img: "https://gips2.baidu.com/it/u=1757244148,2197425658&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560"
  },
  {
    classify: "萌宠生活",
    img: "https://gips1.baidu.com/it/u=1410005327,4082018016&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280"
  },
  {
    classify: "萌宠生活",
    img: "https://gips3.baidu.com/it/u=1022347589,1106887837&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280"
  },
  {
    classify: "太空探索",
    img: "https://gips3.baidu.com/it/u=4283915297,3700662292&fm=3028&app=3028&f=JPEG&fmt=auto?w=1440&h=2560"
  }
];
const getBannerList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, img: common_assets.b1 },
        { id: 2, img: common_assets.b2 },
        { id: 3, img: common_assets.b3 }
      ]);
    }, 1e3);
  });
};
const getNoticeList = () => {
  const contentList = [
    "壁纸上新了，点击查看。",
    "这些壁纸限时特价88折，赶紧去看看吧！",
    "新增萌宠壁纸，宠主不能错过！"
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(contentList).map((val, index) => ({
        id: index + 1,
        content: val
      })));
    }, 1e3);
  });
};
const getDailyRecommendPapers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(imgList.slice(3, 7)).map((val, index) => ({
        id: index + 1,
        img: val.img
      })));
    }, 1e3);
  });
};
const getPopularPapers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(imgList).map((val, index) => ({
        id: index + 1,
        ...val
      })));
    }, 1e3);
  });
};
const getPreviewPapers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(imgList).map((val, index) => ({
        id: index + 1,
        ...val
      })));
    }, 1e3);
  });
};
const getMyPapers = (page, pageSize = 20) => {
  const startIndex = (page - 1) * pageSize;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from({ length: pageSize }).map((_, index) => ({
        id: index + startIndex,
        ...imgList[index % imgList.length]
      })));
    }, 1e3);
  });
};
const getClassifyPapers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(imgList).map((val, index) => ({
        id: index + 1,
        ...val
      })));
    }, 2e3);
  });
};
exports.getBannerList = getBannerList;
exports.getClassifyPapers = getClassifyPapers;
exports.getDailyRecommendPapers = getDailyRecommendPapers;
exports.getMyPapers = getMyPapers;
exports.getNoticeList = getNoticeList;
exports.getPopularPapers = getPopularPapers;
exports.getPreviewPapers = getPreviewPapers;
//# sourceMappingURL=../../.sourcemap/mp-weixin/mock/home.js.map

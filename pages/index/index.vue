<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper
				indicator-dots
				indicator-color="rgba(255,255,255,0.5)"
				indicator-active-color="#fff"
				autoplay
				circular>
				<swiper-item v-for="item in banners" :key="item.id">
					<image :src="item.img" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper
					vertical
					autoplay
					interval="1500"
					duration="300"
					circular>
					<swiper-item v-for="item in notices" :key="item.id" @click="gotoDetail(item)">
						{{item.content}}
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>
					每日推荐
				</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd号"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x >
					<uv-skeletons :loading="skeletonLoading" :skeleton="recommendSkeleton" animate>
					</uv-skeletons>
					<view class="box" v-for="item in dailyRecommendList" @click="goPreview(item)">
						<image :src="item.img" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>
					专题精选
				</template>
				<template #custom>
					<view class="more">More+</view>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in popularPapers" :key="item.id" :src="item.img" :classify="item.classify"></theme-item>
				<theme-item isMore></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue';
import { getBannerList, getDailyRecommendPapers, getNoticeList, getPopularPapers } from '../../mock/home';

const banners = ref([]);
const getBanner = async () => {
	banners.value = await getBannerList();
};
getBanner();


const notices = ref([]);
const getNotices = async () => {
	notices.value = await getNoticeList();
}
getNotices();

const dailyRecommendList = ref([]);
const getDailyRecommendList = async () => {
	dailyRecommendList.value = await getDailyRecommendPapers();
	skeletonLoading.value = false;
}
getDailyRecommendList();

const popularPapers = ref([]);
const getPopularPaperList = async () => {
	popularPapers.value = await getPopularPapers();
}
getPopularPaperList();

const gotoDetail = item => {
	uni.navigateTo({
		url:'/pages/notice/detail'
	})
}

const goPreview = item => {
	uni.navigateTo({
		url:"/pages/preview/preview"
	})
}


const skeletonLoading = ref(true);
const recommendSkeleton = ref([{
		type: 'flex',
		children: [{
			type: 'custom',
			style: 'width:200rpx;height:430rpx;'
		}, {
			type: 'custom',
			style: 'width:200rpx;height:430rpx;marginLeft:15rpx;'
		}, {
			type: 'custom',
			style: 'width:200rpx;height:430rpx;marginLeft:15rpx;'
		}, {
			type: 'custom',
			style: 'width:200rpx;height:430rpx;marginLeft:15rpx;'
		}]
	}
]);
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper {
				width: 750rpx;
				height: 340rpx;
				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		.notice {
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: $bg-color-1;
			margin: 0 auto;
			border-radius: 40rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text {
					color: $primary-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
				:deep() {
					.uni-icons{
						color: $primary-theme-color!important;
					}
				}
			}
			.center{
				flex: 1;
				swiper {
					height: 100%;
					&-item {
						height: 100%;
						font-size: 30rpx;
						color: $text-font-color-2;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.select {
			padding-top: 50rpx;
			.date{
				color: $primary-theme-color;
				display: flex;
				justify-content: center;
				align-items: center;
				.text {
					margin-left: 10rpx;
				}
				
				:deep() {
					.uni-icons{
						color: $primary-theme-color!important;
					}
				}
			}
			.content {
				width: 720rpx;
				margin: 30rpx 0 0 30rpx;
				scroll-view {
					white-space: nowrap;
					.box {
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;
						&:last-child {
							margin-right: 30rpx;
						}
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}
		}
		.theme {
			padding-top: 50rpx;
			.more{
				font-size: 32rpx;
				color: $text-font-color-4;
			}
			.content {
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>

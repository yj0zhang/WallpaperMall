<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height: getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{
				height: getTitleBarHeight()+'px',
				marginLeft: getLeftIcon()+'px'
			}">
				<view class="title">
					{{title}}
				</view>
				<view class="search">
					<uni-icons class="icon" type="search" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height: getNavBarHeight()+'px'}"></view>
	</view>
</template>

<script setup>
import {getStatusBarHeight, getTitleBarHeight, getNavBarHeight, getLeftIcon} from '../../utils/systemInfo.js';

defineProps({
	title: {
		type: String,
		default: '壁纸'
	}
})

</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background: 
		linear-gradient(to bottom, transparent, #fff 400rpx),
		linear-gradient(to right, #beecd8, #f4e2d8);
		// .statusBar{
		// 	border: 1px solid red;
		// }
		.titleBar{
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			// border: 1px solid green;
			.title{
				font-size: 28rpx;
				font-weight: 700;
				color: $text-font-color-1;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid $white-color;
				margin-left: 30rpx;
				color: $text-font-color-3;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.text{
					padding-left: 10rpx;
				}
				.icon{
					margin-left: 5rpx;
				}
			}
			:deep() {
				.uni-icons{
					color: $text-font-color-3!important;
				}
			}
		}
	}
}
</style>
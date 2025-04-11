<template>
	<view class="userLayout pageBg">
		<view class="barPlaceholder" :style="{height: getNavBarHeight() + 'px'}"></view>
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">
				1.1.1.1
			</view>
			<view class="address">
				来自于：上海
			</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in list1" :key="item.id"
					@click="navigateTo(item)">
					<view class="left">
						<uni-icons :type="item.icon" size="20"></uni-icons>
						<view class="text">
							{{item.name}}
						</view>
					</view>
					<view class="right">
						<view class="text">
							{{item.count}}
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
					<!-- #ifdef MP -->
					<button v-if="item.isCustomerService"
						open-type="contact"
						class="contact"
					>联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button v-if="item.isCustomerService" @click="clickContact" class="contact">拨打电话</button>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in list2" :key="item.id">
					<view class="left">
						<uni-icons :type="item.icon" size="20"></uni-icons>
						<view class="text">
							{{item.name}}
						</view>
					</view>
					<view class="right">
						<view class="text">
							{{item.count}}
						</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getNavBarHeight } from '../../utils/systemInfo.js';

	const list1 = ref([
		{id:1,name: '我的下载',icon: "download-filled",count:0},
		{id:2,name: '我的评分',icon: "star-filled",count:0},
		{id:3,name: '联系客服',icon: "chatboxes-filled", isCustomerService: true},
	]);
	const list2 = ref([
		{id:1,name: '订阅更新',icon: "notification-filled"},
		{id:2,name: '常见问题',icon: "flag-filled"},
	]);
	
	const clickContact = () => {
		uni.makePhoneCall({
			phoneNumber:"114"
		})
	}
	const navigateTo = item => {
		if(!item.isCustomerService) {
			uni.navigateTo({
				url:"/pages/classList/classList"
			})
		}
	}
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			color: $text-font-color-2;
			padding: 20rpx 0 5rpx;
		}
		.address{
			font-size: 28rpx;
			color: $text-font-color-4;
		}
	}
	.section{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid $text-font-color-5;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx $light-black;
		.list{
			.row{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid $text-font-color-5;
				position: relative;
				background-color: $white-color;
				&:last-child{
					border-bottom: none;
				}
				.left,.right{
					display: flex;
					align-items: center;
				}
				.left .text{
					padding-left: 20rpx;
					color: $text-font-color-2;
				}
				.right .text {
					font-size: 28rpx;
					color: $text-font-color-4;
				}
				.contact {
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					opacity: 0;
				}
				:deep() {
					.uni-icons{
						color: $primary-theme-color!important;
					}
				}
			}
		}
	}
}
</style>

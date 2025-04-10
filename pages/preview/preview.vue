<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="mask" v-if="maskState">
			<view class="goBack">
				
			</view>
			<view class="count">
				3 / 9
			</view>
			<view class="time">
				<uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">
						信息
					</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">
						5分
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="24"></uni-icons>
					<view class="text">
						下载
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view></view>
					<view class="title">
						壁纸信息
					</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row" v-for="item in infoList" :key="item.id">
							<view class="label">
								{{item.label}}：
							</view>
							<view class="value rateBox">
								<uni-rate v-if="item.isRate"
									:max="5"
									:value="item.value"
									allow-half
									readonly
									:touchable="false"
								/>
								<text v-if="item.isRate" class="score">{{item.value}}分</text>
								<text v-else selectable>{{item.value}}</text>
								</view>
						</view>
						<view class="copyright">
								声明：本图片来自网络，非商业使用，用于免费学习交流，如侵犯了您的权益，您可发送邮件至邮箱： yj0zhang@126.com，管理将删除侵权壁纸。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const maskState = ref(true);
	const maskChange = () => {
		maskState.value = !maskState.value;
	}
	
	const infoPopup = ref(null);
	const clickInfo = () => {
		infoPopup.value.open();
	}
	const clickInfoClose = () => {
		infoPopup.value.close();
	}
	
	const infoList = ref([
		{id:1,label: '壁纸ID',value: '323213213dsadwwsd'},
		{id:2,label: '分类',value: '明星'},
		{id:3,label: '发布者',value: '未知'},
		{id:4,label: '评分',value: 4,isRate: true},
		{id:5,label: '摘要',value: '壁纸摘要介绍壁纸摘要介绍壁纸摘要介绍壁纸摘要介绍壁纸摘要介绍'},
		{id:6,label: '标签',value: '标签名'},
	])
</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask {
		&>view{
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: fit-content;
			color: $white-color;
		}
		.goBack{
			
		}
		.count{
			top: 10vh;
			background: rgba(0, 0, 0, 0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}
		.time{
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		.date{
			font-size: 34rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
		}
		.footer{
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 60rpx;
			color: $text-font-color-1;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(20rpx);
			.box{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 2rpx 12rpx;
				.text{
					font-size: 26rpx;
					color: $text-font-color-2;
				}
			}
		}
	}
	.infoPopup {
		background: $white-color;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		.popHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				color: $text-font-color-2;
				font-size: 26rpx;
			}
			.close {
				padding: 6rpx;
				:deep() {
					.uni-icons{
						color: $text-font-color-3!important;
					}
				}
			}
		}
		scroll-view{
			max-height: 60vh;
			.content{
				.row{
					display: flex;
					padding: 16rpx;
					font-size: 32rpx;
					line-height: 1.7em;
					.label{
						color: $text-font-color-4;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					.value{
						flex: 1;
						width: 0;
						&.rateBox{
							display: flex;
							align-items: center;
							.score{
								margin-left: 10rpx;
							}
						}
					}
				}
				.copyright{
					font-size: 28rpx;
					padding: 20rpx;
					background: $bg-color-3;
					color: $text-font-color-2;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
			}
		}
	}
}
</style>

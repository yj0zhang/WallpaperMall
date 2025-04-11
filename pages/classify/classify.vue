<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<uv-skeletons :loading="skeletonLoading" :skeleton="skeleton" animate>
		</uv-skeletons>
		<view class="classify">
			<theme-item v-for="item in paperList" :key="item.id" :src="item.img" :classify="item.classify"></theme-item>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getClassifyPapers } from '../../mock/home.js';

const paperList = ref([]);
const getPreviewList = async () => {
	paperList.value = await getClassifyPapers();
	skeletonLoading.value = false;
}
getPreviewList();

const skeletonLoading = ref(true);
const skeleton = ref([{
		type: 'flex',
		children: [{
			type: 'custom',
			style: 'width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;'
		}, {
			type: 'custom',
			style: 'width:220rpx;height:340rpx;marginRight:15rpx;'
		}, {
			type: 'custom',
			style: 'width:220rpx;height:340rpx;'
		}]
	},
	15,
	{
		type: 'flex',
		children: [{
				type: 'custom',
				style: 'width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;'
			}, {
				type: 'custom',
				style: 'width:220rpx;height:340rpx;marginRight:15rpx;'
			}, {
				type: 'custom',
				style: 'width:220rpx;height:340rpx;'
			}
		]
	},
	15,
	{
		type: 'flex',
		children: [{
				type: 'custom',
				style: 'width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;'
			}, {
				type: 'custom',
				style: 'width:220rpx;height:340rpx;marginRight:15rpx;'
			}, {
				type: 'custom',
				style: 'width:220rpx;height:340rpx;'
			}
		]
	},
	15,
	{
		type: 'flex',
		children: [{
				type: 'custom',
				style: 'width:220rpx;height:340rpx;marginLeft:30rpx;marginRight:15rpx;'
			}, {
				type: 'custom',
				style: 'width:220rpx;height:340rpx;marginRight:15rpx;'
			}, {
				type: 'custom',
				style: 'width:220rpx;height:340rpx;'
			}
		]
	}
]);
</script>

<style lang="scss" scoped>
.classify {
	padding: 30rpx;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15rpx;
}
</style>

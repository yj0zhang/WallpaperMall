<template>
	<view class="classList">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in paperList" :key="item.id">
				<image :src="item.img" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loadingLayout">
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getMyPapers } from '../../mock/home.js';

import { onReachBottom } from "@dcloudio/uni-app"

const loadingStatus = ref('more');
const page = ref(1);
const pageSize = 20;
const paperList = ref([])
const getMyPaperList = async () => {
	loadingStatus.value = 'loading';
	const res = await getMyPapers(page.value, pageSize);
	loadingStatus.value = res.length < pageSize ? 'noMore':'more';
	paperList.value = [...paperList.value, ...res];
	page.value += 1;
}
getMyPaperList();

onReachBottom(() => {
	getMyPaperList();
})
</script>

<style lang="scss" scoped>
	.classList{
		.content{
			display: grid;
			grid-template-columns: repeat(3,1fr);
			gap: 5rpx;
			padding: 5rpx;
			.item {
				height: 440rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>

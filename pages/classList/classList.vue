<template>
	<view class="classList">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in paperList" :key="item.id">
				<image :src="item.img" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getClassifyPapers } from '../../mock/home.js';

const paperList = ref([])
const getPreviewList = async () => {
	paperList.value = await getClassifyPapers()
}
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

<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
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
}
getPreviewList();

</script>

<style lang="scss" scoped>
.classify {
	padding: 30rpx;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15rpx;
}
</style>


const SYSTEM_INFO = uni.getSystemInfoSync();
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15;
export const getTitleBarHeight = () => {
	if(uni.getMenuButtonBoundingClientRect){
		//微信小程序右上角菜单尺寸
		const {top,height} = uni.getMenuButtonBoundingClientRect();
		return (top - getStatusBarHeight()) + 2 + height;
	} else {
		return 40;
	}
};

export const getNavBarHeight = () => getStatusBarHeight()+getTitleBarHeight();

export const getLeftIcon = () => {
	// #ifdef MP-TOUTIAO
		const {
			leftIcon: {left,width}
		} = tt.getCustomButtonBoundingClientRect();
		return left + width;
	// #endif
	return 0;
}

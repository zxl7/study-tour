<template>
	<view class="sg-page page">
		<AppHeader title="体验营详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="/static/img/School_Banner.jpg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-gold">IB/AP课程对接</text>
					<text class="tag tag-teal">深度学术探访</text>
				</view>

				<text class="title">探秘新加坡顶级国际学校</text>
				<text class="subtitle">UWC / SAS / Stamford / Tanglin 深度学术探访营</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥12,800<text class="price-unit">/人</text></text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">项目介绍</text>
					</view>
					<text class="section-text">
						专为计划赴新升学的家庭定制。我们将带领家长与学生实地访问 SAS（美制）、UWC（世界联合学院）、Tanglin Trust（英制）等全球顶尖名校。
					</text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">国际学校插班课程</text>
					</view>
					<view class="course-grid">
						<view v-for="c in courses" :key="c.title" class="course-item">
							<view class="course-hd">
								<text class="course-title">{{ c.title }}</text>
							</view>
							<text class="course-desc">{{ c.desc }}</text>
							<view class="course-imgs">
								<image v-for="img in c.imgs" :key="img" class="course-img" :src="img" mode="aspectFill" />
							</view>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">国际学校同步课程</text>
					</view>
					<view class="sync-grid">
						<view v-for="s in syncs" :key="s.title" class="sync-item">
							<text class="sync-title">{{ s.title }}</text>
							<text class="sync-desc">{{ s.desc }}</text>
							<image class="sync-img" :src="s.img" mode="aspectFill" />
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-btn" @tap="goForm">预约名校走访</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'

/**
 * 功能：插班课程模块（纯数据）。
 */
const courses = [
	{
		title: '综合活动',
		desc: '木材制作、园艺、烘焙等，激发创造力与动手能力。',
		imgs: ['/static/img/Activity_1.jpg', '/static/img/Activity.jpg'],
	},
	{
		title: '多重冒险',
		desc: '射箭、跑酷、定向越野、攀岩、无人机等，锻炼体能与协作。',
		imgs: ['/static/img/活动2.jpg', '/static/img/XCL.jpg'],
	},
	{
		title: '英语强化',
		desc: '语言游戏与趣味互动，听说读写全面提升，建立交流自信。',
		imgs: ['/static/img/English.jpg', '/static/img/English_1.jpg'],
	},
	{
		title: '创意STEAM',
		desc: '编程机器人、VR、3D打印、科学工程，培养创新思维。',
		imgs: ['/static/img/STEAM.jpg', '/static/img/STEAM_1.jpg'],
	},
]

/**
 * 功能：同步课程模块（纯数据）。
 */
const syncs = [
	{ title: '人工智能', desc: '结合编程与AI技术，启发逻辑思维与计算思维。', img: '/static/img/AI.jpg' },
	{ title: '小小探索家活动', desc: '室内外互动游戏、自然观察、艺术启蒙，激发好奇心。', img: '/static/img/Explorer.jpg' },
	{ title: '创意编程', desc: '从图形化编程启蒙到高级语言进阶，培养数字时代核心技能。', img: '/static/img/Coding.jpg' },
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')
</script>

<style scoped lang="scss">
.page {
	padding-bottom: 160rpx;
}

.content {
	height: calc(100vh - 112rpx - var(--status-bar-height));
}

.banner {
	width: 100%;
	height: 448rpx;
}

.body {
	padding: 32rpx;
}

.tags {
	display: flex;
	gap: 16rpx;
	margin-bottom: 16rpx;
	flex-wrap: wrap;
}

.tag {
	padding: 6rpx 16rpx;
	border-radius: 12rpx;
	font-size: 20rpx;
	font-weight: 800;
}

.tag-gold {
	background: rgba($sg-color-accent, 0.22);
	color: #7c4a1c;
}

.tag-teal {
	background: rgba($sg-color-primary, 0.12);
	color: $sg-color-primary;
}

.title {
	font-size: 40rpx;
	font-weight: 800;
	color: $sg-color-text;
	line-height: 1.25;
}

.subtitle {
	margin-top: 12rpx;
	font-size: 24rpx;
	color: $sg-color-muted;
	line-height: 1.5;
}

.price-card {
	margin-top: 24rpx;
	padding: 24rpx;
	border-radius: 24rpx;
	background: #fef2f2;
	border: 1px solid #fee2e2;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.price-k {
	font-size: 26rpx;
	color: #4b5563;
	font-weight: 600;
}

.price-v {
	font-size: 44rpx;
	color: #ef4444;
	font-weight: 900;
}

.price-unit {
	font-size: 22rpx;
	font-weight: 500;
}

.section {
	margin-top: 40rpx;
}

.section-hd {
	display: flex;
	align-items: center;
	gap: 16rpx;
	margin-bottom: 20rpx;
}

.section-bar {
	width: 8rpx;
	height: 32rpx;
	background: $sg-color-primary;
	border-radius: 8rpx;
}

.section-title {
	font-size: 30rpx;
	font-weight: 800;
}

.section-text {
	font-size: 26rpx;
	color: #4b5563;
	line-height: 1.6;
	text-align: justify;
}

.course-grid {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.course-item {
	padding: 24rpx;
	border-radius: 28rpx;
	background: #fff;
	border: 1px solid $sg-color-border;
}

.course-title {
	font-size: 28rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.course-desc {
	margin-top: 8rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.5;
}

.course-imgs {
	margin-top: 16rpx;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 12rpx;
}

.course-img {
	width: 100%;
	height: 180rpx;
	border-radius: 18rpx;
}

.sync-grid {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.sync-item {
	padding: 24rpx;
	border-radius: 28rpx;
	background: rgba($sg-color-primary, 0.06);
	border: 1px solid rgba($sg-color-primary, 0.12);
}

.sync-title {
	font-size: 28rpx;
	font-weight: 900;
	color: $sg-color-text;
}

.sync-desc {
	margin-top: 8rpx;
	font-size: 22rpx;
	color: rgba(17, 24, 39, 0.75);
	line-height: 1.5;
}

.sync-img {
	margin-top: 16rpx;
	width: 100%;
	height: 260rpx;
	border-radius: 18rpx;
}

.bottom {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 140rpx;
	padding: 16rpx 32rpx calc(16rpx + env(safe-area-inset-bottom));
	background: #fff;
	border-top: 1px solid $sg-color-border;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}

.bottom-btn {
	width: 100%;
	height: 88rpx;
	border-radius: 999rpx;
	background: #6d28d9;
	color: #fff;
	font-weight: 800;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

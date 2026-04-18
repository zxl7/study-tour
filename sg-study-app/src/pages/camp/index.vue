<template>
	<view class="sg-page page">
		<AppHeader title="成长营详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="/static/img/Camp_Banner.jpg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-gold">7天6晚</text>
					<text class="tag tag-blue">适龄 3-15岁</text>
				</view>

				<text class="title">新加坡成长营</text>
				<text class="subtitle">别让孩子的假期只停留在屏幕里，带娃实地来新加坡，看不一样的世界。</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥18,800<text class="price-unit">/人</text></text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">项目亮点</text>
					</view>
					<view class="highlight-grid">
						<view v-for="item in highlights" :key="item.title" class="highlight-item">
							<image class="highlight-img" :src="item.img" mode="aspectFill" />
							<text class="highlight-title">{{ item.title }}</text>
							<text class="highlight-desc">{{ item.desc }}</text>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">项目介绍</text>
					</view>
					<text class="section-text">
						成长营专注于培养孩子的自主生活能力与跨文化交流视野。我们将深度探访南洋理工大学(NTU)及新加坡国立大学(NUS)，邀请名校导师进行互动式授课，在体验狮城科技之美的同时，激发对未来的无限渴望。
					</text>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">行程安排</text>
					</view>
					<view class="timeline">
						<view v-for="item in timeline" :key="item.day" class="tl-item">
							<view class="tl-dot" />
							<view class="tl-body">
								<text class="tl-title">{{ item.day }}</text>
								<text class="tl-desc">{{ item.desc }}</text>
								<image v-if="item.img" class="tl-img" :src="item.img" mode="aspectFill" />
							</view>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">我们为您护航</text>
					</view>
					<view class="guard sg-card">
						<view v-for="g in guards" :key="g.title" class="guard-item">
							<text class="guard-title">{{ g.title }}</text>
							<text class="guard-desc">{{ g.desc }}</text>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<text class="section-title">费用包含</text>
					</view>
					<view class="include-grid">
						<view v-for="text in includes" :key="text" class="include-item">
							<text class="include-icon">✓</text>
							<text class="include-text">{{ text }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-left">
				<text class="bottom-k">项目单价</text>
				<text class="bottom-v">¥18,800</text>
			</view>
			<view class="bottom-btn sg-btn-primary" @tap="goForm">立即报名</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'

/**
 * 功能：项目亮点（纯数据）。
 */
const highlights = [
	{
		title: '本地学校/正规营地',
		desc: '甄选新加坡顶尖国际学校与官方认证营地，共享世界级教育硬件设施与学术资源。',
		img: '/static/img/School_Campus.jpg',
	},
	{
		title: '沉浸式英文环境',
		desc: '全天候英语母语导师陪伴，打破哑巴英语，在真实交流中建立语言自信。',
		img: '/static/img/English_Environment.jpg',
	},
	{
		title: '研学+游玩+能力提升',
		desc: '科学配比学习与探索时间，玩中学、学中玩，提升独立思考与跨文化交际能力。',
		img: '/static/img/Study_and_Play.jpg',
	},
]

/**
 * 功能：行程安排（纯数据）。
 */
const timeline = [
	{ day: 'Day 1：抵达狮城，开启航程', desc: '接机入住，破冰活动，适应环境。', img: '/static/img/Day_1_University.jpg' },
	{ day: 'Day 2：名校访学', desc: '走进顶尖学府，体验互动课程。', img: '/static/img/Day_2_Kampong_Glam_Little_India.jpg' },
	{ day: 'Day 3：自然与生态探索', desc: '动物园/夜间动物园，理解生态与保护。', img: '/static/img/Day_3_Zoo.jpg' },
	{ day: 'Day 4：STEAM 与创客日', desc: '项目制学习，动手实践与展示。' },
	{ day: 'Day 5：主题乐园与城市文化', desc: '在探索中学习规则与协作。' },
	{ day: 'Day 6：城市深度走读', desc: '地标打卡 + 城市规划与文化解读。', img: '/static/img/Day_6_City_Tour.jpg' },
	{ day: 'Day 7：结营与凯旋', desc: '成果展示与结营仪式，带着收获回家。', img: '/static/img/Day_7_Jewel_Changi.jpg' },
]

/**
 * 功能：家长陪伴与安全保障（纯数据）。
 */
const guards = [
	{ title: '机酒全含，领队同机', desc: '安心从第一刻开始，行程安排更省心。' },
	{ title: '私享专人接送', desc: '每日酒店专属车辆接送孩子上下学，减少奔波。' },
	{ title: '高星酒店，家长同住', desc: '孩子与家长同住，起居皆在星级酒店，配套齐全。' },
]

/**
 * 功能：费用包含（纯数据）。
 */
const includes = ['精品四星酒店住宿', '全程营养配餐', '名校导师授课费', '高额境外研学保险']

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')
</script>

<style scoped lang="scss">
.page {
	padding-bottom: 300rpx;
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
}

.tag {
	padding: 6rpx 16rpx;
	border-radius: 12rpx;
	font-size: 20rpx;
	font-weight: 800;
}

.tag-blue {
	background: rgba($sg-color-primary, 0.12);
	color: $sg-color-primary;
}

.tag-gold {
	background: rgba($sg-color-accent, 0.22);
	color: #7c4a1c;
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

.highlight-grid {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
}

.highlight-item {
	padding: 24rpx;
	border-radius: 28rpx;
	background: #fff;
	border: 1px solid $sg-color-border;
}

.highlight-img {
	width: 100%;
	height: 220rpx;
	border-radius: 20rpx;
}

.highlight-title {
	margin-top: 16rpx;
	font-size: 28rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.highlight-desc {
	margin-top: 8rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.5;
}

.timeline {
	margin-left: 8rpx;
	padding-left: 24rpx;
	border-left: 1px dashed rgba(15, 47, 103, 0.2);
	display: flex;
	flex-direction: column;
	gap: 28rpx;
}

.tl-item {
	position: relative;
	display: flex;
	gap: 16rpx;
}

.tl-dot {
	position: absolute;
	left: -30rpx;
	top: 8rpx;
	width: 20rpx;
	height: 20rpx;
	border-radius: 999rpx;
	background: $sg-color-primary;
}

.tl-body {
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.tl-title {
	font-size: 26rpx;
	font-weight: 800;
}

.tl-desc {
	font-size: 22rpx;
	color: $sg-color-muted;
}

.tl-img {
	margin-top: 12rpx;
	width: 100%;
	height: 220rpx;
	border-radius: 18rpx;
}

.guard {
	padding: 24rpx;
	border-radius: 28rpx;
}

.guard-item + .guard-item {
	margin-top: 18rpx;
	padding-top: 18rpx;
	border-top: 1px solid $sg-color-border;
}

.guard-title {
	font-size: 26rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.guard-desc {
	margin-top: 6rpx;
	font-size: 22rpx;
	color: $sg-color-muted;
}

.include-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx 20rpx;
}

.include-item {
	display: flex;
	align-items: center;
	gap: 12rpx;
}

.include-icon {
	color: #10b981;
	font-weight: 900;
}

.include-text {
	font-size: 22rpx;
	color: #4b5563;
}

.bottom {
	position: fixed;
	left: 0;
	right: 0;
	bottom: calc(140rpx + env(safe-area-inset-bottom));
	height: 140rpx;
	padding: 16rpx 32rpx calc(16rpx + env(safe-area-inset-bottom));
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	border-top: 1px solid $sg-color-border;
	box-sizing: border-box;
}

.bottom-left {
	display: flex;
	flex-direction: column;
}

.bottom-k {
	font-size: 20rpx;
	color: #9ca3af;
}

.bottom-v {
	font-size: 32rpx;
	color: #ef4444;
	font-weight: 900;
	margin-top: 4rpx;
}

.bottom-btn {
	height: 88rpx;
	padding: 0 48rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 800;
}
</style>

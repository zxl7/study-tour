<template>
	<view class="sg-page page">
		<AppHeader title="体验营详情" />

		<scroll-view scroll-y class="content">
			<image class="banner" mode="aspectFill" src="../../static/img/School_Banner.jpg" />

			<view class="body">
				<view class="tags">
					<text class="tag tag-gold">IB/AP课程对接</text>
					<text class="tag tag-teal">深度学术探访</text>
				</view>

				<text class="title">探秘新加坡顶级国际学校</text>
				<text class="subtitle">UWC / SAS / Stamford / Tanglin 深度学术探访营</text>

				<view class="price-card">
					<text class="price-k">项目费用</text>
					<text class="price-v">¥12,800<text class="price-unit">起/人</text></text>
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

				<!-- 行程样例（同步 PC：时间轴叙事，移动端改为纵向卡片） -->
				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<view class="section-txt">
							<text class="section-title">行程样例</text>
							<text class="section-sub">8天7晚 · 新加坡国际学校全真体验营</text>
						</view>
					</view>

					<view class="trip">
						<view v-for="d in itinerary" :key="d.day" class="trip-item sg-card">
							<view class="trip-hd">
								<text class="trip-day">{{ d.day }}</text>
								<text class="trip-title">{{ d.title }}</text>
							</view>
							<text class="trip-desc">{{ d.desc }}</text>
							<view v-if="d.imgs && d.imgs.length" class="trip-imgs">
								<image v-for="img in d.imgs" :key="img" class="trip-img" :src="img" mode="aspectFill" />
							</view>
						</view>
					</view>
				</view>

				<!-- 特色美食 & 合作酒店（同步 PC：美食+酒店模块） -->
				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<view class="section-txt">
							<text class="section-title">新加坡特色美食</text>
							<text class="section-sub">在世界非遗“小贩中心文化”里，品味多元文化的交融</text>
						</view>
					</view>
					<view class="food-grid">
						<view v-for="f in foods" :key="f.name" class="food-item">
							<image class="food-img" mode="aspectFill" :src="f.img" />
							<text class="food-name">{{ f.name }}</text>
						</view>
					</view>

					<view class="hawker sg-card">
						<image class="hawker-img" mode="aspectFill" src="../../static/img/Lau_Pa_Sat.jpg" />
						<view class="hawker-mask" />
						<view class="hawker-bd">
							<text class="hawker-badge">世界非物质文化遗产</text>
							<text class="hawker-title">小贩中心文化 · 新加坡老巴刹</text>
							<text class="hawker-desc">
								老巴刹地处金融区核心地带，其醒目的八边形外观最早由爱尔兰建筑师哥里门所设计。每天都有络绎不绝的人前来品尝地道美食。
							</text>
						</view>
					</view>
				</view>

				<view class="section">
					<view class="section-hd">
						<view class="section-bar" />
						<view class="section-txt">
							<text class="section-title">合作酒店</text>
							<text class="section-sub">优选交通便利、口碑稳定的酒店资源（示例）</text>
						</view>
					</view>

					<view class="hotel-grid">
						<view v-for="h in hotels" :key="h" class="hotel-pill">
							<text class="hotel-text">{{ h }}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="bottom">
			<view class="bottom-btn sg-btn-primary" @tap="goForm">预约名校走访</view>
		</view>
	</view>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { navigateToByKey } from '@/utils/routes'
import { onShareAppMessage } from '@dcloudio/uni-app'

/**
 * 功能：插班课程模块（纯数据）。
 */
const courses = [
	{
		title: '综合活动',
		desc: '木材制作、园艺、烘焙等，激发创造力与动手能力。',
		imgs: ['../../static/img/Activity_1.jpg', '../../static/img/Activity.webp'],
	},
	{
		title: '多重冒险',
		desc: '射箭、跑酷、定向越野、攀岩、无人机等，锻炼体能与协作。',
		imgs: ['../../static/img/活动2.jpg', '/static/img/XCL.jpg'],
	},
	{
		title: '英语强化',
		desc: '语言游戏与趣味互动，听说读写全面提升，建立交流自信。',
		imgs: ['../../static/img/English.jpg', '../../static/img/English_1.jpg'],
	},
	{
		title: '创意STEAM',
		desc: '编程机器人、VR、3D打印、科学工程，培养创新思维。',
		imgs: ['../../static/img/STEAM.jpg', '../../static/img/STEAM_1.jpg'],
	},
]

/**
 * 功能：同步课程模块（纯数据）。
 */
const syncs = [
	{ title: '人工智能', desc: '结合编程与AI技术，启发逻辑思维与计算思维。', img: '../../static/img/AI.webp' },
	{ title: '小小探索家活动', desc: '室内外互动游戏、自然观察、艺术启蒙，激发好奇心。', img: '../../static/img/Explorer.jpg' },
	{ title: '创意编程', desc: '从图形化编程启蒙到高级语言进阶，培养数字时代核心技能。', img: '../../static/img/Coding.jpg' },
]

/**
 * 功能：行程样例（纯数据）。
 * 说明：与 PC「行程样例」文案语义保持一致，移动端压缩为“每日概览 + 配图”。
 */
const itinerary = [
	{
		day: 'Day 1',
		title: '开启名校探秘之旅，从这里梦开始',
		desc: '集合出发飞往新加坡。接机后入住，小营员签到破冰，随后享用欢迎晚宴，感受特色南洋之美。',
		imgs: ['../../static/img/Arrival_1.webp', '../../static/img/City.jpg'],
	},
	{
		day: 'Day 2',
		title: '上午探索多元，下午体验自然与城市发展',
		desc: '上午：探访新加坡河畔、鱼尾狮公园、国会区等，了解新加坡历史。下午：参访 Marina Barrage，漫步滨海湾花园与超级树，感受自然与科技融合之美。',
		imgs: ['../../static/img/Tour_6.jpg', '../../static/img/Tour_7.jpg'],
	},
	{
		day: 'Day 3',
		title: '上午学校学习，下午走进科学艺术博物馆',
		desc: '上午：国际学校课程体验。下午：走进科学艺术博物馆，探索艺术与科学的交汇，启发跨界融合认知。',
		imgs: ['../../static/img/Students_in_classroom.jpg', '/static/img/Science_Center.jpg'],
	},
	{
		day: 'Day 4',
		title: '上午学校学习，下午夜间动物园',
		desc: '上午：国际学校课程体验。下午：探访全球首座夜间野生动物园，了解热带雨林生态保护，完成自然生态课堂。',
		imgs: ['../../static/img/Night_Safari_1.jpg', '/static/img/Day_3_Zoo.jpg'],
	},
	{
		day: 'Day 5',
		title: '上午学校学习，下午名校参访营结业',
		desc: '上午：国际学校课程体验。下午：走进新加坡国立大学（NUS）深度参访，了解大学生活并参与结业仪式。',
		imgs: ['/static/img/Day_1_University.jpg', '../../static/img/School_building_1.jpg'],
	},
	{
		day: 'Day 6',
		title: '上午环球影城，晚上星耀樟宜购物',
		desc: '畅游东南亚唯一的环球影城，在主题区中尽情玩耍；在游乐与团队挑战中释放童真、收获协作。',
		imgs: ['/static/img/4.webp', '../../static/img/5.jpg'],
	},
	{
		day: 'Day 7',
		title: '满载而归，分享成长经历',
		desc: '前往星耀樟宜机场观赏室内瀑布雨漩涡，选购伴手礼。结束充实难忘的游学之旅，搭乘航班返回温馨的家。',
		imgs: ['/static/img/Day_7_Jewel_Changi.jpg', '../../static/img/Flight_1.jpg'],
	},
]

/**
 * 功能：特色美食（纯数据）。
 */
const foods = [
	{ name: '肉骨茶', img: '../../static/img/Bak_Kut_Teh.jpeg' },
	{ name: '海南鸡饭', img: '../../static/img/Chicken_Rice.jpeg' },
	{ name: '辣椒螃蟹', img: '../../static/img/Chilli_Crab.jpg' },
	{ name: 'Laksa', img: '../../static/img/Laksa.jpg' },
]

/**
 * 功能：合作酒店（纯数据）。
 * 说明：PC 使用 favicon 展示；移动端用“文本胶囊”更稳定。
 */
const hotels = [
	'滨海湾金沙 Marina Bay Sands',
	'名胜世界 Resorts World Sentosa',
	'香格里拉 Shangri-La',
	'The Fullerton',
	'HOTEL BOSS',
	'ibis styles',
	'Mercure',
	'HOTEL 81',
]

/**
 * 功能：跳转到表单页。
 */
const goForm = () => navigateToByKey('form')

onShareAppMessage(() => ({
	title: '国际学校体验营 - 盛昌利民研学',
	path: '/pkg/pages/school/index',
}))
</script>

<style scoped lang="scss">
.page {
	padding-bottom: 160rpx;
}

.content {
	 
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

.section-txt {
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.section-sub {
	font-size: 22rpx;
	color: $sg-color-muted;
	line-height: 1.4;
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

.trip {
	display: flex;
	flex-direction: column;
	gap: 18rpx;
}

.trip-item {
	padding: 22rpx;
	border-radius: 28rpx;
}

.trip-hd {
	display: flex;
	flex-direction: column;
	gap: 6rpx;
}

.trip-day {
	font-size: 22rpx;
	font-weight: 900;
	color: $sg-color-primary;
}

.trip-title {
	font-size: 26rpx;
	font-weight: 900;
	color: $sg-color-text;
	line-height: 1.35;
}

.trip-desc {
	margin-top: 10rpx;
	font-size: 22rpx;
	color: rgba(17, 24, 39, 0.75);
	line-height: 1.55;
	text-align: justify;
}

.trip-imgs {
	margin-top: 14rpx;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12rpx;
}

.trip-img {
	width: 100%;
	height: 180rpx;
	border-radius: 18rpx;
}

.food-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16rpx;
}

.food-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10rpx;
}

.food-img {
	width: 220rpx;
	height: 220rpx;
	border-radius: 999rpx;
	border: 6rpx solid rgba($sg-color-accent, 0.9);
}

.food-name {
	font-size: 22rpx;
	color: $sg-color-primary;
	font-weight: 900;
}

.hawker {
	margin-top: 20rpx;
	border-radius: 28rpx;
	overflow: hidden;
	position: relative;
	height: 420rpx;
}

.hawker-img {
	width: 100%;
	height: 100%;
}

.hawker-mask {
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(0, 90, 156, 0), rgba(0, 90, 156, 0.85));
}

.hawker-bd {
	position: absolute;
	left: 22rpx;
	right: 22rpx;
	bottom: 22rpx;
	display: flex;
	flex-direction: column;
	gap: 10rpx;
}

.hawker-badge {
	align-self: flex-start;
	padding: 8rpx 14rpx;
	border-radius: 999rpx;
	background: rgba($sg-color-accent, 0.95);
	color: #fff;
	font-size: 20rpx;
	font-weight: 900;
}

.hawker-title {
	color: #fff;
	font-size: 28rpx;
	font-weight: 900;
}

.hawker-desc {
	color: rgba(255, 255, 255, 0.82);
	font-size: 22rpx;
	line-height: 1.45;
}

.hotel-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12rpx;
}

.hotel-pill {
	padding: 18rpx;
	border-radius: 22rpx;
	background: #f9fafb;
	border: 1px solid $sg-color-border;
}

.hotel-text {
	font-size: 22rpx;
	font-weight: 900;
	color: $sg-color-text;
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
	font-weight: 800;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

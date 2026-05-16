/**
 * 极简图片路径兼容工具
 * 
 * 使用方式：
 * <image :src="img('banner/bg.jpg')" />
 * 
 * 逻辑：
 * - H5: 补齐 import.meta.env.BASE_URL 前缀
 * - 小程序: 自动识别资源是在主包还是 pkg 分包，并返回绝对路径
 */
export function img(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;

  // 标准化路径，移除开头的 / 和可能存在的 pkg/ 前缀
  let purePath = path.replace(/^\/+/, '').replace(/^pkg\//, '');
  
  /**
   * 性能优化策略：
   * 为了解决小程序主包 2M 限制，我们将资源分摊到主包和 pkg 分包。
   * - 主包 (static/img): 存放 cert, banner, project, advisor, school 等核心或首屏资源
   * - pkg分包 (pkg/static/img): 存放 common, itinerary, food 等非首屏或大体积资源
   */
  const pkgDirs = ['common', 'itinerary', 'food'];
  const isPkg = pkgDirs.some(dir => purePath.startsWith(dir + '/'));

  // 组装基础路径
  let basePath = isPkg 
    ? `pkg/static/img/${purePath}`
    : `static/img/${purePath}`;

  // #ifdef H5
  const h5Base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${h5Base}/${basePath}`;
  // #endif

  // #ifndef H5
  // 小程序环境下，确保返回的是以 / 开头的绝对路径
  return `/${basePath}`;
  // #endif
}

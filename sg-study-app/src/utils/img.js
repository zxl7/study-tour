/**
 * 极简图片路径兼容工具
 * 
 * 使用方式：
 * <image :src="img('banner/bg.jpg')" />
 * 
 * 逻辑：
 * - H5: 补齐 import.meta.env.BASE_URL 前缀
 * - 小程序: 统一返回带 / 的绝对路径 /static/img/
 */
export function img(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;

  // 标准化路径：移除所有开头的斜杠，并统一移除可能误加的 pkg/ 前缀
  let purePath = path.replace(/^\/+/, '').replace(/^pkg\//, '');
  
  // 组装基础路径 (所有图片资源现在都统一放在主包 static/img 下)
  let basePath = `static/img/${purePath}`;

  // #ifdef H5
  const h5Base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return `${h5Base}/${basePath}`;
  // #endif

  // #ifndef H5
  // 小程序环境下，确保返回的是以 / 开头的绝对路径
  return `/${basePath}`;
  // #endif
}

/**
 * 极简图片路径兼容工具
 * 
 * 使用方式：
 * <image :src="img('banner/bg.jpg')" />
 * 
 * 逻辑：
 * - H5: 补齐 import.meta.env.BASE_URL 前缀
 * - 小程序: 根据是否为分包资源返回主包或分包绝对路径
 */
export function img(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;

  // 标准化路径：移除所有开头的斜杠，并识别是否应走分包静态目录。
  const normalizedPath = path.replace(/^\/+/, '');
  const isPkgAsset = normalizedPath.startsWith('pkg/');
  const purePath = isPkgAsset ? normalizedPath.replace(/^pkg\//, '') : normalizedPath;
  const basePath = isPkgAsset ? `pkg/static/img/${purePath}` : `static/img/${purePath}`;

  // #ifdef H5
  /**
   * H5 环境极致兼容逻辑：
   * 1. 开发环境下，Vite 默认将 src/static 映射到根目录 /static
   * 2. 如果页面访问地址带有 /h5/ 前缀，但 Vite 未配置 base 时，
   *    绝对路径 /static/... 可能无法命中，此时尝试使用相对路径。
   */
  const base = (import.meta.env.BASE_URL || '/');
  
  // 统一逻辑：根据 BASE_URL 补齐前缀，并确保路径以 / 开头且无双斜杠
  const prefix = base.endsWith('/') ? base : base + '/';
  const fullPath = (prefix + basePath).replace(/\/+/g, '/');
  
  // 额外处理：如果当前是在开发环境且访问路径带有 /h5/，但生成的路径没有匹配
  // 强制返回相对于当前页面的路径或绝对根路径
  return fullPath.startsWith('/') ? fullPath : '/' + fullPath;
  // #endif

  // #ifndef H5
  // 小程序环境下，确保返回的是以 / 开头的绝对路径。
  return `/${basePath}`;
  // #endif
}

/**
 * 图片预览总线
 * 用于在页面中触发全局弹窗预览
 */
import { reactive } from 'vue'

export const previewState = reactive({
  show: false,
  urls: [],
  current: 0
})

export function previewImg(paths, current = 0) {
  const urls = (Array.isArray(paths) ? paths : [paths]).map(p => img(p));
  if (!urls.length) return;

  const safeIndex = Math.min(Math.max(Number(current) || 0, 0), urls.length - 1);
  previewState.urls = urls;
  previewState.current = safeIndex;
  previewState.show = true;
}

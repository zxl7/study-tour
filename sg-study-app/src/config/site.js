/**
 * 功能：全站基础信息（与 PC 端官网保持一致）。
 * 说明：
 * - 统一维护热线、地址、邮箱、顾问信息，避免各页面硬编码导致数据不一致。
 * - 如 PC 端后续有变更，只需改这里即可同步到小程序/H5。
 */

export const SITE = Object.freeze({
  brandCN: "盛昌利民 · 狮城研学",
  brandEN: "Shengchang Limin · Singapore Study Tour",
  companyCN: "海南盛昌利民传媒有限公司",

  hotline: "0898-65392581",
  hotlineHint: "全国服务咨询热线",

  // PC 首页「咨询报名」模块中的地址文案
  chinaOfficeAddress: "中国运营中心：海南省海口市美兰区国兴街道国兴大道15A号，全球贸易之窗9003室",

  // PC「合作咨询」页中的地址/邮箱
  bizEmail: "shengchanglimin@163.com",
  bizAddress: "海南省海口市美兰区国兴大道15A号全球贸易之窗30楼",

  // 资源基础路径：开发环境下用本地，生产环境下可以换成 CDN 地址
  // 生产环境建议：将 static/img 目录同步到服务器/CDN，并在此处配置绝对路径
  ASSET_URL: "/static/img",

  advisors: [
    { name: "Jason", phone: "166 8978 0303", qr: "advisor/QR_Code-J.jpg" },
    { name: "Adela", phone: "173 3083 5386", qr: "advisor/QR_Code-A.jpg" },
    { name: "Joey", phone: "199 0761 8131", qr: "advisor/QR_Code-O.jpg" },
  ],
})

/**
 * 格式化资源路径的辅助函数
 * @param {string} path 资源路径
 * @returns {string} 完整的资源 URL
 */
export const getAssetUrl = (path) => {
  if (!path) return ""
  if (path.startsWith("http") || path.startsWith("data:")) return path

  // 1. 清理路径并标准化
  let purePath = path.replace(/^\/+/, "")
  
  // 自动识别资源类型
  let finalPath = ""
  if (purePath.startsWith("icons/")) {
    finalPath = `/static/${purePath}`
  } else if (purePath.startsWith("pkg/")) {
    finalPath = `/pkg/static/img/${purePath.replace("pkg/", "")}`
  } else {
    // 兼容处理：如果已经带了 static/img 前缀则不重复拼接
    const imgPrefix = "static/img/"
    finalPath = purePath.startsWith(imgPrefix) ? `/${purePath}` : `/static/img/${purePath}`
  }

  // 2. 环境适配
  // #ifdef H5
  const h5Base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "")
  finalPath = h5Base ? `${h5Base}${finalPath}` : finalPath
  // #endif

  // #ifdef MP-WEIXIN
  // 微信小程序中，背景图或遮罩图如果使用本地资源，建议使用绝对路径（以 / 开头）
  if (!finalPath.startsWith("/")) {
    finalPath = "/" + finalPath
  }
  // #endif

  return finalPath
}

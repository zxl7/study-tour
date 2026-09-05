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
  bizAddress: "海南省海口市美兰区国兴大道15A号全球贸易之窗9003",

  // 资源基础路径：开发环境下用本地，生产环境下可以换成 CDN 地址
  // 生产环境建议：将 static/img 目录同步到服务器/CDN，并在此处配置绝对路径
  ASSET_URL: "/static/img",

  advisors: [
    { name: "胡小姐", phone: "133 0755 0849", qr: "advisor/QR_Code-A.jpg" },
  ],
})

/**
 * 获取图标路径 (简化版)
 */
export const getAssetUrl = (path) => {
  if (!path) return ""
  if (path.startsWith("http") || path.startsWith("data:")) return path
  
  let purePath = path.replace(/^\/+/, "")
  let finalPath = `static/${purePath}`

  // #ifdef H5
  const h5Base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "")
  finalPath = h5Base ? `${h5Base}/${finalPath}` : `/${finalPath}`
  // #endif

  // #ifndef H5
  finalPath = finalPath.replace(/^\/+/, "")
  if (!finalPath.startsWith("/")) {
    finalPath = "/" + finalPath
  }
  // #endif

  return finalPath
}

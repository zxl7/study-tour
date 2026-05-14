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
  // ASSET_URL: "https://your-cdn-domain.com/mini-app/static/img",
  ASSET_URL: "/static/img",

  advisors: [
    { name: "Jason", phone: "166 8978 0303", qr: "advisor/QR_Code-J.jpg" },
    { name: "Adela", phone: "173 3083 5386", qr: "advisor/QR_Code-A.jpg" },
    { name: "Joey", phone: "199 0761 8131", qr: "advisor/QR_Code-O.jpg" },
  ],
})

/**
 * 格式化图片路径的辅助函数
 * @param {string} path 图片文件名或路径
 * @returns {string} 完整的图片 URL
 */
export const getAssetUrl = (path) => {
  if (!path) return ""
  // 如果是完整路径则直接返回
  if (path.startsWith("http") || path.startsWith("data:")) return path

  // 默认基础路径
  let baseUrl = SITE.ASSET_URL.endsWith("/") ? SITE.ASSET_URL.slice(0, -1) : SITE.ASSET_URL
  let purePath = path.startsWith("/") ? path.slice(1) : path

  // 处理分包资源路径
  if (purePath.startsWith("pkg/")) {
    // 如果是本地开发模式且以 pkg/ 开头，映射到分包静态目录
    if (baseUrl.startsWith("/static")) {
      return `/${purePath.replace("pkg/", "pkg/static/img/")}`
    }
  }

  // 拼接基础路径
  return `${baseUrl}/${purePath}`
}

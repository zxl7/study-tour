export interface AnnouncementFile {
  id: string
  title: string
  description: string
  date: string
  fileName: string
  fileType: string
  fileSize: string
  previewType: "docx" | "pdf"
  isLatest: boolean
  url: string
}

export const announcementFiles: AnnouncementFile[] = [
  {
    id: "selection-notice-2026",
    title: "遴选公告",
    description: "遴选公告已发布，请及时查看相关安排。",
    date: "2026-08-05",
    fileName: "遴选公告.docx",
    fileType: "Word 文档",
    fileSize: "20KB",
    previewType: "docx",
    isLatest: false,
    url: encodeURI("/遴选公告.docx"),
  },
  {
    id: "changhua-xiantian-2024",
    title: "昌化镇咸田村集体2024美丽渔村建设项目",
    description: "昌化镇咸田村集体2024美丽渔村建设项目公告已发布，请及时查看。",
    date: "2026-08-11",
    fileName: "昌化镇咸田村集体2024美丽渔村建设项目.pdf",
    fileType: "PDF 文件",
    fileSize: "128KB",
    previewType: "pdf",
    isLatest: true,
    url: encodeURI("/昌化镇咸田村集体2024美丽渔村建设项目.pdf"),
  },
]

// 公告中心与首次弹窗共用同一份静态数据源，后续新增公告只需追加列表项。
export const latestAnnouncement = announcementFiles.find((item) => item.isLatest) ?? announcementFiles[0]

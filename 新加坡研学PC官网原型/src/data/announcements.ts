export interface AnnouncementFile {
  id: string
  title: string
  description: string
  date: string
  fileName: string
  fileType: string
  fileSize: string
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
    isLatest: true,
    url: encodeURI("/遴选公告.docx"),
  },
]

// 公告中心与首次弹窗共用同一份静态数据源，后续新增公告只需追加列表项。
export const latestAnnouncement = announcementFiles.find((item) => item.isLatest) ?? announcementFiles[0]

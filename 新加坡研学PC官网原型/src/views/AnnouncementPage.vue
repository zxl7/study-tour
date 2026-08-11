<template>
  <main class="announcement-page">
    <section class="page-hero">
      <p class="hero-kicker">Announcement Center</p>
      <h1>公告</h1>
      <p>这里集中展示官网公告文件。首次弹窗关闭后，也可以随时回到这里查看、预览或下载原文。</p>
    </section>

    <section class="file-section" aria-label="公告文件列表">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Files</p>
          <h2>公告文件列表</h2>
        </div>
        <span class="file-count">{{ announcementFiles.length }} 个文件</span>
      </div>

      <div class="file-list">
        <article v-for="file in announcementFiles" :key="file.id" class="file-card">
          <div class="file-icon">
            <iconify-icon :icon="file.previewType === 'pdf' ? 'ph:file-pdf-bold' : 'ph:file-doc-bold'"></iconify-icon>
          </div>
          <div class="file-info">
            <div class="file-title-row">
              <h3>{{ file.title }}</h3>
              <span v-if="file.isLatest" class="latest-badge">最新</span>
            </div>
            <p>{{ file.description }}</p>
            <div class="file-meta">
              <span>{{ file.date }}</span>
              <span>{{ file.fileType }}</span>
              <span>{{ file.fileSize }}</span>
            </div>
          </div>
          <div class="file-actions">
            <button type="button" class="preview-button" @click="openPreview(file)">
              <iconify-icon icon="ph:eye-bold"></iconify-icon>
              预览
            </button>
            <a class="download-button" :href="file.url" download>
              <iconify-icon icon="ph:download-simple-bold"></iconify-icon>
              下载
            </a>
          </div>
        </article>
      </div>
    </section>

    <AnnouncementPreviewModal :file="selectedFile" :visible="isPreviewVisible" @close="isPreviewVisible = false" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import AnnouncementPreviewModal from "@/components/AnnouncementPreviewModal.vue"
import { announcementFiles, type AnnouncementFile } from "@/data/announcements"

const selectedFile = ref<AnnouncementFile | null>(null)
const isPreviewVisible = ref(false)

// 文件列表是静态站点中的公告索引，预览则交给弹框完成，避免列表页信息过重。
const openPreview = (file: AnnouncementFile) => {
  selectedFile.value = file
  isPreviewVisible.value = true
}
</script>

<style scoped>
.announcement-page {
  min-height: 100vh;
  padding: 128px 32px 88px;
  background:
    linear-gradient(135deg, rgba(0, 90, 156, 0.08), transparent 34%),
    linear-gradient(225deg, rgba(229, 166, 99, 0.14), transparent 30%),
    #f8fafc;
}

.page-hero,
.file-section {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.page-hero {
  padding: 38px 0 44px;
}

.hero-kicker,
.section-kicker {
  margin: 0 0 12px;
  color: #e5a663;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.page-hero h1 {
  margin: 0;
  color: #005a9c;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.15;
}

.page-hero p:last-child {
  max-width: 720px;
  margin: 18px 0 0;
  color: #475569;
  font-size: 18px;
  line-height: 1.85;
}

.file-section {
  padding: 30px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 48px rgba(0, 45, 78, 0.08);
}

.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  color: #0f172a;
  font-size: 28px;
  font-weight: 900;
}

.file-count {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 14px;
  border: 1px solid #dbe5ef;
  border-radius: 999px;
  color: #64748b;
  background: #ffffff;
  font-size: 13px;
  font-weight: 700;
}

.file-list {
  display: grid;
  gap: 16px;
}

.file-card {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.file-card:hover {
  border-color: rgba(0, 90, 156, 0.22);
  box-shadow: 0 16px 38px rgba(15, 23, 42, 0.08);
  transform: translateY(-1px);
}

.file-icon {
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #005a9c;
  background: #eaf4fb;
  font-size: 30px;
}

.file-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.file-title-row h3 {
  margin: 0;
  color: #0f172a;
  font-size: 20px;
  font-weight: 900;
}

.latest-badge {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 9px;
  border-radius: 999px;
  color: #ffffff;
  background: #e5a663;
  font-size: 12px;
  font-weight: 800;
}

.file-info p {
  margin: 8px 0 0;
  color: #475569;
  line-height: 1.7;
}

.file-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  color: #64748b;
  font-size: 13px;
  font-weight: 700;
}

.file-meta span:not(:last-child)::after {
  content: "/";
  margin-left: 10px;
  color: #cbd5e1;
}

.file-actions {
  display: flex;
  gap: 10px;
}

.preview-button,
.download-button {
  display: inline-flex;
  min-width: 88px;
  height: 42px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.preview-button {
  border: 0;
  color: #ffffff;
  background: #005a9c;
}

.download-button {
  color: #005a9c;
  border: 1px solid #bfdbfe;
  background: #eff6ff;
}

.preview-button:hover,
.download-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 26px rgba(0, 90, 156, 0.16);
}

@media (max-width: 860px) {
  .announcement-page {
    padding: 108px 18px 64px;
  }

  .page-hero h1 {
    font-size: 38px;
  }

  .file-section {
    padding: 20px;
  }

  .section-heading,
  .file-card {
    display: block;
  }

  .file-count,
  .file-info,
  .file-actions {
    margin-top: 16px;
  }

  .file-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>

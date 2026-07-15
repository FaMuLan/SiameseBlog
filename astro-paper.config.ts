import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://famulan.uk/",
    title: "SiameseBlog",
    description: "FaMuLan's artworks collection.",
    author: "FaMuLan",
    profile: "undefined",
    ogImage: "default-og.jpg",
    lang: "zh-Hans",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/FaMuLan/SiameseBlog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/FaMuLan/SiameseBlog" },
    { name: "mail",     url: "mailto:fa_mulan@163.com" },
  ],
  shareLinks: [
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://famulan.uk/",
    title: "SiameseBlog",
    description: "FaMuLan's artworks collection.",
    author: "FaMuLan",
    profile: "undefined",
    ogImage: "piano.jpg",
    lang: "en",
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
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "bilibili", url: "https://space.bilibili.com/30105172"},
    { name: "weibo",    url: "https://weibo.com/u/1951359417"},
    { name: "github",   url: "https://github.com/FaMuLan/SiameseBlog" },
    { name: "mail",     url: "mailto:fa_mulan@163.com" }
  ],
  shareLinks: [
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
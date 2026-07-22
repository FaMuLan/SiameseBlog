import type { UIStrings } from "../types";

export default {
  nav: {
	home: "主页",
	posts: "文章",
	tags: "标签",
	about: "关于",
	archives: "归档",
	search: "搜索",
  },
  post: {
	publishedAt: "推送于",
	updatedAt: "更新于",
	sharePostIntro: "分享这篇文章:",
	sharePostOn: "分享这篇文章到 {{platform}}",
	sharePostViaEmail: "通过邮箱分享这篇文章",
	tagLabel: "标签",
	backToTop: "回到最上方",
	goBack: "返回",
	editPage: "编辑页面",
	previousPost: "上一篇文章",
	nextPost: "下一篇文章",
  },
  pagination: {
	prev: "上一页",
	next: "下一页",
	page: "页",
  },
  home: {
	socialLinks: "社交平台链接",
	featured: "精选",
	recentPosts: "近期文章",
	allPosts: "全部文章",
  },
  footer: {
	copyright: "Copyright",
	allRightsReserved: "All rights reserved.",
  },
  pages: {
	tagTitle: "标签",
	tagDesc: "所有带这个标签的文章",

	tagsTitle: "标签",
	tagsDesc: "所有出现过的标签",

	postsTitle: "文章",
	postsDesc: "所有我发表的文章",

	archivesTitle: "归档",
	archivesDesc: "所有归档",

	searchTitle: "搜索",
	searchDesc: "搜索任意文章……",
  },
  a11y: {
	skipToContent: "跳到内容",
	openMenu: "打开菜单",
	closeMenu: "关闭菜单",
	toggleTheme: "打开主题",
	searchPlaceholder: "搜索文章",
	noResults: "无结果",
	goToPreviousPage: "前往上一页",
	goToNextPage: "前往下一页",
  },
  notFound: {
	title: "404 Not Found",
	message: "Page Not Found",
	goHome: "Go back home",
  },
} satisfies UIStrings;

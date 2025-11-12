export const SITE = {
  website: "https://zhuwenxing.github.io/blog/", // 你的 GitHub Pages 地址
  author: "WxZhuYeah", // 你的名字
  profile: "https://github.com/zhuwenxing", // 你的 GitHub 主页
  desc: "分享技术、学习和生活的个人博客", // 博客描述
  title: "WxZhuYeah's Blog", // 博客标题
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/zhuwenxing/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // 中文博客使用 zh-CN
  timezone: "Asia/Shanghai", // 中国时区
} as const;

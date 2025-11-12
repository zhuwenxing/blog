---
author: Your Name
pubDatetime: 2025-01-12T10:00:00Z
modDatetime: 2025-01-12T10:00:00Z
title: Hello World - 我的第一篇博客
slug: hello-world
featured: true
draft: false
tags:
  - 随笔
description: 这是我的第一篇博客文章，欢迎来到我的博客！
---

欢迎来到我的博客！这是使用 AstroPaper 主题搭建的个人博客。

## 关于这个博客

这个博客基于 Astro 框架和 AstroPaper 主题构建，具有以下特性：

- 🎨 支持亮色和暗色主题
- 🔍 内置模糊搜索功能
- 📱 完全响应式设计
- ♿ 注重无障碍访问
- 🚀 优秀的 SEO 性能

## 如何写新文章

要创建新的博客文章，只需在 `src/data/blog/` 目录下创建一个新的 `.md` 文件。

每篇文章都需要包含以下 frontmatter：

```yaml
---
author: 作者名字
pubDatetime: 2025-01-12T10:00:00Z  # 发布时间
title: 文章标题
slug: url-slug  # URL 中使用的标识符
featured: false  # 是否为精选文章
draft: false  # 是否为草稿（草稿不会在生产环境显示）
tags:
  - 标签1
  - 标签2
description: 文章简短描述
---
```

## 支持的 Markdown 功能

### 代码高亮

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

### 列表

- 无序列表项 1
- 无序列表项 2
  - 子列表项

1. 有序列表项 1
2. 有序列表项 2

### 引用

> 这是一段引用文本。可以用来引用他人的话或者强调重要信息。

### 表格

| 功能 | 说明 |
|------|------|
| 主题切换 | 支持亮色/暗色模式 |
| 搜索 | 基于 FuseJS 的模糊搜索 |
| SEO | 自动生成 OG 图片 |

## 下一步

接下来我会在这个博客上分享关于技术、学习和生活的内容。敬请期待！

## 参考资源

- [AstroPaper 主题文档](https://github.com/satnaing/astro-paper)
- [Astro 官方文档](https://docs.astro.build)
- [Markdown 语法指南](https://www.markdownguide.org/)

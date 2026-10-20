// TiO₂ 站点配置。字段说明见 node_modules/tio2/README.md。
export default {
    site: {
        title: "FicrousWAY's Stone House 椰子鸡的石头屋",
        url: 'https://www.ficrousway.top',
        description: '',
        language: 'zh-CN',
        timezoneOffset: '+08:00',
        author: 'FicrousWAY',
        authorUrl: 'https://github.com/FicrousWAY',
        copyrightStartYear: 2025
    },
    // 目录使用 TiO₂ 默认值：posts/ 文章，pages/ 页面与索引页，public/ 原样复制的静态资源。
    theme: {
        nav: [
            { text: '分类', link: '/pages/category' },
            { text: '归档', link: '/pages/archives' },
            { text: '标签', link: '/pages/tags' },
            { text: '关于', link: '/pages/about' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/FicrousWAY' },
            { icon: 'steam', link: 'https://steamcommunity.com/profiles/76561199051765140/' }
        ],
        clientEntry: 'theme/client.ts',
        // 六大板块分类页，板块定义见 theme/sections.mjs。
        pages: { 'pages/category.md': 'theme/category-page.mjs' }
    },
    integrations: { feed: true, sitemap: true }
}

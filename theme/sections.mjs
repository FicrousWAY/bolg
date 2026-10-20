/**
 * 博客的六大板块。
 *
 * 文章 front matter 里的 `category` 必须是下面某个 `title`；
 * 分类页按这里的顺序列出全部板块（包括还没有文章的板块），
 * `id` 用作分类页上的锚点，例如 /pages/category.html#research。
 */
export const sections = [
    { id: 'study-abroad', title: '留学', englishTitle: 'Study Abroad' },
    { id: 'algorithms', title: '算法', englishTitle: 'Algorithms' },
    { id: 'courses', title: '课程', englishTitle: 'Courses' },
    { id: 'research', title: '科研', englishTitle: 'Research' },
    { id: 'miscellany', title: '杂项', englishTitle: 'Miscellany' },
    { id: 'development', title: '开发', englishTitle: 'Development' }
]

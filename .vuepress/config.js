const {
    description
} = require('../package')

module.exports = {
    title: 'MarkDown Notes',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Note/',

    watch: {
        $page (newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1))

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView()
                        }
                    }
                })
            }
        }
    },

    markdown: {
        lineNumbers: true, //是否在每个代码块的左侧显示行号
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            })
            // Typeora图片路径问题          
            md.use(require("markdown-it-disable-url-encode"))
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/chengziqaq/Note',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        logo: 'homepage.png',
        nav: [{
            text: 'Notes',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Home Site',
                link: 'https://chengziqaq.github.io/'
            },
            ]
        },
        ],
        sidebar: [

            // frontend
            ["/cs/frontend/html.md", "html"],
            ["/cs/frontend/css.md", "css"],
            ["/cs/frontend/javascript.md", "javascript"],
            ["/cs/frontend/jquery.md", "jquery"],
            ["/cs/frontend/vue.md", "vue"],
            ["/cs/frontend/vuePress.md", "vuePress"],



            ["/cs/language/Python/Python.md", "Python"],
            ["/cs/language/Java/JavaSE.md", "JavaSE"],
            ["/cs/language/Java/Java多线程.md", "Java多线程"],
            ["/cs/language/Java/注解和反射.md", "注解和反射"],
            ["/cs/language/C/C.md", "C"],
            ["/cs/backend/Django/Django.md", "Django"],
            ["/cs/backend/JavaWeb/JavaWebNg/JavaWeb_ng.md", "JavaWeb_ng"],

            ["/cs/backend/JavaWeb/KsJavaWeb/JavaWeb入门到实战.md", "JavaWeb入门到实战"],
            ["/cs/backend/SpringBoot/SpringBoot.md", "SpringBoot"],

            // csBasic
            ["/cs/csBasic/DataStructure/DataStructure.md", "数据结构"],
            ["/cs/csBasic/Network/图解HTTP.md", "图解HTTP"],
            ["/cs/csBasic/操作系统/操作系统王道考研.md", "操作系统王道考研"],

            // 大三上
            ["/cs/大三上/无线传感器网络.md", "无线传感器网络"],
            ["/cs/大三上/工程概论.md", "工程概论"],
            ["/cs/大三上/物联网通信技术.md", "物联网通信技术"],


            // desktop
            ["/cs/desktop/Electron/electron.md", "electron"],

            // linux
            ["/cs/Linux/Git/git.md", "git"],
            ["/cs/Linux/linux.md", "linux"],
            ["/cs/Linux/networkProgram.md", "networkProgram"],

            // shell.md 无法显示
            ["/cs/Linux/shell.md", "shell"],
            ["/cs/Linux/Docker/DockerBasic.md", "Docker基础"],
            ["/cs/Linux/Docker/Dockerfile.md", "Dockerfile"],

            // Android
            ["/cs/mobile/Android/AndroidDocNote.md", "AndroidDocNote"],
            ["/cs/mobile/Android/第一行代码第三版笔记.md", "第一行代码第三版笔记"],

            // 数据库
            ["/cs/database/MySQL_ks.md", "MySQL"],


            // 学习区域
            ["/study/learningMethod/如何高效学习.md", "如何高效学习"],
            ["/cs/webSecurity/白帽子讲Web安全.md", "白帽子讲Web安全"],
        ],
    },
    plugins: [
        ["vuepress-plugin-code-copy", true],
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
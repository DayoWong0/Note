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
        // lineNumbers: true, //是否在每个代码块的左侧显示行号
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
        repo: 'https://github.com/DayoWong0/Note',
        editLinks: true,
        editLinkText: ' Edit on Github ',
        // logo: 'homepage.png',
        nav: [

            {
                text: '导航页',
                ariaLabel: 'Language Menu',
                link: '/Navigate.md',

            },

            {
                text: '课程与考试',
                ariaLabel: 'Language Menu',
                link: '/exam/examtime.md',

            },

            // {
            //     text: 'Notes',
            //     ariaLabel: 'Language Menu',
            //     items: [{
            //         text: 'Home Site',
            //         link: 'https://DayoWong0.github.io/'
            //     },
            //     ]
            // },
        ],

        sidebar: [
            ["Navigate.md", "导航"],
            {
                title: '前端',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // frontend
                    "/cs/frontend/html.md",
                    "/cs/frontend/css.md",

                    {
                        title: 'JavaScript',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ["/cs/frontend/javascript.md", "JavaScript自己的笔记"],
                            ["https://github.com/DayoWong0/JavaScript_notes", "JavaScript别人的笔记"],
                            ["/cs/frontend/JavaScript-KS.md", "JavaScript-KS"]
                        ]
                    },
                    "/cs/frontend/vue.md",
                    "/cs/frontend/ElementUI.md",
                    "/cs/frontend/bootstrap.md",
                    "/cs/frontend/vuePress.md",
                    "/cs/frontend/Learning-Vue-js2.md",
                ]
            },

            {
                title: '后端',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [

                    {
                        title: 'Django',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            "/cs/backend/Django/Django.md",
                        ]
                    },

                    {
                        title: 'JavaWeb',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ["/cs/backend/JavaWeb/JavaWebNg/JavaWeb_ng.md", "JavaWeb-NG"],
                        ]
                    },
                    "/cs/backend/SpringMVC-NG.md",
                    "/cs/backend/SpringMVC-KS.md",
                    "/cs/backend/SpringBoot/SpringBoot.md",
                ]
            },


            {
                title: 'Java',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    "/cs/language/Java/JavaSE.md",
                    "/cs/language/Java/Java多线程.md",
                    "/cs/language/Java/注解和反射.md",
                ]
            },


            {
                title: 'Python',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    "/cs/language/Python/Python.md",
                ]
            },

            {
                title: 'C',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    "/cs/language/C/C.md",
                    "/cs/language/C/CPrimerPlus.md",
                ]
            },

            {
                title: '计算机专业课',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '数据结构',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            // ["/cs/csBasic/DataStructure/DataStructure-WZ.md", "数据结构与算法基础（青岛大学-王卓）"],

                        ],
                    },

                    {
                        title: '操作系统',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ["/cs/csBasic/操作系统/操作系统王道考研.md", "操作系统（王道考研）"],
                            ["/cs/csBasic/操作系统/操作系统（哈工大李治军老师）32讲.md", "操作系统（哈工大李治军老师）32讲"],
                        ]
                    },
                    // csBasic
                    ["/cs/csBasic/Network/图解HTTP.md", "图解HTTP"],
                    ["cs/csBasic/math/离散数学.md", "离散数学"],
                ]
            },


            {
                title: 'Linux',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // linux
                    ["/cs/Linux/linux.md", "Linux"],
                    ["/cs/Linux/shell.md", "shell 编程"],
                    ["/cs/Linux/Git/git.md", "git"],
                    ["cs/Linux/Git/git和Github的基本使用.md", "git 和 Github 的基本使用"],
                    ["/cs/Linux/networkProgram.md", "Linux 网络编程"],
                    ["cs/Linux/LinuxNetworkProgramExperiment.md", "Linux 网络编程上机实验"],


                    {
                        title: 'Docker',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ["/cs/Linux/the-docker-book.md", "the Docker book 笔记"],
                        ],
                    },


                ]
            },

            {
                title: '大三上',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // 大三上
                    ["/cs/大三上/无线传感器网络.md", "无线传感器网络"],
                    ["/cs/大三上/工程概论.md", "工程概论"],
                    ["/cs/大三上/工程概论习题和答案.md", "工程概论习题和答案"],
                    ["/cs/大三上/物联网通信技术.md", "物联网通信技术"],
                ]
            },

            {
                title: '桌面应用开发',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // desktop
                    ["/cs/desktop/Electron/electron.md", "Electron"],
                ]
            },

            {
                title: 'Android',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // Android
                    ["/cs/mobile/Android/第一行代码第2版笔记.md", "第一行代码第2版笔记.md"],
                    ["/cs/mobile/Android/第一行代码第三版笔记.md", "第一行代码第三版笔记"],
                    ["cs/mobile/Android/Android-tg.md", "Android-tg(天哥在奔跑的教程)"],
                ]
            },

            {
                title: '数据库',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // 数据库
                    // ["/cs/database/MySQL_ks.md", "MySQL"],
                ]
            },


            {
                title: '学习方法',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    // 学习区域
                    ["/study/learningMethod/如何高效学习.md", "如何高效学习"],
                ]
            },

            {
                title: '网络安全',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ["/cs/webSecurity/白帽子讲Web安全.md", "白帽子讲 Web 安全"],
                ]
            },






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
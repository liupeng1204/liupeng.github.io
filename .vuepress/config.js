module.exports = {
    "title": "回忆如风",
    "description": "人生如梦，回忆如风。",
    "dest": "dist",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            }, {
                text: '更多',
                icon: "reco-other",
                items: [{
                    text: '技术整理',
                    items: [
                        {
                            text: 'React',
                            link: '/docs/react/',
                            icon: 'fab fa-react'
                        }, {
                            text: 'Vue',
                            link: '/docs/vue/',
                            icon: 'fab fa-vuejs'
                        }, {
                            text: '笔记',
                            link: '/docs/note/',
                            icon: 'fas fa-edit'
                        }
                    ]
                }, {
                    text: '生活记录',
                    items: [{
                        text: '随感',
                        link: '/blogs/life/essay/',
                        icon: 'far fa-heart'
                    }]
                }, {
                    text: '其他',
                    items: [{
                        text: '博客相关',
                        link: '/blogs/other/blog/'
                    }]
                }]
            }, {
                text: '关于我',
                items: [{
                    text: '简历',
                    link: '/blogs/me/resume/',
                    icon: 'fab fa-black-tie'
                }, {
                    text: 'GitHub',
                    icon: 'fab fa-github',
                    link: 'https://github.com/liupeng1204',
                    target: '_blank'
                }, {
                    text: '微信',
                    link: '/blogs/me/wechat/',
                    icon: 'fab fa-weixin'
                }, {
                    text: 'QQ',
                    link: '/blogs/me/qq/',
                    icon: 'fab fa-qq'
                }]
            }
        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        // "friendLink": [
        //     {
        //         "title": "午后南杂",
        //         "desc": "Enjoy when you can, and endure when you must.",
        //         "email": "1156743527@qq.com",
        //         "link": "https://www.recoluan.com"
        //     },
        //     {
        //         "title": "vuepress-theme-reco",
        //         "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        //         "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        //         "link": "https://vuepress-theme-reco.recoluan.com"
        //     }
        // ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "刘鹏",
        "authorAvatar": "/avatar.png",
        // "record": "xxxx",
        // "startYear": "2019"
    },
    "markdown": {
        "lineNumbers": true
    }
}

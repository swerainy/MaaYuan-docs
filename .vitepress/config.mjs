import { defineConfig } from "vitepress";
import { announcementNavMenuItems } from "./shared/announcementNav.mjs";
import { navPopoverData } from "./shared/navPopover.mjs";
import { head } from "./config/head";
import { heroRandomImagesPlugin } from "./plugins/heroRandomImages.mjs";

export default defineConfig({
  title: "MaaYuan Docs",
  description: "MaaYuan 文档站",
  head,
  vite: {
    plugins: [heroRandomImagesPlugin()],
  },

  rewrites: {
    "zh/:rest*": ":rest*",
  },

  srcExclude: ["README.md", "operations-log.md", "scripts/**", "tests/**"],

  lastUpdated: true,
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: [
                    {
            component: "NavPopoverBadge",
            props: navPopoverData,
          },
          {
            text: "📢 公告",
            items: announcementNavMenuItems,
          },

          {
            text: '📖 使用手册',
            items: [
              { text: '快速开始', link: '/Started/Install' },
              { text: '使用手册', link: '/Manual/Overview' },
              { text: '功能介绍', link: '/Features/InstancesAndTaskList' },
              { text: '常见问题', link: '/FAQ/' },
            ],
          },
          { text: '🛠️ 开发手册', link: '/Developer/' },
          {
            text: '🔗 友情链接',
            items: [
              { text: 'Maa', link: 'https://maa.plus/' },
              { text: 'Mirror酱', link: 'https://mirrorchyan.com/zh/projects?rid=MaaYuan&source=navtop' },
              { text: 'MaaLYSK', link: 'https://maalysk.top/zh_cn/' },
              { text: '代号鸢BWiki', link: 'https://wiki.biligame.com/yuan/%E9%A6%96%E9%A1%B5' },
            ],
          },
        ],
        sidebar: [
          {
            text: "🚀 快速开始",
            items: [
              { text: "下载与安装", link: "/Started/Install" },
              { text: "首次启动", link: "/Started/FirstLaunch" },
              { text: "连接与更新", link: "/Started/ConnectionAndUpdate" },
            ],
          },
          {
            text: "📘 使用手册",
            items: [
              { text: "项目概览", link: "/Manual/Overview" },
              { text: "任务总览", link: "/Manual/TaskOverview" },
              { text: "系统与反馈", link: "/Manual/SystemAndFeedback" },
            ],
          },
          {
            text: "⚙️ 功能介绍",
            items: [
              { text: "实例与任务列表", link: "/Features/InstancesAndTaskList" },
              { text: "日常任务说明", link: "/Features/DailyTasks" },
              { text: "进阶功能说明", link: "/Features/AdvancedTasks" },
              { text: "通知设置", link: "/Features/Notifications" },
              { text: "作业功能", link: "/Features/HomeworkShare" },
            ],
          },
          {
            text: "🎉 活动指南",
            items: [
              { text: "当前活动", link: "/Activity/Current" },
              {
                text: "未注明年份",
                collapsed: true,
                items: [
                  { text: "初见日", link: "/Activity/Archive/Undated/Chujianri" },
                  { text: "楼主查岗", link: "/Activity/Archive/Undated/Louzhuchagang" },
                ],
              },
              {
                text: "2025",
                collapsed: true,
                items: [
                  { text: "天下隐光 V1", link: "/Activity/Archive/2025/TianxiaYinguangV1" },
                  { text: "望祈丰年", link: "/Activity/Archive/2025/Wangqifengnian" },
                  { text: "朝歌之战", link: "/Activity/Archive/2025/Chaogezhizhan" },
                  { text: "邺城之战 V2", link: "/Activity/Archive/2025/YechengzhizhanV2" },
                  { text: "月海夜航船扫荡", link: "/Activity/Archive/2025/YuehaiYeHangChuanSaodang" },
                  { text: "爱乐之村 无痛跑圈试用版", link: "/Activity/Archive/2025/Aileyuzhicun" },
                  { text: "云梦巫乡挖煤 V4", link: "/Activity/Archive/2025/YunmengWuxiangWaMeiV4" },
                  { text: "云梦巫乡挖煤自定义版 V2", link: "/Activity/Archive/2025/YunmengWuxiangCustomV2" },
                  { text: "东海海水浴场", link: "/Activity/Archive/2025/DonghaiHaishuiYuchang" },
                  { text: "温泉山庄小管家", link: "/Activity/Archive/2025/WenquanShanzhuangXiaoguanjia" },
                  { text: "披荆斩棘的实习考核", link: "/Activity/Archive/2025/PijingzhanjiDeShixikaohe" },
                  { text: "迎春开锦书金囊", link: "/Activity/Archive/2025/YingchunkaiJinshuJinnang" },
                  { text: "江东万里船 V3", link: "/Activity/Archive/2025/JiangdongWanlichuanV3" },
                  { text: "魂生一串", link: "/Activity/Archive/2025/HunshengYichuan" },
                ],
              },
              {
                text: "2026",
                collapsed: true,
                items: [
                  { text: "躬耕南阳 V1", link: "/Activity/Archive/2026/GonggengNanyangV1" },
                  { text: "菌子种植助手", link: "/Activity/Archive/2026/JunziZhongzhiZhushou" },
                  { text: "花灯绘", link: "/Activity/Archive/2026/Huadenghui" },
                  { text: "咪教模拟器助手", link: "/Activity/Archive/2026/MijiaoMoniqiZhushou" },
                  { text: "咪教模拟器", link: "/Activity/Archive/2026/MijiaoMoniqi" },
                ],
              },
            ],
          },
          {
            text: "💫 常见问题",
            items: [{ text: "FAQ", link: "/FAQ/" }],
          },
          {
            text: "🛠️ 开发手册",
            items: [{ text: "概览", link: "/Developer/" }],
          },
        ],
        outline: {
          level: [2, 3],
          label: "目录",
        },
        darkModeSwitchLabel: "切换主题",
        sidebarMenuLabel: "文档目录",
        returnToTopLabel: "返回顶部",
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
        editLink: {
          pattern: "https://github.com/MrSnake0208/MaaYuan-docs/edit/main/:path",
          text: "在 GitHub 上编辑此页",
        },
        logo: "/icon.png",
        socialLinks: [{ icon: "github", link: "https://github.com/MrSnake0208/MaaYuan-docs" }],
        footer: {
          message: 'MaaYuan 为免费开源项目，欢迎前往 <a href="https://github.com/MrSnake0208/MaaYuan-docs" target="_blank" rel="noreferrer">GitHub</a> 关注文档更新。',
          copyright: 'MaaYuan Docs · Built with VitePress',
        },
      },
    },
  },

  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
});

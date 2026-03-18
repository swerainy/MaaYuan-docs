# 系统与反馈<Badge type="tip" text="参考" />

::: tip
本文整理系统支持、启动方式、远程操控建议，以及 Bug 反馈和日志导出步骤。
:::

## 一、系统与启动方式

### Windows

- 大多数用户下载 `MaaYuan-win-x86_64-vXXX.zip`
- 解压后直接运行 `MaaYuan.exe`

### macOS

- Intel 处理器：`MaaYuan-macos-x86_64-vXXX.zip`
- M1 / M2 等 Arm 处理器：`MaaYuan-macos-aarch64-vXXX.zip`
- 启动方式：

```sh
chmod a+x MaaYuan
./MaaYuan
```

## 二、远程操控 PC 的方式

如果你想通过手机或平板间接操作 PC 端，可考虑：

- `网易 UU 远程`
- `向日葵远程`

::: details 远程使用注意事项
- 远程操控软件需要双端都安装。
- 远程方式更适合“看进度 / 轻操作”，不是替代本地环境配置。
:::

## 三、导出日志的方法

1. 打开 MaaYuan 文件夹。
2. 把 `debug` 文件夹完整删除。
3. 打开 MaaYuan，重新复现问题。
4. 关闭 MaaYuan。
5. 打开新生成的 `debug` 文件夹。
6. 找到其中的 `maa.log`，压缩后再反馈。

## 四、反馈时建议提供的内容

- 文字描述问题
- 问题截图
- 完整无遮挡的模拟器画面
- MaaYuan 主窗口画面
- 复现后的 `maa.log`

## 五、反馈渠道

- 腾讯频道【Maa鸢】
- 频道帖子区（`MAC` 用户也可在互助区反馈）
- `QQ` 互助群：`863288153`
- GitHub Issue

::: warning
反馈前尽量先看 [常见问题](../FAQ/)，很多连接、依赖、作业和分辨率问题都有现成处理办法。
:::

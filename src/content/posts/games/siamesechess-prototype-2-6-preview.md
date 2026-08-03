---
author: FaMuLan
pubDatetime: 2026-07-15T15:14:00.000Z
title: SiameseChess原型2.6预览
slug: siamesechess-2nd-prototype
featured: true
tags:
  - release
  - game
  - chess
description: 国际象棋冒险游戏
---	

虽然还未发行，不过新版可以在此处预览。

![Carnation](@/assets/images/siamesechess_prototype-2.6-cover.png)

## Table of Contents

## 游戏介绍

您扮演一位叫“莲”的猫，并处在某间洋房的附近。原型阶段没有明确目标，请凭借自己的好奇心去探个究竟。

## 游戏截图

![SiameseChess 2nd Prototype's screenshot 1](@/assets/images/siamesechess_prototype-2.x_screenshot_1.png)
![SiameseChess 2nd Prototype's screenshot 2](@/assets/images/siamesechess_prototype-2.x_screenshot_2.png)
![SiameseChess 2nd Prototype's screenshot 3](@/assets/images/siamesechess_prototype-2.x_screenshot_3.png)
![SiameseChess 2nd Prototype's screenshot 4](@/assets/images/siamesechess_prototype-2.x_screenshot_4.png)
![SiameseChess 2nd Prototype's screenshot 5](@/assets/images/siamesechess_prototype-2.x_screenshot_5.png)

## 关于新版

### 改动

该版本着重于无障碍的布局，包含了文本转语音功能、辅助手势、控制台等内容。在此基础上增加了更多的音效。同时，该版本也完善了有关“康乃馨”和“玉兰”的互动，两人都有对应的练习模式供玩家体验。

### 预览版已知问题

- TTS不会播报文档内容，这项功能本身为长期工程，计划于下一版本处理；
- Android平台（已发现有MIUI和HyperOS系统）无法正常调用系统内置TTS，现已发布线上计算替代方案，有一定延迟；
- 目前Android Webview是唯一不支持SharedArrayBuffer的浏览器，这意味着Android的内置浏览器及其套壳都无法加载Web游戏。请改用Chrome或者Firefox运行。

## 游戏说明

### 规则

- 游戏中的国际象棋兼容了标准的国际象棋规则，因此，您可以事先学习传统国际象棋规则，再回来游玩；
- 在该版本游戏中，游戏额外增加了障碍机制，以阻挡棋子的移动；
- 更多规则后续会视情况进行改动。

### 控制

本游戏涉及了这些基本操作：

#### 点击棋盘格子

- 您可以直接点击棋盘格子，控制玩家角色移动；
- 控制棋子时，您可以先点击想要移动的棋子，再根据棋盘提示，点击想要移动的位置上。

#### 互动选项

- 屏幕的下方有时会提示一些文本，其中这些文本是可以被选中的；
- 根据自身实际情况，点击这些选项，和游戏中的角色以及场景进行交互。

您可以使用不同的输入设备控制游戏，包括鼠标、触控屏、键盘和手柄。

#### 鼠标 和 触控屏

- 很简单，点格子即可；
- 注意瞄准格子去点击，而非瞄准棋子本体点击；
- 如果需要打开设置，您可以 点击(触屏)/悬浮(鼠标) 屏幕正上方的黑边，游戏会弹出选项。

#### 键盘（按键输入）

- 使用WASD或方向键控制光标；
- 使用空格或回车键，实现棋盘格子的点击；
- 若正下方出现了选项，您可以按下Tab键进入选择选项的模式；
- 按下Esc键，进入选择菜单的模式。

#### 手柄

- 使用十字键控制光标；
- 使用A键，实现棋盘格子的点击；
- 若正下方出现了选项，您可以按下Back键进入选择选项的模式；
- 按下Menu键，进入选择菜单的模式。

#### 键盘（控制台）

- 按下“/”键，或者在菜单栏中找到“控制台”选项，以开启控制台
- 屏幕上方会显示命令输入，您可以在此键入相应的指令以替代键盘鼠标操作；
- 目前公开支持这些指令：

| 指令 | 示例 | 使用场合 | 说明 |
| :--- | :--- | :--- | :--- |
| `[着法]` | `Nf3` | 对局过程 | 在对局中直接输入，直接执行相应着法。 |
| `.[坐标]` | `.e4` | 探索过程 | 控制玩家“莲”移动到指定格子上。 |
| `about` |  |  | 打开“关于”文档。 |
| `+[棋][坐标]` | `+Pe4` | 编辑棋盘 | 添加棋子于指定格子上，棋子使用`K`、`Q`、`R`、`B`、`N`、`P`表示，填写黑方棋子请使用小写。 |
| `-[坐标]` | `-e4` | 编辑棋盘 | 删除指定格子上的棋子。 |
| `first [阵营]`| `first w` | 编辑棋盘 | 设置先手，`b`表示黑，`w`表示白 |
| `castle [KQkq]`| `castle kq` | 编辑棋盘 | 设置能否易位，含黑白双方长短易位`KQkq`，若可以则写出对应字母，示例表示了白方无法进行易位，而黑方可以进行长短易位。 |
| `en passant [坐标]` | `en passant c6` | 编辑棋盘 | 设置吃过路兵，走两格兵的后方指定格子，示例中，为了模拟上一步为c7兵走c5，则可以标记身后的c6。 |
| `fen [局面标记]` | `fen 8/8/8/8/8/8/8/8 w KQkq - 0 1` | 编辑棋盘 | 设置局面的FEN编码，示例为空棋盘 |
| `y` |  | 编辑棋盘 | 确认编辑完成 |
| `n` |  | 编辑棋盘 | 取消编辑 |
| `[设置选项] [值]` | `fullscreen 1` |  | 应用设置 |

## 下载地址（prototype-2.6 预览版）

| 平台 | 链接 | 尺寸 | 备注 |
| :--- | :--- | :--- | :--- |
| Android | [SiameseChess-SecondPrototype-Android.apk](https://static.famulan.uk/siamesechess/SiameseChess-SecondPrototype-Android.apk)| 66.55 MB | 仅针对arm64处理器。 |
| Windows | [SiameseChess-SecondPrototype-Windows.zip](https://static.famulan.uk/siamesechess/SiameseChess-SecondPrototype-Windows.zip) | 54.58 MB | 仅针对x64处理器。 |
| Linux | [SiameseChess-SecondPrototype-Linux.zip](https://static.famulan.uk/siamesechess/SiameseChess-SecondPrototype-Linux.zip) | 45.87 MB | 仅针对x64处理器，兼容性以Ubuntu为准。 |
| Web | [Web在线游玩](https://static.famulan.uk/siamesechess/index.html) | 115.69 MB | Web版本存在较多的功能限制以及性能问题，适合不方便下载软件的玩家。 |

## 开源仓库地址

| 平台 | 链接 |
| :--- | :--- |
| Gitee | https://gitee.com/godothub/siamese_chess |
| AtomGit | https://atomgit.com/godothub/siamese_chess |
| Github | https://github.com/godothub/siamese_chess |

## 致谢

- 感谢“程序员毛同学”协助测试Linux版游戏；
- 感谢“老蔡-omto”的物质援助，含《疯狂动物城2》中角色“宝伯特”的玩偶，以及《星际火狐》中角色“火狐·麦克劳德”的Amiibo手办，我很喜欢。
- 感谢“蛙岛小蔡”（这ID是能放的吗）协助测试Godot TTS接口在安卓平台的兼容性，甚至专门制作了个完成度偏高的测试项目；
- 感谢“RLCombiner”以及“赤茨”线下见面时期间请客，那会我们玩得很开心。

## GOCQ 和 QQ官方机器人接口

`go-cqhttp`（以下简称GOCQ）是由Mrs4s以及多位贡献者维护的一个第三方QQ消息接口（相当于第三方客户端），功能强大，支持**QQ、QQ频道**的消息接收与发送。本项目使用了GOCQ进行QQ和QQ频道的消息接收与发送。不过由于腾讯频繁的更换协议，目前不太稳定（小部分QQ号会登录失败）。

`QQ官方机器人接口`是腾讯QQ团队开源的QQ频道消息接口。官方认证，因此很稳定。不过需要申请appid、token（下面有教程）。并且对主动消息有限值。

各有优缺点，可以权衡一下（或者都启用）。

前往 https://github.com/Soulter/AstrBotLauncher/releases 下载启动器，然后按照启动器内容进行相关操作。

## 步骤1

下载完压缩包后，解压到任意文件夹

![image](https://github.com/Soulter/AstrBot-docs/assets/37870767/8dc1faf2-a862-414e-a4b8-6a3b6a791ca6)

想使用哪个接口？
1. go-cqhttp (从步骤2开始)
2. QQ 官方机器人接口 （从步骤4开始）


## 步骤2

修改 `config.yml` 文件

![image](https://github.com/Soulter/AstrBot-docs/assets/37870767/d566218a-7a6d-44a4-8044-9a403c2edd3c)


## 步骤3

运行 go-cqhttp.exe，然后会提示一个警告，同意即可。
然后运行新生成的 `go-cqhttp.bat`

![image](https://github.com/Soulter/AstrBot-docs/assets/37870767/00ff0400-c361-4b22-98a4-00d9477b117c)

根据引导，最终会启动成功。（如果启动失败，请尝试看 cq-http 的文档）

## 步骤4
启动 `launcher`

![image](https://github.com/Soulter/AstrBot-docs/assets/37870767/52d728be-fdbe-409c-84cb-415ab316e9c5)

> 注意，不再需要像上图一样通过文件修改 config.yaml。

然后选择网络环境，建议国内。

如图所示：

![image](https://github.com/Soulter/AstrBot-docs/assets/37870767/14a41c2d-e394-4acf-8fd9-eb3a709ebfa6)

这已经启动成功。可以根据提示打开控制台面板。

![image](https://github.com/Soulter/AstrBot-docs/assets/37870767/dcb77b27-3f58-461e-91e0-4a4166f60171)

修改完之后，点击右下角保存即可

## 步骤？

然后，就可以正常在qq/qq频道上与机器人对话了。如果用的是qq官方机器人，则还先需要在 q.qq.com 上根据提示创建频道、设置沙箱频道等，设置完之后，可以在手机QQ的频道内把机器人拉进自己的频道。

:::caution

**告知老用户**：可视化面板是最近新加入的功能，在以后的版本中，AstrBot 将弃用 `configs/config.yaml` 配置文件，会将其中的内容全部转移至 `cmd_config.json` 下，以避免 Git 冲突的发生。

:::

要在消息平台上使用，请看 [平台配置](/配置/平台配置)

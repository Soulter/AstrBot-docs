本项目支持 Docker 部署。

## Linux 环境

只需执行：

```bash
mkdir -p /home/astrbot/data
docker run -itd -p 6185:6185 -p 6186:6186 -v /home/astrbot/data:/AstrBot/data --name astrbot soulter/astrbot:latest
```

> 注意：如果您打算使用反向 WebSocket 来连接到诸如 Lagrange、NapCat 等 OneBot 协议实现，您仍需要再暴露对应的端口。比如您打算使用 NapCat 通过 `ws://12.34.56.78:6199/ws` 连接到 AstrBot，那么您需要再暴露 6199 端口。

使用 AstrBot 中产生的数据将存储在 `/home/astrbot/data` 目录下, 包括: 
1. 插件的配置文件
2. AstrBot 的配置文件
3. AstrBot 会话, 统计产生的数据库文件(data.db)

如果出现 docker: command not found 的话，说明你还没有安装 docker，请先安装。

成功运行之后，请打开 `http://localhost:6185` （如果你的服务器有公网 ip，也可以打开 `http://[你的服务器公网 IP]:6185`。如果打不开，请检查 Linux 防火墙和服务器托管商处是否放行了 6185 端口）

对于这个面板的使用，详见：[可视化面板的使用](../使用/可视化面板)

> 默认密码和用户名均为空。第一次登录面板请直接点击 `登录` 按钮。密码和用户名可在之后修改。密码使用 MD5 加密且只存储于本地。

![可视化面板](image.png)

## Windows 环境

如果你还没有安装 Docker, 请先[在这里](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module)安装 Docker. 具体的安装教程可以参考: [这里](https://learn.microsoft.com/zh-cn/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-10-and-11-1)

// 施工中 //


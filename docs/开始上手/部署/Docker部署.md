---
slug: /get-started/deploy/docker
---

本项目支持 Docker 部署。

## Linux 环境

只需执行：

```bash
mkdir -p /home/astrbot/data
docker run -itd -p 6185:6185 -v /home/astrbot/data:/AstrBot/data --name astrbot soulter/astrbot:latest
```

> 注意：如果您打算使用反向 WebSocket 来连接到诸如 Lagrange、NapCat 等 OneBot 协议实现，您仍需要再暴露对应的端口。比如您打算使用 NapCat 通过 `ws://12.34.56.78:6199/ws` 连接到 AstrBot，那么您需要再暴露 6199 端口。

使用 AstrBot 中产生的数据将存储在 `/home/astrbot/data` 目录下, 包括: 
1. 插件的配置文件
2. AstrBot 的配置文件
3. 存储 AstrBot LLM 聊天记录、统计数据的 SQLite 数据库(data_v2.db)
4. 插件目录(plugins/)

如果出现 `docker: command not found`，说明你还没有安装 docker，请先[安装](https://docs.docker.com/engine/install/)。

成功运行程序后，请打开 `http://localhost:6185` （如果你的服务器有公网 ip，也可以打开 `http://[你的服务器公网 IP]:6185`。如果打不开，请检查 Linux 防火墙和服务器托管商处是否放行了 `6185` 端口）

## Windows 环境

如果你还没有安装 Docker, 请先[在这里](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module)安装 Docker. 具体的安装教程可以参考: [这里](https://learn.microsoft.com/zh-cn/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-10-and-11-1)

安装完成后，打开电脑 powershell，输入以下指令:

```bash
mkdir -p /home/astrbot/data
docker run -itd -p 6185:6185 -v /home/astrbot/data:/AstrBot/data --name astrbot soulter/astrbot:latest
```

> 注意：如果您打算使用反向 WebSocket 来连接到诸如 Lagrange、NapCat 等 OneBot 协议实现，您仍需要再暴露对应的端口。比如您打算使用 NapCat 通过 `ws://12.34.56.78:6199/ws` 连接到 AstrBot，那么您需要再暴露 6199 端口。

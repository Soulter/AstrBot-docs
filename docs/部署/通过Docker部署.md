
:::caution

Docker 镜像尚处开发阶段，难免有 bug。在发现 bug 之后，可以提交 issue。

:::

## Linux 环境

只需执行：

```bash
mkdir -p /home/astrbot/data
docker run -itd -p 6185:6185 -p 6186:6186 -v /home/astrbot/data:/AstrBot/data soulter/astrbot:latest
```

在 `v3.2` 版本之后, 你使用 AstrBot 中产生的数据将存储在 `/home/astrbot/data` 目录下, 包括: 
1. 插件的配置文件
2. AstrBot 的配置文件
3. AstrBot 会话, 统计产生的数据库文件(data.db)

如果报 docker: command not found 的话，说明你还没有安装 docker，请先安装。

成功运行之后，请打开 `http://localhost:6185` （如果你的服务器有公网 ip，也可以打开 `http://[你的服务器公网 IP]:6185`，如果打不开，请检查 Linux 防火墙和服务器托管商处是否放行了 6185 端口）

打开之后即可看到本项目的可视化面板。如果提示需要登录，请直接点击登录按钮。密码和用户名可在之后修改。密码使用 MD5 加密，并且只存于本地。

对于这个面板的使用，详见：[可视化面板的使用](../使用/可视化面板)

![可视化面板](image.png)

至此，部署完毕。

要在消息平台上使用，请看 [平台配置](/配置/平台配置)

## Windows 环境

如果你还没有安装 Docker, 请先[在这里](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module)安装 Docker. 具体的安装教程可以参考: [这里](https://learn.microsoft.com/zh-cn/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-10-and-11-1)

// 施工中 //


### react + electron


![image](https://tinypng.com/web/output/q70fmwb4bkaeg2pg9tnma4u5qw1nkqby/WX20181125-093034%402x.png)


### 如何运行

```js
yarn        // 安装依赖
yarn b      // 启动webpack打包模式
yarn start  // 启动 electron 打包模式
```



### 生成https证书
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem


- 加密算法: sha256
- 地址域名头是: localhost
- 生成文件
- keyout localhost-privkey.pem   这个是key文件的名称
- out localhost-cert.pem     这个是cert文件

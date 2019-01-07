const http2 = require('http2');
const fs = require('fs');
const PORT = 443


const html = fs.readFileSync('./static/index.html').toString();
const js = fs.readFileSync('./static/ubdex.js').toString();


const server = http2.createSecureServer({
  // 同步阻塞加载 key
  key: fs.readFileSync('localhost-privkey.pem'),
  // 同步阻塞加载 cert
  cert: fs.readFileSync('localhost-cert.pem')
});

// 服务端监听错误事件
server.on('error', (err) => console.error(err));



// 服务端监听流事件
server.on('stream', (stream, headers) => {
  // 流的回话监听,为每个流特定的设置
  stream.session.altsvc('h2=":8000"', stream.id);

  // 监听 并且响应 text/html 文本格式,  响应状态码 200
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });

  stream.on('push', (headers, flags) => {
    console.log(headers);
  });
    
  stream.pushStream({ ':path': '/' }, (err, pushStream, headers) => {
    if (err) throw err;
    pushStream.respond({ ':status': 200 });
    pushStream.end('some pushed data');
  });
    
  // 拼接字符串
  stream.write('hello ');
  // 结束 语句 : <h1>Hello World</h1>
  stream.end('<h1>Hello World</h1>');
});

server.listen(PORT,()=>{
  console.log(`开始监听${PORT}`);
});
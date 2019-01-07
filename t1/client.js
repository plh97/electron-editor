const http2 = require('http2');
const fs = require('fs');

// 连接 https://localhost:443 本地443接口
const client = http2.connect('https://localhost', {
  // 同步阻塞加载
  ca: fs.readFileSync('localhost-cert.pem')
});

// 错误咋本
client.on('error', (err) => console.error(err));


client.on('stream', (pushedStream, requestHeaders) => {
  pushedStream.on('push', (responseHeaders) => {
    // process response headers
    console.log(responseHeaders);
    
  });
  pushedStream.on('data', (chunk) => { /* handle pushed data */ });
});
client.on('altsvc', (alt, origin, streamId) => {
  console.log('\n\n\n');
  console.log('alt------',alt);
  console.log('origin------',origin);
  console.log('streamId------',streamId);
});


client.on('origin', (origins) => {
  console.log('\n\n\n');
  for (let n = 0; n < origins.length; n++)
    console.log(origins[n]);
});

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) => {
  console.log('\n\n\n');
  
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

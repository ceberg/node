var http = require('http');
// 加载了一个模块,固有模块
http.createServer(
	// 创建一个服务器

	function (req, res) {	
		// req是请求体,res是回应体
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end("not lovely");
		// console.log(bn)
	}
	// 监听到请求是会执行的匿名函数
).listen(1337,'127.0.0.1');
// 在1337监听请求
// 访问地址为http://127.0.0.1:1337/

console.log('running on 8124!');
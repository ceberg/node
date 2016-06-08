var http = require('http');
// 加载了一个模块
http.createServer(
	// 创建一个服务器
	function (req, res) {	
		// req是请求体,res是回应体
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end("<h1>我有一头小毛驴!</h1>\n");
	}
	// 监听到请求是会执行的匿名函数
).listen(1337,'127.0.0.1');
// 在1337监听请求

console.log('running on 8124!');
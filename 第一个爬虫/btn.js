var http=require('http')
var url='http://www.imooc.com/learn/348'
http.get(url,function(res){
	var html=''
	res.on('data',function(data){
		html+=data
	})
	res.on('end',function(){
		console.log(html)
	}).on('error',function(){
		console.log('获限课程出错！')
	})
})
// 爬虫就是把页面结构爬下来再获得想要的数据，
// 简单的好弄复杂的
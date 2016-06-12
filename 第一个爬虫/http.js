var http=require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'
function filter(html){
	var $ =cheerio.load(html)
	var chapter=$(".chapter")
	// console.log(chapter.length)
	chapter.each(function(item){
		var chapter=$(this)
		var title=chapter.find('strong').text()
		// $('.video').find('a').text()
		console.log(title)
	})
}

http.get(url,function(res){
	var html=''
	res.on('data',function(data){
		html+=data
	})
	res.on('end',function(){
		filter(html)
	})
})
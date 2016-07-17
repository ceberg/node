var http=require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'

function filterChapters(html){
	var $=cheerio.load(html)
	var chapters=$('.chapter')
	var courseData=[]
	chapters.each(function(){
		var chapter=$(this)
		var chapterTitle=$(this).find('strong').text()
		var	videos=chapter.find('.video').children('li')
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(){
			var video=$(this).find('.studyvideo')
			var videoTitle=video.text()
			var id=video.attr('href').split('video/')[1]
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		})
		courseData.push(chapterData)
	})
	return courseData
}
function printCourseInfo(course){
	course.forEach(function(e){
		e.videos.forEach(function(video){
			console.log(video.title)
		})
	})
}
http.get(url,function(res){
	var html=''

	res.on('data',function(data){
		html+=data
	})

	res.on('end',function(){
		// console.log(html)
		var courseData=filterChapters(html)
		printCourseInfo(courseData)
	})
})
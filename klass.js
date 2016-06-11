var student=require("./student")
var teacher=require("./teacher")
// 模块赋给局部变量
teacher.add("Scott")

function add(teacherName,students){
	teacher.add(teacherName)

	students.forEach(function(item,index){
		stuedent.add(item)
	})
}

exports.add=add
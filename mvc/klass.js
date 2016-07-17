var student=require('./student')
var teacher=require('./teacher')
function add(teacherName,students){
	teacher.add(teacherName)
	students.forEach(function(item,index){
		// 找了students半天，它做为了对象名调用了方法
		student.add(item)
	})
}
exports.add=add

var student=require('./student')
var teacher=require('./teacher')
function add(teacherName,students){
	teacher.add(teacherName)
	students.forEach(function(item,index){
		student.add(item)
	})
}
exports.add=add

// 新测可用
// var arryAll = [5,6,7,122];    
// arryAll.forEach(function(e){  
//     teacher.add(e)
// })  
// arryAll.forEach(function(item,index){
// 		student.add(item)
// 	})
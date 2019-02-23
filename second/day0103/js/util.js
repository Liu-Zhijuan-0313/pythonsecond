// 该js文件用来存放项目的工具
// 定义函数
		   
// 编写函数求两个数的和
function add(a,b){
   return a+b;
}

function sleep(str)
{
	console.log("睡得"+str);	
}


let Student = new Object();
Student.name="py1811";
Student.sleep = sleep;

// 匿名函数 
Student.playgame = function(gamename){
	console.log("玩"+gamename);
}

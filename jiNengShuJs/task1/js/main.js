//当前盒子索引,盒子对象
var boxIndex = null,
	box = document.getElementsByClassName('box');

//为按钮添加事件
var startBtn = document.getElementById('start'),
	stopBtn = document.getElementById('stop'),
	clear;

	startBtn.onclick = function(){
	changeBgColor();
}
stopBtn.onclick = function(){
	if (clear) {
		clearInterval(clear);
		box[(boxIndex[0])].style.backgroundColor = "";
		box[(boxIndex[1])].style.backgroundColor = "";
		box[(boxIndex[2])].style.backgroundColor = "";
	}
}


//生成随机数组
function randomArr(Len, Min, Max){
	var Arr = new Array(Len),
		randomInt;
	for (var i = 0; i < Len; i++) {
		randomInt = Math.floor(Math.random() * (Max - Min + 1)) + Min;
		for (var j = 0; j <= i; j++) {
			if (randomInt == Arr[j]) {
				i--;
				break;
			}else if (i == j) {
				Arr[i] = randomInt
			}
		}
	}

	return Arr;
}

//改变颜色
function  changeBgColor (){
	if (boxIndex) {
		box[(boxIndex[0])].style.backgroundColor = "";
		box[(boxIndex[1])].style.backgroundColor = "";
		box[(boxIndex[2])].style.backgroundColor = "";
	}
	boxIndex = randomArr(3, 0, 8);
	bgColor = new Array(3);
	bgColor[0] = "rgb(" + randomArr(3, 0, 255).toString() + ")";
	bgColor[1] = "rgb(" + randomArr(3, 0, 255).toString() + ")";
	bgColor[2] = "rgb(" + randomArr(3, 0, 255).toString() + ")";
	box[(boxIndex[0])].style.backgroundColor = bgColor[0];
	box[(boxIndex[1])].style.backgroundColor = bgColor[1];
	box[(boxIndex[2])].style.backgroundColor = bgColor[2];
	clear = setTimeout(changeBgColor, 1000);
}

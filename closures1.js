//for output 3 3 3 
function build(){
	var arr=[];
	for(var i=0;i<3;i++){
		arr.push(function(){
			console.log(i);
		});
	}
	return  arr;
}

var fs=build();
fs[0]();
fs[1]();
fs[2]();

//for output 0 1 2
function build1(){
	var arr=[];
	for(var i=0;i<3;i++){
		let j=i;
		arr.push(function(){
			console.log(j);
		});
	}
	return  arr;
}

var fs1=build1();
fs1[0]();
fs1[1]();
fs1[2]();

//for output 0 1 2
function build2(){
	var arr=[];
	for(var i=0;i<3;i++){
		
		arr.push(function(j){
			return function(){
				console.log(j);
			}
		}(i));
	}
	return  arr;
}

var fs2=build2();
fs2[0]();
fs2[1]();
fs2[2]();


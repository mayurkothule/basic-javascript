var person={
	fname:'mayur',
	lname:'kothle',
	getFullName:function(){
		var fullName=this.fname+' '+this.lname;
		return fullName;
	}
}

var logName=function(lang1,lang2){
	console.log('logged: '+this.getFullName());
	console.log('argus: '+lang1+' ' +lang2);
}

var logPersonName=logName.bind(person);
logPersonName('English','Marathi');

logName.call(person,'French','Spanish');

logName.apply(person,['Japanies','chianies']);

//function browing 

var person2={
	fname:'Rahul',
	lname:'Jadhav'
}

console.log(person.getFullName.apply(person2));

//function currying

function multipy(a,b){
    
    return a*b;
}

var multipyByTwo=multipy.bind(this,2);
console.log(multipyByTwo(5));

var multipyByThree=multipy.bind(this,3);
console.log(multipyByThree(5));
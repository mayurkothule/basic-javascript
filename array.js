
var arr=[
         1,
         false,
         {
         	name:' mayur',
         	address:'Pune'
         },
          function(name)
          {
          	var greet='hello';
          	console.log(greet + name);
          },
          "hello"
        ];

        console.log(arr);
        arr[3](arr[2].name);
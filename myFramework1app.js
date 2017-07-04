//var g=G$('Mayur','Kothue');
/*g.greet();
g.greet(true);

g.greet().greet(true).log();

g.greet().setLang('es').greet(true).log();*/
//g.greet().setLang('invalid lang').greet(true).log();


$(document).ready(function() {
                  
              $('#login').click(function() {
                 
                   var loginGrtr=G$('Rahul','Jadhav');

   $('#loginDiv').hide();

   loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
                        });
            })
/*$('#login').click(function(){
	
   var loginGrtr=G$('Rahul','Jadhav');

   $('#loginDiv').hide();

   //loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
});*/
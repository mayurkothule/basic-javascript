(function(global,$){


		var Greetr=function(fname,lname,lang){
			return new Greetr.init(fname,lname,lang);
		}

		var supportedLangs=['en','es'];

		var greetings={
			en:'Hello',
			es:'Hola'
		};

		var formalGreetings={
			en:'Greetings',
			es:'Saludos'
		};

		var logMessages={
			en:'Logged in',
			es:'Inici6 sessi6n'
		};

		Greetr.prototype={
			fullName:function(){
				return this.fname+' '+this.lname;
			},

			validate:function(){
				if(supportedLangs.indexOf(this.lang)===-1){
					throw 'invalid language';
				}
			},

			greeting:function(){
				return greetings[this.lang]+' '+this.fname+'!';
			},

			formalGreeting:function(){
				return formalGreetings[this.lang]+' '+this.fullName();
			},

			greet:function(formal){
				var msg;
				if(formal){
					msg=this.formalGreeting();
				}
				else{
					msg=this.greeting();
				}
				if(console)
				{
					console.log(msg);

				}
				return this;
			},

			log:function(){
				if(console){
					console.log(logMessages[this.lang]+':'+this.fullName());
				}

				return this;
			},
			setLang:function(lang){
				this.lang=lang;
				this.validate();
				return this;
			},

			HTMLGreeting:function(selector,formal){
					if(!$){
						throw  'jQuery not loaded';
					}

					if(!selector){
						throw 'missing jQuery selector';
					}

					var msg;
					if(formal){
						msg=this.formalGreeting();
					}

					else{
						msg=this.greeting();
					}

					$(selector).html(msg);

					return this;
			}
		};

		Greetr.init=function(fname,lname,lang){
			var self=this;
			self.fname=fname||' ';
			self.lname=lname||' ';
			self.lang=lang||'en';
		}

		Greetr.init.prototype=Greetr.prototype;
		global.Greetr=global.G$=Greetr;
}(window,jQuery));
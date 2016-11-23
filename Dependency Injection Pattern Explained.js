/* Dependency Injection Pattern Explained..... */

var angular = {
	'HelloWorld' : {
		$scope : function() {
			console.log('hello');
		},
		bye: function() {
			console.log('bye')
		}
	}
};

var injector = function(input) {
	var _namespace = angular[input];
	
	return {
		invoke: function (input) {
			//1 - Separar el callback //listo
			//2- Obtener los argumentos //listo
			//3- mapear los argumentos vs dependencias //listo
			//Ejecutar... callback
			
			//['$scope', fn()]
			var callback = input[input.length - 1];
			var args = input.slice(0, input.length - 1);
			
			var func = args.map(function(arg) {
					return _namespace[arg];
			})
			
			/*
					func -> [function() { console.log('hello'); }, function() {console.log('bye')}]
			*/
		
			return callback.apply(null, func);
			
		}
	}
	
	
}




var app = injector('HelloWorld')
app.invoke(['$scope', 'bye', function($scope, bye) {
	
	$scope();
	
	
	
}])
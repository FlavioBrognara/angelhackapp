function createUser() {
		var name = "Admin Health"
		var email = "admin@admin.com.br";
		var password = "12345678" //Min 8 characthers

		$.ajax({
		  type: "POST",
		  url: 'http://healthapp-angel.herokuapp.com/api/users',
		  data: {user:{nome: name, email: email, password: password}},
		  dataType: 'json',
		  success: function(data){
		  	//Colocar redirecionamento para tela de login
		  	//o paramtro data recebe um atributo auth_token salvar na sessao
		  	console.log(data)
		  },
		  error: function(jqXHR, textStatus, errorThrown){
		  	//colocar alert de errors
		  	console.log(textStatus, errorThrown)
		  }
		});
	
}
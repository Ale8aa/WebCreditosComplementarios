function validar()
		  {
              usuario1 = "alejandra"
              contraseña1 = "1234"

		   /*user=document.getElementById(nomUsuario);
		   pwd=document.getElementById(password);*/
		   if(document.form.pass.value == contraseña1 && document.form.user.value == usuario1)
			{
			 alert("Haz iniciado sesión correctamente");
			 window.location="/Proyecto Final/inicio.html"
             user.focus();
			 return false;
			}
		   else
			{
			alert("Porfavor ingresa nombre y usuarios correctos.");
			  }
		  }
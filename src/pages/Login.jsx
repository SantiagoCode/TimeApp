import React from 'react';
import '../css/login.css';

const Login = () => {
	return <div>LOGINX

		<p>Nombre de la web</p>
		
		<h1 className ="loginPage-title">Ingresa en nuestra Web</h1>
		
		<a href='www.facebook.com'>facebook</a>
		<a href='www.google.com'>google</a>
		<a href='www.gmail.com'>gmail</a>
	
	<form className='formulario'>

	<input type="text" name="username"/>

	<input type="password" name="password"/>

	<buttom type="submit" variant="primary">Login</buttom>

	</form>


		
		
		
		
		
		
		<div className='GreenBox'>

		</div>
	


	</div>;
	return <>
		<div>Login</div>;
	</>
};

export default Login;

import React from 'react';
import './../../assets/css/login.css'

const Login = () => {
	return <div className='global'>
		
		<div className='container-global'>
			
			<div className='block-blue'>
				
				<div className='container-login'>
					
					<h1 className ="login-title">Ingresa en nuestra Web</h1>
						<div className='redes-sociales'>
					<a href='www.facebook.com'><img src='./../../assets/images/facebook-svgrepo-com.svg' className='logos'/></a>
					<a href='www.google.com'><img src='./../../assets/images/google-plus-svgrepo-com.svg' className='logos'/></a>
					<a href='www.gmail.com'><img src='./../../assets/images/google-svgrepo-com.svg' className='logos'/></a>
						</div>
						
					<div className='line-text'>
						<p>Ingresa tus datos para iniciar</p>
					</div>
						
							<form className='formulario'>
						<div className='inp'>
							<div className='icon-left'>
										<img src='./../../assets/images/user-svgrepo-com.svg'/>
							</div>
							<input type="text" name="username" placeholder='Nombre'/>
						</div>
						<div className='inp'>
							<div className='icon-left'>
										-<img src='./../../assets/images/password-minimalistic-input-svgrepo-com.svg'/>
							</div>
							<input type="password" name="password" placeholder='Clave'/>
						</div>						
							
							<div className='btn-login'>
								<input type="submit" value="Ingresar"/>
							</div>
							<div className='btn-remember'>
								<input type="submit" value="¿Olvidaste la contraseña?"/>
							</div>
							</form>
					
				</div>
		
		</div>

		
		<div className='block-green'>
			
			<div className='greenbox'>
				
				<h2 className ="login-title">Hello, Friend!</h2>
				<p>Lorem ipsum dolor sit amet 
					consectetur, adipisicing elit. 
					Aut, temporibus consectetur, 
					hic aperiam cupiditate culpa 
					consequatur fugit facere vero 
					et at aliquam illum, est dolore
					vitae labore. Porro, magnam 
					ipsum!</p>

					<input type='submit' className='btn-register' name='registro' value="Registrarte"/>
				
			</div>
		
		</div>
	
	</div>


	</div>;
	return <>
		<div>Login</div>;
	</>
};

export default Login;

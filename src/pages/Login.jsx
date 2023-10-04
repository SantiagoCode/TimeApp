import {useEffect} from 'react';
import './../../assets/css/login.css'



const Login = () => {

	useEffect(() => {

	let bt1 = document.querySelector('#registro');
	let bt2 = document.querySelector('#ingresa');
	let infoLogin = document.querySelector('#infoLogin');
	let infoRegister = document.querySelector('infoRegister');
	
	let infoUno = `<div id='infoRegister' class="global-box">
            
	<div class="block-left">
		<div class="content-block-left">
			<h2 class ="top-tittle">Welcome Back!</h2>
			<p class='prf'>Lorem ipsum dolor sit amet 
				consectetur, adipisicing elit. 
				Aut, temporibus consectetur, 
				hic aperiam cupiditate culpa 
				consequatur fugit facere vero 
				et at aliquam illum, est dolore
				vitae labore. Porro, magnam 
				ipsum!12345</p>
			<div class="bt-ingreso">
				<input id='ingresa' type='submit' class='bt-login' name='Ingresar' value="INGRESAR"/>
			</div>
		</div>      
	</div> 


<div class='block-rigth'>
<h1 class ="title-login">Ingresa en nuestra Web</h1>
	<div class='redes-sociales'>
		<a href='www.facebook.com'><img src='./../../assets/images/facebook-svgrepo-com.svg' class='logos'/></a>
		<a href='www.google.com'><img src='./../../assets/images/google-plus-svgrepo-com.svg' class='logos'/></a>
		<a href='www.gmail.com'><img src='./../../assets/images/google-svgrepo-com.svg' class='logos'/></a>
	</div>
	<div class='line-text'>
		<p>Ingresa tus datos para registrarte</p>
	</div>
	<form class='formulario login'>
				<div class='inp register'>
					<div class='icon-left'>
						<img src='./../../assets/images/user-svgrepo-com.svg'/>
					</div>
				<input type="text" name="username" placeholder='Nombre'/>
			</div>
			<div class='inp register'>
				<div class='icon-left'>
					<img src='./../../assets/images/email-1-svgrepo-com.svg'/>
				</div>
				<input type="email" name="email" placeholder='Email'/>
			</div>
			<div class='inp register'>
				<div class='icon-left'>
					<img src='./../../assets/images/password-minimalistic-input-svgrepo-com.svg'/>
				</div>
				<input type="password" name="password" placeholder='Clave'/>
			</div>							
				
				<div class='bt login'>
					<input  type="submit" value="REGISTRARTE"/>
				</div>

			</form>
	
	

</div>
</div>`;
	let infoDos = `<div id='infoLogin' class='global'>
		
	<div class='container-global'>
		
		<div class='block-blue'>
			
			<div class='container-login'>
				
				<h1 class ="login-title">Ingresa en nuestra Web</h1>
					<div class='redes-sociales'>
				<a href='www.facebook.com'><img src='./../../assets/images/facebook-svgrepo-com.svg' class='logos'/></a>
				<a href='www.google.com'><img src='./../../assets/images/google-plus-svgrepo-com.svg' class='logos'/></a>
				<a href='www.gmail.com'><img src='./../../assets/images/google-svgrepo-com.svg' class='logos'/></a>
					</div>
					
				<div class='line-text'>
					<p>Ingresa tus datos para iniciar</p>
				</div>
					
					<form class='formulario'>
						<div class='inp'>
							<div class='icon-left'>
								<img src='./../../assets/images/user-svgrepo-com.svg'/>
							</div>
						<input type="text" name="username" placeholder='Nombre'/>
					</div>
					<div class='inp'>
						<div class='icon-left'>
							<img src='./../../assets/images/password-minimalistic-input-svgrepo-com.svg'/>
						</div>
						<input type="password" name="password" placeholder='Clave'/>
					</div>						
						
						<div class='btn-login'>
							<input type="submit" value="INGRESAR"/>
						</div>
						<div class='btn-remember'>
							<input type="submit" value="¿Olvidaste la contraseña?"/>
						</div>
					</form>
				
			</div>
	
	</div>

	
	<div class='block-green'>
		
		<div class='greenbox'>
			
			<h2 class ="subtitle">Hello, Friend!</h2>
			<p>Lorem ipsum dolor sit amet 
				consectetur, adipisicing elit. 
				Aut, temporibus consectetur, 
				hic aperiam cupiditate culpa 
				consequatur fugit facere vero 
				et at aliquam illum, est dolore
				vitae labore. Porro, magnam 
				ipsum!</p>

				<input id='registrate' type='submit' class='btn-register' name='registro' value="REGISTRATE"/>
			
		</div>
	
	</div>

</div>


</div>;`

bt1?.addEventListener("click", showRegister);
bt2?.addEventListener("click", showLogin);

function showRegister(){
	infoLogin.innerHTML = infoUno;
}
function showLogin(){
	infoRegister.innerHTML = infoDos;
}
	











	},[]);





	return <div id='infoLogin' className='global'>
		
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
								<img src='./../../assets/images/password-minimalistic-input-svgrepo-com.svg'/>
							</div>
							<input type="password" name="password" placeholder='Clave'/>
						</div>						
							
							<div className='btn-login'>
								<input type="submit" value="INGRESAR"/>
							</div>
							<div className='btn-remember'>
								<input type="submit" value="¿Olvidaste la contraseña?"/>
							</div>
						</form>
					
				</div>
		
		</div>

		
		<div className='block-green'>
			
			<div className='greenbox'>
				
				<h2 className ="subtitle">Hello, Friend!</h2>
				<p>Lorem ipsum dolor sit amet 
					consectetur, adipisicing elit. 
					Aut, temporibus consectetur, 
					hic aperiam cupiditate culpa 
					consequatur fugit facere vero 
					et at aliquam illum, est dolore
					vitae labore. Porro, magnam 
					ipsum!</p>

					<input id='registro' type='submit' className='btn-register' name='registro' value="REGISTRATE"/>
				
			</div>
		
		</div>
	
	</div>


	</div>
	
};

export default Login;

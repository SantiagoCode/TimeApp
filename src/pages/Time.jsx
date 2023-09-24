import React from 'react';
import '../css/time.css';

const Time = () => {
	let botonTiempo = document.getElementById('switch');
		if (botonTiempo?.checked) {
			let imagen1	= document.querySelector('time-img-1');
				let imagen2 = document.querySelector('time-img-2');
				imagen1.classList.toggle('invisible');
				imagen2.classList.toggle('invisible');
				let fondoImagen = querySelector('fondo-time');
				fondoImagen.style.backgroundImage = 'url("https://media.istockphoto.com/id/1328626378/es/v%C3%ADdeo/cielo-despejado.jpg?s=640x640&k=20&c=BN7eCFmo2TgJIaewLVJKoiz9FcGoSWOYs1NxO1tpPBs=") no-repeat';
				let timeContainer = querySelector('time-container');
				timeContainer.style.background = 'linear-gradient(rgba(200,218,221,1),rgba(208,229,247,0.7))';
			}
	return <>
	<div className='fondo-time'>
		<div className='time-container dark'>
			<div className='switch-button'>
				<input type='checkbox' className='button-check' id='switch'></input>
				<label for='switch' className='switch-info'><div className='info-icons'><i name='light'>1</i><i name='dark'>2</i></div></label>
			</div>
			<div className='time-info-box'>
				<div className='time-info'>
				<span className='time-lugar'>Venezuela, Caracas <br /> hoy 01-01-2023</span>
				<span className='time-temperatura'>40 °C</span>
				</div>
				<div className='time-img'>
					<img className='time-img-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRz7ufWSFD-MG1jCzmZlx32s5dPQK31rrFQ&usqp=CAU" alt="luna-y-nubes" />
					<img className='time-img-2 invisible' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_BcABL76Mtn2JhIekP9N_Kxbdw4NYXQGAA&usqp=CAU" alt="sol y nubes" />
				</div>
			</div>
		</div>
	</div>
	</>
	;
};
	
		

export default Time;

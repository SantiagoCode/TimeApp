import React from 'react';
import '../css/time.css';

const Time = () => {
	return <>
	<div className='fondo-time'>
		<div className='time-container dark'>Time: 
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
					<img src="" alt="" />
					<img src="" alt="" />
				</div>
			</div>
			
		</div>
	</div>
	</>
	;
};




export default Time;

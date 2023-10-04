import {useEffect} from 'react';
import './../../assets/css/products.css'


const Products = () => {

	useEffect(() => {
		let boton1 = document.querySelector('#boton1');
		let boton2 = document.querySelector('#boton2');

		let boxRigth= document.querySelector('.box.rigth');
		let boxCenter=document.querySelector('.box.center');
		let boxLeft=document.querySelector('.box.left');

		let contenidoBoxTres = `
			<h3 class='subtitle-tarjets'>Free 1</h3><p>per mounth</p>
			<div class="item-top">8$</div>
			<div class="item-middle">
				<br/>✅Access to all modules
				<br/><br/>✅Build first screen free
				<br/><br/>❌Full Airtable integration
				<br/><br/>❌1:1 Build sessions
				<br/><br/>❌Sell memberships
				<br/><br/>❌Premiun support
				<br/><br/>❌Connect to Shopify & WooCommerce
				<br/><br/>❌Custom admin panel to mange user, data, etc
			</div>
			<div class="item-bot"><input type="submit" value='Comprar tarjeta'/></div>
		`;
		let contenidoBoxDos = `
			<h3 class='subtitle-tarjets'>Startup 1</h3><p>per mounth</p>
			<div class="item-top">10$</div>
			<div class="item-middle">
				<br/>✅Access to all modules
				<br/><br/>✅Build first screen free
				<br/><br/>✅Full Airtable integration
				<br/><br/>✅1:1 Build sessions
				<br/><br/>✅Sell memberships
				<br/><br/>❌Premiun support
				<br/><br/>❌Connect to Shopify & WooCommerce
				<br/><br/>❌Custom admin panel to mange user, data, etc
			</div>
			<div class="item-bot"><input type='submit' value='Comprar tarjeta'/></div>`;
		let contenidoBoxUno = `
			<h3 class='subtitle-tarjets'>Growth 1</h3><p>per mounth</p>
			<div class="item-top">15$</div>
			<div class="item-middle">
				<br/>✅Access to all modules
				<br/><br/>✅Build first screen free
				<br/><br/>✅Full Airtable integration
				<br/><br/>✅1:1 Build sessions
				<br/><br/>✅Sell memberships
				<br/><br/>✅Premiun support
				<br/><br/>✅Connect to Shopify & WooCommerce
				<br/><br/>✅Custom admin panel to mange user, data, etc
			</div>
			<div class="item-bot"><input type='submit' value='Comprar tarjeta'/></div>
		`;

		let contenidoAlternativoBoxUno = `
			<h3 class='subtitle-tarjets'>Free</h3><p>per mounth</p>
			<div class="item-top">8$</div>
			<div class="item-middle">
				<br/>✅Access to all modules
				<br/><br/>✅Build first screen free
				<br/><br/>❌Full Airtable integration
				<br/><br/>❌1:1 Build sessions
				<br/><br/>❌Sell memberships
				<br/><br/>❌Premiun support
				<br/><br/>❌Connect to Shopify & WooCommerce
				<br/><br/>❌Custom admin panel to mange user, data, etc
			</div>
			<div class="item-bot"><input type='submit' value='Comprar tarjeta'/></div>`;
		let contenidoAlternativoBoxDos = `
			<h3 class='subtitle-tarjets'>Startup</h3><p>per mounth</p>
			<div class="item-top">10$</div>
			<div class="item-middle">
				<br/>✅Access to all modules
				<br/><br/>✅Build first screen free
				<br/><br/>✅Full Airtable integration
				<br/><br/>✅1:1 Build sessions
				<br/><br/>✅Sell memberships
				<br/><br/>❌Premiun support
				<br/><br/>❌Connect to Shopify & WooCommerce
				<br/><br/>❌Custom admin panel to mange user, data, etc
			</div>
			<div class="item-bot"><input type='submit' value='Comprar tarjeta'/></div>`;
		let contenidoAlternativoBoxTres = `
			<h3 class='subtitle-tarjets'>Growth</h3><p>per mounth</p>
			<div class="item-top">15$</div>
			<div class="item-middle">
				<br/>✅Access to all modules
				<br/><br/>✅Build first screen free
				<br/><br/>✅Full Airtable integration
				<br/><br/>✅1:1 Build sessions
				<br/><br/>✅Sell memberships
				<br/><br/>✅Premiun support
				<br/><br/>✅Connect to Shopify & WooCommerce
				<br/><br/>✅Custom admin panel to mange user, data, etc
			</div>
			<div class="item-bot"><input type='submit' value='Comprar tarjeta'/></div>
		`;

		mostrarInformacion()

		boton1?.addEventListener("click", mostrarInformacion);
		boton2?.addEventListener("click", mostrarInformacion2);

		function mostrarInformacion() {
			boxRigth.innerHTML = contenidoBoxUno;
			boxCenter.innerHTML = contenidoBoxDos;
			boxLeft.innerHTML = contenidoBoxTres;
		}
		
		function mostrarInformacion2() {
			boxRigth.innerHTML = contenidoAlternativoBoxUno;
			boxCenter.innerHTML = contenidoAlternativoBoxDos;
			boxLeft.innerHTML = contenidoAlternativoBoxTres;
		}
	}, [])
	



	return <>

		<section className='global'>
			
			<div className='title'>
				<h2 className='subtitulo-productos'>Pricing</h2>
				<p>Lorem ipsum dolor sit amet 
					consectetur adipisicing elit. 
					Unde officia <br></br>atque perferendis 
					quaerat consequatur facere soluta, 
					vitae eius in <br></br>fugit alias. 
					Corporis quasi laudantium eum 
					harum omnis ducimus alias 
					distinctio!</p>
			</div>
			
			<div className='block-head'>
				<div className='item-global-buttoms'>
					<button id='boton1' className='btn-funcion'>Tarjetas 1</button>
					<button id='boton2' className='btn-funcion'>Tarjetas 2</button>
				</div>
			</div>

			<div className='articles-box' id='contenido1'>
				<div className="box left"></div>
				<div className="box center"></div>
				<div className="box rigth"></div>
			</div>

			<div className='block-footer'>
				<h3 className='title-footer'>Preguntas frecuentes</h3>
				<div className='item-question primary'><h3 className='subtitle-footer'>Pregunta1</h3>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis illum fugit rem similique quasi corporis vitae! Quam eligendi nam ab illo harum dicta tenetur, iste incidunt delectus magnam suscipit sequi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eos impedit autem ex officia eum amet quas dolores placeat maiores rem sunt, corrupti tempore, hic neque alias dolor. Odit, autem!</div>
				
				<div className='item-question'><h3 className='subtitle-footer'>Pregunta2</h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam accusantium doloremque aut, quam laudantium exercitationem vitae at mollitia inventore voluptatem, pariatur, velit possimus quibusdam ad consectetur. Corrupti, ipsum? Harum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eos impedit autem ex officia eum amet quas dolores placeat maiores rem sunt, corrupti tempore, hic neque alias dolor. Odit, autem!</div>
				
				<div className='item-question'><h3 className='subtitle-footer'>Pregunta3</h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque iste suscipit nam vel, minima veniam excepturi reiciendis repellat voluptatum corrupti amet provident aperiam temporibus nemo modi accusantium molestias. Impedit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis eos impedit autem ex officia eum amet quas dolores placeat maiores rem sunt, corrupti tempore, hic neque alias dolor. Odit, autem!</div>
			</div>
		</section>

	</>;
};

export default Products;

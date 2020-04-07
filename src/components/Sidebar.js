import React from 'react'
import aboutImg from '../img/about.jpg'

export default function Sidebar() {
	return (
	 <div>
	   	<div>
	     	<nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
	     	<aside id="colorlib-aside" className="border js-fullheight">
	      	<div className="text-center">
	         	<div className="author-img" style={{backgroundImage: `url(${aboutImg})`}} />
						<h1 id="colorlib-logo"><a href="index.html"> Rendy Dendimara</a></h1>
						<span className="email"><i className="icon-mail"></i>r3ndydinar@gmail.com</span>
		      </div>
       		<nav id="colorlib-main-menu" role="navigation" className="navbar">
         		<div id="navbar" className="collapse">
           		<ul>
             		<li><a href="#home" data-nav-section="home">Pengenalan</a></li>
	            	<li><a href="#about" data-nav-section="about">Tentang</a></li>
		            <li><a href="#services" data-nav-section="services">Jasa</a></li>
		            <li><a href="#skills" data-nav-section="skills">Keterampilan</a></li>
		            <li><a href="#education" data-nav-section="education">Pendidikan</a></li>
		            <li><a href="#experience" data-nav-section="experience">Pengalaman</a></li>
		            <li><a href="#work" data-nav-section="work">Portofolio</a></li>
		            <li><a href="#contact" data-nav-section="contact">Kontak</a></li>
		          </ul>
         		</div>
      	 	</nav>
     			<nav id="colorlib-main-menu">
         		<ul>
						<li>
							<a href="https://www.facebook.com/profile.php?id=100010536482965" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
						</li>
						<li>
							<a href="https://www.instagram.com/R3ndydinar" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
						</li>
						<li>
							<a href="https://twitter.com/GenjiTapaleuk" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
						</li>
						<li>
							<a href="https://github.com/Rendydinar" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/rendy-dendimara-133934196" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
						</li>
	         	</ul>
       		</nav>
       		<div className="colorlib-footer">
       		  <p>
       		  	<small>&copy; {new Date().getFullYear()} Thanks to <i className="icon-heart" aria-hidden="true" style={{color: 'red'}} /> <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> </small>
         		</p>
      	 	</div>
     		</aside>
	   	</div>
	 	</div>
	)
}
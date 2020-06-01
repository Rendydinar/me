import React from 'react'

export default function Services() {
	return (
		<div>
			<section className="colorlib-services" data-section="services">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Apa yang saya lakukan?</span>
							<h2 className="colorlib-heading">Inilah beberapa keahlian saya</h2>
						</div>
					</div>
					<div className="row row-pt-md">
						<div className="col-md-4 text-center animate-box">
							<div className="services color-1">
								<span className="icon">
									<i className="icon-layers2"></i>
								</span>
								<div className="desc">
									<h3>Web Development</h3>
									<p>Saya bisa membuat website sesuai kebutuhan untuk keperluan bisnis anda.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center animate-box">
							<div className="services color-3">
								<span className="icon">
									<i className="icon-phone3"></i>
								</span>
								<div className="desc">
									<h3>Web Application</h3>
									<p>Saya dapat membuat aplikasi berbasis website sesuai dengan kebutuhan bisnis anda.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>				
		</div>
	)
}
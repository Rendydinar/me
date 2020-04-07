import React from 'react'

export default function About() {
	return (
		<section className="colorlib-about" data-section="about">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-12">
						<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div className="col-md-12">
								<div className="about-desc">
									<span className="heading-meta">Tentang Saya</span>
									<h2 className="colorlib-heading">Siapa Saya ?</h2>
									<p>Saya adalah seorang web developer yang sangat mencintai teknologi dan kadang saya suka memikirkan bagaimana kalau saya dapat membuat sebuah sistem yang dapat membantu kehidupan banyak orang.</p>
									<p>Keahlian saya di bidang pemprograman web. Saya berpengalaman selama 1 Tahun pada bidang pemprograman web. Saya mulai belajar programming dan bagaimana cara membuat program sejak saya di bangku SMA kelas 2. Bahasa pemprograman pertama yang saya pelajari adalah Pemprograman C++. Begitu banyak kisah yang telah saya dapatkan dari proses yang saya lalui.</p>
									<p>Saat ini saya sedang fokus pada bidang pemprograman web, saya sangat menyukai belajar teknologi-teknologi baru dan membuat project-project sederhana yang dapat membantu kehidupan saya sehari-hari.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
								<div className="services color-2">
									<span className="icon2"><i className="icon-layers2"></i></span>
									<h3>Web Development</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
								<div className="services color-4">
									<span className="icon2"><i className="icon-phone3"></i></span>
									<h3>Web Application</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
								<div className="services color-3">
									<span className="icon2"><i className="icon-data"></i></span>
									<h3>Databases</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
								<div className="hire">
									<h2>Saya senang memberitahukan Anda bahwa 100+ project dilakukan dengan sukses!</h2>
									{/*<a href="#" className="btn-hire">Hire me</a>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


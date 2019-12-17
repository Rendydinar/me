import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
					<div className="col-md-12">	
						<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
						<div className="col-md-12">
							<div className="about-desc">
							<span className="heading-meta">Tentang Saya</span>
							<h2 className="colorlib-heading">Siapa Saya ?</h2>
							<p>Saya adalah seorang mahasiswa di Universitas Kristen Wira Wacana Sumba, prodi saya adalah Teknik Informatika. Saya sangat mencintai teknologi dan kadang saya suka memikirkan bagaimana kalau saya dapat membuat sebuah sistem yang dapat membantu kehidupan banyak orang</p>
							<p>Saat ini saya bekerja sebagai Freelance Web Developer. Keahlian saya di bidang pemprograman web. Saya berpengalaman selama 1 Tahun pada bidang pemprograman web. Saya mulai belajar coding dan bagaimana cara membuat program dari kelas 2 SMA. Begitu banyak kisah yang telah saya dapatkan dari proses yang saya lalui. Saya berharap akan ada orang seperti saya yang giat juga belajar mengenai coding terutama mahasiswa di program studi Teknik Informatika.</p>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Apa yang saya lakukan?</span>
                <h2 className="colorlib-heading">Disini adalah beberapa hal yang saya lakukan</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>Saya cukup berpengalaman dalam membangun sebuah website, entah itu website statis ataupun website dinamis. Saya menggunakan HTML, CSS, Javascript, NodeJS, ReactJS, MySQL, MongoDB.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}

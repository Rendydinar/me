import React, {useState} from 'react'

export default function Contact() {
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('Lowongan Pekerjaan');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	function handleOnSubmit(e){
		e.preventDefault();
		let body = `Dear Rendy, ${message}   From ${name} ${email}`
		window.location.href = `mailto:r3ndydinar@gmail.com?subject=${subject}&body=${body}`;
	}

	return (
		<div>
			<section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">HUBUNGI</span>
							<h2 className="colorlib-heading">KONTAK</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-mail"></i>
								</div>
								<div className="colorlib-text">
									<p>r3ndydinar@gmail.com</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p>Jln. Perdamaian Wangga, Waingapu, Nusa Tenggara Timur, Indonesia</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="tel://+6282217971133">+6282217971133</a></p>
								</div>
							</div>
						</div>

						<div className="col-md-7 col-md-push-1">
							<div className="row">
								<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
									<form>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Nama" onChange={(e) => setName(e.target.value)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
										</div>
										<div className="form-group">
											<textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Pesan" onChange={(e) => setMessage(e.target.value)}></textarea>
										</div>
										<div className="form-group">
											<input type="button" className="btn btn-primary btn-send-message" value="Kirim Pesan" onClick={handleOnSubmit} />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>			
		</div>
	)
}


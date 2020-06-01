import React from 'react'

import informersblogImg from '../img/informersblog.png'
import mrbalenbarbershopImg from '../img/mrbalenbarbershop.png'
import mynotesImg from '../img/mynotes.png'
import ourchattingImg from '../img/ourchatting.png'
import reapiImg from '../img/reapi.png'
import waingapukawalcoronaImg from '../img/waingapukawalcorona.png'
import quickChattingImg from '../img/quick-chatting.png'

export default function Portofolio() {
		return (
			<div>
				<section className="colorlib-work" data-section="work">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">PORTOFOLIO</span>
							<h2 className="colorlib-heading animate-box">PORTOFOLIO SAYA</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: `url(${quickChattingImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="https://waingapukawalcorona.netlify.com/">QUICK CHATTING</a></h3>
										<span>Web App</span>
										<p className="icon">
											<span><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/quickchatting"><i className="icon-share3"></i></a></span>
											<span><a target="_blank" rel="noopener" href="https://quick-chatting.netlify.app/"><i className="icon-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: `url(${waingapukawalcoronaImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="https://waingapukawalcorona.netlify.com/">WAINGAPU KAWAL CORONA</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/coronavirus"><i className="icon-share3"></i></a></span>
											<span><a target="_blank" rel="noopener" href="https://waingapukawalcorona.netlify.com/"><i className="icon-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{backgroundImage: `url(${informersblogImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/UNKRISWINA-INFORMERS">UNKRISWINA SUMBA INFORMERS BLOG</a></h3>
										<span>Blog</span>
										<p className="icon">
											<span><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/UNKRISWINA-INFORMERS"><i className="icon-share3"></i></a></span>
											<span><a target="_blank" rel="noopener" href="http://unkriswinasumbainformers.netlify.com/"><i className="icon-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
							<div className="project" style={{backgroundImage: `url(${mynotesImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/My-Notes">MY NOTES</a></h3>
										<span>Web App</span>
										<p className="icon">
											<span><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/My-Notes"><i className="icon-share3"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: `url(${ourchattingImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="#">OURCHATTING</a></h3>
										<span>Web App</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: `url(${reapiImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="https://reapitool.herokuapp.com/re-api">RE-API</a></h3>
										<span>Web Tool (Penerapan REST API)</span>
										<p className="icon">
											<span><a target="_blank" rel="noopener" href="https://reapitool.herokuapp.com/re-api"><i className="icon-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: `url(${mrbalenbarbershopImg})`}}>
								<div className="desc">
									<div className="con">
										<h3><a target="_blank" rel="noopener" href="https://mrbelenbarbershop.now.sh/">MR.BALENS BARBER SHOP</a></h3>
										<span>Company Profile Website</span>
										<p className="icon">
											<span><a target="_blank" rel="noopener" href="https://github.com/Rendydinar/mrbalenbarbershop.github.io"><i className="icon-share3"></i></a></span>
											<span><a target="_blank" rel="noopener" href="https://mrbelenbarbershop.now.sh/"><i className="icon-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>				
		</div>
	)
}
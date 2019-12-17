import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Beberapa Project</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">OurChatting</a></h3>
											<span>Web App</span>
											<p className="icon">
												<span><a href="https://github.com/Rendydinar/OurChatting-v1.0"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Re-API</a></h3>
											<span>Web Tool</span>
											<p className="icon">
												<span><a href="https://reapitool.herokuapp.com/re-api"><i className="icon-eye" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">My Notes</a></h3>
											<span>Web App</span>
											<p className="icon">
												<span><a href="https://github.com/Rendydinar/My-Notes"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Burung Terbang</a></h3>
											<span>Web Game</span>
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
}

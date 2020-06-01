import React from 'react'
import profile1Img from '../img/profile1.jpg'
import profile3Img from '../img/about.jpg'
import myCV from '../file/rendy_dinar_cv.pdf'

export default function Introduction() {
	return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: `url(${profile3Img})`}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
												<h1> Hi! <br /> I'm Rendy Dendimara</h1>
												<p><a className="btn btn-primary btn-learn" href={myCV} target="_blank" rel="noopener noreferrer"> Download My CV !<i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: `url(${profile1Img})`}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
												<h1>Saya Suka Membangun Sesuatu <br /> Sesuatu!</h1>
												<p><a className="btn btn-primary btn-learn" href="https://github.com/Rendydinar/" target="_blank" rel="noopener noreferrer"> View My Projects<i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
	)
}
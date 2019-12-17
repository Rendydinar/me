import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Kuliah Di Universitas Kristen Wira Wacana Sumba <span>2019-present</span></h2>
                        <p>Saya melanjutkan studi perguruan tinggi di Universitas Kristen Wira Wacana Sumba. Setelah saya sekolah 3 tahun di SMA Katolik Anda Luri dan menamatkan SMP saya di SMP Negri 1 Waingapu. Saya memiliki target kuliah 3 tahun untuk mendapatkan gelar S.Kom, setelah itu jikalau saya memiliki kesempatan untuk melanjutkan kuliah S2 saya maka saya akan melanjutkannya.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React from 'react'

export default function Education() {
	return (
		<div>
			<section className="colorlib-education" data-section="education">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">PENDIDIKAN</span>
							<h2 className="colorlib-heading animate-box">PENDIDIKAN</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div className="fancy-collapse-panel">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingThree">
									        <h4 className="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Mahasiswa Perguruan Tinggi Universitas Kristen Wirawanaca Sumba  <small> 2019-Sekarang.</small> 
									            </a>
									        </h4>
									    </div>
									    <div id="collapseThree" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
									        <div className="panel-body">
									            <p>Saat ini saya adalah seorang Mahasiswa Perguruan Tinggi di Universitas Kristen Wirawanaca Sumba. Saya mengambil jurusan Teknik Informatika S1.</p>	
									        </div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingSma">
									        <h4 className="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSma" aria-expanded="false" aria-controls="collapseSma">SMA Katolik Andaluri 
									            <small> 2016-2019</small></a>
									        </h4>
									    </div>
									    <div id="collapseSma" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSma">
									        <div className="panel-body">
									            <p>Saya menempuh Sekolah Menengah Atas (SMA) di SMA Katolik Andaluri selama 3 tahun.</p>	
									        </div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingSmp">
									        <h4 className="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSmp" aria-expanded="false" aria-controls="collapseSmp">SMP Negeri 1 Waingapu <small> 2013-2016</small>
									            </a>
									        </h4>
									    </div>
									    <div id="collapseSmp" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSmp">
									        <div className="panel-body">
									            <p>Saya menempuh Sekolah Menengah Pertama (SMP) di SMP Negeri 1 Waingapu selama 3 tahun.</p>	
									        </div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingSd">
									        <h4 className="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSd" aria-expanded="false" aria-controls="collapseSd">SD Masehi Payeti 1 Waingapu <small> 2007-2013</small>
									            </a>
									        </h4>
									    </div>
									    <div id="collapseSd" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSd">
									        <div className="panel-body">
									            <p>Saya menempuh Sekolah Dasar (SD) di SD Masehi Payeti 1 Waingapu selama 6 tahun.</p>	
									        </div>
									    </div>
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
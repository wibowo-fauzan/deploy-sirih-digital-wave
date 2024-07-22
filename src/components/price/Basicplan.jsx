import React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../Nav';

const Basicplan = () => {
return (
<>
    <NavBar />
    <section className="py-lg-5 bg-light space-responsive-basicplan">
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <Link to="/" className="btn btn-icon bg-gradient-primary d-lg-block mb-0">
                       Back
                    </Link>
                </div>
                    <h2 className="text-center bg-light text-dark">BASIC PLAN</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card border-0 shadow-lg mx-auto">
                        <div className="row no-gutters">
                            <div className="col-lg-8">
                                <div className="card-body">
                                    <h3 className="text-gradient text-info">Informasi Pembelian</h3>
                                    <p> Anda memiliki Pembaruan Gratis Tanpa Batas dan Dukungan Paket Dasar di setiap
                                        paket. Anda juga memiliki waktu untuk meminta pengembalian dana. </p>
                                    <div className="row mt-5 mb-2">
                                        <div className="col-lg-3 col-12">
                                            <h6 className="text-dark tet-uppercase">Apa yang termasuk</h6>
                                        </div>
                                        <div className="col-6">
                                            <hr className="horizontal dark" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="ps-0">
                                            <div className="info d-flex align-items-center p-2">
                                                <div
                                                    className="icon icon-shape icon-xs rounded-circle bg-gradient-info opacity-6 shadow text-center">
                                                    <i className="fas fa-check opacity-10"></i>
                                                </div>
                                                <div>
                                                    <span className="ps-2">DOMAIN WEBISTE / TAHUN</span>
                                                </div>
                                            </div>
                                            <div className="info d-flex align-items-center p-2">
                                                <div
                                                    className="icon icon-shape icon-xs rounded-circle bg-gradient-info opacity-6 shadow text-center">
                                                    <i className="fas fa-check opacity-10"></i>
                                                </div>
                                                <div>
                                                    <span className="ps-2">HOSTING WEBSITE / BULAN</span>
                                                </div>
                                            </div>
                                            <div className="info d-flex align-items-center p-2">
                                                <div
                                                    className="icon icon-shape icon-xs rounded-circle bg-gradient-info opacity-6 shadow text-center">
                                                    <i className="fas fa-check opacity-10"></i>
                                                </div>
                                                <div>
                                                    <span className="ps-2">WEBSITE PEMBANGUNAN SATU BULAN</span>
                                                </div>
                                            </div>
                                            <div className="info d-flex align-items-center p-2">
                                                <div
                                                    className="icon icon-shape icon-xs rounded-circle bg-gradient-info opacity-6 shadow text-center">
                                                    <i className="fas fa-check opacity-10"></i>
                                                </div>
                                                <div>
                                                    <span className="ps-2">REQUEST HALAMAN LANDING SATU HALAMAN</span>
                                                </div>
                                            </div>
                                            <div className="info d-flex align-items-center p-2">
                                                <div
                                                    className="icon icon-shape icon-xs rounded-circle bg-gradient-info opacity-6 shadow text-center">
                                                    <i className="fas fa-check opacity-10"></i>
                                                </div>
                                                <div>
                                                    <span className="ps-2">RESPONSIVE WEBSITE</span>
                                                </div>
                                            </div>
                                            <div className="info d-flex align-items-center p-2">
                                                <div
                                                    className="icon icon-shape icon-xs rounded-circle bg-gradient-info opacity-6 shadow text-center">
                                                    <i className="fas fa-check opacity-10"></i>
                                                </div>
                                                <div>
                                                    <span className="ps-2">SOCIAL MEDIA LINK</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 my-auto">
                                <div className="card-body text-center">
                                    <h6 className="mt-4 mb-0">Bayar, miliki selamanya</h6>
                                    <h1 className="mt-0">
                                        <small>Rp.</small>1.500.000
                                    </h1>
                                    <a href="https://wa.me/6283157346828?text=*BASIC%20PLAN*%0A%0A-%20DOMAIN%20WEBSITE%20%2F%20TAHUN%0A-%20HOSTING%20WEBSITE%20%2F%20BULAN%0AWEBSITE%20PEMBANGUNAN%20SATU%20BULAN%0A-%20REQUEST%20HALAMAN%20LANDING%20SATU%20HALAMAN%0A-%20RESPONSIVE%20WEBSITE%0A-%20SOCIAL%20MEDIA%20LINK%0A%0A*SAYA%20MINTA%20SAMPLE%20WEBSITE*" type="button" className="btn bg-gradient-info btn-lg mt-4" > Get Access </a>
                                    <p className="text-sm">Dapatkan sampel gratis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
}

export default Basicplan;
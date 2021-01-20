import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './css/normalize.css';
import './css/message.css';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'jquery/dist/jquery.slim.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (		
      <div className="App">
        <header className="jumbotron">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-10">
                <h1>Nua Talker Call Blasting</h1>
                <p>
                  Este espacio es para administrar los audios que se reproducirán en el workflow action
                    </p>
              </div>
              <div className="col-12 col-sm align-self-center">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-md col-sm ali">
              <h1 className="text-center">Grabaciones en el sistema</h1>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12 col-md col-sm">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="false" aria-controls="collapseOne">
                        Grabaciones en el sistema
                                </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <section className="form-wrap" >
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr className="table-dark">
                                <th >Nombre</th>
                                <th style={{ width: "10%" }}>Descargar</th>
                                <th style={{ width: "5%" }}>Borrar</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Grabación 1</td>
                                <td><a href=""><i className="fa fa-download"></i></a></td>
                                <td><button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                      aria-expanded="false" aria-controls="collapseTwo">
                      Cargar nueva grabación
                            </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    <p> <i className="text-danger">* </i>
                                Las grabaciones que se suban al sistema, deben estar en formato WAV, a 8 kHz y 16 bits
                            </p>
                    <div className="input-group">
                      <div className="custom-file">
                        <label className="custom-file-label" >Seleccionar archivo
                          <input type="file" className="custom-file-input" id="inputFile" />
                        </label>
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary" id="uploadFile" type="button">Cargar Archivo</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-6 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Inicio</a></li>
                  <li><a target="_blank" href="http://www.nuatechnology.com/contact-us/">Contacto</a></li>
                </ul>
              </div>
              <div className="col-7 col-sm-5">
                <h5>Contacto</h5>
                <i className="nav-item fa fa-phone fa-lg"></i> Chile: +56 232 108 206<br />
                <i className="nav-item fa fa-phone fa-lg"></i> Colombia: +57 1 580 05 45<br />
                <i className="nav-item fa fa-envelope fa-lg"></i>:
                    <a href="mailto:nuatalker@nuatechnology.com"> nuatalker@nuatechnology.com</a>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <p className="copyright pull-right">
                  <a href="http://www.nautechnology.com">
                    &copy;
                            <script>
                      document.write(new Date().getFullYear())
                            </script> Nua Technology
                        </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default withAuthenticator(App, true);

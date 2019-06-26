import React from 'react'
import '../../App.css';
import { Icon } from 'react-icons-kit'
import {facebook} from 'react-icons-kit/fa/facebook'
import {twitter} from 'react-icons-kit/fa/twitter'
import {whatsapp} from 'react-icons-kit/fa/whatsapp'
import {instagram} from 'react-icons-kit/fa/instagram'
import footer_logo from '../../images/fundo-logo.JPG'


const Footer = () => {
    return (
      <div>
          <footer className="page-footer black darken-3" >
            <div className="container">
              <div className="row">
                <div className="col s3">
                <img src={footer_logo} alt="footer-logo" className="footer-logo"/>
                <br/>
                <br/>
                <hr/>
                <Icon icon={facebook} size={32} style={{ color: 'blue' }} className="footer-icons"/>
                <Icon icon={twitter} size={32} style={{ color: 'blue' }} className="footer-icons"/>
                <Icon icon={whatsapp} size={32} style={{ color: '#1b5e20' }} className="footer-icons"/>
                <Icon icon={instagram} size={32} style={{ color: '#e4405f' }} className="footer-icons"/>
                </div>
                <div className="col s3">
                  <h5>Catergories</h5>
                  <ul className="footer-links">
                    <li><a className="grey-text text-lighten-3" href="#!">Medical</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Women & Girls</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Animals</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Creative</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Food & Hunger</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Environment</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Children</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Sports</a></li>
                  </ul>
                </div>
                <div className="col s3">
                <h5>How it works?</h5>
                  <ul className="footer-links">
                    <li><a className="grey-text text-lighten-3" href="#!">NGOS</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Corporate</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Individual</a></li>
                  </ul>
                </div>
                <div className="col s3">
                <h5>About us</h5>
                  <ul className="footer-links">
                    <li><a className="grey-text text-lighten-3" href="#!">Team Fundo</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://dctacademy.com/">DCT Academy</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-copyright">
                  © 2019 DCT Academy
                </div>
              </div>
        </footer>
      </div>
    )
}

export default Footer
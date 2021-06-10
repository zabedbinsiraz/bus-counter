import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const logoStyle = {
    height: '70px',
}

const Footer = () => {
    return (
        <div className="bg-light text-center container-fluid">
            <div className="py-5 border-bottom border-white">
              
            <div className="row py-5">
                <div className="col-12 col-md-7 col-sm-12 col-lg-6 mx-auto">
                    <h1 >Bus Counter</h1>
                    <p className=" my-3">Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
                    <span className=" m-3"><FontAwesomeIcon icon={faTwitter} /></span>
                    <span className=" m-3"><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span className=" m-3"><FontAwesomeIcon icon={faInstagram} /></span>
                    <span className=" m-3"><FontAwesomeIcon icon={faYoutube} /></span>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Footer;
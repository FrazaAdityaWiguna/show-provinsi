import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const Footer = () => {
  return (
    <div className='footer text-secondary bg-dark'>
      <Container>
        <Row>
          <Col sm={12} lg={6} className='mb-3'>
            <img src='/assets/logo/kerjoo-white.svg' alt='logo' />
            <p>
              Kerjoo adalah aplikasi untuk sistem HR yang berbasis Cloud dan SaaS, di mana salah satu fitur yang kami sediakan adalah absensi karyawan yang bisa dilakukan melalui handphone dengan menggunakan teknologi terkini secara
              real-time melalui sistem GPS dan sistem biometrik face recognition.
            </p>
          </Col>
          <Col>
            <h5 className='text-white'>Hubungi Kami:</h5>
            <div className='contact-footer'>
              <img src='/assets/icon/whatsapp.svg' alt='icon' className='mr-3' />
              <span>0821 3333 6949 (WhatsApp Only)</span>
            </div>
            <div className='contact-footer'>
              <img src='/assets/icon/email.svg' alt='icon' className='mr-3' />
              <span>halo@kerjoo.com</span>
            </div>
            <div className='contact-footer d-flex'>
              <img src='/assets/icon/map.svg' alt='icon' className='mr-3' />
              <span>Jl. Raya Kledokan No. B10, Depok, Sleman, DI Yogyakarta 55281</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='mt-3 text-center mb-0'>Copyright &copy; 2021 by fraza</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

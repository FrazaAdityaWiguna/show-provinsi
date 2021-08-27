import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardContact from '../ShowCard/CardContact';

const ContactUs = () => {
  return (
    <Container className='p-4 contact'>
      <Row className='mb-3'>
        <Col className='text-center'>
          <h2>Hubungi Kami</h2>
        </Col>
      </Row>
      <CardContact />
      <Row>
        <Col>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1175043927037!2d110.40604131466309!3d-7.77736357931543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a597390eed99b%3A0x4425cc0c0c7caf7d!2sKerjoo%20Aplikasi%20Absensi!5e0!3m2!1sid!2sid!4v1629996632934!5m2!1sid!2sid'
            title='kerjoo address'
            allowFullScreen=''
            loading='lazy'
            className='mt-3'
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

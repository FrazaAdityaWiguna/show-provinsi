import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardFeature from '../ShowCard/CardFeature';
import { feature } from '../../data/Feature';

const Feature = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center mb-3'>
          <h2 className='mb-3'>Fitur Terbaik Untuk Mengelola Kinerja Karyawan</h2>
          <p className='lead'>
            Kinerja karyawan yang baik tidak terlepas dari pengelolaan yang optimal dari perusahaan. Fitur-fitur terbaik yang dimiliki aplikasi absensi Kerjoo ini memudahkan perusahaan dalam memaksimalkan kinerja karyawan.
          </p>
        </Col>
      </Row>
      <CardFeature datas={feature} />
    </Container>
  );
};

export default Feature;

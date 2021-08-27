import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const AboutUS = () => {
  return (
    <div className='about p-4 d-flex align-items-center'>
      <Container className='d-flex flex-column align-items-center'>
        <Row>
          <Col>
            <h2 className='mb-3'>Tentang Kerjoo</h2>
          </Col>
        </Row>
        <Row>
          <Col className='text-justify'>
            <p>
              Kerjoo datang untuk memberikan perubahan pada sistem HR di bisnis kecil maupun perusahaan yang konvensional menjadi lebih efektif dan efisien. Aplikasi absensi online Kerjoo membantu UMKM maupun perusahaan dalam mengelola
              karyawannya.
            </p>
            <p>
              Bisnis kecil biasanya tidak terlalu memperdulikan sistem HR dan cenderung tidak rapi dalam hal administrasi karyawan, tidak terkecuali perusahaan konvensional. Sebagian besar penyebabnya karena pebisnis UMKM tidak mengenal
              akses teknologi yang memudahkan kinerja.
            </p>
            <p>Karena itulah Kerjoo hadir untuk mendekatkan pebisnis pada teknologi agar bisa mengelola usahanya lebih efektif dengan tujuan meningkatkan pendapatan.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUS;

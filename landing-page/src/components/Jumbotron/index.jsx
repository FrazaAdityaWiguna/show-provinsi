import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './style.css';

const Jumbotron = () => {
  return (
    <div className='jumbotron d-flex align-items-center'>
      <Container className='d-flex flex-column align-items-center'>
        <img src='/assets/logo/kerjoo.svg' alt='logo' className='mb-lg-3' />
        <h1 className='display-4 text-center mb-3'>Aplikasi Absensi Karyawan Online</h1>
        <p className='lead text-center mb-3'>Perusahaan lebih mudah mengelola kehadiran karyawan sekaligus bisa memastikan karyawan Work From Home (WFH) dan remote working tetap bekerja sesuai dengan waktunya.</p>
        <Button variant='success' size='lg' href='https://app.kerjoo.com/#/register'>
          Daftar Sekarang
        </Button>
      </Container>
    </div>
  );
};

export default Jumbotron;

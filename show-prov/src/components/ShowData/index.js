import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { APIDesa, APIKabupaten, APIKecamatan, APIProvinsi } from '../API';
import DropdownData from '../DropdownData';

export default function ShowData() {
  const provinsiID = useSelector((state) => state.provinsiID);
  const kabupatenID = useSelector((state) => state.kabupatenID);
  const kecamatanID = useSelector((state) => state.kecamatanID);

  useEffect(() => {
    console.log('');
  }, [provinsiID]);

  return (
    <>
      <Container className='m-4'>
        <Row>
          <Col>
            <DropdownData DropTitle='Provinsi' API={APIProvinsi} />
          </Col>
          <Col>{provinsiID ? <DropdownData DropTitle='Kabupaten' API={`${APIKabupaten}/${provinsiID}`} /> : null}</Col>
          <Col>{kabupatenID ? <DropdownData DropTitle='Kecamatan' API={`${APIKecamatan}/${kabupatenID}`} /> : null}</Col>
          <Col>{kecamatanID ? <DropdownData DropTitle='Desa' API={`${APIDesa}/${kecamatanID}`} /> : null}</Col>
        </Row>
      </Container>
    </>
  );
}

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './style.css';

const CardFeature = ({ datas }) => {
  return (
    <>
      <Row>
        {datas &&
          datas.map((data) => (
            <Col className='mb-4 card-feature text-center' key={data.id} lg={4}>
              <Card className='d-flex align-items-center p-2'>
                <Card.Img variant='top' src={data.image} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default CardFeature;

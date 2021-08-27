import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { contact } from '../../../data/Contact';
import './style.css';

const CardContact = () => {
  return (
    <Row>
      {contact &&
        contact.map((data) => (
          <Col lg={4} key={data.id}>
            <Card className='d-flex justify-content-center align-items-center p-sm-2 text-center mb-3'>
              <div className='media'>
                <img className='align-self-center mx-3' src={data.image} alt='icon' />
                <div className='media-body'>
                  <h5 className='mt-0'>{data.title}</h5>
                  <p>{data.desc}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default CardContact;

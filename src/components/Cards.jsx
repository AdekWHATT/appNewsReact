import { display, maxHeight } from '@mui/system';
import React from 'react';

const Cards = () => {
  return <div className='card_container' style={{
    maxWidth: 350,
    border: '2px solid silver',
    marginTop: 10
  }}>
    <img style={{
      width: '100%',
      height: '75%',
      padding: 0,
      margin: 0,

    }} src={require('../img/newslogo.jpg')} />
    <div className='card_bodyText' style={{ textAlign: 'center' }}>
      <h3>1212312312312321</h3>
      <div className='card_titleNews'>
        <h5>31231232132323213</h5>
      </div>
    </div>
  </div>;
};

export default Cards;

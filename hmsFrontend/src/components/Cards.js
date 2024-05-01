import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore these AMAZING Hostel Facilities!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/room.jpg'
              text='Explore the comfort of our hostel rooms'
              label='Rooms'
            />
            <CardItem
              src='images/lib.jpg'
              text='Discover a quiet retreat in our libarary'
              label='Library'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sports.jpg'
              text='Stay active and engage in sport activities'
              label='Sports'
            />
            <CardItem
              src='images/dinner.jpg'
              text='Enjoy the annual dinner with good company and delicious food'
              label='Annual Dinner'
            />
            <CardItem
              src='images/pcd.jpg'
              text='Relax at our PC Dhaba with a unique atmosphere'
              label='PC Dhaba'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
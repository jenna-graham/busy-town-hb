import React from 'react';
import VehicleEmoji from './Vehicle.js';

export default function VehicleList({ vehicles }) {
  return (
    <div className='vehicle'> 
      {
        vehicles.map((vehicle, i) => <VehicleEmoji vehicle={vehicle} key={vehicle + i} />)
      }
    </div>
  );
}

export default function VehicleEmoji({ vehicle }) {
  return <div className="vehicle">
    {/* the Vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {vehicle === 'car' && '🚗'}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    {vehicle === 'truck' && '🚚'}
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    {vehicle === 'bus' && '🚌'}
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    {vehicle === 'motorcycle' && '🏍️'}
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
  </div>;
}
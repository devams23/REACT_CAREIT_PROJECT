
import React  , {useState} from 'react'
import Membershipcard from './Membershipcard';
function Membership() {
  const membershipData = [
    {
      title: 'Basic Membership',
      price: 9.99,
      description: 'Access to basic features and workout routines. Plus Live Online Sessions ',
    },
    {
      title: 'Premium Membership',
      price: 19.99,
      description: ['Full access to all features ', 'personalized training plans', ' and live sessions.'],
    },
    {
      title: 'Elite Membership',
      price: 29.99,
      description: ['Full access ', 'dedicated coaching ',  'priority support  and nutrition consultations']
    },
  ];
  const [cartvalue, setcartvalue] = useState(0)
  return (
    <>
    <div className='bg-gradient-to-r from-blue-500 to-teal-400 '>
          <div class="cart flex justify-center items-center py-10  gap-3 ">
            <div  className='text-xl font-bold'  >Your Cart</div>
        <div class="cart-icon ">
          🛒
          <div class="notification-circle">{cartvalue}</div>
        </div>
    </div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choose Your Membership</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {membershipData.map((membership) => (
          <Membershipcard key={membership.title} {...membership} setvalue={setcartvalue} />
        ))}

      </div>
    </div>
    </div>

    </>
  );
};

export default Membership
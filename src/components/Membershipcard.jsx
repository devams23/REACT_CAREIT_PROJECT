import React from 'react';
import { Link } from 'react-router-dom';

const MembershipCard = ({ title, price, description, setvalue }) => {
  const priceColor = price <= 10 ? 'bg-green-500' : price <= 20 ? 'bg-blue-500' : 'bg-purple-500';

  const changecartvalue = () => {
    console.log("hello");
    setvalue(prev => prev + 1);
  };

  return (
    <>
      <div className="card rounded-lg shadow-md overflow-hidden text-center bg-gradient-to-r from-gray-700 to-black">
        <div className={`card-header px-4 py-3 ${priceColor}`}>
          <h3 className="card-title text-lg font-bold text-white">{title}</h3>
        </div>
        <div className="card-body px-4 py-5 text-white">
          <p className="">{description}</p>
          <div className="flex justify-center mt-4">
            <span className=" font-bold">Price: {price}</span>
          </div>
        </div>
        <button className={`text-center w-44 ${priceColor} my-3 py-1 rounded-lg `} onClick={changecartvalue}>Add to cart</button>
      </div>
    </>
  );
};

export default MembershipCard;

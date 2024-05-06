// Home.js
import React from "react";
import { Link } from "react-router-dom";

  const Home = () => {
    return (
      <div className="home bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="content flex flex-col items-center z-10 text-black gap-10">
          <h1 className="heading text-4xl lg:text-5xl font-bold text-center animate__animated animate__pulse animate__infinite">
            Transform Your Body & Mind 
          </h1>
          <p className="subheading text-lg md:text-xl text-center animate__animated animate__fadeInUp">
            Start your personalized fitness and mental wellness journey today.
          </p>
  
          <Link
  to="/start"
 className=" text-black text-xl font-semibold bg-pink-500 hover:text-white  py-2 px-6 border border-black border-solid rounded-full shadow-xl">
  Free Trial
</Link>



        </div>
      </div>
    );
  };


export default Home;

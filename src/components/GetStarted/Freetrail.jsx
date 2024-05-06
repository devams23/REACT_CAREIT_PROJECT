import React from "react";
import Cardgenre from "../Cardgenre";
// import workoutBackground from "./workout-background.jpg"; // Import your workout background image
// import mentalHealthBackground from "./mental-health-background.jpg"; // Import your mental health background image

function Freetrail() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-black py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl text-4xl text-center font-bold mb-8  ">Workouts...</div>
          <div className="flex flex-wrap justify-center gap-8">
            <Cardgenre genre="exercises" />
            <Cardgenre genre="legs" />
            <Cardgenre genre="chest" />
            <Cardgenre genre="cardio" />
            <Cardgenre genre="arms" />
          </div>
        </div>
        <div className="relative py-24">
          <div className="absolute inset-0 bg-cover bg-center z-0" ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-4xl text-center font-bold mb-8">Mental Health...</div>
            <div className="flex flex-wrap justify-center gap-8">
              <Cardgenre genre="meditation" />
              <Cardgenre genre="yoga" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freetrail;

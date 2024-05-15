import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchdata from "../components/getworkoutData";
import { Container } from "../components";
import service from "../appwrite/service";
import { useSelector } from "react-redux";
import {Button} from "../components";
import { Link } from "react-router-dom";
function Displayexercise() {
  const [data, setData] = useState([]);
  const [isBreak, setIsBreak] = useState(false);
  const [currentGifId, setCurrentGifId] = useState(0);
  const { exercisename } = useParams();
  const fileid = useSelector((state) => state.auth.fileid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchdata(exercisename);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData once when the component mounts
  }, [exercisename]); // Update data when exercisename changes

  useEffect(() => {
    if (isBreak && currentGifId === data.length - 1 ) {
      console.log(isBreak , currentGifId === data.length - 1) 
      service.getstreak(fileid)
              .then((document) => {
                if(document) {
                  
                  if (document) {
                    service.updatestreak(fileid,{...document , [exercisename]:document[exercisename]+1})
                  }
                }


               
    })
    }

  }, [isBreak])
  
  const changeBreak = () => {
    setIsBreak((prev) => !prev);
  };

  const changeGif = () => {
    setCurrentGifId((prev) => prev + 1);
    setIsBreak(false);
  };

  return (
   
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {data[currentGifId] && !isBreak && (
        <div className="max-w-lg w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-8">
            <p className="text-lg font-bold text-blue-400">
              Exercise Name: {data[currentGifId].name}
            </p>
            <p className="text-lg mt-2">Body Part: {data[currentGifId].bodyPart}</p>
            <p className="text-lg mt-2">Equipment: {data[currentGifId].equipment}</p>
            <div className="mt-4 p-4 rounded bg-gray-700">
              <p className="font-bold text-blue-400">Instructions:</p>
              <p className="mt-2">{data[currentGifId].instructions}</p>
            </div>
            <img className="mt-4 mx-auto w-48 h-auto" src={data[currentGifId].gifUrl} alt="" />
            <button
              onClick={changeBreak}
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* for break */}

      {isBreak && currentGifId !== data.length - 1 && (
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold">Time for a break!</p>

          <button
            onClick={changeGif}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Next
          </button>
        </div>
      )}
      {isBreak && currentGifId === data.length - 1 && (
        <div>
          <p className="text-3xl font-bold text-green-600">
            Good job! You've completed the exercise.!
          </p>
          <div className="flex justify-center">
            <div className="gif-container">
              <p className="text-lg font-bold "></p>
              <iframe
                src="https://gifer.com/embed/6ob"
                width="400"
                height="400"
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
          <Link to={`/streak/${exercisename}`}>
              <Button classname='bg-green-500 mx-80 my-5'>
                Done
              </Button>
          </Link>
        </div>
      )}
    </div>

  );
}

export default Displayexercise;

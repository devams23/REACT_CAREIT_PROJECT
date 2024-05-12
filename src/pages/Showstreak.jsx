import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import service from "../appwrite/service";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useDebugValue } from "react";
import { Container } from "../components";
function Showstreak() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const navigate = useDebugValue();
  const {exercisename} = useParams();
  const [currentstreak, setcurrentstreak] = useState(0)
  const fileid = useSelector((state) => state.auth.fileid);
  useEffect(() => {
    service
      .getstreak(fileid)
      .then((document) => {
        //console.log(document.legs) // Assuming document is an object containing exercise streaks
        setcurrentstreak(document[exercisename]); // Set the current streak state
      })
      .catch((error) => {
        console.error("Error fetching streak:", error);
      });
  }, [fileid, exercisename]); // Include exercisename in the dependency array
  

  return (
    <>
    <Container>
      <div className="flex justify-center py-5">
              <div className="streak-box ">
     
        <div className="streak-container ">
          {days.map((dayno) =>
            dayno <= currentstreak ? (
              <div key={dayno} className="streak-item completed">
                <img src="/tick.png" alt="tickimage" />
              </div>
            ) : (
              <div className="streak-item ">{dayno}</div>
            )
          )}
        </div>
      </div>
      </div>

      <Link to={`/start/${exercisename}`} className="start-button  " >Start Challenge</Link>

    </Container>
    </>
  );
}

export default Showstreak;

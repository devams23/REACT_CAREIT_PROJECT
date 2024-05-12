import React from "react";
import { Link } from "react-router-dom";
function Cardgenre({genre , source}) {
  const genrec = genre.charAt(0).toUpperCase() + genre.slice(1);
  return (
    <>
    
      <Link to={`/streak/${genre}`}>
        <div className="rounded-2xl overflow-hidden shadow-lg w-48  text-black hover:shadow-black">
            <h1 className=""></h1>
          <img
            className="w-full h-36"
            src= {`./${genre}.png`}
            alt={`./${genre}`}

          />
          <div className="px-5 py-3 bg-gradient-to-r from-red-500 to-amber-600 ">
            <div className="font-bold text-2xl mb-2 text-center ">{genrec}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Cardgenre;

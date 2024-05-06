import axios from "axios";
async function fetchdata(exercisename) {

    const urlexercise = 'https://exercisedb.p.rapidapi.com/exercises'
    const options = {
        method: 'GET',
        params: {limit: '10'},
        url: urlexercise,
        headers: {
          'X-RapidAPI-Key': '81d9322b84mshb81cf9da5c8871fp1a1892jsn4f5f1fd5cbb1',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      if (exercisename != "exercises") {
            switch (exercisename) {
        case "legs":
            exercisename = "lower legs"
            break;
        case "arms":
            exercisename = "lower arms"
        default:
            break;
            }
        options.url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exercisename}`
    }
    try {
      const cachedData = localStorage.getItem(`${exercisename}data`);
      if (cachedData) {
        //console.log(cachedData)
        return JSON.parse(cachedData);
      } else {
          console.log("requesting....")
          
        const response = await axios.request(options);
        console.log(response.data)
        localStorage.setItem(`${exercisename}data`, JSON.stringify(response.data));
        return response.data;

        
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

export default fetchdata;
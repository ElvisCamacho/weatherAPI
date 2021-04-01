import axios from "axios";

// api call api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "59c1c5b1574653b0ccb431f6f44089ba";

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
};


export default getWeatherData;

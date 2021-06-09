import axios from 'axios';

const basrUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '58236afd1dc4c8e376bf650bfcd51d7c';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data; 
    }catch(error){
        throw error;
    }
}
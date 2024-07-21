# Weather App

## Overview
The Weather App is a React-based application that allows users to search for and view the current weather conditions of any city. It uses the OpenWeather API to fetch weather data and displays it in an intuitive and user-friendly interface.

## Features
- Search weather by city name
- Display current weather conditions, including temperature, humidity, and weather description
- Display a weather icon corresponding to the current weather
- Loading spinner while fetching data

## Technologies Used
- React
- Axios
- React Spinners
- OpenWeather API

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/areebaqamar021/react-projects.git
    cd react-projects/weather-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Add your OpenWeather API key:
    - Create a `.env` file in the root directory.
    - Add your API key to the `.env` file:
      
      ```env
      REACT_APP_WEATHER_API_KEY=your_openweather_api_key
      ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

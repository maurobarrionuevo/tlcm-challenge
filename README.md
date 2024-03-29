# Weather App

This is a weather application built with React, TypeScript, and Vite. It allows users to check the weather for multiple locations, search for locations, and retrieve weather data including current weather, hourly forecast, and daily forecast. Additionally, it determines the user's current location using the browser's geolocation API and maintains added locations and selected location in local storage.

![Weather App Preview](/public/preview.png)

## Features

- List multiple locations
- Search and add locations
- Retrieve latitude and longitude data when adding locations
- Determine current location using browser's geolocation API
- Persist added locations and selected location in local storage
- Fetch current weather data
- Display weather forecast for the next few hours
- Display weather forecast for the next few days
- Show sunset time, wind speed, feels like temperature, humidity, visibility, and pressure
- Responsive design
- Utilizes CSS Grid, Styled Components, and TypeScript
- Unit tests implemented using Jest

## Deployment

The application is deployed on Vercel and can be accessed at [https://tlcm-challenge.vercel.app/](https://tlcm-challenge.vercel.app/).

## Usage

1. Clone the repository:

```bash
git clone https://github.com/maurobarrionuevo/tlcm-challenge.git
```

2. Navigate into the project directory:

```bash
cd tlcm-challenge
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Testing

To run the unit tests locally, use the following command:

```bash
npm run test
```

![Passed tests](/public/test.png)

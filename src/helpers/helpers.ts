import { CityData, DailyForecast, ForecastResponse, GroupedDailyForecast, GroupedWeeklyForecast, Weather } from "../interfaces/api";

export const trimDecimal = (value: number): string => {
    return value.toFixed(0);
};

export const convertEpochToTime = (epochTimestamp: number): string => {
    const date = new Date(epochTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${hours}:${minutes} h`;
};

export const getAddedLocationsFromStorage = (): CityData[] | [] => {
    const storedData = window.localStorage.getItem('addedLocations');
    try {
        // Check if storedData is not null or empty before parsing
        if (storedData && storedData.trim() !== '' && storedData !== undefined && storedData !== "undefined") {
            return JSON.parse(storedData);
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error parsing stored locations:', error);
        return [];
    }
};

export const getSelectedLocationFromStorage = (): CityData | undefined => {
    const selectedLocation = window.localStorage.getItem('selectedLocation');
    try {
        // Check if storedData is not null or empty before parsing
        if (selectedLocation && selectedLocation.trim() !== '') {
            return JSON.parse(selectedLocation);
        } else {
            return undefined;
        }
    } catch (error) {
        console.error('Error parsing stored locations:', error);
        return undefined;
    }
}

export const updateAddedLocationsToStorage = (locations: CityData[]): void => {
    window.localStorage.setItem('addedLocations', JSON.stringify(locations))
}

export const updateSelectedLocationToStorage = (location: CityData): void => {
    window.localStorage.setItem('selectedLocation', JSON.stringify(location))
}

export function trimString(inputString: string, maxLength?: number) {
    if(!maxLength) { maxLength = 20}
    if (typeof inputString !== 'string') {
        return inputString;
    }
    if (inputString.length > maxLength) {
        return inputString.substring(0, maxLength) + '...';
    }
    return inputString;
}

export const extractHourAndMinutes = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${hours}:${minutes}`;
};

export const getTodayFromForecast = (apiResponse: ForecastResponse): DailyForecast[] => {
    const today = new Date().toLocaleDateString();
    return apiResponse.list.filter((item) => {
        // Convert dt_txt to a date string and check if it matches today's date
        const itemDate = new Date(item.dt_txt.split(' ')[0]).toLocaleDateString();
        return itemDate === today;
    });
};

/**
 * Retrieves weekly forecast data from the provided forecast response.
 *
 * @param {ForecastResponse} forecastResponse The forecast response containing daily forecast data.
 * @returns {GroupedWeeklyForecast} An object containing weekly forecast data grouped by day of the week.
 */
export const getWeekFromForecast = (forecastResponse: ForecastResponse): GroupedWeeklyForecast => {
    // Object to store grouped daily forecasts by day of the week
    const groupedForecasts: { [dayOfWeek: string]: GroupedDailyForecast } = {};

    // Iterate through each daily forecast in the response
    forecastResponse.list.forEach((dailyForecast) => {
        // Extract date and day of the week from the forecast date
        const date = dailyForecast.dt_txt.split(' ')[0];
        const dayOfWeek = getDayOfWeek(new Date(date));

        // Initialize grouped forecast for the day if not already present
        if (!groupedForecasts[dayOfWeek]) {
            groupedForecasts[dayOfWeek] = {
                date,
                dayOfWeek,
                maxTemp: dailyForecast.main.temp_max,
                minTemp: dailyForecast.main.temp_min,
                mostProminentWeather: getMostProminentWeather(dailyForecast.weather),
            };
        } else {
            // Update minTemp and maxTemp for the day if necessary
            groupedForecasts[dayOfWeek].minTemp = Math.min(groupedForecasts[dayOfWeek].minTemp, dailyForecast.main.temp_min);
            groupedForecasts[dayOfWeek].maxTemp = Math.max(groupedForecasts[dayOfWeek].maxTemp, dailyForecast.main.temp_max);
            
            // Update most prominent weather if current weather is more prominent
            if (dailyForecast.weather.length > 0 && dailyForecast.weather[0].id > groupedForecasts[dayOfWeek].mostProminentWeather.id) {
                groupedForecasts[dayOfWeek].mostProminentWeather = dailyForecast.weather[0];
            }
        }
    });

    // Convert grouped forecasts object to an array
    const groupedForecastsArray: GroupedDailyForecast[] = Object.values(groupedForecasts);

    // Calculate minTemp and maxTemp for the whole week
    const minTemp = Math.min(...groupedForecastsArray.map((group) => group.minTemp));
    const maxTemp = Math.max(...groupedForecastsArray.map((group) => group.maxTemp));

    // Return grouped weekly forecast data
    return {
        minTemp,
        maxTemp,
        days: groupedForecastsArray,
    };
};
    
// Helper function to get the most prominent weather condition from an array of weather objects
export const getMostProminentWeather = (weatherArray: Weather[]): Weather => {
    return weatherArray.reduce((mostProminent, currentWeather) =>
    mostProminent.id > currentWeather.id ? mostProminent : currentWeather
    );
};


// Helper function to get the day of the week from a Date object
const getDayOfWeek = (date: Date): string => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
};
    
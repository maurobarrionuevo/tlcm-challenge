import { getMostProminentWeather, getSelectedLocationFromStorage, getTodayFromForecast, getWeekFromForecast } from "../helpers/helpers"
import ForecastResponse from './__mock__/ForecastResponse.json'
import GroupedWeeklyForecast from './__mock__/GroupedWeeklyForecast.json'
import DailyForecast from './__mock__/DailyForecast.json'
import Weather from './__mock__/Weather.json'
import SelectedLocation from './__mock__/SelectedLocation.json'

describe('Get Week From ForecastResponse', () => {
    test('Should transform the whole forecast in a daily forecast', () => {
        const result = getWeekFromForecast(ForecastResponse)
        expect(result).toEqual(GroupedWeeklyForecast)
    })
    test('Should get the most prominent weather for that week', () => {
        const result = getMostProminentWeather(Weather)
        expect(result).toEqual({
            "id": 804,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        })
    })
})

describe('Get Today forecast from ForecastResponse', () => {
    test('Should extract only the data for today forecast by hour', () => {
        const result = getTodayFromForecast(ForecastResponse)
        expect(result).toEqual(DailyForecast)
    })
})

describe('Test localstorage access', () => {
    const localStorageMock = {
        getItem: jest.fn(),
    };
    // Replace the global localStorage with the mock implementation before each test
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
        });
    });

    test('Should return undefined if no location is stored', () => {
        // Simulate localStorage.getItem returning null
        localStorageMock.getItem.mockReturnValueOnce(null);
        const result = getSelectedLocationFromStorage();
        expect(result).toBeUndefined();
        expect(localStorageMock.getItem).toHaveBeenCalledWith('selectedLocation');
    });

    test('Should return undefined if stored location is empty', () => {
        // Simulate localStorage.getItem returning an empty string
        localStorageMock.getItem.mockReturnValueOnce('');
        const result = getSelectedLocationFromStorage();
        expect(result).toBeUndefined();
        expect(localStorageMock.getItem).toHaveBeenCalledWith('selectedLocation');
    });
    test('Should return parsed location if stored location is valid JSON', () => {
        // Simulate localStorage.getItem returning valid JSON string
        localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(SelectedLocation));
        const result = getSelectedLocationFromStorage();
        expect(result).toEqual(SelectedLocation);
        expect(localStorageMock.getItem).toHaveBeenCalledWith('selectedLocation');
    });
    test('Should return undefined and log error if stored location is invalid JSON', () => {
        const invalidLocation = 'invalidJSON';
        // Simulate localStorage.getItem returning invalid JSON string
        localStorageMock.getItem.mockReturnValueOnce(invalidLocation);
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const result = getSelectedLocationFromStorage();
        expect(result).toBeUndefined();
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(localStorageMock.getItem).toHaveBeenCalledWith('selectedLocation');
        consoleErrorSpy.mockRestore(); 
    });
})

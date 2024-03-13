import {
  GeoApi,
  WeatherApi,
  getCurrentWeather,
  getForecast,
  getGeocoding,
  getReverseGeocoding,
} from "../../api/weather";
import WeatherDataResponse from "../__mock__/WeatherDataResponse.json";
import ForecastResponse from "../__mock__/ForecastResponse.json";
import GeolocationResponse from "../__mock__/GeolocationResponse.json";
import ReverseGeolocationResponse from "../__mock__/ReverseGeolocationResponse.json";

describe("getCurrentWeather", () => {
  it("Fetches current weather data successfully", async () => {
    WeatherApi.get = jest.fn().mockResolvedValue({ data: WeatherDataResponse });

    const latitude = 40.7128;
    const longitude = -74.006;

    const weatherData = await getCurrentWeather(latitude, longitude);

    expect(WeatherApi.get).toHaveBeenCalledWith(
      `/weather?lat=${latitude}&lon=${longitude}&units=metric`
    );

    expect(weatherData).toEqual(WeatherDataResponse);
  });

  it("Throws an error if fetching current weather data fails", async () => {
    const mockError = new Error("Failed to fetch weather data");
    WeatherApi.get = jest.fn().mockRejectedValue(mockError);

    const latitude = 40.7128;
    const longitude = -74.006;

    await expect(getCurrentWeather(latitude, longitude)).rejects.toThrow(
      mockError
    );

    expect(WeatherApi.get).toHaveBeenCalledWith(
      `/weather?lat=${latitude}&lon=${longitude}&units=metric`
    );
  });
});

describe("getForecast", () => {
  it("Fetches forecast correctly", async () => {
    // Mocking the resolved value directly
    WeatherApi.get = jest.fn().mockResolvedValue({ data: ForecastResponse });

    const lat = 40.7128;
    const lon = -74.006;

    const forecastData = await getForecast(lat, lon);

    expect(WeatherApi.get).toHaveBeenCalledWith(
      `/forecast?lat=${lat}&lon=${lon}&units=metric`
    );

    expect(forecastData).toEqual(ForecastResponse);
  });

  it("Throws an error if fetching current forecast data fails", async () => {
    const mockError = new Error("Failed to fetch weather data");
    WeatherApi.get = jest.fn().mockRejectedValue(mockError);

    const latitude = 40.7128;
    const longitude = -74.006;

    await expect(getForecast(latitude, longitude)).rejects.toThrow(mockError);

    expect(WeatherApi.get).toHaveBeenCalledWith(
      `/forecast?lat=${latitude}&lon=${longitude}&units=metric`
    );
  });
});

describe("getGeolocation", () => {
  it("Fetches geolocation based on a query", async () => {
    GeoApi.get = jest.fn().mockResolvedValue({ data: GeolocationResponse });
    const query = "Miami";
    const geoLocationData = await getGeocoding(query);
    expect(GeoApi.get).toHaveBeenCalledWith(`/direct?q=${query}&limit=5`);
    expect(geoLocationData).toEqual(GeolocationResponse);
  });
});

describe("getReverseGeolocation", () => {
  it("Fetches geolocation based on coords", async () => {
    GeoApi.get = jest
      .fn()
      .mockResolvedValue({ data: ReverseGeolocationResponse });

    const lat = 40.7128;
    const lon = -74.006;

    const geoLocationData = await getReverseGeocoding(lat, lon);
    expect(GeoApi.get).toHaveBeenCalledWith(
      `/reverse?lat=${lat}&lon=${lon}&limit=1`
    );
    expect(geoLocationData).toEqual(ReverseGeolocationResponse);
  });
});

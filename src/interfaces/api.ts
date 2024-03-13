export interface WeatherDataResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    rain?: {
        "1h": number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}


export interface CityData {
    name: string;
    local_names: {
        [key: string]: string;
    };
    lat: number;
    lon: number;
    country: string;
    state?: string
}



interface MainData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Clouds {
    all: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

interface Rain {
    '3h': number;
}

interface Sys {
    pod: string;
}

export interface DailyForecast {
    dt: number;
    main: MainData;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: Rain;
    sys: Sys;
    dt_txt: string;
}

interface City {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface ForecastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: DailyForecast[];
    city: City;
}

export interface GroupedDailyForecast {
    date: string;
    dayOfWeek: string;
    maxTemp: number;
    minTemp: number;
    mostProminentWeather: Weather;
}

export interface GroupedWeeklyForecast {
    minTemp: number;
    maxTemp: number;
    days: GroupedDailyForecast[];
}
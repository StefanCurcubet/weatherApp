export interface WeatherApiResponse {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
}
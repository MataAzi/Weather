export abstract class BaseWeatherApi {
    constructor() { }
    searchCities = async (searchQuery: string) => { }
    getCity = async (name: string): Promise<any> => { }
} 
export const NasaAPI = async (date) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    try {
        const response = await fetch(url);
        return response.json()
    }
    catch {
        throw new Error('Something went wrong!')
    }
}
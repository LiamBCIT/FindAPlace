import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'
// headers: {
//     'X-RapidAPI-Key': '94637e7059mshd61b57766804045p141b41jsn3ae497a8a2fd',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '94637e7059mshd61b57766804045p141b41jsn3ae497a8a2fd',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}


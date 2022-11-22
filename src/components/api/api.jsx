import axios from 'axios';
// axios.defaults.baseURL =
//   'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

export async function fetchJobList() {
  try {
    const response = await axios.get(
      'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '27.669247235836433 ',
      tr_latitude: '27.67760860418882',
      bl_longitude: '85.19664900494385',
      tr_longitude: '85.28891699505616',
    //   restaurant_tagcategory_standalone: '10591',
    //   restaurant_tagcategory: '10591',
    //   limit: '30',
    //   currency: 'USD',
    //   open_now: 'false',
    //   lunit: 'km',
    //   lang: 'en_US'
    },
    headers: {
      'x-rapidapi-key': '31b78eb525msh0baa6084eaf8520p152b34jsn94485c955a8a',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };
  


export const getPlacesData = async() => {
    try{
        
        const {data: {data}} = await axios.get(URL, options)
        return data;

    }catch(error){
        console.log(error)
    }
}
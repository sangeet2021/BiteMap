import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async(ne, sw) => {
    try{
        
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
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
        })
        return data;

    }catch(error){
        console.log(error)
    }
}
import axios from "axios";


const CRICKET_BASE_REST_API_URL='http://localhost:8080/api/v1/cricketers'

class CricketerService{

    getAllCricketer(){
        return axios.get(CRICKET_BASE_REST_API_URL)
    }

   createCricketer(cricketer,cricketerId){
       return axios.post(CRICKET_BASE_REST_API_URL,cricketer)
   }

    deleteCricketer(cricketerId){
        return axios.delete(CRICKET_BASE_REST_API_URL+'/'+cricketerId);
    }
}

export default new CricketerService();
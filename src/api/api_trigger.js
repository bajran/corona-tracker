import {ROOT_API} from './params'

 export default async (param) =>{
    const response = await fetch(`${ROOT_API}${param}`)       
    return response.json();
}



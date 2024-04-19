/* This is an example schema to show the flexibility of the 'modifier' approach.
 * 
 * object struct:
 *
 * "key":{
 *  "target":"",
 *  "modifier"(value)=>{}
 * }
 *
 * simple structure dict:
 *
 * key      => the index name of the final processed data
 * target   => refer to the value in origin json you should return
 * modifier => callback function to handle the returned value 
 *
 */

export const schema = {
    "pais":{
        "target":"sys.country",
        "modifier":(data)=>{
            if(data == 'BR'){
                return 'Brasil'
            }
        }
    }, // Verify whether the value returned is equal to 'BR', then return the country name instead of the country code 
    "temperatura":{
        "target":"main.temp",
        "modifier":(temp)=>{
            if(isNaN(temp)){
                return "Formato Inválido :("
            }
            return Math.ceil(temp- 273.15) + '°'; 
        }
    }, // Temperature formatted for celsius (previously, the data returned from OpenWeather are in Kelvin by default)
    "nuvens":{
        "target":"clouds.all"  //Percentage of cloudiness without data manipulation
    } 
}; 

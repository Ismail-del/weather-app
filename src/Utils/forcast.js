const request = require("request");



forcast = (city,callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=ee8073b46053bd7b6890a5c2b7b87d95';
    request({url, json:true},(error, response) => {
        if (error){
            callback("you don't have internet connexion",undefined);
        }else if (response.body.cod === 401){
            callback("you are missing somthing", undefined);
        }else{
            const { weather, name, main } = response.body;
            callback(undefined,{
                weather:weather[0].main,
                city:name,
                description:weather[0].description,
                temperature:main.temp
            })
        }
    })

}
module.exports = forcast;
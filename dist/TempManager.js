// let router = require('../server/routes/api')


class TempManager {
    constructor() {
        this.cityData = []

    }

    getDataFromDB() {
        return $.get('/cities')
        // console.log("Responde two "+this.cityData)
    }

    async getCityData(cityName) {
        return await $.get('/city/'+cityName)
    }


    saveCity(cityName) {

        let cityObj = this.cityData.filter(c => c.cityName == cityName)
        $.post('/city/', cityObj, function (response) {
            console.log(response)
        })
    }

    removeCity(cityName) {

        let cityObj = this.cityData.filter(c => c.cityName == cityName)
        $.ajax({
            url: '/city/:${cityName}',
            method: "DELETE",
            success: function () {
                console.log("Succesful delete")
            }
        })
    }

}

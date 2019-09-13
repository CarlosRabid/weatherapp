// let router = require('../server/routes/api')


class TempManager {
    constructor() {
        this.cityData = []

    }

    getDataFromDB() {
        // return $.get('/cities')
        $.get('/cities').then((result) => { this.cityData = result })
        return $.get('/cities')

    }
    // console.log("Responde two "+this.cityData) 


    async getCityData(cityName) {
        let data = await $.get('/city/' + cityName)
        this.cityData.push(data)
        return $.get('/city/' + cityName)
    }


    saveCity(cityName) {
        this.cityData.forEach((c) => {
            if (c.name==cityName) {
                $.ajax({
                    url: ('/city'),
                    data: c,
                    method: "POST",
                    success: function () {
                        console.log("Succesful add")
                    }
                })
            }
        })
    }


    removeCity(cityName) {


        let cityObj = this.cityData.filter(c => c.name == cityName)
        $.ajax({
            url: '/city/'+cityName,

            method: "DELETE",
            success: function () {
                console.log("Succesful delete "+cityName)
            }
        })
    }

}

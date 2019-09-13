let manager = new TempManager()
let render = new Renderer()

manager.getDataFromDB().then((data) => {
    render.render('#container', '.container', data)
})



let handleSearch = async function () {
    let cityName = $("#inputText").val()

    let ncity = await manager.getCityData(cityName)// $.get(`/city/${cityName}`) // handleSearch
    ncity = [ncity]
    render.render('#container', '.container', ncity)
}

$(".container").on("click", ".addSave", function () {   // addDB
    let citiName = $(this).closest("div").find("span").text()
    manager.saveCity(citiName)
    return manager.getDataFromDB().then((data) => {
        render.render('#container', '.container', data)
    })
}
)

$(".container").on("click", ".deleteDB", function () {   // deleteDB
    let citiName = $(this).closest("div").find("span").text()
    manager.removeCity(citiName)
    return manager.getDataFromDB().then((data) => {
        render.render('#container', '.container', data)
    })
}
)
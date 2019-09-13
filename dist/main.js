let manager = new TempManager()
let render = new Renderer()

manager.getDataFromDB().then((data)=> {
    render.render('#container', '.container', data)
})



let handleSearch = async function () {
    debugger
    let cityName = $("#inputText").val()

    let ncity = await manager.getCityData(cityName)// $.get(`/city/${cityName}`) // handleSearch
    ncity = [ncity]
    render.render(ncity)
}

// $(".container").on("click", ".thumb", function () {
//     debugger
//     let ingItems = $(this).closest("div").find("li").text()
//     console.log(ingItems)

// }
// )
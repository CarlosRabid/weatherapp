class Renderer {

    emptyBody = function () {

    }
    render(idhtml, location, data) {
        var source = $(idhtml).html();
        var template = Handlebars.compile(source);
        let compiled = template({ data });
        $(location).empty().append(compiled)
    }

    // show() {
    //     debugger
    //     let data = manager.cityData
    //         // $(".container").empty()
    //         render.render('#container', '.container', data)
    // }
}


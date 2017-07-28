
function getData() {
    var userInput = document.getElementById("userInput").value
    console.log("INPUT", userInput)
    var endpoint = `https://api.themoviedb.org/3/search/movie?api_key=f72a491c77b1e99620bc269509cd0ee9&language=en-US&query=${userInput}&page=1&include_adult=false`

    fetch(endpoint)
        .then(
            function(data) {
                return data.json()
            })
        .then(
            function(json) {
                for (var i = 0; i < json.results.length; i++) {
                    var container = document.getElementById('container')
                    var imagePath = json.results[i].poster_path

                    var outerDiv = document.createElement("div")
                    outerDiv.setAttribute('class', "col-sm-4")
                    container.appendChild(outerDiv)

                    var innerDiv1 = document.createElement("div")
                    innerDiv1.setAttribute('class', "well grow")
                    innerDiv1.style.minHeight = "275px"
                    innerDiv1.style.maxHeight = "275px"
                    outerDiv.appendChild(innerDiv1)


                    var innerDiv2 = document.createElement("div")
                    innerDiv2.setAttribute('class', "media")
                    innerDiv1.appendChild(innerDiv2)

                    var innerDiv3 = document.createElement("div")
                    innerDiv3.setAttribute('class', "media-left media-middle")
                    innerDiv2.appendChild(innerDiv3)

                    var image = document.createElement("img")
                    image.setAttribute('src', `https://image.tmdb.org/t/p/w500/${imagePath}`)
                    image.setAttribute('id', "picture1")
                    innerDiv3.appendChild(image)

                    var innerDiv4 = document.createElement("div")
                    innerDiv4.setAttribute('class', "media-body")
                    innerDiv2.appendChild(innerDiv4)

                    var title = document.createElement("h4")
                    var text = document.createTextNode(titlePath)
                    title.setAttribute('class', "media-heading font")
                    title.setAttribute('id', "fontstyle")
                    var titlePath = json.results[i].title
                    title.appendChild(text)
                    innerDiv4.appendChild(title)
                    
                    var description = document.createElement("p")
                    var text2 = document.createTextNode(descriptionPath)
                    description.setAttribute('class', "font fontsmall")
                    var descriptionPath = json.results[i].overview
                    description.appendChild(text2)
                    innerDiv4.appendChild(description)

                    console.log(outerDiv)
                }
                console.log(json)

            }
        )
        .catch(
            err => {
                console.log(err)
            })


}

 

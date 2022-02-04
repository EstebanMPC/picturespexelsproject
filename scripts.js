


var searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        var res = JSON.parse(xhttp.responseText);
            var imageData = (res.photos.map(function(item){
                return item
            }))

            var container = document.querySelector('#image-divs')
            container.innerHTML = '';
            imageData.forEach(function (image) {
                console.log(image);
                var imageHeight =  image.height
                var imageWidth =  image.width
                var imageDiv = document.createElement('div');
                imageDiv.classList.add("image-size");
                if (imageHeight > imageWidth) {
                    imageDiv.style.backgroundImage = `url(${image.src.portrait})`
                    imageDiv.classList.add("card-tall")
                } else if (imageHeight < imageWidth) {
                    imageDiv.style.backgroundImage = `url(${image.src.landscape})` 
                    imageDiv.classList.add("card-wide")
                } else {
                    imageDiv.style.backgroundImage = `url(${image.src.large})`
                };
                container.appendChild(imageDiv)
            })  
            
        }
    };
    var textValue = document.querySelector(".search-bar").value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f9170000100000114e486048a3b4e42bcf5d2cbd187842a')
    xhttp.send();
})








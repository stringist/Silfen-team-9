function closeMenu() {

    document.querySelector("#sign").classList.add("plus_sign");
    document.querySelector("#sign_v2").classList.add("plus_sign");
    document.querySelector("#sign_v3").classList.add("plus_sign");
    document.querySelector("#sign_v4").classList.add("plus_sign");



}

closeMenu();

// fetching from database
// fetching from database 
// fetching from database
// fetching from database

const urlParams = new URLSearchParams(window.location.search);
const bikename = urlParams.get("title.rendered");
const endpoint = "https://lumensity.dk/recreate/wp-json/wp/v2/bike?_embed"


fetch(endpoint)

.then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleProductList(data);
    });

function handleProductList(data) {
    console.log(data);
    data.forEach(showData);

    function makeColorBox(colorList) {
        console.log(colorList);
        colorList.forEach()
    }
}

function showData(oneBike) {
    const template = document.querySelector("#bikeTemplate").content;
    const copy = template.cloneNode(true);
    // const colors = oneBike.colors;
    // const colorList = colors.split(",");
    copy.querySelector("h3.brand").textContent = oneBike.brand;
    copy.querySelector("h3.name").textContent = oneBike.title.rendered;
    // copy.querySelector("img").setAttribute("src", oneBike._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url);
    copy.querySelector("img").setAttribute("src", oneBike._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url);
    // copy.querySelector("img").src = " oneBike._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url";
    copy.querySelector(".price").textContent = oneBike.price;
    // copy.querySelector(".color").textContent = oneBike.colors;
    //copy.querySelector(".stock").textContent = oneBike.in_stock;

    const colors = oneBike.colors.split(',')
    colors.forEach(color => {
        const li = document.createElement('li')
            // li.textContent = color;
        li.style.background = color
        copy.querySelector('.colorbox ul').appendChild(li)
    })

    console.log(oneBike.in_stock);
    if (oneBike.in_stock == '1') { copy.querySelector(".stock").textContent = "yes" }
    const parent = document.querySelector("main");
    parent.appendChild(copy);
}
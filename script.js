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
const productName = urlParams.get("title.rendered");
const endpoint = "https://bymabe.dk/silfen-data/wp-json/wp/v2/bag?_embed"

// old url for reference
//  "https://lumensity.dk/recreate/wp-json/wp/v2/bike?_embed"

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

    function makeColorCircle(colorList) {
        console.log(colorList);
        colorList.forEach()
    }
}

function showData(oneBag) {
    const template = document.querySelector("#productrow").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3.productname").textContent = oneBag.title.rendered;
    copy.querySelector("h4.pricetag").textContent = oneBag.price;
    // copy.querySelector("img").setAttribute("src", oneBag._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url);
    copy.querySelector("img").setAttribute("src", oneBag._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url);
    // copy.querySelector("img").src = " oneBag._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url";
    // copy.querySelector(".price").textContent = oneBag.price;
    // copy.querySelector(".colourtags").textContent = oneBag.colour;
    //copy.querySelector(".stock").textContent = oneBag.in_stock;

    // const colours = oneBag.colours.split(',')


    // making color blocks from list
    // colors.forEach(color => {
    //     const li = document.createElement('li')
    //         // li.textContent = color;
    //     li.style.background = colour
    //     copy.querySelector('.colorbox ul').appendChild(li)
    // })


    // 
    // console.log(oneBag.in_stock);
    // if (oneBag.in_stock == '1') { copy.querySelector(".stock").textContent = "yes" }
    const parent = document.querySelector(".product-gallery");
    parent.appendChild(copy);
}
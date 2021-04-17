const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id"); 

console.log(id);


const url = "https://minadesign.one/wp-json/wc/store/products/" +id;


const resultsContainer = document.querySelector(".productresult");

async function getProduct() {

    try{

    const response = await fetch(url);

    const results = await response.json();

    const product = results;




        resultsContainer.innerHTML += `<div class="productresult">
                                        <img class="imagejacket" 
                                        src="${product.images[0].src}"alt="image"></img>
                                        <div class="productjacket">
                                        <h5>${product.name}</h5> 
                                        Price: ${product.price_html}.00
                                        ${product.short_description}
                                        <div class="button">
                                            <a href="checkout.html" class="baggis">
                                                <div class="addtobag">add to bag</div></a>
                                            <a href="checkout.html" class="checkout1">
                                                <div class="checkout">checkout</div></a>
                                        </div>
                                            <p class="categories">Categories: ${product.categories[0].name}</p>
                                        </div>
                                        </div>`;                               

    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}

getProduct();

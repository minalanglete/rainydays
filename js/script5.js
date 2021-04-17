const url = "https://minadesign.one/wp-json/wc/store/products";

const resultsContainer = document.querySelector(".results");

async function getJacket() {

    try{

    const response = await fetch(url);

    const results = await response.json();

    const jacket = results;

    resultsContainer.innerHTML = "";

    for (let i = 3; i < jacket.length; i++) {
        console.log(jacket[i].name);
        console.log(jacket[i].prices);
        console.log(jacket[i].images[0].src);

        if (i === 6) {
            break;
        }

        resultsContainer.innerHTML += `<div class="results">
                                        <a href="jacket_display1.html?id=${jacket[i].id}"> 
                                            <img class="imageindex" 
                                            src="${jacket[i].images[0].src}"alt="image"></img>
                                            <h6>${jacket[i].name}</h6> 
                                            <p class="priceindex">Price: ${jacket[i].price_html}.00</p>
                                        </a>
                                        </div>`;
    }
    } catch (error) {
        console.log("an error occurred");
        resultsContainer.innerHTML = `<div class="results"><h2 class="red">an error occurred</h2></div>`;
    }
}

getJacket();
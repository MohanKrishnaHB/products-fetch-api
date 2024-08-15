const CONFIG = {
    urls: {
        products: "https://fakestoreapi.com/products"
    }
}
async function fetchAndSetProducts() {
    try {
        $.get(CONFIG.urls.products, function(data, status){
            setProductsInDOM(data)
        });
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
    return [];
}

function designProductElementByProductjson(product) {
    return `<div class="col-12 col-lg-3 col-md-4 col-sm-6 col-xs-10">
                <div class="rounded-4 bg-light px-4 py-4 product-card-container">
                    <div class="flex flex-row">
                        <div class="product-image-container w-100 flex justify-content-center mb-1">
                            <img src="${product.image}" alt="Product 1" class="img-fluid">
                        </div>
                        <div class="product-details-container">
                            <h3 class="h3 mb-0 product-title" title="${product.title}">${product.title}</h3>
                            <p class="small product-description mb-1" title="${product.description}">${product.description}</p>
                            <p class="h6">Rs. ${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>`
}

function setProductsInDOM(products) {
    $("#products-container").html(products.map((item) => designProductElementByProductjson(item)))
    $("#products-container").show();
}

$(document).ready(function () {
    fetchAndSetProducts()
});

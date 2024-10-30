//TASK 2 - Fetch Products from the API Using Fetch and Promises:

const apiURL = 'https://www.course-api.com/javascript-store-products';

//fetch products from the API:
fetch(apiURL)
.then(response => {
    //checking if the response working/okay 
    if (!response.ok) {
        throw new Error('Network response was not working' + response.statusText);
    }
    return response.json(); //using JSON to pharse the response
})
.then(data => {
    //If the fetch is successful, extract the product details and display them
    displayProducts(data);
});


//TASK 3 - Display Product Details Dynamically:

function displayProducts(data) {
    const productsContainer = document.getElementById('products-container');

    //Iterate through each product and create HTML elements
    data.forEach(product => {
        const productDiv = document.createElement('div');

    //Create HTML structure for each dataset
    productDiv.innerHTML = (`
            <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>Company: ${product.company}</p>
            <p>Price: $${product.price}</p>
        `);
        productsContainer.appendChild(productDiv); // Add the product div to the container
    }); 
}

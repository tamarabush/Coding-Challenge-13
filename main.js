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
})
// TASK 2 - Fetch Products from the API Using Fetch and Promises:
const apiURL = 'https://www.course-api.com/javascript-store-products';

//Fetch products from the API:
fetch(apiURL)
    .then(response => {
        //checking if the response is OK/Successful
        if (!response.ok) {
            throw new Error('Network response was not working: ' + response.statusText);
        }
        return response.json(); // Using JSON string to parse the response
    })
    .then(data => {
        //if the fetch is successful, extract the product details and display them
        displayProducts(data);
    })

    // TASK 4 - Handle Errors Gracefully:
    .catch(error => {
        //handle any errors that occur during the fetch operation
        console.error('There was a problem with the fetch operation:', error);
        //display a friendly error message on the webpage
        document.getElementById('error-message').innerText = 'Failed to load products. Please try again later.';
        document.getElementById('error-message').style.display = 'block'; // Show the error message
    });


// TASK 3 - Display Product Details Dynamically:
function displayProducts(data) {
    const productsContainer = document.getElementById('products-container');

    //iterate through each product and create HTML elements
    data.forEach(item => {
        const { name, price, company, image } = item.fields;

        const productDiv = document.createElement('div');
        productDiv.innerHTML = 
        //used innerhtml to get the data elements
        `
            <img src="${image[0].url}" alt="${name}" />
            <h2>${name}</h2>
            <p>Company: ${company}</p>
            <p>Price: $${(price / 100).toFixed(2)}</p>
        `;
        productsContainer.appendChild(productDiv); //add the product div to the container
    });
}

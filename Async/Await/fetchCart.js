

// BASE_URL 
const BASE_URL = 'https://fakestoreapi.com'

async function fetchCartData(cartId){

    try {
        const res = await fetch(`${BASE_URL}/carts/${cartId}`)
        if (!res.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchCartData(1)
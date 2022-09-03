const myFunction = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayCatagories(data.data);
    // myFunction(data);
}


const displayCatagories = (cards) => {
    // console.log(cards);
    // console.log('p');

    const cardContainer = document.getElementById('card-container')

    cards.forEach(card => {
        console.log(card);




    })


}

// myFunction();


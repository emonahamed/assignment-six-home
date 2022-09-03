const myFunction = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayCatagories(data.data);
    // myFunction(data);
}


const displayCatagories = (cards) => {
    // console.log(cards);

    const cardContainer = document.getElementById('card-container')

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-12');
        cardDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 740px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                        <p class="card-text"><small class="text-muted">done</small>
                        </p>
                        <p class="btn btn-light">Open Details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

        cardContainer.appendChild(cardDiv);




    })


}

// myFunction();


const myFunction = async (id) => {

    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCatagories(data.data);

    // myFunction(data);
}


const displayCatagories = (cards) => {

    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';

    cards.forEach(card => {
        console.log(card);

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-12');
        cardDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 740px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${card.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.details}</p>
                    <div class="d-flex justify-content-around">
                        <div class="w-25">
                               <img src="${card.author.img}" class="img-fluid rounded-circle  w-25" alt="...">
                                <p class="text-muted">${card.author.published_date}</p>
                        </div>
                        <div>
                        <p class="card-text"><small><i class="fa-regular fa-eye">${card.total_view}</i></small>
                        </p>
                        </div>
                        <div> <p class="btn btn-light">Open Details</p></div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

        cardContainer.appendChild(cardDiv);

    })
}










const myFunction = async (id) => {
    toggleSpinner(true);


    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCatagories(data.data);

    // myFunction(data);
}


const displayCatagories = (cards) => {
    if (cards.length === 0) {
        toggleSpinner(false);
    }

    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';

    cards.forEach(card => {
        // console.log(card);

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
                    <p class="card-text">${card.details.slice(0, 200,)} .... </p>
                    <div class="d-flex justify-content-around">
                        <div class="w-25">
                               <img src="${card.author.img}" class="img-fluid rounded-circle  w-25" alt="...">
                             <p class="text-muted">${card.author.name ? card.author.name : 'no data found'}</p>
                        </div>
                        <div>
                        <p class="card-text"><small><i class="fa-regular fa-eye">${card.total_view ? card.total_view : 'no data found'}</i></small>
                        </p>
                        </div>
                        <div> 
                        <button onclick="loadNewsDetails('${card._id}')"   href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Show Details</button>


                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
  
        `;



        cardContainer.appendChild(cardDiv);

        toggleSpinner(false);





    })
}

const loadNewsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;

    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data[0]);

}

const displayNewsDetails = updates => {
    console.log(updates);


    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = updates.title;

    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = `
    <P> Author name: ${updates.author.name ? updates.author.name : 'no data found'}</p>
    <p>total view: ${updates.total_view ? updates.total_view : 'no data found'}</P>
    <p>news details : ${updates.details} </P>

    `

}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');

    }



}










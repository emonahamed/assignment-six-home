const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`


    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }


}


const displayNews = news => {
    const catagoriesContainer = document.getElementById('catagories');
    catagoriesContainer.innerHTML = '';

    news.forEach(data => {
        const catagoriesDiv = document.createElement('div');
        catagoriesDiv.classList.add('col')
        catagoriesDiv.innerHTML = `
        <p class="btn btn-light"  onclick="myFunction(${data.category_id})">${data.category_name}</p>
        `;
        catagoriesContainer.appendChild(catagoriesDiv);


    })

}





loadNews();





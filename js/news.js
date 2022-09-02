const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category);
}


const displayNews = news => {
    // console.log(news);

    const catagoriesContainer = document.getElementById('catagories');

    news.forEach(data => {
        console.log(data);

        const catagoriesDiv = document.createElement('div');
        catagoriesDiv.classList.add('col')
        catagoriesDiv.innerHTML = `
        <p class="btn btn-light">${data.category_name}</p>
        `;
        catagoriesContainer.appendChild(catagoriesDiv);




    })




}

loadNews();


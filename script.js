let currentQuery  ="News";
let currentPage =1;
const Fetchnews = async (page,q)=>{
console.log("fetching news");

var url = 'https://newsapi.org/v2/everything?' +
'q=' +q+
'&from=2024-05-06&' +
'pageSize=32&' +
'language=en&' +
'page=' + page +
'&sortBy=popularity&' +
'apiKey=d6f0e7c4a6e0456fb7a6dc182d85e028';

var req = new Request(url);

let a = await fetch(req)
 let response = await a.json()



     console.log(response)
let str =""
resultCount.innerHTML= response.totalResults
    for(let item of response.articles){
        str= str+ ` <div class="card my-4 mx-2" style="width: 18rem;">
        <img height="184" src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.title.slice(0,25)}</h5>
        <p class="card-text">${item.description.slice(0,90)}</p>
        <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
        </div>
        </div>`
    }
    document.querySelector(".content").innerHTML = str
}   
Fetchnews(1,currentQuery);
search.addEventListener("click", (e)=>{
    e.preventDefault()
    let queary = searchInput.value;
    currentQuery = queary
    Fetchnews(1,queary);

})
prev.addEventListener("click", (e)=>{
    e.preventDefault()
    if(    currentPage > 1){
        currentPage = currentPage-1
       
        Fetchnews(currentPage,currentQuery);

    }
   
})
next.addEventListener("click", (e)=>{
    e.preventDefault()
    currentPage = currentPage+1
    let queary = searchInput.value;

    Fetchnews(currentPage,currentQuery);

})
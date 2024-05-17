//articlesPosts
let posts = document.getElementById("posts"),
    articles = posts.getElementsByClassName("publicaciones"),
    articlesPosts = [], //recientes recientes = document.getElementById("recientes"),
    articlesRecientes = recientes.getElementsByTagName("article"),
    //hls
    hls = document.getElementById("hightlights"),
    highArticles = hightlights.getElementsByTagName("article");

var texto, urls;
function deleteBlogPost() {
    //borra main section
    posts.style.display = "none";
    //borrar spans
}

function getArticles(articles) {
    //insertamos todos los posts en un array
    let i = 0;
    while (3 > i) {
        articlesPosts.push({
            //get the first image of the article
            thumbnail: articles[i]
                .querySelectorAll("a > img")[0]
                .getAttribute("src"),
            //"text": articles[i].getElementsByClassName("span")[0].textContent,
            articleTitle: articles[i].querySelectorAll("h4")[0].textContent,
            articleUrl: articles[i]
                .querySelectorAll("a")[0]
                .getAttribute("href"),
        });
        i++;
    }
}
function addArticles() {
    //articlesRecientes = 3;
    //articles = 4;
    let i = 0;
    while (3 > i) {
        //insersion de imagen
        articlesRecientes[i]
            .getElementsByClassName("img-fluid")[0]
            .setAttribute("src", articlesPosts[i].thumbnail);

        //insersion de titulo
        texto = document.createTextNode(articlesPosts[i].articleTitle);
        articlesRecientes[i].getElementsByTagName("a")[1].appendChild(texto);
        //articles[i].getElementsByClassName("resume")[0].appendChild(texto);

        //insersion de urls
        urls = articlesRecientes[i].getElementsByTagName("a");
        for (let a = 0; urls.length > a; a++) {
            urls[a].setAttribute("href", articlesPosts[i].articleUrl);
        }
        i++;
    }
}
function addHighlights() {
    //highArticles = 3;
    //articles = 4;
    let i = 0;
    while (3 > i) {
        //insersion de imagen
        highArticles[i]
            .getElementsByClassName("img-fluid")[0]
            .setAttribute("src", articlesPosts[i].thumbnail);

        //insersion de titulo
        texto = document.createTextNode(articlesPosts[i].articleTitle);
        highArticles[i].getElementsByClassName("info")[0].appendChild(texto);

        //insersion de urls
        highArticles[i]
            .getElementsByTagName("a")[0]
            .setAttribute("href", articlesPosts[i].articleUrl);
        i++;
    }
}
//document.addEventListener('DOMContentLoaded', function(e) {
getArticles(articles);
deleteBlogPost();
addHighlights();
addArticles();
//})

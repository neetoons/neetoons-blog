hljs.initHighlightingOnLoad();
//postsPosts
let post = document.getElementById("postss"),
    //post = post.getElementsByClassName("publicaciones")[0],
    postImgs = post.querySelectorAll('a > img'),
    postTexts = post.querySelectorAll('div'),
    postTexts2 = post.querySelectorAll('span'),
    postLinks = post.querySelectorAll('a'),
    postImgSource = postImgs[0].getAttribute("src");
//document.getElementsByClassName("Attribution")[0].style.display = "none";
//document.getElementsByClassName("Header")[0].style.display = "none";
postImgs[0].style.display = "none";
//post.getElementsByClassName("img-fluid")[0].setAttribute("src", postImgSource);
document.querySelector("body > div.container-fluid > div > div.col-12.p-0.md-auto > figure > a > img")
.setAttribute("src", postImgSource);
//remove padding and margin to a tag
for (l in postLinks) {
    if(l >= 2){
        postLinks[l].removeAttribute("style");   
    }
}
//remove img styles and add new styles 
for (p in postImgs){
    if(p >= 2){
        postImgs[p].setAttribute("class", "img-fluid mx-auto post-img");   
        postImgs[p].removeAttribute("width");   
        postImgs[p].removeAttribute("height");   
        postImgs[p].removeAttribute("style");   
    }
}
//delete style justify all text
for (t in postTexts) {
    if(typeof postTexts[t] === "object") {
        postTexts[t].removeAttribute("style");
    }
}
for (s in postTexts2) {
    if(typeof postTexts2[s] === "object") {
        postTexts2[s].removeAttribute("style");
        postTexts2[s].setAttribute("style", "font-size:18px");
    }
}

function insertPostTitle() {
    let oldTitle = document.querySelector("h3")
    let newTitle = document.querySelector("h4");
    newTitle.innerHTML = oldTitle.innerText; 
    oldTitle.style.display = "none";
}
insertPostTitle();
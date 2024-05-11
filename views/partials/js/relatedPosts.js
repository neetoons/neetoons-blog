const relatedPostsContainer = document.querySelector('.related-posts')
const relatedPosts = (json) => {
    let posts = json.feed.entry;
    console.log(posts)
    posts.forEach( post => {
        const a = document.createElement('a')
        const figure = document.createElement('figure')
        const a2 = document.createElement('a')
        const img = document.createElement('img')
        const hr = document.createElement('hr')
        a2.innerHTML = post.title.$t
        a.setAttribute("href", post.link[4].href) 

        //relatedPostsContainer.appendChild(a)    
        relatedPostsContainer.appendChild(figure)
        //a.appendChild(figure)
        figure.appendChild(a)
        a.appendChild(img)
        figure.appendChild(a2)
        figure.appendChild(hr)
        
        img.setAttribute("src", post.media$thumbnail.url.replace(/s72\-c/,"s320"))
        img.className = "img-fluid mb-1"
        figure.className = "position-relative mt-3"
        a2.className = "thumbnail"
    });
}
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    return response.json();
})

.then(function(posts){
    let placeholder = document.querySelector('#tablebody');

    let tables = "";

    for(let post of posts ){
        tables += `
        <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
        </tr>
        `
    }

    placeholder.innerHTML = tables;
})
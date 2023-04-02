fetch("https://jsonplaceholder.typicode.com/comments")
.then(function(response){
    return response.json();
})

.then(function(comments){
    let placeholder = document.querySelector('#tablebody');

    let tables = "";

    for(let comment of comments ){
        tables += `
        <tr>
            <td>${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
        </tr>
        `
    }

    placeholder.innerHTML = tables;
})
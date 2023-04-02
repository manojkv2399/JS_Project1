fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(response){
    return response.json();
})

.then(function(todos){
    let placeholder = document.querySelector('#tablebody');

    let tables = "";

    for(let todo of todos ){
        tables += `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td>
        </tr>
        `
    }

    placeholder.innerHTML = tables;
})
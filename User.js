fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json();
})

.then(function(users){
    let placeholder = document.querySelector('#tablebody');
    
    let tables = "";

    for(let user of users){
        tables += `

        <tr>
            <td>${user.id}</td>
            <td>${user.company.name}</td>
            <td>${user.name}</td>
            <td>name: ${user.name}, <br>
            username: ${user.username}, <br>
            email: ${user.email}, <br>
            street: ${user.address.street}, <br>
            suite: ${user.address.suite}, <br>
            city: ${user.address.city}, <br>
            zip code: ${user.address.zipcode} , <br>
            latitude: ${user.address.geo.lat}, <br>
            longitude: ${user.address.geo.lng}, <br>
            phone: ${user.phone}, <br>
            website: ${user.website}, <br>
            catchPhrase: ${user.company.catchPhrase}, <br>
            bs: ${user.company.bs}</td>
            <td class="Buttons">
                <a href="Posts/post.html">Posts</a> <br>
                <a href="Comments/Comments.html">Comments</a> <br>
                <a href="Todos/Todo.html">Todos</a> <br>
                <a href="#">Pending Todos(1)</a> <br>
                <a href="#">Albums(12)</a> <br>
            </td>
        </tr>

        `;
    }

    placeholder.innerHTML = tables;
})
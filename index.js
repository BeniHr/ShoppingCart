fetch('https://fakestoreapi.com/products?limit=5')
    .then((data) => {
        return data.json();
    })
    .then((completedata) => {
        // document.getElementById('root').innerHTML = completedata[2].title;
        let data1 = '';
        completedata.map((values) => {
            data1+= ` <div class="card">
            <h1 class="title">${values.title}</h1>
            <img class="image" src=${values.image} alt="img">
            <p>Description</p>
            <p class="price">${values.price}</p>
            <div class="buttons">
                <button><i class="fa-regular fa-heart"></i></button>
                <button><i class="fa-regular fa-bag-shopping"></i></button>
            </div>
        </div>`;
        });
        document.getElementById('cards').innerHTML = data1;
    })
    .catch((err) => {
        console.log(err);
    });

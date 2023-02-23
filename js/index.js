let place_for_jackets = document.querySelector('#jackets');
let place_for_sweatshirts = document.querySelector('#sweatshirts');

for (let i = 0; i < jackets.length; i++) {
    item = jackets[i];
    place_for_jackets.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${item.image}" alt="" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <div class="mb-2" style="max-height: 24px;"><p class="card-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.description}</p></div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-4">
                        <span class="price">${item.price}р</span>
                    </div>
                    <div class="col-4">
                        <a href="item.html?id=${item.id}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

for (let i = 0; i < sweatshirts.length; i++) {
    item = sweatshirts[i];
    place_for_sweatshirts.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${item.image}" alt="" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <div class="mb-2" style="max-height: 24px;"><p class="card-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.description}</p></div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-4">
                        <span class="price">${item.price}р</span>
                    </div>
                    <div class="col-4">
                        <a href="item.html?id=${item.id}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
let container = document.querySelector('main');
let search = new URLSearchParams(window.location.search);
let id = search.get('id');

if (!id) {
    window.location.pathname = 'catalog.html';
} else {
    let item = find_item(id);

    container.innerHTML = `
    <h1 class="text-center mb-5">${item.title}</h1>
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-5">
            <div class="col"><img src="${item.image}" class="img-fluid"></div>
            <div class="col">
                <div class="mb-5">${item.description}</div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-2">
                        <span class="price">${item.price}р</span>
                    </div>
                    <div class="col-2">
                        <a href="#" class="btn btn-primary">Купить</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

function find_item(id) {
    for (let i = 0; i < sweatshirts.length; i++) {
        if (sweatshirts[i].id == id) {
            return sweatshirts[i];
        }
    }
    for (let i = 0; i < overalls.length; i++) {
        if (overalls[i].id == id) {
            return overalls[i];
        }
    }
    for (let i = 0; i < t_shirts.length; i++) {
        if (t_shirts[i].id == id) {
            return t_shirts[i];
        }
    }
    for (let i = 0; i < tracksuits.length; i++) {
        if (tracksuits[i].id == id) {
            return tracksuits[i];
        }
    }
    for (let i = 0; i < mittens.length; i++) {
        if (mittens[i].id == id) {
            return mittens[i];
        }
    }
    for (let i = 0; i < jackets.length; i++) {
        if (jackets[i].id == id) {
            return jackets[i];
        }
    }

}
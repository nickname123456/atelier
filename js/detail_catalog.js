let search = new URLSearchParams(window.location.search);
let topic = search.get('topic');

let title = document.querySelector('#title');
let place_for_items = document.querySelector('#place_for_items');

if (topic == `sweatshirts`) {
    title.innerHTML = `Кофты`;
    render_items(sweatshirts);

} else if (topic == `overalls`) {
    title.innerHTML = `Комбинезоны`;
    render_items(overalls);

} else if (topic == `t_shirts`) {
    title.innerHTML = `Футболки`;
    render_items(t_shirts);
    
} else if (topic == `tracksuits`) {
    title.innerHTML = `Спортивные костюмы`;
    render_items(tracksuits);
        
} else if (topic == `mittens`) {
    title.innerHTML = `Варежки`;
    render_items(mittens);
            
} else if (topic == `jackets`) {
    title.innerHTML = `Куртки`;
    render_items(jackets);

} else {
    window.location.pathname = 'catalog.html'
}




function add_plug(place) {
    let item = plug;
    place.innerHTML += `
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

function add_item(item) {
    place_for_items.innerHTML += `
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

function render_items(items) {
    for (let i = 0; i < items.length; i++) {
        add_item(items[i]);
    }
    for (let i = 0; i < (8 - items.length); i++) {
        add_plug(place_for_items);
    }
}
let search_from_site = document.querySelector('#search');
let search_result = document.querySelector('.search_result');

search_from_site.addEventListener('input', function () {
    let value = search_from_site.value.trim().toLowerCase();
    search_result.innerHTML = ``;
    if (value == '') {
        search_result.classList.add('d-none')
    } else {
        search_result.classList.remove('d-none')
        for (let i = 0; i < list_for_search.length; i++) {
            if (list_for_search[i].title.toLowerCase().includes(value)) {
                search_result.innerHTML += `<li><a href="${list_for_search[i].link}">${list_for_search[i].title}</a></li>`;
            }
        }
    }
});

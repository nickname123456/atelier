sweatshirts = [
    {
        title: `Рыжая кофта`,
        description: `Описание рыжей кофты. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/sweater1.jpg`,
        id: 1,
    },
    {
        title: `Белая кофта`,
        description: `Описание белой кофты. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/sweater2.jpg`,
        id: 2,
    },
    {
        title: `Черная кофта`,
        description: `Описание черной кофты. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/sweater3.jpg`,
        id: 3,
    },
    {
        title: `Пушистая кофта`,
        description: `Описание пушистой кофты. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/sweater4.jpg`,
        id: 4,
    },
]

overalls = [
    {
        title: `Комбинезон рабочий`,
        description: `Описание комбинезона рабочего. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/overalls1.jpg`,
        id: 5,
    }
]

t_shirts = [
    {
        title: `Белая футболка`,
        description: `Описание белой футболки. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/t-shirt1.jpg`,
        id: 6,
    }
]

tracksuits = [
    {
        title: `Морковный костюм`,
        description: `Описание морковного костюма. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/sport1.jpg`,
        id: 7,
    }
]

mittens = [
    {
        title: `Розовые варежки`,
        description: `Описание розовых варежек. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/mittens1.jpg`,
        id: 8,
    }
]

jackets = [
    {
        title: `Пальто`,
        description: `Описание пальто. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/jacket1.jpg`,
        id: 9,
    },
    {
        title: `Жилетка`,
        description: `Описание жилетки. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/jacket2.jpg`,
        id: 10,
    },
    {
        title: `Пуховик детский`,
        description: `Описание пуховика детского. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/jacket3.jpg`,
        id: 11,
    },
    {
        title: `Пуховик мужской`,
        description: `Описание пуховика мужского. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
        price: 4589,
        image: `assets/jacket4.jpg`,
        id: 12,
    }
]

plug = {
    title: `Заглушка`,
    description: `Описание заглушки. Это очень длинное описание, которое не поместится в одну строку. Поэтому я его разбил на несколько строк.`,
    price: 4589,
    image: `assets/plug.jpg`,
    id: 13,
}

// let list_for_search = ['Главная', 'Каталог', 'Контакты', 'О нас', 'Корзина', 'Войти', 'Регистрация'];
let list_for_search = [
    {
        title: `главная`,
        link: `index.html`,
    },
    {
        title: `каталог`,
        link: `catalog.html`,
    },
    {
        title: `контакты`,
        link: `index.html#contacts`,
    },
    {
        title: `о нас`,
        link: `index.html#about-us`,
    },
    {
        title: `корзина`,
        link: `#`,
    },
    {
        title: `войти`,
        link: `signuo.html`,
    },
    {
        title: `регистрация`,
        link: `signup.html`,
    }
];
for (let i = 0; i < sweatshirts.length; i++) {
    list_for_search.push({
        title: sweatshirts[i].title,
        link: `item.html?id=${sweatshirts[i].id}`,
    });
}
for (let i = 0; i < overalls.length; i++) {
    list_for_search.push({
        title: overalls[i].title,
        link: `item.html?id=${overalls[i].id}`,
    });
}
for (let i = 0; i < t_shirts.length; i++) {
    list_for_search.push({
        title: t_shirts[i].title,
        link: `item.html?id=${t_shirts[i].id}`,
    });
}
for (let i = 0; i < tracksuits.length; i++) {
    list_for_search.push({
        title: tracksuits[i].title,
        link: `item.html?id=${tracksuits[i].id}`,
    });
}
for (let i = 0; i < mittens.length; i++) {
    list_for_search.push({
        title: mittens[i].title,
        link: `item.html?id=${mittens[i].id}`,
    });
}
for (let i = 0; i < jackets.length; i++) {
    list_for_search.push({
        title: jackets[i].title,
        link: `item.html?id=${jackets[i].id}`,
    });
}

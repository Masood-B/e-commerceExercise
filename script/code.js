let manga = [
    {
    id: 1,
    pic:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
    namme:"Monster Musume no Iru Nichijou Manga",
    title:"Monster Musume no Iru Nichijou",
    cost:"R 399",
    },
    {
    id: 2,
    pic:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
    namme:"No Game No Life Manga",
    title:"No Game No Life",
    cost:"R 499",
    },
    {
    id: 3,
    pic:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
    namme:"Yuragi-sou no Yuuna-san Manga",
    title:"Yuragi-sou no Yuuna-san",
    cost:"R 299",
    },
    {
    id: 4,
    pic:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
    namme:"Saikin Yatotta Maid ga Ayashii Manga",
    title:"Saikin Yatotta Maid ga Ayashii",
    cost:"R 399",
    },
    {
    id: 5,
    pic:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
    namme:"Mato Seihei no Slave Manga",
    title:"Mato Seihei no Slave",
    cost:"R 299",
    }
]

let divBooks = document.querySelector(".books");
manga.forEach((reader)=> {
    divBooks.innerHTML += `
    <div class= "cards-wrapper">
    <div class="images">
    <img src="${reader.pic}" alt="${reader.namme}" loading="lazy" class="img-fluid">
    <h2>${reader.title}</h2>
    </div>
    <p class="lead price">${reader.cost}</p>
    </div>
    `
})
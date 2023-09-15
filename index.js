import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
const productContainer = document.querySelector(".content");
productContainer.style.display = 'flex'
productContainer.style.flexWrap = 'wrap'

productContainer.style.gap = '20px'

// Создание карточек товаров на основе данных из JSON
data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.border = '1px solid #ccc'
    card.style.width = '300px'
    card.style.padding = '15px'
    

    const img = document.createElement("img");
    img.src = product.image_url;
    card.appendChild(img);
    img.style.maxWidth = '100%'
    img.style.height = 'auto'

    const title = document.createElement("h2");
    title.textContent = product.title;
    card.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.textContent = product.paragraph;
    card.appendChild(paragraph);

    productContainer.appendChild(card);
});
// border: 1px solid #ccc;
// padding: 20px;
// margin: 10px;
// width: 300px;
// box-shadow: 0px 0px 5px 0px #888;

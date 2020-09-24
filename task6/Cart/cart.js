let total = 0;    
const f = (x) => {
        console.log(x.target.id);
        let i = x.target.id;
        let position = document.createElement("div");
            position.className = "position";
        let name = document.createElement("div");
            name.className = "name";
            name.innerHTML = items[i].name;
        let price = document.createElement("div");
            price.className = "price";
            price.innerHTML = items[i].price;
/*        let count = document.createElement("div");
            count.className = "count";
        let summ = document.createElement("div");
            summ.className = "summ";*/
        position.appendChild(name);
        position.appendChild(price);
/*        position.appendChild(count);
        position.appendChild(summ);*/
        console.log(position);
        let cart = document.querySelector(".cart")
        cart.appendChild(position);
        total += items[i].price;
        let cartSumm = document.querySelector(".total-summ");
        cartSumm.innerHTML = total;
    };
items.forEach(function(item, i) {
        let card = document.createElement("div");
            card.className = "product-card";
        let h1 = document.createElement("h1");
            h1.className = "card-h1";
            h1.innerHTML = item.name;
        let img = document.createElement("img");
            img.className = "card-img";
            img.setAttribute("src", "img/item-"+i+".jpg");
        let p = document.createElement("p");
            p.className = "card-p";
            p.innerHTML = item.desc;
        let span = document.createElement("span");
            span.className = "card-span";
            span.innerHTML = "Цена: " + item.price +"$";
        let button = document.createElement("button");
            button.className = "card-button";
            button.id = i;
            button.innerHTML = "Купить";
            button.addEventListener("click", f);
        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(p);
        card.appendChild(span);
        card.appendChild(button);
        let products = document.querySelector(".products");
        products.appendChild(card);
});




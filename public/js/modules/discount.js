"use strict"

export function discount(){
    
    fetch("/app/server/api.php")
    .then(response => response.json())
    .then(data => {
        const transformedData = data.map(item => ({
            name: item["Производитель"],
            id: item["Код"],
            description: item["Описание"],
            price: item["Цена у.е"],
            count: item["Наличие"],
            image:item["Фото"],
            discount:item["Скидка"],
            exchange:item["Курс"]
        }));

        const discount = transformedData.filter(item => {
            if(item.discount > 0){
                return item
            }
        })
        makeDiscount(discount)
    })

    function makeDiscount(item){
        const exclItem = item.slice(0,1)
        exclItem.forEach(element =>{
            const exchDollarNum = Number(element.exchange)
            const dollarPriceTotal = parseFloat(element.price) * exchDollarNum
            const dollarPriceDiscount = element.discount * exchDollarNum
            const toFixedDollarTotal =  dollarPriceTotal.toFixed(2)
            const toFixedDollarDiscount =  dollarPriceDiscount.toFixed(2)
            
            let status
            if(element.count > 0){
                status = "В наявностi"
            }else{
                status = "Не в наявностi"
            
            }
            const discItem = `
            <div class="product" data-id ="${element.id}">
              <img class="product-image" src="/app/${element.image}" alt="img">
                  <div class = "product-description">
                    <a class="product-title">${element.description}</a>
                    <p class="product-articul">${element.id}</p>
                  </div>
                    <div class ="product-info">
                        
                        <div class = "all-price">
                            <p class="product-price__dollar">${toFixedDollarTotal} грн</p>
                            <p class="product-price__grn">${toFixedDollarDiscount} грн</p>
                        </div>
                        <div class= "buy">
                            <p class="product-status">${status}</p>
                            <button class="product-button" data >В кошик</button>
                        </div>

                    </div>
            </div>
            `
            discountWrapper.insertAdjacentHTML("beforeend" , discItem)
        })
       
    }
}
discount()
/* function adicionarPizza(){
    let pizzaItem = document.querySelector('.models ,pizza-item').cloneNode(true)
    //preencher as informações de pizza-item
    document.querySelector('.pizza-area').append(pizzaItem)
} */
//substituir querySelector por uma letra
let modalQt=1
const c = (el)=>{
    return document.querySelector(el)
}
const cs =(el)=>document.querySelectorAll(el)

pizzaJson.map((item,index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    //preencher as informações de pizza-item
    pizzaItem.setAttribute('data-key',index) 
    pizzaItem.querySelector('.pizza-item--img img').src= item .img
    pizzaItem.querySelector('.pizza-item--price').innerHTML= `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML =item.description
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
            e.preventDefault()

            let key = e.target.closest('.pizza-item').getAttribute('data-key')
            modalQt=1

            //console.log(pizzaJson[key])
            c('.pizzaBig img').src = pizzaJson[key].img
            c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`

                    //desselecionar o item

                c('.pizzaInfo--size.selected').classList.remove('selected')
               
            //implementando tamanhos das pizzas

            cs('.pizzaInfo--size').forEach((size,sizeIndex)=>{

                if(sizeIndex == 2){
                    
                    size.classList.add('selected')
                }

                size.querySelector('span').innerHTML =pizzaJson[key].sizes[sizeIndex]
              
            })
            //até aqui implementação de tamanho das pizzas
            c('.pizzaInfo--qt').innerHTML=modalQt


            c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
            c('.pizzaInfo--desc').innerHTML= pizzaJson[key].description
            c('.pizzaWindowArea').style.opacity= 0
            c('.pizzaWindowArea').style.display= 'flex'

            setTimeout(()=>{
                c('.pizzaWindowArea').style.opacity = 1

            },200)
           
    })
   
   c('.pizza-area').append(pizzaItem)
  
})
   //eventos do modal
   function fechaModal(){
       c('.pizzaWindowArea').style.opacity = 0
       setTimeout(() => {
           c('.pizzaWindowArea').style.display = 'none'
       },500 );
   }
   cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
     item.addEventListener('click', fechaModal)
   })

  
   
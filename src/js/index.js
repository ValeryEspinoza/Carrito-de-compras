
let itemsContent = document.querySelectorAll("article")


let listaPosibilidades=[
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
]

console.log(itemsContent);
console.log(listaPosibilidades);






function item(){

    itemsList=[]

    for (let index = 0; index < itemsContent.length; index++) {
       
        if (itemsContent[index] === listaPosibilidades[index]) {
            itemsList.push(item().textContent)
        }
    }
    
    
    

    


}
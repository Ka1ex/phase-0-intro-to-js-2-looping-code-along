// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } 
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
    


function writeCards(names, event){
   let messages = []
    for (let h = 0; h < names.length; h++){
         
    messages.push(`Thank you, ${names[h]}, for the wonderful surprise gift!`)
    }
 
    return messages 
}
writeCards()
function countDown(pozInt){
  
  while ( pozInt >= 0 )

  console.log(pozInt --)
}
countDown()
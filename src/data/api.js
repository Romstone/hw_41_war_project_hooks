export default class Api
{
   static getDeck()
   {
       fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
           .then(response => response.json())
           .then(data => {
                sessionStorage.setItem('deck', JSON.stringify(data.cards));
           });
   }
}
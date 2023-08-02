
// let quote=document.querySelector('.quote');
// let person=document.querySelector('.person');
// var btn=document.querySelector('.newquotes');
// console.log(quote);
// console.log(person);
// console.log(btn);



	
	

// const quotes=[{
//     quote: "A rose by any other name would smell as sweet.",
//      person:"	William Shakespeare	"
//     },{
//     quote:"All that glitters is not gold.",
//      person:"William Shakespeare"
//     },{
//     quote:"Eighty percent of success is showing up.",
//      person:"Woody Allen"
//     },{
//     quote:"All the world’s a stage, and all the men and women merely players.",
//      person:"William Shakespeare"
//     },{
//     quote: "Ask not what your country can do for you; ask what you can do for your country.",
//     person: "John Kennedy	"
//     },{
//     quote:"If you want something said, ask a man; if you want something done, ask a woman.",
//      person:"Margaret Thatcher"
//     },{
//     quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
//      person:"Albert Einstein"
//     },{
//     quote:"Tis better to have loved and lost than never to have loved at all.",
//      person:"Alfred Lord Tennyson"
//     },{
//     quote:"No one can make you feel inferior without your consent.",
//     person:"Albert Einstein"
//     },{
//     quote:"Tis better to have loved and lost than never to have loved at all.",
//     person:"Alfred Lord Tennyson"
//     },{
//     quote:"Tis better to have loved and lost than never to have loved at all.",
//     person:"Alfred Lord Tennyson"
//     },
//     ];
// // btn.addEventListener('click',function(){
// // let rand=Math.floor(Math.random() *quotes.length);

// //     quote.innerText=quotes[rand].quote;
// //     person.innerText=quotes[rand].person;
// // });
// if(btn){
//     console.log("yrs");
//     document.querySelector("#newquotes").addEventListener('click',function(){
//     let rand=Math.floor(Math.random() *quotes.length);
//         quote.innerText=quotes[rand].quote;
//     person.innerText=quotes[rand].person;
// });
// }
// else{
//     console.log("no");
// }

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

console.log(quote);
console.log(person);
console.log(btn);

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`
}, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
}, {
    quote: `"t does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})



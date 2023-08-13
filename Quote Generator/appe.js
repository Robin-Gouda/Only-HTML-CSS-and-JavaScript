//variables

let btn = document.querySelector('#new-quote' );
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:'" The best revenge is not to be like that "' , 
        person:'Marcus Aurelius'
    },


    {
        quote:'" It is not what happens to you, but how you react to it that matters "' , 
        person:'Epictetus'
    },


    {
        quote:'" Life is like riding a bicycle. To keep your balance, you must keep moving "' , 
        person:'Albert Einstein'
    },


    {
        quote:'" If an egg is broken by an outside force, life ends. If broken by an inside force, life begins. Great things always begin from the inside "' , 
        person:'Jim Kwik'
    },


    {
        quote:'" Integrity is doing the right thing, even when no one is watching "' , 
        person:'C.S. Lewis'
    },


    {
        quote:'" People are just as happy as they make up their minds to be "' , 
        person:'Abraham Lincoln'
    },


    {
        quote:'" The biggest adventure you can take is to live the life of your dreams. "' , 
        person:' Oprah Winfrey '
    },


    {
        quote:'" None can destroy iron, but its own rust can! Likewise no one can destroy us; but our own mindset can "' , 
        person:'Ratan Tata'
    },


    {
        quote:'" Pain is temporary. Quitting lasts forever "' , 
        person:' Lance Armstrong'
    },
];

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
console.log(quotes)
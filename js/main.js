var arrayOfQuote = [
    {
        quote: `"Beware of what you become in pursuit of what you want."`,
        author: "--Jim Rohn"
    },
    {
        quote: `"It's not what happens to you, but how you react to it that matters."`,
        author: "--Epictetus"
    },
    {
        author: "--Frank Sinatra",
        quote: `"The best revenge is massive success."`
    },
    {
        author: "--Wayne Gretzky", 
        quote: `"You miss 100% of the shots you don't take."`
    },
    {
        author: "--Nelson Mandela", 
        quote : `"Resentment is like drinking poison and waiting for your enemies to die."`
    },
    {
        author: "--Elbert Hubbard", 
        quote: `"Do not take life too seriously. You will not get out alive."`
    }
];
var arrayOfFavorites = [] 

var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author");

var lastRandomNum = 0;
function getQuote() {
    
    do{
        var randomNum = Math.trunc(Math.random() * arrayOfQuote.length);
    }while(randomNum === lastRandomNum)

    lastRandomNum = randomNum;

    quoteElement.innerHTML = arrayOfQuote[randomNum].quote;
    authorElement.innerHTML = arrayOfQuote[randomNum].author;
}

function addQuote(){
    var quote = window.prompt("Enter the quote you want to add:");
    var author = window.prompt("Enter the author name :");

    if(quote === null && author === null){
        console.log("Please enter a valid quote")
    }else{
        arrayOfQuote.push({quote: quote, author: author});
    }
}
function addFavorites(){
    arrayOfFavorites.push(arrayOfQuote[lastRandomNum]);
    console.log(arrayOfFavorites)
}

function showFavorites(){
    var quote = "";
    for(var i = 0; i < arrayOfFavorites.length; i++){
        quote += `<p  id="quote1">${arrayOfFavorites[i].quote}</p>
                    <p class="mb-0" id="author1">${arrayOfFavorites[i].author}</p>
                    <hr>`
        document.getElementById("favoeites").innerHTML = quote;
    }
    console.log("A7A")
}
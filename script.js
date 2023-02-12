AOS.init();
const api = "https://type.fit/api/quotes";

let realData = "";
let quotesData = "";

// selectors 
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuotebtn = document.getElementById("quote-btn");
const tweetBtn = document.getElementById("tweet-btn");

const showQuotes = (quoteData)=>{
    let rnum = Math.floor(Math.random() * 1642);
    quotesData = realData[rnum];
    quote.innerText = `${quotesData.text}`;
    quotesData.author == null ? (author.innerText = "Anonymous") :(author.innerText = `By ${quotesData.author}`);
}

const getQuotes = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data[0].text); 
    // console.log(data[0].author); 
    realData = data;
    showQuotes();
}
const shareQuote = ()=>{
    const url = `https://twitter.com/intent/tweet?${quotesData} ${quotesData}`;
    window.open(url);

}

newQuotebtn.addEventListener("click",()=>{
    getQuotes(api);
});
tweetBtn.addEventListener("click",()=>{
    shareQuote();
});
// initial call
getQuotes(api);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//1) Create an array of JavaScript objects to hold the data for your quotes. Name array quotes. The quotes array should be accessible in the global scope.
//Helpful videos: https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-data-using-objects/mixing-and-matching-arrays-and-objects
//................https://teamtreehouse.com/library/javascript-basics/creating-reusable-code-with-functions/getting-information-from-a-function

var quotes =[
	 {quote :"The journey of a thousand miles starts with a singel step",
	 source:"Chinese Proverb",
	 citation: "The Internet",
	 year: "A long Time ago!"
	 },
	 
	 {quote :"If a tree fell and it wasn't posted on Facebook, did it really fall?",
	 source:"David Hollaway",
	 citation: "me!",
	 year: "2016"
	 },
	 
	 {quote :"Cause Brawndo's got electrolytes.",
	 source:"Secretary of Defense",
	 citation: "From the Movie Idiocracy 1",
	 year: "2006"
	 },
	 
	 {quote :"Welcome to Costco.  I love you.",
	 source:"Greeter at Costco",
	 citation: "From the Movie Idiocracy 2",
	 year: "2006"
	 },
	 
	 {quote :"I can't believe you like money too. We should hang out.",
	 source:"Frito",
	 citation: "From the Movie Idiocracy 3",
	 year: "2006"
	 }
	 
];

var makeRandomNumber = Math.round(Math.random() * quotes.length);

//2) Create a function named getRandomQuote which, a) selects a random quote object from the quotes array, 2) returns the randomly selected quote object
function getRandomQuote(){
	
	var showQuote =	quotes[makeRandomNumber].quote;
	//document.getElementsByClassName("quote").item(messageQuote);
	//document.getElementsByClassName("quote")[0].length;
	document.getElementsByClassName("quote")[0].innterHTM = "Test";

	//console.log(document.getElementsByClassName("quote")[0]);
	//console.log(messageQuote);
	console.log(showQuote);
	//return showQuoteNow;
}


// 3) Create a function named printQuote
function printQuote (){
	
	getRandomQuote();
	//<p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
	
}

//loops through the quote.
/*for (var i = 0; i< quotes.length; i+=1)
{
//console.log(quotes[i].quote);
}*/	




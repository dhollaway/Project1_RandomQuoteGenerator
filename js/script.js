
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//1) Create an array of JavaScript objects to hold the data for your quotes. Name array quotes. The quotes array should be accessible in the global scope.
//Helpful videos: https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-data-using-objects/mixing-and-matching-arrays-and-objects
//................https://teamtreehouse.com/library/javascript-basics/creating-reusable-code-with-functions/getting-information-from-a-function

//contains the list of quotes.
var quotes =[
	 {quote :"The journey of a thousand miles starts with a singel step",
	 source:"Chinese Proverb",
	 citation: "The Internet",
	 year: "A long Time ago!"
	 },
	 
	 {quote :"If a tree fell and it wasn't posted on Facebook, did it really fall?",
	 source:"David Hollaway",
	 citation: "from my mouth!",
	 year: "2016"
	 },
	 
	 {quote :"Cause Brawndo's got electrolytes.",
	 source:"Secretary of Defense",
	 citation: "1st from the Movie Idiocracy",
	 year: "2006"
	 },
	 
	 {quote :"Welcome to Costco.  I love you.",
	 source:"Greeter at Costco",
	 citation: "2nd from the Movie Idiocracy",
	 year: "2006"
	 },
	 
	 {quote :"I can't believe you like money too. We should hang out.",
	 source:"Frito",
	 citation: "3rd the Movie Idiocracy",
	 year: "2006"
	 }
	 
];

// Makes the random number according to the length of the array.
var makeRandomNumber = Math.round(Math.random() * quotes.length);

//2) Create a function named getRandomQuote which, a) selects a random quote object from the quotes array, 2) returns the randomly selected quote object
function getRandomQuote(){
	
	var showQuote =	quotes[makeRandomNumber].quote;
	var showSource = quotes[makeRandomNumber].source;
	var showCitation = quotes[makeRandomNumber].citation;
	var showYear = quotes[makeRandomNumber].year;

	document.getElementsByClassName("quote")[0].innerHTML = showQuote;
	document.getElementsByClassName("source")[0].innerHTML = showSource;
	//problem starts with the two lines (59, 60) below. Gets an uncaught TypeError scrip.js:57
	//"Cannot read property of 0 or null"
	document.getElementsByClassName("citation")[0].innerHTML = showCitation;
	document.getElementsByClassName("year")[0].innerHTML = showYear;

	console.log(showQuote);
	console.log(showSource);
	console.log(showCitation);
	console.log(showYear);
	//return showQuoteNow;
}


// 3) Create a function named printQuote
function printQuote (){
	
	getRandomQuote();
	
}

//loops through the quote.
/*for (var i = 0; i< quotes.length; i+=1)
{
//console.log(quotes[i].quote);
}*/	




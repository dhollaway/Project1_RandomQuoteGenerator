// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create an array of objects

var quotes ={

	quote : ["The journey of a thousand miles starts with a singel step",
			"If a tree fell and it wasn't posted on Facebook, did it really fall?",
			"Cause Brawndo's got electrolytes.",
			"Welcome to Costco.  I love you." ,
			"I can't believe you like money too. We should hang out."],
	source: ["Chinese Proverb", 
			"David Hollaway",
			 "Secretary of Defense",
			 "Greeter at Costco", 
			 "Frito"],
	citation: ["The Internet",
				"Me!",
				"From the Movie Idiocracy 1",
				"From the Movie Idiocracy 2",
				"From the Movie Idiocracy 3"], 
	year: ["A long Time ago!",
			"2016",
			"2006",
			"2006",
			"2006"] 


};

//created the function. 
function printQuote (){
	for (keyforVariable in quotes){

		console.log(keyforVariable, ' : ', quotes["source"]);
	}
}
// letf off on this video. Practicing accessing values (keys and values). https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/tracking-data-using-objects/using-for-in-to-loop-through-an-objects-properties


//Quotes
//"The journey of a thousand miles starts with a singel step" Chinese Proverb
// "If a tree fell and it wasn't posted on Facebook did it really fall?" David Hollaway
// "Cause Brawndo's got electrolytes." Secretary of Defense
// "Welcome to Costco.  I love you."  Greeter at Costco
// "I can't believe you like money too. We should hang out." Frito
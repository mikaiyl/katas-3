const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

    /*
    *   Create and append html
    */

function createAppend(title, content, id) {
	const element = document.createElement("div");
	const header = document.createElement("h3");
	const text = document.createElement("p");

	element.id = id;
	header.textContent = title;
	text.textContent = content;

	element.appendChild(header);
	element.appendChild(text);

	document.getElementById("main").appendChild(element);
}

	/*
	*   Katas
    */

function one() {
	let result = "", title = "Display the numbers from 1 to 20. (1, 2, 3, ...,19, 20)";
	for(let a = 0; a <= 20; a++ ){
		result += " " + a;
	}
	createAppend(title, result);
}

function two() {
	let result = "", title = "Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)";
	for(let b = 0; b <= 20; b++ ){
		if( b%2 == 0) result += " " + b;
	}
	createAppend(title, result);
}

function three() {
	let result = "", title = "Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)";
	for(let c = 0; c <= 20; c++ ){
		if ( c % 2 == 1 ) result += " " + c;
	}
	createAppend(title, result);
}

function four() {
	let result = "", title = "Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)";
	for(let d = 0; d <= 100; d += 5 ){
		result += " " + d;
	}
	createAppend(title, result);
}

function five() {
	let result = "", title = "Display the square numbers (Links to an external site.)Links to an external site. up to 100. (1, 4, 9, ..., 81, 100)";
	for(let e = 0; e <= 10; e++ ){
		result += " " + e*e;
	}
	createAppend(title, result);
}

function six() {
	let result = "", title = "Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)", f = 20;
	do {
		f--;
		result += " " + f;
	} while ( f > 0 );
	createAppend(title, result);
}

function seven() {
	let result = "", title = "splay the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)";
	let g = 20;
	do {
		if ( g%2 == 0 )  result += " " + g;
		g--;
	} while ( g > 0 );
	createAppend(title, result);
}

function eight() {
	let result = "", title = "Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)";
	let h = 20;
	do {
		if ( h % 2 == 1 ) result += " " + h;
		h--;
	} while ( h > 0 );

	createAppend(title, result);
}

function nine() {
	let result = "", title = "Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)";
	let i = 100;
	do {
		i -= 5;
		result += " " + i;
	} while ( i > 0 );
	createAppend(title, result);
}

function ten() {
	let result = "", title = "Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)";
	let j = 10;
	do {
		result += " " + j*j;
		j--;
	} while ( j > 0 );
	createAppend(title, result);
}

function eleven() {
	let result = "", title = "11. Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)";
    for (let i = 0; i < sampleArray.length; i++) {
	   result += sampleArray[i] + " "
	}
	createAppend(title, result);
}

function twelve() {
	let result = "", title = "12. Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)";
    result = sampleArray.filter(element => element % 2 == 0).join(" ");
    createAppend(title, result);
}

function thirteen() {
	let result = "", title = "13. Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)";
    result = sampleArray.filter(element => element % 2 == 0).join(" ");
	createAppend(title, result);
}

function fourteen() {
	let result = "", title = "14. Display the square of each element in sampleArray. (219961, 570025, ..., 222784)";

	createAppend(title, result);
}

function fifteen() {
	let result = "", title = "15. Display the sum of all the numbers from 1 to 20.";

	createAppend(title, result);
}

function sixteen() {
	let result = "", title = "16. Display the sum of all the elements in sampleArray.";

	createAppend(title, result);
}

function seventeen() {
	let result = "", title = "17. Display the smallest element in sampleArray.";

	createAppend(title, result);
}

function eighteen() {
    let result = "", title = "18. Display the largest element in sampleArray.";

	createAppend(title, result);
}

function ninteen() {
	let result = "", title = "19. Display 20 solid gray rectangles, each 20px high and 100px wide.";

	createAppend(title, result);
}

function twenty() {
	let result = "", title = "20. Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).";

	createAppend(title, result);
}

function twentyone() {
	let result = "", title = "21. Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.";

	createAppend(title, result);
}

function twentytwo() {
	let result = "", title = "22. As in #21, but alternate colors so that every other rectangle is red.";

	createAppend(title, result);
}

function twentythree() {
	let result = "", title = "23. As in #21, but color the rectangles with even widths red.";

	createAppend(title, result);
}

const functions = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, ninteen, twenty];

    /*
    *   Main
    */

(function(){
	for (let func of functions) {
	    func();
	}
})();

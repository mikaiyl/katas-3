const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const twentyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    /*
    *   Create and append html
    */


function createAppendDiv(height, width, color, entryPoint) {
	const element = document.createElement("div");

    element.style.backgroundColor = color;
    element.style.height = height;
    element.style.width = width;

	document.getElementById(entryPoint).appendChild(element);
}

function createAppendText(title, content, id, className, entryPoint = "main") {
	const element = document.createElement("div");

    if (typeof id != "undefined"){
        element.id = id;
    }
	if (typeof className != "undefined"){
        element.className = className;
    }
    if (typeof title != "undefined"){
        var header = document.createElement("h3");
        header.textContent = title;
	    element.appendChild(header);
    }
	if (typeof content != "undefined"){
    	var text = document.createElement("p");
	    text.textContent = content;
	    element.appendChild(text);
    }

	document.getElementById(entryPoint).appendChild(element);
}
``
	/*
	*   Katas
    */

function one() {
	let result = "", title = "Display the numbers from 1 to 20. (1, 2, 3, ...,19, 20)";
	for(let a = 0; a <= 20; a++ ){
		result += " " + a;
	}
	createAppendText(title, result);
}

function two() {
	let result = "", title = "Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)";
	for(let b = 0; b <= 20; b++ ){
		if( b%2 == 0) result += " " + b;
	}
	createAppendText(title, result);
}

function three() {
	let result = "", title = "Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)";
	for(let c = 0; c <= 20; c++ ){
		if ( c % 2 == 1 ) result += " " + c;
	}
	createAppendText(title, result);
}

function four() {
	let result = "", title = "Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)";
	for(let d = 0; d <= 100; d += 5 ){
		result += " " + d;
	}
	createAppendText(title, result);
}

function five() {
	let result = "", title = "Display the square numbers (Links to an external site.)Links to an external site. up to 100. (1, 4, 9, ..., 81, 100)";
	for(let e = 0; e <= 10; e++ ){
		result += " " + e*e;
	}
	createAppendText(title, result);
}

function six() {
	let result = "", title = "Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)", f = 20;
	do {
		f--;
		result += " " + f;
	} while ( f > 0 );
	createAppendText(title, result);
}

function seven() {
	let result = "", title = "splay the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)";
	let g = 20;
	do {
		if ( g%2 == 0 )  result += " " + g;
		g--;
	} while ( g > 0 );
	createAppendText(title, result);
}

function eight() {
	let result = "", title = "Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)";
	let h = 20;
	do {
		if ( h % 2 == 1 ) result += " " + h;
		h--;
	} while ( h > 0 );

	createAppendText(title, result);
}

function nine() {
	let result = "", title = "Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)";
	let i = 100;
	do {
		i -= 5;
		result += " " + i;
	} while ( i > 0 );
	createAppendText(title, result);
}

function ten() {
	let result = "", title = "Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)";
	let j = 10;
	do {
		result += " " + j*j;
		j--;
	} while ( j > 0 );
	createAppendText(title, result);
}

function eleven() {
	let result = "", title = "11. Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)";
    for (let i = 0; i < sampleArray.length; i++) {
	   result += sampleArray[i] + " "
	}
	createAppendText(title, result);
}

function twelve() {
	let result = "", title = "12. Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)";
    result = sampleArray.filter(element => element % 2 == 0).join(" ");
    createAppendText(title, result);
}

function thirteen() {
	let result = "", title = "13. Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)";
    result = sampleArray.filter(element => element % 2 == 1).join(" ");
	createAppendText(title, result);
}

function fourteen() {
	let result = "", title = "14. Display the square of each element in sampleArray. (219961, 570025, ..., 222784)";

    result = sampleArray.map(element => element*element).join(" ");
	createAppendText(title, result);
}

function fifteen() {
	let result = 0, title = "15. Display the sum of all the numbers from 1 to 20.";
    twentyArray.map(element => result += element);
	createAppendText(title, result.toString());
}

function sixteen() {
	let result = 0, title = "16. Display the sum of all the elements in sampleArray.";
    sampleArray.map(element => result += element);
	createAppendText(title, result);
}

function seventeen() {
	let result = sampleArray[0], title = "17. Display the smallest element in sampleArray.";
    for ( i of sampleArray ){
        if (i < result) {
            result = i;
        }
    }
	createAppendText(title, result);
}

function eighteen() {
    let result = "", title = "18. Display the largest element in sampleArray.";
    for ( i of sampleArray ){
        if (i > result) {
            result = i;
        }
    }
	createAppendText(title, result);
}

function ninteen() {
	let result = undefined, title = "19. Display 20 solid gray rectangles, each 20px high and 100px wide.";
    createAppendText(title, undefined);
    createAppendText(undefined,undefined,"box19");
    for (i = 0;i < 20;i++){
        createAppendDiv("20px", "100px", "gray", "box19");
    }
}

function twenty() {
	let result = undefined, title = "20. Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).";
    createAppendText(title, result);
    createAppendText(undefined,undefined,"box20");
    for (i = 105;i < 200;i++){
        createAppendDiv("20px", i + "px", "gray", "box20");
    }
}

function twentyone() {
	let result = undefined, title = "21. Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.";
    createAppendText(title, result);
    createAppendText(undefined,undefined,"box21");
    for (i = 0;i < 20;i++){
        createAppendDiv("20px", sampleArray[ i ] + "px", "gray", "box21");
    }
}

function twentytwo() {
	let result = "", title = "22. As in #21, but alternate colors so that every other rectangle is red.";
    createAppendText(title, result);

    createAppendText(undefined,undefined,"box22");
    for (i = 0;i < 20;i++){
        if (i%2==0){
            color = "gray";
        } else {
            color = "red";
        }
        createAppendDiv("20px", sampleArray[ i ] + "px", color, "box22");
    }
}

function twentythree() {
	let result = "", title = "23. As in #21, but color the rectangles with even widths red.";
    createAppendText(title, result);

    createAppendText(undefined,undefined,"box23");
    for (i = 0;i < 20;i++){
        if (sampleArray[i]%2==0){
            color = "gray";
        } else {
            color = "red";
        }
        createAppendDiv("20px", sampleArray[ i ] + "px", color, "box23");
    }
}

const functions = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, ninteen, twenty, twentyone, twentytwo, twentythree];

    /*
    *   Main
    */

(function(){
	for (let func of functions) {
	    func();
	}
})();

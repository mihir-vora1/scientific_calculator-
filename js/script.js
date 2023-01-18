console.log("scientific calculator");

const actions = document.querySelector('.actions');

// input field of value
const ans = document.querySelector('.ans');
console.log(actions);
const mplus = [0];
const mminus = [0];

// use the let for assigning the value to expression
let expression = '';
let a=0;
actions.addEventListener('click', (e) => {
	console.log(e.target);
	const value = e.target.dataset['value'];
	console.log("values",value)

	// value must be enter, if value is undefined noting is happen
	if(value !== undefined) {
		
		// clear all the input value
		if(value == 'clear') {
			expression = '';
			ans.value = 0;
			return true;
		}
		// remove the one number at a time using slice() method
		else if(value == 'delete'){
			let remove = ans.value.slice(0, -1);
			console.log(remove);
			expression = remove;
		}
		else if(value == 'square'){
			expression = square();
		}
		else if (value == '1/x'){
			expression = reciprocalfn();
		}
		else if (value == 'π'){
			expression = 3.14159
		}
		else if(value == 'm+'){
			mplus[0] += expression;
			console.log(mplus[0]);
		}
		else if (value == 'm-'){
			mminus[0] += expression;
			console.log(mminus[0]);
		}
		else if(value == 'ms'){
			expression = mplus[0] - mminus[0];
		}

		// else if (value == 'm+'){
		// 	var mm1 = mm1 + expression;
		// 	localStorage.setItem(value, mm1);
		// 	console.log(localStorage);
		// }
		// else if (value == 'm-'){
		// 	var mm2 = mm2 - expression;
		// 	localStorage.setItem(value, mm2);
		// 	console.log(localStorage);
		// }
		else if(value == '=') {
			const answer = eval(expression);
			expression = answer;
			
		} else {
			expression += value;
		}

		if(expression == undefined) {
			expression = '';
			ans.value = 0;
		} else {
			ans.value = expression;
		}
		// expression += value;


	}

});

// function for square operation
const square =()=> {
	return eval(expression*expression);
}

// function for reciprocal function operation
const reciprocalfn = () => {
	return eval(1/expression)
}



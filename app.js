// checking answers

const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
	evt.preventDefault();

	let score = 0;
	const userAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
	];

	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});
	console.log(score);

	// showing the score

	scrollTo(0, 0);

	const result = document.querySelector(".result");

	result.classList.remove("d-none");

	let output = 0;

	const timer = setInterval(() => {
		result.querySelector("span").textContent = `${output}%`;
		if (output === score) {
			clearInterval(timer);
		} else {
			output++;
		}
	}, 10);
});

console.log("hello");

window.console.log("hello");

console.log(document.querySelector("form"));

console.log(window.document.querySelector("form"));

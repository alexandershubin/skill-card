addEventListener('DOMContentLoaded', function () {
	const skillsInput = document.querySelectorAll('.skills__input');
	const levelCount = document.querySelector('.level__count');
	const levelSvg = document.querySelector('.level__svg');

	const step = 1;
	const time = 500;
	const count = 100;
	const inputValue = Math.ceil(count / skillsInput.length);
	const transitionCount = 150;
	const resultTransition = Math.floor(transitionCount / skillsInput.length);

	skillsInput.forEach(item => {
		item.addEventListener('change', function (e) {
			if (item && e.target.type === 'checkbox') {
				item.value = inputValue;
				countSum();
			}
		});
	});

	const animationCount = (num, elem) => {
		let startNum = 0;
		let timout = Math.round(time / (num / step));

		let interval = setInterval(() => {
			startNum = startNum + step;
			let content = num === 0 ? 0 : num > 100 ? 100 : startNum;

			if (startNum === num || num === 0) {
				clearInterval(interval);
			}

			elem.textContent = content;
		}, timout)
	}

	const countSum = () => {
		const cb = [...document.querySelectorAll('input[type="checkbox"]:checked')];
		const sumInputValue = cb.reduce((acc, n) => acc + +n.value, 0);
		const sumTransition = cb.reduce((acc) => acc + resultTransition, 0);
		levelSvg.classList.add('rotate');
		levelSvg.style.transform = `rotate(${sumInputValue === 0 ? -45 : sumTransition}deg)`;
		animationCount(sumInputValue, levelCount);

	};
});


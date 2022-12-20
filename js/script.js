"use strict"

document.addEventListener('click', (e) => {
	if (e.target.closest('.header__burger')) {
		e.target.classList.toggle('_active')
		document.body.classList.toggle('_lock')
		document.querySelector('.menu__list').classList.toggle('_show')
	}

	if (e.target.closest('.row-clients__star>img')) {
		const starActive = e.target.closest('.row-clients__star').querySelector('img.active')
		if (starActive) {
			starActive.classList.remove('active')
		}
		
		e.target.classList.add('active')
	}
})
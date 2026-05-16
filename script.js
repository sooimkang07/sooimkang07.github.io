const nav = document.querySelector('header > nav')
const btn = nav.querySelector('button')

btn.addEventListener('click', () => {
	const open = nav.classList.toggle('is-open')
	btn.setAttribute('aria-expanded', open)
})
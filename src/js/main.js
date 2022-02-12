const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	if (!nav.classList.contains('nav--active')) {
	}
	nav.classList.toggle('nav--active')
	handleNavItemsAnimation()
}
const handleNavItemsAnimation = () => {
	let delayTime = 0
	navBtnBars.classList.remove('black-bars-color')
	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
navItems.forEach(item => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav--active')
		handleNavItemsAnimation()
	})
})
const handleCurrentYear = () => {
	let year = new Date().getFullYear()
	footerYear.innerText = year
}
const handleObserver = () => {
	const currentSection = window.scrollY
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)

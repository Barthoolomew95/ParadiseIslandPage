const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	if (!nav.classList.contains('nav--active')) {
	}
	nav.classList.toggle('nav--active')
	handleNavItemsAnimation()
}
const handleNavItemsAnimation = () => {
	let delayTime = 0
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
burgerBtn.addEventListener('click', handleNav)

const	aboutDescription = document.getElementById('about-description-id');
const	header = document.getElementById('header-id');
let		headerButton = document.getElementById('header-button');
const	overlay = document.getElementById('overlay');
const	sideMenu = document.getElementById('small-nav');

const	manageMenu = () =>
{
	sideMenu.classList.toggle('close');
	overlay.classList.toggle('close');
}

const	checkWindowSizeNav = () =>
{
	let 	width = window.innerWidth;

	if (width > 850)
	{
		if (headerButton)
		{
			header.removeChild(headerButton);
			headerButton = 0;
		}
	}
	else if (width <= 850 && !headerButton)
	{
		//Prepare button
		let newButton = document.createElement('button');
		newButton.classList.add('nav-button');
		newButton.id = 'header-button';

		let menu = document.createElement('i');
		menu.classList.add('material-symbols-outlined');
		menu.classList.add('button-icon');
		menu.innerHTML = 'menu';

		newButton.appendChild(menu);

		header.appendChild(newButton);
		headerButton = document.getElementById('header-button');
		headerButton.addEventListener('click', manageMenu);
	}
}

const	checkWindowSizeLogo = () =>
{
	let		width = window.innerWidth;
	const	aboutLogo = document.getElementById('about-logo-id');

	if (width <= 1630)
	{
		if (aboutLogo)
		{
			aboutDescription.removeChild(aboutLogo);
		}
	}
	else if (width > 1630 && !aboutLogo)
	{
		let	newDiv = document.createElement('div');
		newDiv.classList.add('about-logo');
		newDiv.id = 'about-logo-id';

		let image = document.createElement('img');
		image.classList.add('about-logo-img');
		image.src = 'jm.png';
		image.alt = 'jm logo';
	
		newDiv.appendChild(image);

		aboutDescription.appendChild(newDiv);
	}
}

window.addEventListener('resize', checkWindowSizeLogo);
window.addEventListener('resize', checkWindowSizeNav);

headerButton.addEventListener('click', manageMenu);

document.addEventListener('click', (event) =>
{
	if (sideMenu.classList.contains('close'))
	{
		if (overlay.contains(event.target))
		{
			sideMenu.classList.toggle('close');
			overlay.classList.toggle('close');
		}
	}
});

checkWindowSizeLogo();
checkWindowSizeNav();
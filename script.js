const	aboutDescription = document.getElementById('about-description-id');

const	checkWindowSize = () =>
{
	let	width = window.innerWidth;
	const	aboutLogo = document.getElementById('about-logo-id');

	console.log('Largura:', width);
	if (width <= 1630)
	{
		if (aboutLogo)
		{
			console.log('Entra');
			aboutDescription.removeChild(aboutLogo);
		}
	}
	else if (width > 1630 && !aboutLogo)
	{
		console.log('Esta merda não funfa');
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

window.addEventListener('resize', checkWindowSize);

checkWindowSize();
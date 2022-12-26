function sendMail(params) {
	var tempParams = {
		from_name: document.getElementById('name').value,
		email_id: document.getElementById('email').value,
		company: document.getElementById('company').value,
		message: document.getElementById('message').value,
	};

	emailjs.send('service_gieuwr7','template_otvocw7',tempParams)
	.then(function(res)
	{
		alert('success! Message sent Successfully... ',res.status);
	});
}



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
	mainMenu.style.display= "flex";
	mainMenu.style.top  = "0";
}

function close(){
	mainMenu.style.top = "-120%";
}
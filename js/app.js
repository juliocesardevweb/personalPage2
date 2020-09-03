$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.carousel').carousel({
    interval: 3000
  })
//trocar cor do texto de introdução

const colorIntro = document.querySelector('.font-sans');
let counter = 0;

const colorArr = ['white', 'tomato'];

setInterval(
	()=> {
		counter++
		
		if (counter == colorArr.length) {
			counter = 0
		}
		
		colorIntro.style.color = colorArr[counter];
	}, 3000
);
  // Recolher menu no modo mobile
   // scroll suave interno
   const menuItems = document.querySelectorAll('#navbarSupportedContent a[href^="#"]');
   //funcao para adicionar e remover classe ativo dos elementos do menu.
   
   menuItems.forEach((item) => {
     item.addEventListener('click', scrollToIdOnclick);
   })
   function scrollToIdOnclick(event) {
     event.preventDefault()
     const element = event.target;
     const id = element.getAttribute('href')
     const to = document.querySelector(id).offsetTop;
     window.scroll({
       top: to - 60,
       behavior: 'smooth',
     });
   }
   //scroll voltar ao topo da pagina.
   const topPage = document.querySelector('#home')
   topPage.addEventListener('click', setaPraCima);
   function setaPraCima(event) {
     event.preventDefault();
     const setaPosicao = event.target;
     const classe = setaPosicao.getAttribute('class');
     const toTop = document.querySelector(classe);
     window.scroll({
       top: 0,
       behavior: 'smooth'
     })
   }



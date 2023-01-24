$(document).ready(()=> {
  $('#corousel-images').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
  })

  $('.menu-hamburger').click(() => {
    $('nav').slideToggle();
  })

  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(xx) xxxxx-xxxx' 
  })

  $('form').validate({
    rules: {
      nome: {
        required: true
      }, 

      email: {
        required: true,
        email: true,
      }, 

      telefone: {
        required: true
      }, 

      mensagem : {
        required: true
      }, 

      veiculoDeInteresse: {
        required: false
      }
    },

    messages: {
      nome: 'Por favor, insira o seu nome.'
    }, 

    submitHandler : (form) => {
      alert('Enviado com sucesso!!!')
            $('form input').val('');
            $('form textarea').val('');
    }, 

    invalidHandler: (e, validador) => {
      let camposIncorretos = validador.numberOfInvalids();
      console.log(camposIncorretos)
      if(camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      } 
    }
  })

  $('#menu-principal #link-contato').click(() =>{
    const destino = $('#contato');

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)

    $('nav').slideToggle();
    
  })

  $('#menu-principal #link-promocoes').click(() =>{
    const destino = $('#promocoes');

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)

    $('nav').slideToggle();
    
  })

  $('#menu-principal #link-destaque').click(() =>{
    const destino = $('#em-destaque');

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)

    $('nav').slideToggle();
    
  })

  $('#menu-principal #link-sobre').click(() =>{
    const destino = $('#sobre-a-loja');

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)

    $('nav').slideToggle();
    
  })

  $('.lista-veiculos button').click(function() {
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculo-interesse').val(nomeVeiculo)

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)
  })
  
})
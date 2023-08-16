$(document).ready(function(){

  // Slider
  if(window.location.href.indexOf('index') > -1) {
    
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1230
    });
  }
  

  // Post
  if(window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: 'Titulo 1',
        date: 'Publicado el ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      },
      {
        title: 'Titulo 2',
        date: 'Publicado el ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      },
      {
        title: 'Titulo 3',
        date: 'Publicado el ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      },
      {
        title: 'Titulo 4',
        date: 'Publicado el ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      },
      {
        title: 'Titulo 5',
        date: 'Publicado el ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      },
      {
        title: 'Titulo 6',
        date: 'Publicado el ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      }
    ]

    posts.forEach((item, index) => {
      var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}
          </p>
          <a href="#" class="button-more">Leer más</a>
        </article>
      `;

      $("#posts").append(post);
    });
  }

  // Selector de tema.
  var theme = $('#theme');

  $('#to-red').click(function() {
    theme.attr('href', './css/red.css');
  });

  $('#to-green').click(function() {
    theme.attr('href', './css/green.css');
  });

  $('#to-blue').click(function() {
    theme.attr('href', './css/blue.css');
  });

  // Boton de scroll.
  $('.upper').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  // Login falso.
  $('#login form').submit(function(){
    var form_name = $('#form_name').val();

    localStorage.setItem('form_name', form_name);
  });

  var form_name = localStorage.getItem('form_name');

  if(form_name != null && form_name != 'undefined') {
    var about_parrafo = $('#about p');

    about_parrafo.html('<br><strong>Bienvenido ' + form_name + '</strong> ');
    about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');
    
    $('#login').hide();

    $('#logout').click(function() {
      localStorage.clear();
      location.reload();
    });
  }
  
  // Acordeon jQuery UI.
  if(window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion();
  }

  // Reloj con MomentJS.
  if(window.location.href.indexOf('reloj') > -1) {

    setInterval(function(){
      var reloj = moment().format('hh:mm:ss');
      $('#reloj').html(reloj);
    }, 1000); 
  }

  // Validación de formulario
  if(window.location.href.indexOf('contacto') > -1) {

    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });

    $.validate({
      lang: 'es'
    });
  }

});
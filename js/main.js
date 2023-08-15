$(document).ready(function(){

  // Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1230
  });

  // Post
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

});
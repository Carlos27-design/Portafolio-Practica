document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    document.querySelector('#load-iframe-map').innerHTML = ` <iframe
      class='contact__iframe'
      frameborder='0'
      scrolling='no'
      marginheight='0'
      marginwidth='0'
      loading='lazy'
      referrerpolicy='no-referrer-when-downgrade'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.2692062233635!2d-72.95797185614006!3d-40.340641738545564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9616426f62ad80c1%3A0xd68aa505a9250a76!2sAv.%20Arturo%20Prat%201184%2C%205240540%20Rio%20Bueno%2C%20R%C3%ADo%20Bueno%2C%20Los%20R%C3%ADos!5e0!3m2!1ses-419!2scl!4v1709137890978!5m2!1ses-419!2scl'
    ></iframe>`;
  }, 500);
});

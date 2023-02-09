     new Swiper(".swiper", {
         loop: true,
         effect: 'coverflow',
         centeredSlides: true,
         slidesPerView: 'auto',
         speed: 500,
         pagination: {
             el: '.swiper-pagination',
             clickable: true, 
         
         },

         breakpoints	: {
         768: {
             centeredSlides: false,
          coverflowEffect:{

       depth: 0, 

       rotate: 0, 

       stretch : -10, 

      

      } 
         }
         },
          autoplay: {
           delay: 3000,
          },
      coverflowEffect:{
       depth: 80, 
       rotate: 50, 
       stretch : 20, 
      
      } 
     })
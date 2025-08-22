//  TOGGLE POP-UP
      let Toggle= document.getElementsByClassName('toggle')[0]
      let Info_overlay= document.getElementsByClassName('info-overlay')[0];
      let Info= document.querySelector(".info")
      let new_style= document.createElement("style")
      function show_style(){
         let display= Info_overlay.style.display;
         let display_value= display=== "none" ? "block":"none"
         Info_overlay.style.display= display_value
         Info.style.display="block"
         new_style.textContent=
         `
         .info{
            position:absolute;
            top: 10%; right:2%;
            border: none;
         }
         `
         document.head.appendChild(new_style)
         Info_overlay.style.zIndex=1
      }
      document.getElementsByClassName('toggle')[0].addEventListener("click", show_style);
      show_style(Toggle)

      // Login Pop-up
      const Login_overlay= document.getElementsByClassName('Login-overlay')[0]
      const link= document.getElementById('login-link');
      const F_general= document.getElementsByClassName('form-general')[0];
      function show_login_pop_up(){
         let Login_on_display=Login_overlay.style.display;
         let Login_value= Login_on_display=== "none"? "block":"none"
         Login_overlay.style.display=Login_value
      }
      link.addEventListener("click", show_login_pop_up)
      function remove_login_pop_up(){
         Login_overlay.style.display="none"
      }
      F_general.addEventListener("click", remove_login_pop_up)

      // Toggle pop-up on scroll
      const Toggle_1= document.getElementsByClassName('toggle')[1];
      Toggle_1.addEventListener("click",show_style)

      const redirect= document.querySelector('.info-img-text')
      redirect.addEventListener('click', ()=>{
         window.location= "help-center.html"
      })

      // Become a host POPUP
      let  B_overlay= document.getElementsByClassName('become-overlay')[0]
      let B_text= document.getElementsByClassName('text')[0]
      function text_pop_up(){
         let text_display= B_overlay.style.display;
         let text_value= text_display === "none" ? "block":"none"
         B_overlay.style.display= text_value
      }
      document.querySelector('.text').addEventListener('click', text_pop_up)
      // Become A host popup on scroll
      let B_text_1=document.getElementsByClassName('text')[1]
      B_text_1.addEventListener("click", text_pop_up)
      
      // CHANGING THE CONTENT OF THE TAB SECTION
   let B_drop= document.createElement('style')
   let Drop_1= document.getElementsByClassName("dropdown-item")[0]
   let Drop_2= document.getElementsByClassName("dropdown-item")[1]
   let Drop_3= document.getElementsByClassName("dropdown-item")[2]
   let Drop_4= document.getElementsByClassName("dropdown-item")[3]
   let Drop_display=[Drop_1, Drop_2, Drop_3, Drop_4]
   let line_indicator= document.querySelector('.indicator')
   
   function display_DEFAULT_dropdown_items(){
      Drop_1.style.display="grid";
      Drop_2.style.display= "none"
      Drop_3.style.display="none"
      Drop_4.style.display="none"
      B_drop.textContent=
      `
      .tabs-section>.tab-header>.item1{
         text-decoration:underline;
          text-underline-offset: 10px;
         text-decoration-thickness: 3px;
      }
      .dropdown-menu .dropdown-item:nth-child(1)>.item{
         text-align: left;
      }
      `
      document.head.appendChild(B_drop)
      line_indicator.style.transform= "translateX(8px)"
      line_indicator.style.width= "50px"
      
   }
   document.addEventListener("DOMContentLoaded", display_DEFAULT_dropdown_items)

   function display_first_dropdown_items(){
      B_drop.textContent=
      `
      .tabs-section>.tab-header>.item1{
         text-decoration:underline;
          text-underline-offset: 10px;
         text-decoration-thickness: 3px;
      }
      `
      document.head.appendChild(B_drop)
         for(var Drop_key of Drop_display ){
         if (Drop_key== Drop_1){
            if(Drop_1.style.display == "none"){
               Drop_1.style.display="grid";
               Drop_2.style.display= "none"
               Drop_3.style.display="none"
               Drop_4.style.display="none" 
            } else{
               Drop_1.style.display == "none"
            }
         }
      }
      
   }
   document.getElementsByClassName("item1")[0].addEventListener("click", display_DEFAULT_dropdown_items)

   
   document.getElementsByClassName("item2")[0].addEventListener("click", ()=>{
         for(var Drop_key of Drop_display ){
         if (Drop_key== Drop_2){
            if(Drop_2.style.display == "none"){
               B_drop.textContent=`
               .dropdown-menu .dropdown-item:nth-child(2){
                  display:grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                  column gap: 2%;
               }
               .dropdown-menu .dropdown-item:nth-child(2)>.item{
                  text-align: left;
               }
               
               .tab-header>.item2{
                  text-decoration:underline;
                  text-underline-offset: 10px;
                  text-decoration-thickness: 3px;
               }
               `
               document.head.appendChild(B_drop)
               Drop_1.style.display= "none"
               Drop_3.style.display="none"
               Drop_4.style.display="none" 
            } else{
               Drop_2.style.display == "none"
            }
         }
      }
      
      Drop_2.style.display="grid"
   })
   
   document.getElementsByClassName("item3")[0].addEventListener("click", ()=>{
         for(var Drop_key of Drop_display ){
         if (Drop_key== Drop_3){
            if(Drop_3.style.display == "none"){
               B_drop.textContent=`
               .dropdown-menu .dropdown-item:nth-child(3){
                  display:grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr ;
                  column gap: 2%;
                  
               }
               .dropdown-menu .dropdown-item:nth-child(3)>.item{
                  text-align: left;
               }
               
               .tab-header>.item3{
                  text-decoration:underline;
                  text-underline-offset: 10px;
                  text-decoration-thickness: 3px;
               }
               `
               document.head.appendChild(B_drop)
               Drop_1.style.display= "none"
               Drop_2.style.display="none"
               Drop_4.style.display="none" 
            } else{
               Drop_3.style.display == "none"
            }
         }
      }
      
      Drop_3.style.display="grid"
   })

   
   document.getElementsByClassName("item4")[0].addEventListener("click", ()=>{
      line_indicator= document.querySelector('.indicator')
         for(var Drop_key of Drop_display ){
         if (Drop_key== Drop_4){
            if(Drop_4.style.display == "none"){
               B_drop.textContent=`
                  .dropdown-menu .dropdown-item:nth-child(4){
                     display:grid;
                     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                     column gap: 2%;
                  }
                  
                  .dropdown-menu .dropdown-item:nth-child(4)>.item{
                        text-align: left;
                  }
                  
                  .tabs-section .item4{
                     text-decoration:underline;
                      text-underline-offset: 10px;
                     text-decoration-thickness: 3px;
                  }
                  `
                  document.head.appendChild(B_drop)
                  line_indicator.style.transform= "translateX(8px)"
                  line_indicator.style.width= "50px"
                  
                  Drop_3.style.display="none"
                  Drop_2.style.display= "none"
                  Drop_1.style.display="none"
            } else{
               Drop_4.style.display= "none"
            }
         }
      }
      Drop_4.style.display="grid" 
   })

   // HANDLE THE NAV AND CHANGES FOR THE PHONE VIEW
   const mediaQuery_1 = window.matchMedia('(max-width: 568px)');
   function on_phone_screen_window(event) {
      const phone_nav = document.querySelector('.phone-nav');
      const phone_nav_scroll = document.querySelector('.phone-nav-Scroll');
      const bottom_nav= document.querySelector('.bottom-nav');

      if (!phone_nav || !phone_nav_scroll || !bottom_nav) return; // Safety check

      const phone_sticky = phone_nav.offsetTop;

      // Remove any existing scroll listeners to avoid duplicates
      window.onscroll = null;

      if (event.matches) {
         // Only run scroll listener on small screens
         window.addEventListener('scroll', () => {
               if (window.scrollY > phone_sticky) {
                  phone_nav.classList.add('removed');
                  phone_nav_scroll.classList.add('show');
                  bottom_nav.classList.add('bottom-show');
               } else {
                  phone_nav.classList.remove('removed');
                  phone_nav_scroll.classList.remove('show');
                  bottom_nav.classList.remove('bottom-show');
               }
         });
      } else {
         // Reset nav state when going back to larger screens
         phone_nav.classList.remove('removed');
         phone_nav_scroll.classList.remove('show');
      }
   }
   // Listen for screen size changes
   mediaQuery_1.addEventListener('change', on_phone_screen_window);
   // Run it once on page load
   on_phone_screen_window(mediaQuery_1);


   //NAVAR SCROLL STICKY
   const header = document.querySelector('.nav-on-Scroll');
   const sticky = header.offsetTop;
   window.addEventListener('scroll', () => {
      if(window.scrollY > sticky) {
            header.classList.add('show-navbar');
            
      } else{
            header.classList.remove('show-navbar');
      }
   })

   // handle the relocation to the login page
   const item_text= document.querySelectorAll('.item-text')
   function relocate(){
      window.location= "login.html"
   }
   document.getElementsByClassName('item-text')[0].onclick=relocate

   const botton_login= document.getElementsByClassName('bottom-nav-item')[2];
   botton_login.addEventListener('click', ()=>{
      window.location= "login.html"
   })

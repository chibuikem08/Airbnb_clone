 const Text= document.getElementsByClassName('text-one')[0]
    const Host= document.getElementsByClassName('host')[0]
    function show_host(){
        if(Host.style.display == "none"){
            Host.style.display="block";
        } else{
            Host.style.display="none"
        }
    }
    document.getElementsByClassName('text-one')[0].addEventListener('click', show_host)

    const Host_close= document.getElementById('closeHost')
    function close_host(){
        Host.style.display="none"
    }
    Host_close.addEventListener("click", close_host)

    const Drop= document.getElementsByClassName('filter-btn')[0]
    const All= document.querySelector('.all-content')
    function show_all_content(){
        All.style.display="block"
    }
    Drop.addEventListener('click', show_all_content)
    function close_all_content(){
        All.style.display="none"
    }
    Drop.addEventListener('click', close_all_content)
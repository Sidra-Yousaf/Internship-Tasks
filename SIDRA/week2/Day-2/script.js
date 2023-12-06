const btn = document.getElementById('read');

btn,addEventListener('click',()=>{
    document.querySelectorAll('.single-box').forEach(e=>{
        e.classList.remove('unseeen')
    });
    document.querySelectorAll('.dot').forEach(e=>{
        e.classList.remove('dot')
    })
    document.querySelectorAll('num').innertext = '0';
    })

const thumbnails = document.querySelectorAll('.img-thumbnail');

thumbnails.forEach(function(e){
    e.addEventListener('click', function(){
        e.classList.toggle('active');
    })
})
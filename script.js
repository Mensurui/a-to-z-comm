const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}else{
    bar.addEventListener('click', () => {
        nav.classList.toggle('');
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};






const menu = document.getElementById('bar-menu');
const items_menu = document.getElementById('items-menu');
const opcionesMenu = document.querySelectorAll('.opcion-menu')


menu.addEventListener('click', e => {
    items_menu.classList.toggle('hidden');
});


for(const x of opcionesMenu) {
    x.addEventListener('click', e => {
        items_menu.classList.add('hidden');
    });
}

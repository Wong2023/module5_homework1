let map = new Map();
map.set(1, 'синий');
map.set(2, 'зеленый');
map.set(3, 'черный');
map.forEach((item, key) => {
    console.log(`Ключ - ${key}, значение - ${item}`)
})

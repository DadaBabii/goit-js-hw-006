const itemsEl = document.querySelectorAll('li.item ul'); //li.item ul
console.log('Number of categories: ', itemsEl.length);

for (const el of itemsEl) {
    console.log('Categories: ', el.previousElementSibling.textContent)
    console.log('Elements: ', el.children.length)
}
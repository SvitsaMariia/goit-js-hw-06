const list = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});

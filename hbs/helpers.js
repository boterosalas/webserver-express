const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
})
hbs.registerHelper('mayusc',(text)=>{
    let words = text.split(' ');
    words.forEach((pal, idx) => {
        words[idx] = pal.charAt(0).toUpperCase() + pal.slice(1).toLowerCase();
    });
    return words.join(' ');
})
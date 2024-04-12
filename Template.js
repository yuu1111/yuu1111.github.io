function createNavigation() {
    const element = document.querySelector('#navigation');
    const createElement = ' <header class="header"> <nav class="menu"> <ul class="menuList"><li><a href="index.html">HOME</a></li><li><a href="about.html">ABOUT</a></li><li><a href="contact.html">CONTACT</a></li><li><a href="portfolio.html">PORTFOLIO</a></li><li><a href="link.html">LINK</a></li></ul></nav></header>'
    element.insertAdjacentHTML('afterbegin', createElement);
}

createNavigation();

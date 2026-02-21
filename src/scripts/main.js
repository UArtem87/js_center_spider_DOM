'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = 'relative';
spider.style.position = 'absolute';

if (spider.parentElement !== wall) {
  wall.append(spider);
}

const centerSpider = () => {
  const x = (wall.clientWidth - spider.offsetWidth) / 2;
  const y = (wall.clientHeight - spider.offsetHeight) / 2;

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
};

centerSpider();

window.addEventListener('resize', centerSpider);

// app/javascript/components/banner.js
import Typed from 'typed.js';

const dynamicContent = () => {
  const content = document.querySelector(".content");
  console.log(content.innerHTML);
  new Typed('#content', {
    strings: [content.innerText],
    typeSpeed: 1000,
    loop: true
  });
}
export {dynamicContent};

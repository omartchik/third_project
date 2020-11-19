// app/javascript/components/banner.js
import Typed from 'typed.js';

const dynamicContent = () => {
  const content = document.querySelector(".title");
  console.log(content.innerHTML);
  new Typed('#content', {
    strings: [content.innerHTML],
    typeSpeed: 100,
    loop: true
  });
}
export {dynamicContent};

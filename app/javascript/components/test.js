const test = () => {
  const h1 = document.querySelector(".content");
  const h3 = document.querySelector(".title-content");
  if (h1) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled >= 200) {
        h1.style.color ="gray";
        h3.style.color ="gray";
        h3.style.opacity ="0.3";
      } else {
        h1.style.color ="black";
        h3.style.color ="black";
        h3.style.opacity ="0.7";
      }
    });
  }

};

export {test};

const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.forEach((classe) => {
        if (classe.startsWith("reveal-")) {
          entry.target.classList.remove(classe);
        }
      });
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

document
  .querySelectorAll(".reveal")
  .forEach((target) => observer.observe(target));

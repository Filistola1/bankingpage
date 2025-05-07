document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll("[data-scroll]");
  
    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };
  
    const displayScrollElement = (element) => {
      element.setAttribute("data-visible", "true");
    };
  
    const hideScrollElement = (element) => {
      element.removeAttribute("data-visible");
    };
  
    const applyParallaxEffect = (element) => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const elementOffset = element.getBoundingClientRect().top + scrollPosition;
      const parallaxSpeed = 0.2; // Adjust speed as needed
      const translateY = (scrollPosition - elementOffset) * parallaxSpeed;
      element.style.transform = `translateY(${translateY}px)`;
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
          displayScrollElement(el);
          applyParallaxEffect(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
  
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Trigger on load in case elements are already in view
  });
export const addTitleToDOM = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('title', document.title);
  });
};

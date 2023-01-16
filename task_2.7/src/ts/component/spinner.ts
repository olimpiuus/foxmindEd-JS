class Spinner {
  element: HTMLDivElement;
  constructor() {
    this.element = document.querySelector(".spinner-wrapper")!;
  }
  activate = () => {
    this.element.classList.remove("spinner-deactivated");
    this.element.classList.add("spinner-active");
  };
  deactivate = () => {
    this.element.classList.remove("spinner-active");
    this.element.classList.add("spinner-deactivated");
  };
}
const spinner = new Spinner();
export default spinner;

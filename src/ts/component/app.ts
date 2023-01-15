import { addTitleToDOM } from './addTitle';
import { ClickHandler } from './clickHandler';
import { getData, ShopData } from './getShopData';
import { renderFn } from './render';

(async () => {
  addTitleToDOM();

  const data = new ShopData(await getData());

  if (document.title === 'Products') {
    renderFn.renderHtmlProductsList(data.list!);
    renderFn.renderSideBar.renderSideBar(data);
  } else {
    renderFn.renderFeaturedList(data.getFeaturedItems());
  }

  new ClickHandler(data);
})();

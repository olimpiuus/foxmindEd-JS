import { ClickHandler } from './clickHandler';
import { getDataArr, ShopData } from './getShopData';
import { Render } from './render';

(async () => {
  const data = new ShopData(await getDataArr());
  if (document.title==='Products') {
    new Render().renderHtmlProductsList(data.list!);
    new Render().renderSideBar(data);
  }
  
  new ClickHandler(data);
})();

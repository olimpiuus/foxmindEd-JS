
import { ClickHandler } from './clickHandler';
import { getDataArr, ShopData } from './getShopData';
import { Render } from './render';
import shoppingCart from './shopping-cart';




(async () => {
  const data = new ShopData(await getDataArr());

  new Render().renderHtmlProductsList(data.list!);
  new Render().renderSideBar(data);
  new ClickHandler(data)
  shoppingCart.reRenderCart()

})();

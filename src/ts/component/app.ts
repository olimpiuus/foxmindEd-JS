
import { getDataArr, ShopData } from './getShopData';
import { Render } from './render';




(async () => {
  const data = new ShopData(await getDataArr());
  new Render().renderHtmlProductsList(data.list!);
  new Render().renderSideBar(data);

})();

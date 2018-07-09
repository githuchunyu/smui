import Header from './header';
import Button from './button';
import Cell from './cell';
import Icon from './icon';
// import CellSwipe from '../packages/cell-swipe';
import Field from './field';
import Badge from './badge';
import Switch from './switch';
import Spinner from './spinner';
// import TabItem from '../packages/tab-item';
// import TabContainerItem from '../packages/tab-container-item';
// import TabContainer from '../packages/tab-container';
import Navbar from './navbar';
import Tabbar from './tabbar';
import Search from './search';
import Checklist from './checklist';
import Radio from './radio';
import Loadmore from './loadmore';
import Actionsheet from './action-sheet';
// import Popup from '../packages/popup';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Toolbox from './toolbox';
import ToolboxItem from './toolbox-item';
import Range from './range';
import Page from './page';
// import Picker from '../packages/picker';
import Progress from './progress';
import Toast from './toast';
import Indicator from './indicator';
import MessageBox from './message-box';
import InfiniteScroll from './infinite-scroll';
import Lazyload from './lazyload';
// import DatetimePicker from '../packages/datetime-picker';
import IndexList from './index-list';
// import IndexSection from '../packages/index-section';
// import PaletteButton from '../packages/palette-button';
// import '../src/assets/font/iconfont.css';
// import merge from './utils/merge';

const version = '0.0.1';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component('sm-header', Header);
  Vue.component('sm-button', Button);
  Vue.component('sm-cell', Cell);
  Vue.component('sm-icon',Icon);
  // Vue.component(CellSwipe.name, CellSwipe);
  Vue.component('sm-field', Field);
  Vue.component('sm-badge', Badge);
  Vue.component('sm-switch', Switch);
  Vue.component('sm-spinner', Spinner);
  // Vue.component(TabItem.name, TabItem);
  // Vue.component(TabContainerItem.name, TabContainerItem);
  // Vue.component(TabContainer.name, TabContainer);
  Vue.component('sm-navbar', Navbar);
  Vue.component('sm-tabbar', Tabbar);
  Vue.component('sm-search', Search);
  Vue.component('sm-checklist', Checklist);
  Vue.component('sm-radio', Radio);
  Vue.component('sm-loadmore', Loadmore);
  Vue.component('sm-infinite-scroll', InfiniteScroll);
  Vue.component('sm-actionsheet', Actionsheet);
  // Vue.component(Popup.name, Popup);
  Vue.component('sm-swipe', Swipe);
  Vue.component('sm-swipe-item', SwipeItem);
  Vue.component('sm-toolbox', Toolbox);
  Vue.component('sm-toolbox-item', ToolboxItem);
  Vue.component('sm-range', Range);
  Vue.component('sm-page', Page);
  // Vue.component(Picker.name, Picker);
  Vue.component('sm-progress', Progress);
  // Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component('sm-index-list', IndexList);
  Vue.component('sm-lazyload', Lazyload);
  // Vue.component(IndexSection.name, IndexSection);
  // Vue.component(PaletteButton.name, PaletteButton);
  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version,
  // Header,
  // Button,
  // Cell,
  // CellSwipe,
  // Field,
  // Badge,
  // Switch,
  // Spinner,
  // TabItem,
  // TabContainerItem,
  // TabContainer,
  // Navbar,
  // Tabbar,
  // Search,
  // Checklist,
  // Radio,
  // Loadmore,
  // Actionsheet,
  // Popup,
  // Swipe,
  // SwipeItem,
  // Range,
  // Picker,
  // Progress,
  // Toast,
  // Indicator,
  // MessageBox,
  // InfiniteScroll,
  // Lazyload,
  // DatetimePicker,
  // IndexList,
  // IndexSection,
  // PaletteButton
};

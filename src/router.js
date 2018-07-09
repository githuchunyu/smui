import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Button from '@/views/Button'
import Toast from '@/views/Toast'
import Indicator from '@/views/Indicator'
import Header from '@/views/Header'
import Tabbar from '@/views/Tabbar'
import Switch from '@/views/Switch'
import Checklist from '@/views/Checklist'
import Radio from '@/views/Radio'
import Field from '@/views/Field'
import Range from '@/views/Range'
import Progress from '@/views/Progress'
import Badge from '@/views/Badge'
import Navbar from '@/views/Navbar'
import Spinner from '@/views/Spinner'
import Swipe from '@/views/Swipe'
import Toolbox from '@/views/Toolbox'
import Search from '@/views/Search'
import Page from '@/views/Page'
import Messagebox from '@/views/MessageBox'
import Loadmore from '@/views/Loadmore'
import InfiniteScroll from '@/views/InfiniteScroll'
import IndexList from '@/views/IndexList'
import Lazyload from '@/views/Lazyload'
import ActionSheet from '@/views/ActionSheet'
import Icon from '@/views/Icon'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/',
	routes: [

    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:Home},
    {path:'/button',name:'button',component:Button},
    {path:'/toast',name:'toast',component:Toast},
    {path:'/header',name:'header',component:Header},
    {path:'/tabbar',name:'tabbar',component:Tabbar},
    {path:'/indicator',name:'indicator',component:Indicator},
		{path:'/switch',name:'switch',component:Switch},
		{path:'/checklist',name:'checklist',component:Checklist},
		{path:'/radio',name:'radio',component:Radio},
		{path:'/field',name:'field',component:Field},
		{path:'/range',name:'range',component:Range},
		{path:'/progress',name:'progress',component:Progress},
		{path:'/badge',name:'badge',component:Badge},
		{path:'/navbar',name:'navbar',component:Navbar},
		{path:'/spinner',name:'spinner',component:Spinner},
		{path:'/swipe',name:'swipe',component:Swipe},
		{path:'/toolbox',name:'toolbox',component:Toolbox},
		{path:'/search',name:'search',component:Search},
		{path:'/page',name:'page',component:Page},
		{path:'/messagebox',name:'messagebox',component:Messagebox},
		{path:'/loadmore',name:'loadmore',component:Loadmore},
		{path:'/infinitescroll',name:'infinitescroll',component:InfiniteScroll},
		{path:'/indexlist',name:'indexlist',component:IndexList},
		{path:'/lazyload',name:'lazyload',component:Lazyload},
		{path:'/actionsheet',name:'actionsheet',component:ActionSheet},
		{path:'/icon',name:'icon',component:Icon},

    // {path: '/404',name: '404',component: NotFoundPage},
    // {path: '/*',redirect: '/404'},
	]
})

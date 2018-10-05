import abstract from '@/views/common/abstract.vue'
import user from '@/views/setting/user.vue'
import goodList from '@/views/goods/good-list.vue'
import orderList from '@/views/orders/order-list.vue'

export default [{
  path: '/setting',
  name: 'setting',
  meta: {
    name: '基本设置',
    auth: false, // 这个字段以后用来验证必须登录才可以查看
    icon: 'el-icon-caret-bottom'
  },
  component: abstract,
  children: [{
    path: 'user',
    name: 'setting',
    meta: {
      name: '基本设置',
      auth: false, // 这个字段以后用来验证必须登录才可以查看
      icon: 'el-icon-more'
    },
    component: user
  }]

},
{
  path: '/goods',
  name: 'goods',
  meta: {
    name: '商品管理',
    auth: false, // 这个字段以后用来验证必须登录才可以查看
    icon: 'el-icon-caret-bottom'
  },
  component: abstract,
  children: [{
    path: 'list',
    name: 'goodList',
    meta: {
      name: '商品列表',
      auth: false, // 这个字段以后用来验证必须登录才可以查看
      icon: 'el-icon-more'
    },
    component: goodList
  }]

},
{
  path: '/orders',
  name: 'orders',
  meta: {
    name: '订单管理',
    auth: false, // 这个字段以后用来验证必须登录才可以查看
    icon: 'el-icon-caret-bottom'
  },
  component: abstract,
  children: [{
    path: 'list',
    name: 'orderList',
    meta: {
      name: '订单列表',
      auth: false, // 这个字段以后用来验证必须登录才可以查看
      icon: 'el-icon-more'
    },
    component: orderList
  }]

}]

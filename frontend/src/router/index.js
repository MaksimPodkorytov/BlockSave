import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from '../pages/Auth.vue'
import BlockchainPage from '../pages/Blockchain.vue'
import BlockPage from '../pages/Block.vue'
import DashboardPage from '../pages/Dashboard.vue'
import EmployeePage from '../pages/Employee.vue'
import ProductPage from '../pages/Product.vue'
import ProductChangePage from '../pages/ProductChange.vue'
//import UsersPage from '../pages/Users.vue'
//import UserPage from '../pages/User.vue'
/*
import OwlPage from '../pages/Owl.vue'
import AuctionsPage from '../pages/Auctions.vue'
import AuctionPage from '../pages/Auction.vue'
*/
import TransactionPage from '../pages/Transaction.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'auth',
            component: AuthPage
        },
        {
            path: '/blockchain',
            name: 'blockchain',
            component: BlockchainPage
        },
        {
            path: '/block/:height',
            name: 'block',
            component: BlockPage,
            props: true
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage
        },
        {
            path: '/employee',
            name: 'employee',
            component: EmployeePage
        },
        {
            path: '/productchange',
            name: 'productchange',
            component: ProductChangePage
        },
        {
            path: '/product',
            name: 'product',
            component: ProductPage
        },
        /*
        {
          path: '/users',
          name: 'users',
          component: UsersPage
        },
        {
          path: '/user/:publicKey',
          name: 'user',
          component: UserPage,
          props: true
        },
        {
          path: '/owls',
          name: 'owls',
          component: OwlsPage
        },
        {
          path: '/owl/:hash',
          name: 'owl',
          component: OwlPage,
          props: true
        },
        {
          path: '/auctions',
          name: 'auctions',
          component: AuctionsPage
        },
        {
          path: '/auction/:id',
          name: 'auction',
          component: AuctionPage,
          props: true
        },
        {
          path: '/block/:height',
          name: 'block',
          component: BlockPage,
          props: true
        },*/
        {
            path: '/transaction/:hash',
            name: 'transaction',
            component: TransactionPage,
            props: true
        }
    ]
})
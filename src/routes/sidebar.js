/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {RiProductHuntLine} from "react-icons/ri"
import {FaHospitalUser} from "react-icons/fa"
import {BiCategoryAlt} from "react-icons/bi"

const routes = [
  {
    path: '/app/dashboard', // the url
    icon: <AiOutlineHome/>, // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  // {
  //   path: '/app/forms',
  //   icon: 'FormsIcon',
  //   name: 'Add_product',
  // },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  {
    path: '/app/charts',
    icon: <AiOutlineShoppingCart/>,
    name: 'Sales',
  },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  {
    path: '/app/tables',
    icon: <RiProductHuntLine/>,
    name: 'Products',
  },
  {
    path: '/app/tables',
    icon: <FaHospitalUser/>,
    name: 'Sellers',
  },
  {
    path: '/app/tables',
    icon: <BiCategoryAlt/>,
    name: 'category',
  },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes

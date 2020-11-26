import { ROUTES } from '../constants';

import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
  FaShoppingCart,
} from 'react-icons/fa';
export const userLinks = [
  {
    id: 1,
    url: ROUTES.SIGNIN,
    text: FaSignInAlt,
  },
  { id: 2, url: ROUTES.SIGNOUT, text: FaSignOutAlt },
  { id: 3, url: ROUTES.USER, text: FaUserAlt },
  { id: 4, url: ROUTES.CART, text: FaShoppingCart },
];

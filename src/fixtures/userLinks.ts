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
    label: 'zaloguj',
    text: FaSignInAlt,
  },
  { id: 2, url: ROUTES.SIGNOUT, label: 'wyloguj', text: FaSignOutAlt },
  { id: 3, url: ROUTES.USER, label: 'konto', text: FaUserAlt },
  { id: 4, url: ROUTES.CART, label: 'koszyk', text: FaShoppingCart },
];

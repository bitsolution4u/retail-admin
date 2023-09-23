import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { FaProductHunt } from 'react-icons/fa';

export const groceryStore = [
  {
    icon: <BsArrowRightCircle />,
    module: 'Grocery store',
    link: '#',
    subModule: [
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'All Store Info',
        link: '/admin/grocery-store/store-info',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Add Grocery Store',
        link: '/admin/grocery-store/add-grocery-store',
        innerSubModule: [],
      },
    ],
  },
  {
    icon: <BsArrowRightCircle />,
    module: 'Grocery products',
    link: '#',
    subModule: [
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Brand & Group',
        link: '/admin/grocery-items/brand-group',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Category & Variety',
        link: '/admin/grocery-items/category-variety',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Pac Size & Unit',
        link: '/admin/grocery-items/unit-size',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Type & Sub Type',
        link: '/admin/grocery-items/type-subtype',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Add Product',
        link: '/admin/grocery-items/add-grocery-item',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Product Info',
        link: '/admin/grocery-items',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Search Product',
        link: '/admin/grocery-items/add-grocery-item',
        innerSubModule: [],
      },
    ],
  },
];

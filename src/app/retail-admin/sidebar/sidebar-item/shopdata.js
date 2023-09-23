import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { FaProductHunt } from 'react-icons/fa';

export const productModule = [
  {
    icon: <FaProductHunt />,
    module: 'Online Whole Sale Order',
    link: '#',
    subModule: [
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Online Whole Sale Order',
        link: '#',
        innerSubModule: [
          {
            icon: <BsArrowRightShort />,
            innerName: 'Brand & Group',
            link: '/brand-group',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Model & Size',
            link: '/model-size',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Unit & Origin',
            link: '/unit-origin',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Type & Sub Type',
            link: '/type-subtype',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Print Delivery Address',
            link: '/type-subtype',
          },
        ],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Medicine',
        innerSubModule: [
          {
            icon: <BsArrowRightShort />,
            innerName: 'Brand & Group',
            link: '/brand-group',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Model & Size',
            link: '/model-size',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Unit & Origin',
            link: '/unit-origin',
          },
          {
            icon: <BsArrowRightShort />,
            innerName: 'Type & Sub Type',
            link: '/type-subtype',
          },
        ],
      },
    ],
  },
];

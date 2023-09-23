import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { FaProductHunt } from 'react-icons/fa';

export const medicineStore = [
  {
    icon: <BsArrowRightCircle />,
    module: 'Medicine',
    link: '/',
    subModule: [
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Brand & Group',
        link: '/brand-group',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Model & Size',
        link: '/model-size',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Unit & Origin',
        link: '/unit-origin',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightShort />,
        subModuleName: 'Type & Sub Type',
        link: '/type-subtype',
        innerSubModule: [],
      },
    ],
  },
];

import { MdDashboard, MdOutlineSpeakerNotes } from 'react-icons/md';
import { RiSettings2Fill } from 'react-icons/ri';
import { BsArrowRightCircle } from 'react-icons/bs';

export const dashboardModule = [
  {
    icon: <MdDashboard />,
    module: 'Dashboard',
    link: '/admin/dashboard',
    subModule: [],
  },
  {
    icon: <RiSettings2Fill />,
    module: 'Configuration',
    link: '#',
    subModule: [
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Disctrict Info',
        link: '/admin/configuration/district-info',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Sub-disctrict Info',
        link: '/admin/configuration/sub-district',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'App Dashboard',
        link: '/admin/configuration/app-dashboard',
        innerSubModule: [],
      },
    ],
  },
  {
    icon: <RiSettings2Fill />,
    module: 'Marketing Person',
    link: '#',
    subModule: [
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Marketing Person Info',
        link: '/admin/configuration/district-info',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Add Marketing Person',
        link: '/admin/configuration/sub-district',
        innerSubModule: [],
      },
    ],
  },
  {
    icon: <RiSettings2Fill />,
    module: 'Requesting To Add',
    link: '#',
    subModule: [
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Grocery Shop',
        link: '/admin/configuration/district-info',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Medicine Shop',
        link: '/admin/configuration/sub-district',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Food & Organic Shop',
        link: '/admin/configuration/sub-district',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Offering Restaurent',
        link: '/admin/configuration/sub-district',
        innerSubModule: [],
      },
    ],
  },
];

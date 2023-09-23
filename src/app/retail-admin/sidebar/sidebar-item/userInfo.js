import { MdGroupAdd, MdOutlineSpeakerNotes } from 'react-icons/md';
import { RiSettings2Fill } from 'react-icons/ri';
import { BsArrowRightCircle } from 'react-icons/bs';

export const userInfo = [
  {
    icon: <MdGroupAdd />,
    module: 'User Settings',
    link: '/admin/user-settings',
    subModule: [
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Add User',
        link: '/admin/user-settings/add-user',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Reset Password',
        link: '/admin/user-settings/reset-password',
        innerSubModule: [],
      },
      {
        icon: <BsArrowRightCircle />,
        subModuleName: 'Set New Password',
        link: '/admin/user-settings/new-password',
        innerSubModule: [],
      },
    ],
  },
];


import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as GoIcons from 'react-icons/go';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Costumer',
    path: '/add-new-costumer',
    icon: <BsIcons.BsFillPersonPlusFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Show Costumers',
    path: '/show-costumers',
    icon: <GoIcons.GoChecklist />,
    cName: 'nav-text'
  },
  
  {
    title: 'Add Training',
    path: '/add-new-training',
    icon: <BiIcons.BiRun />,
    cName: 'nav-text'
  },
  
  {
    title: 'Show Trainings',
    path: '/show-trainings',
    icon: <GoIcons.GoChecklist />,
    cName: 'nav-text'
  },
  
  {
    title: 'Calendar',
    path: '/show-calendar',
    icon: <BsIcons.BsCalendar2Check />,
    cName: 'nav-text'
  }

];
import React from 'react';
import './top-header.scss';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Avatar } from '@chakra-ui/react';
import { MdNotificationsActive } from 'react-icons/md';

const TopHeader = () => {
  return (
    <section className='top-header_container'>
        <div className='top-header_indicator'>
            <div className='top-header_indicator_icon-holder'><BsArrowLeftShort size={30}/></div>
            <div className='top-header_indicator_screen-status'>My Profile</div>
        </div>
        <div className='top-header_notification'>
            <div className='top-header_notification-icon'><MdNotificationsActive size={20} /></div>
            <div className='top-header_notification-avatar'>
            <Avatar
              name="Sikiru Agbaje"
              bg="#000cb5"
              color="white"
              size="sm"
              fontSize="1rem"
              className="custom-avatar-header"
					/>
            </div>
        </div>
    </section>
  )
}

export default TopHeader
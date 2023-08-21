import React from 'react'
import { ProfileCard } from 'components/components-export'
import './dashboard-header.scss'

const DashboardHeader = () => {
  return (
    <div className='dashboard-header'>
        <div className='dashboard-header_profile'>
            <ProfileCard />
            <div className='dashboard-header_profile-bio'>
                <h4>Sikiru Agbaje</h4>
                <div className='dashboard-header_profile-bio_contents'>
                    <div className='bio-title'>
                        <p>Gender</p>
                        <p>Location</p>
                    </div>
                    <div className='bio-text'>
                        <p>Male</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='dashboard-header_contact'>
            icon
            <div className='dashboard-header_contact-details'>
                <p>phone number</p>
                <p>+2348180387593</p>
            </div>
        </div>
        <div className='dashboard-header_contact'>
            icon
            <div className='dashboard-header_contact-details'>
                <p>email address</p>
                <p>milo@mail.com</p>
            </div>
        </div>

    </div>
  )
}

export default DashboardHeader
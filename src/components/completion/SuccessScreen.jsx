import React, { useContext } from 'react'
import successLogo from 'assets/Images/fitted-success.svg';
import { Button } from '@chakra-ui/react';

import './success.scss';
import { DashboardContext } from 'contextAPI/DashboardContext';
const SuccessScreen = () => {
    const { setScreen } = useContext(DashboardContext)
  return (
    <div className='success-screen-container'>
        <div className='success-container_image-wrapper'>
            <img src={successLogo} alt='successLogo'/>
        </div>
        <div className='success-container_text'>
            <h3>Yay!!! 🎉</h3>
            <p>Your application to become a vetted tailor has been sent, a Fitted Agent will get in touch with you regard the next steps. Goodluck!</p>
        </div>
        <Button type='button' className='success-button' onClick={() => setScreen('PROFILE')}>Return to Dashboard</Button>
    </div>
  )
}

export default SuccessScreen
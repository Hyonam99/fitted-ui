import React, { useContext } from 'react';
import './dashboard.scss'
import { ProfileSection, Register, SuccessScreen } from 'components/components-export';
import { DashboardContext } from 'contextAPI/DashboardContext';


const Dashboard = () => {
  const { screen } = useContext(DashboardContext)
  return (
    <section className='dashboard-container'>
      {screen === 'PROFILE' && <ProfileSection />}
      {screen === 'REGISTER' && <Register />}
      {screen === 'SUCCESS' && <SuccessScreen />}
      
    </section>
  )
}

export default Dashboard

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:'Shlok'}; 
  return (
    <section className='home'>
    <div className='home-content'>
        <div className='home-header'>
        <HeaderBox
            type="greeting" 
            title="Welcome"
            user= {loggedIn?.firstName || "guest"}
            subtext="Acess and Manage account smoothly." 
        />
        <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
        />
        </div>
    </div>
    </section>
  )
}

export default Home
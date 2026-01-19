import React from 'react'
import { Navigation } from '../components/siip/Navigation'
import { Footer } from '../components/siip/Footer'
import { HeroSection } from '../components/siip/HeroSection'
import { WhatSIIPIs } from '../components/siip/WhatSIIPIs'
import { ParticipationLayer } from '../components/siip/ParticipationLayer'
import { SignalsSection } from '../components/siip/SignalsSection'
import { EarlyAccessForm } from '../components/siip/EarlyAccessForm'

const HomePage = () => {
    return (
        <div className='bg-black text-white'>
            <Navigation />
            <HeroSection />
            <WhatSIIPIs />
            <ParticipationLayer />
            <SignalsSection />
            <EarlyAccessForm />
            <Footer />
        </div>
    )
}

export default HomePage
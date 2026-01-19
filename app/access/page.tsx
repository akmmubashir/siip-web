import React from 'react'
import { Navigation } from '../components/siip/Navigation'
import { Footer } from '../components/siip/Footer'
import CouncilAccessSection from '../components/siip/CouncilAccessSection'

const page = () => {
    return (
        <div className='bg-black text-white'>
            <Navigation />
            <CouncilAccessSection />
            <Footer />
        </div>
    )
}

export default page
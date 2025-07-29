import React from 'react'
import Pharmacy from './Pharmacy'
import FoodDelevery from './FoodDelevery'

import InstagramCloneSection from './InstagramCloneSection'
import Form from '../Contact Us/Form'
import PortfolioHeader from './PortfolioHeader'
import FooddyPortfolio from './FooddyPortfolio'
import DarshanCafePortfolio from './DarshanCafePortfolio'
import DrAmitJainPortfolio from './DrAmitJainPortfolio'

const PortFolioRoute = () => {
  return (
    <div>
        <PortfolioHeader/>
        <Pharmacy/>
        <DarshanCafePortfolio/>
        <DrAmitJainPortfolio/>
        <FooddyPortfolio/>
        <FoodDelevery/>
        
        <InstagramCloneSection/>
        <Form />
    </div>
  )
}

export default PortFolioRoute
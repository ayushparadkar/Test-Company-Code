import React from 'react'
import Pharmacy from './Pharmacy'
import FoodDelevery from './FoodDelevery'
import ECommercePortfolio from './ECommercePortfolio'
import InstagramCloneSection from './InstagramCloneSection'
import Form from '../Contact Us/Form'
import PortfolioHeader from './PortfolioHeader'

const PortFolioRoute = () => {
  return (
    <div>
        <PortfolioHeader/>
        <Pharmacy/>
        <FoodDelevery/>
        <ECommercePortfolio/>
        <InstagramCloneSection/>
        <Form />
    </div>
  )
}

export default PortFolioRoute
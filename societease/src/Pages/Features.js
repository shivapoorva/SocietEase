import React from 'react'
import Member from '../components/Member'
import Featurespage from './FeaturespageMem'
import FeaturespageMember from './FeaturespageAdmin'

function Features() {

  return (
    <div className='main'>
      {
        sessionStorage.getItem("commitee_member") === "true" ? <FeaturespageMember /> : <Featurespage />
      }
    </div>
  )
}

export default Features
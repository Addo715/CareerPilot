import React from 'react'
import ResumeCards from '../Components/ResumeCards'
import ResumeNavbar from '../Components/ResumeNavbar'
import NewNavbar from '../Components/NewNavbar'

const ResumeAssistant = () => {
  return (
    <div>
        {/* <ResumeNavbar/> */}
        <NewNavbar/>
    <div className='text-center max-w-4xl mx-auto px-4 py-10 '>
        <div className='space-y-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Track Your <span className='text-blue-600'>Applications</span>
                <br />
                & Resume <span className='text-blue-600'>Ratings</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                Review your submissions and check AI-powered feedback.
            </p>
        </div>

        <ResumeCards/>
    </div>
    </div>
  )
}

export default ResumeAssistant
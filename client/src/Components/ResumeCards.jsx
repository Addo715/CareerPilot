import React from 'react'
import { ResumeInfo } from '../assets/images/data'
import ScoreCircle from './ScoreCircle'

const ResumeCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ResumeInfo.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Header with company info and score */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {data.company}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {data.title}
                  </p>
                </div>
                <div className="ml-4">
                  <ScoreCircle />
                </div>
              </div>
              
              {/* Resume preview image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={data.image} 
                  alt={`${data.company} resume preview`}
                  className="w-[70rem] h-70 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeCards
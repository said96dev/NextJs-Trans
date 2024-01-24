'use client'
import React, { useState } from 'react'
import MoveFromForm from './MoveFromForm'
import MoveToForm from './MoveToForm'
import PersonDaten from './PersonDaten'
import Appointment from './Appointment'
const MovingForm = () => {
  const [formData, setFormData] = useState({
    umzugVon: {
      street: '',
      zipCode: '',
      city: '',
      floor: '',
      roomCount: '',
      distanceToTransporter: '',
      itemsToTransport: '',
      elevator: false,
      noParkingSign: false,
      streetClosure: false,
      additionalService: false,
    },
    umzugNach: {
      street: '',
      zipCode: '',
      city: '',
      floor: '',
      roomCount: '',
      distanceToTransporter: '',
      itemsToTransport: '',
      elevator: false,
      noParkingSign: false,
      streetClosure: false,
      additionalService: false,
    },
    persoenlicheDaten: {
      street: '',
      zipCode: '',
      city: '',
      email: '',
      name: '',
      tel: '',
    },
    terminVereinbaren: {
      date: '',
      time: '',
    },
  })
  const [activeTab, setActiveTab] = useState('umzugVon')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleFormDataChange = (tab, data) => {
    console.log(data)
    setFormData((prevData) => ({
      ...prevData,
      [tab]: data,
    }))
  }

  const handleBack = () => {
    switch (activeTab) {
      case 'umzugNach':
        setActiveTab('umzugVon')
        break
      case 'persoenlicheDaten':
        setActiveTab('umzugNach')
        break
      case 'terminVereinbaren':
        setActiveTab('persoenlicheDaten')
        break
      // Handle additional cases if needed
      default:
        break
    }
  }

  const handleNext = () => {
    switch (activeTab) {
      case 'umzugVon':
        setActiveTab('umzugNach')
        break
      case 'umzugNach':
        setActiveTab('persoenlicheDaten')
        break
      case 'persoenlicheDaten':
        setActiveTab('terminVereinbaren')
        break
      // Handle additional cases if needed
      default:
        break
    }
  }

  return (
    <div className="min-h-screen  ">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg ">
        <div className="mb-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleTabChange('umzugVon')}
              className={`${
                activeTab === 'umzugVon'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-blue-500'
              } px-4 py-2 rounded-md`}
            >
              Umzug von
            </button>
            <button
              onClick={() => handleTabChange('umzugNach')}
              className={`${
                activeTab === 'umzugNach'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-blue-500'
              } px-4 py-2 rounded-md`}
            >
              Umzug nach
            </button>
            <button
              onClick={() => handleTabChange('persoenlicheDaten')}
              className={`${
                activeTab === 'persoenlicheDaten'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-blue-500'
              } px-4 py-2 rounded-md`}
            >
              Persönliche Daten
            </button>
            <button
              onClick={() => handleTabChange('terminVereinbaren')}
              className={`${
                activeTab === 'terminVereinbaren'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-200 text-blue-500'
              } px-4 py-2 rounded-md`}
            >
              Termin vereinbaren
            </button>
          </div>
        </div>

        {activeTab === 'umzugVon' && (
          <div>
            <MoveFromForm
              formData={formData.umzugVon}
              onFormDataChange={(data) =>
                handleFormDataChange('umzugVon', data)
              }
            />
          </div>
        )}

        {activeTab === 'umzugNach' && (
          <div>
            <MoveToForm
              formData={formData.umzugNach}
              onFormDataChange={(data) =>
                handleFormDataChange('umzugNach', data)
              }
            />{' '}
          </div>
        )}

        {activeTab === 'persoenlicheDaten' && (
          <div>
            <PersonDaten
              formData={formData.persoenlicheDaten}
              onFormDataChange={(data) =>
                handleFormDataChange('persoenlicheDaten', data)
              }
            />{' '}
          </div>
        )}
        {activeTab === 'terminVereinbaren' && (
          <div>
            <Appointment
              formData={formData.terminVereinbaren}
              onFormDataChange={(data) =>
                handleFormDataChange('terminVereinbaren', data)
              }
            />
          </div>
        )}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleBack}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Zurück
          </button>
          <button
            onClick={handleNext}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovingForm

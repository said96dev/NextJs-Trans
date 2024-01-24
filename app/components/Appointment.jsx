'use client'
// TerminDaten.jsx
import React, { useState } from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
const Appointment = ({ onChange }) => {
  const [terminData, setTerminData] = useState({
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTerminData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Hier rufen wir die übergebene onChange-Funktion auf, um die Daten zurück an das Hauptformular zu senden
    onChange({ ...terminData, [name]: value })
  }

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Termin Vereinbaren
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Datum
          </label>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              name="date"
              value={null}
              onChange={(newValue) => handleChange('date', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </LocalizationProvider>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FaCalendarAlt className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Uhrzeit
          </label>
          <LocalizationProvider dateAdapter={TimeAdapter}>
            <TimePicker
              name="time"
              value={null}
              onChange={(newValue) => handleChange('time', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </LocalizationProvider>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FaClock className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment

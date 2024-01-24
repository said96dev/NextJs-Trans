'use client'
import React, { useState } from 'react'

const MoveToForm = ({ formData, onFormDataChange }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    onFormDataChange({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Umzug
          </h2>
          <p className="mt-1 text-m leading-6 text-gray-600">
            „<span className="text-red-500	">*</span>“ zeigt erforderliche Felder
            an
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="street"
                className="block text-gray-700 font-medium mb-2"
              >
                Straße
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Straße eingeben*"
                  className="w-full p-2 border rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="zipCode"
                className="block text-gray-700 font-medium mb-2"
              >
                PLZ
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="PLZ eingeben"
                className="w-full p-2 border rounded-md shadow-sm"
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-gray-700 font-medium mb-2"
              >
                Stadt
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Stadt eingeben*"
                  className="w-full p-2 border rounded-md shadow-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="floor"
                className="block text-gray-700 font-medium mb-2"
              >
                Stockwek
              </label>
              <input
                type="text"
                id="floor"
                name="floor"
                value={formData.floor}
                onChange={handleChange}
                placeholder="Stockwek*"
                className="w-full p-2 border rounded-md shadow-sm"
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="roomCount"
                className="block text-gray-700 font-medium mb-2"
              >
                Zimmeranzahl
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="roomCount"
                  name="roomCount"
                  value={formData.roomCount}
                  onChange={handleChange}
                  placeholder="Zimmeranzahl *"
                  className="w-full p-2 border rounded-md shadow-sm"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="distanceToTransporter"
                className="block text-gray-700 font-medium mb-2"
              >
                Wie weit ist der Weg von der Haustür zum Transporter?*
              </label>
              <input
                type="text"
                id="distanceToTransporter"
                name="distanceToTransporter"
                value={formData.distanceToTransporter}
                onChange={handleChange}
                placeholder="Bitte geben Sie eine grobe Schätzung in Metern (m) an.
"
                className="w-full p-2 border rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10  grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
            <fieldset className="sm:col-span-1 mt-10">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Ist einen Aufzug vorhanden?*
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    onChange={handleChange}
                    id="elevator-ja"
                    name="elevator"
                    type="radio"
                    value="ja"
                    checked={formData.elevator === 'ja'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="elevator-ja"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ja
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    onChange={handleChange}
                    id="elevator-nein"
                    name="elevator"
                    type="radio"
                    value="nein"
                    checked={formData.elevator === 'nein'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="elevator-nein"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="sm:col-span-1 my-0 mt-0">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Sperren Sie die Straße selber ab? (Transporter ca. 10m)*
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    onChange={handleChange}
                    id="street-closure-ja"
                    name="streetClosure"
                    type="radio"
                    value="ja"
                    checked={formData.streetClosure === 'ja'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="street-closure-ja"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ja
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    onChange={handleChange}
                    id="street-closure-nein"
                    name="streetClosure"
                    type="radio"
                    value="nein"
                    checked={formData.streetClosure === 'nein'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="street-closure-nein"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="sm:col-span-3 my-0 mt-0">
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Werden Halteverbotsschilder benötigt?*
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    onChange={handleChange}
                    id="parking-signs-ja"
                    name="noParkingSign"
                    type="radio"
                    value="ja"
                    checked={formData.noParkingSign === 'ja'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="parking-signs-ja"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ja
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    onChange={handleChange}
                    id="parking-signs-nein"
                    name="noParkingSign"
                    type="radio"
                    value="nein"
                    checked={formData.noParkingSign === 'nein'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="parking-signs-nein"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nein
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  )
}

export default MoveToForm

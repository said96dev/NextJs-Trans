'use client'
import React, { useState } from 'react'

const PersonDaten = ({ formData, onFormDataChange }) => {
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
            Persönliche Daten
          </h2>
          <p className="mt-1 text-m leading-6 text-gray-600">
            „<span className="text-red-500	">*</span>“ zeigt erforderliche Felder
            an
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Vollständiger Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Straße eingeben*"
                  className="w-full p-2 border rounded-md shadow-sm"
                  required
                />
              </div>
            </div>
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
                htmlFor="tel"
                className="block text-gray-700 font-medium mb-2"
              >
                Tel
              </label>
              <input
                type="text"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Tel*"
                className="w-full p-2 border rounded-md shadow-sm"
              />
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full p-2 border rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PersonDaten

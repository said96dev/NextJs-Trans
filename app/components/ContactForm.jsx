'use client'

import React from 'react'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Füge hier deine Logik für die Verarbeitung des Kontaktformulars ein
  }

  return (
    <div className="flex">
      {/* Formular auf der linken Seite */}
      <form onSubmit={handleSubmit} className="w-1/2 p-8">
        <h2 className="text-3xl font-semibold mb-4">Kontaktieren Sie uns</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ihr Name"
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ihre E-Mail-Adresse"
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Ihre Nachricht"
            className="w-full p-2 border rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Senden
        </button>
      </form>

      {/* Symbole auf der rechten Seite */}
      <div className="w-1/2 p-8 bg-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center">
          <FiMapPin className="h-6 w-6 mr-2 text-blue-500" />
          <p>123 Beispielstraße, Musterstadt</p>
        </div>
        <div className="mb-4 flex items-center">
          <FiPhone className="h-6 w-6 mr-2 text-blue-500" />
          <p>(123) 456-7890</p>
        </div>
        <div className="flex items-center">
          <FiMail className="h-6 w-6 mr-2 text-blue-500" />
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

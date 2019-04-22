import React from 'react'

export default function ServiceList({ services }) {
  const renderServices = services.map(service => (
    <option key={`search-value-${service.id}`} value={service.serviceName} id={service.id}></option>
  ))

  return (
    <datalist id="provider-search-list">
      {renderServices}
    </datalist>
  )
}

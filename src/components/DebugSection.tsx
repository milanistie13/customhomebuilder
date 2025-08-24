import React from 'react'

interface DebugSectionProps {
  title: string
  isVisible: boolean
}

export function DebugSection({ title, isVisible }: DebugSectionProps) {
  return (
    <div className={`p-4 border-2 ${isVisible ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'} rounded-lg mb-4`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={isVisible ? 'text-green-700' : 'text-red-700'}>
        {isVisible ? '✓ Visible in DOM' : '✗ Not visible in DOM'}
      </p>
    </div>
  )
}

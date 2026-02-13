"use client"

import React, { createContext, useContext, useState } from 'react'

interface FormData {
  valentinesAnswer: string
  drinkPreference: string
  dinnerChoice: string
  dinnerDetails: string
  sweetTreatPreference: string
}

interface FormContextType {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    valentinesAnswer: '',
    drinkPreference: '',
    dinnerChoice: '',
    dinnerDetails: '',
    sweetTreatPreference: ''
  })

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormData() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormData must be used within FormProvider')
  }
  return context
}

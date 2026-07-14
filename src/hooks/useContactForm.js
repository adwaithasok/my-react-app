import { useReducer, useState } from 'react'
import { submitContactMessage } from '../services/firebase'

const emptyForm = { name: '', email: '', message: '' }

function formReducer(state, action) {
  switch (action.type) {
    case 'field': return { ...state, [action.field]: action.value }
    case 'reset': return emptyForm
    default: return state
  }
}

export function useContactForm() {
  const [formData, dispatchForm] = useReducer(formReducer, emptyForm)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    dispatchForm({ type: 'field', field: e.target.name, value: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending your message...')
    try {
      await submitContactMessage(formData)
      setStatus('Message sent successfully!')
      dispatchForm({ type: 'reset' })
    } catch (error) {
      setStatus('Something went wrong. Please try again later.')
      console.error(error)
    }
  }

  return { formData, status, handleChange, handleSubmit }
}

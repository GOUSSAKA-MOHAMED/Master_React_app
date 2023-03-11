import React from 'react'
import styles from '../style'
const Button = () => {
  return (
    <button type='button' className={`rounded-sm mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} `}>
      Get Started
    </button>
  )
}

export default Button


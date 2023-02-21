import React from 'react'

function Button({text}) {
  return (
    <button className='bg-black py-2 px-4 rounded-full flex items-center  text-white 
    font-semibold hover:!bg-white/80 hover:!text-black hover:border border-yellow-500'>
        {text}
    </button>
  )
}

export default Button
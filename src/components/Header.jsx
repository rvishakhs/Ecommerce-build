import React from 'react'

function Header() {
  return (
    <div className='w-full'>
        <div className='flex flex-row bg-slate-800 py-2 '>
            <div className='max-w-6xl mx-auto flex justify-between'>
                <p className='text-white font-sans'>This website made only for Educational Purpose</p>
                <a href='+44 7442005972'><span>Hotline</span> +44 7442005972</a>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'

const Header = () => {
  return (
    <div>
         <header className="absolute  inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="https://s3.us-east-2.amazonaws.com/enviapaqueteria/uploads/landing/images/countries/MEX/logo-dark.svg" alt=""/>
                </a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
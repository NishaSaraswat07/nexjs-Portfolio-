import Link from 'next/link'
import React from 'react'


const Navitems = ({href,text,active}) => {
  return (
    <Link href={href} className={`nav__item ${active?"active":""}`}>
        
            {text}
    
    </Link>
  )
}

export default Navitems
















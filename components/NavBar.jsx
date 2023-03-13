import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'

const MenuList = [
    {
        text:'Home',
        href:'/'
    },
    {
        text:'About',
        href:'/about'
    },
    {
        text:'Projects',
        href:'/projects'
    }
]
export default function NavBar() {
  return (
    <header>
        <nav className='navitem'>
            <Link href={'/'}>
            </Link>
        </nav>
        <div className='navBarMenu'>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='menu-list'>
                {
                    MenuList.map((menu, index)=>{
                        return (
                        <div key={index}>
                            <Navitems {...menu}/>
                        </div>
                        )})
                }
        </div>
    </header>
  )
}
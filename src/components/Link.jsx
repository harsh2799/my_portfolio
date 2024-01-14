import React from 'react'

const Link = ({href, title, navClose}) => {
    return (
        <li className='expand p-2'>
            <a href={href} onClick={navClose}>{title}</a>
        </li>
      )
}

export default Link
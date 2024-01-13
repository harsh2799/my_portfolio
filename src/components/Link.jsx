import React from 'react'

const Link = ({href, title}) => {
    return (
        <li className='expand p-2'>
            <a href={href}>{title}</a>
        </li>
      )
}

export default Link
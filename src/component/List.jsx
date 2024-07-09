import React from 'react'

const List = ({className, manuName}) => {
  return (
    <li className={`${className}`}>{manuName}</li>
  )
}

export default List
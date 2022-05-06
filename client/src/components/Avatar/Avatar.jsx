import React from 'react'

const Avatar = ({children, backgroundColor, px, py, color,borderRadius, fontSize, cursor, textDecoration}) => {

  const Style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || 'null',
    textDecoration: textDecoration || 'none'
  }

  return (
    <div style={Style}>
      { children }
    </div>
  )
}

export default Avatar
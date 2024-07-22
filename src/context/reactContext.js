import React from 'react'

const DarkTheme = React.createContext({
  isDarK: false,
  savedData: [],
  changeTheTheme: () => {},
  getSavedData: () => {},
})

export default DarkTheme

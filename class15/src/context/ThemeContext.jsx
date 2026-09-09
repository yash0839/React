import React, { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) =>{

   const [theme, setTheme] = useState('light')


  return (
    <div>
        <ThemeDataContext.Provider value={data}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
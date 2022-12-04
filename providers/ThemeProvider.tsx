import React, { useState, useEffect, createContext } from 'react'


interface Props {
  children: React.ReactNode
}

interface Theme {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<Theme>({ theme: 'dark', toggleTheme: () => { } })

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') || 'dark'
    }

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
    setIsLoading(false)
    document.documentElement.setAttribute('data-color-mode', theme || "dark")
  }, [theme])


  return (
    isLoading ? null : (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  )
}

export default ThemeProvider

export {
  ThemeContext
}

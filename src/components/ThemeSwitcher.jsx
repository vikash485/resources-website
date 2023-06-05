import { useEffect, useState } from 'react'
import React from 'react'

//styles
import styles from './ThemeSwitcher.module.css'

//icons
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/solid';

//custom hooks

import useLocalStorage from '../hooks/useLocalStorage';

const ThemeSwitcher = () => {

    const [hue, setHue] = useLocalStorage('dsa-res.color', '240');
    
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage("dsa-res.theme", defaultDark ? "dark" : "light");
    
    const [isColorPicking, setIsColorPicking] = useState(false);
    
    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme])
    
    useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue);
    }, [hue])
    
    // const handleThemeBtn = () => {
        //     setTheme(theme === "light" ? "dark" : "light");
        // }
        
        return (
            <aside
            className={styles.wrapper}
            style={{
                backgroundColor: isColorPicking 
                ? 'hsl(var(--muted) / .6)'
                : 'transparent'
        }}
    >
        {
            isColorPicking
            ? (
                <>
                <button
                    className={`btn ${styles.close}`}
                    aria-label='Close color picking mode'
                    onClick={() => setIsColorPicking(false)}
                >
                    <XMarkIcon/>
                </button>
                <input
                    type="range" 
                    className={styles.picker}
                    min={0}
                    max={360}
                    aria-label='Change color theme slider'
                    value={hue}
                    onInput={(e) => setHue(e.target.value)}
                    />
                </>
            )
            : (
                <div className={styles.btns}>
                    <button
                        className='btn'
                        aria-label={`Change theme to ${theme === "light" ? "dark" : " light"} mode`}
                        role='switch'
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? <MoonIcon/> : <SunIcon/>}
                    </button>
                    <button
                        className='btn'
                        aria-label='Enable color picking mode'
                        onClick={() => setIsColorPicking(true)}
                        >
                        <SwatchIcon/>
                    </button>
                </div>
            )
        }
    </aside>
  )
}

export default ThemeSwitcher
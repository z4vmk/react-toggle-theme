<div align=center>
    <h1>React Toggle Theme</h1>
    <br />
    <img src='https://github.com/forgng/react-toggle-theme/raw/master/toggle-theme.gif' />
</div>

## About React Toggle Theme
React Toggle Theme was a React component originally created by [forgng](https://github.com/forgng).

I saw that it had many issues that weren't getting fixed, so I decided to take it into my own hands and "reform" the module.
I took out all packages that weren't needed, and fixed the ones that still remained. 
Then, I took the original code for the switch and put it here.

Oh, and I had to learn some TypeScript for this. 
You're welcome.

## Installation

```console
yarn add @z4vmk/react-toggle-theme
```

```console
npm install @z4vmk/react-toggle-theme
```

## Usage

```js
import React, { useState } from "react"
import ToggleTheme from "@z4vmk/react-toggle-theme"

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <div style={{ backgroundColor: currentTheme === "light" ? "#000" : "#fff" }}>
      <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />
    </div>
  )
}
```

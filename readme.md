<div align=center>
    <h1>React Toggle Theme</h1>
    <br />
    <img src='https://github.com/forgng/react-toggle-theme/raw/master/toggle-theme.gif' />
</div>

## About React Toggle Theme
React Toggle Theme was a React component originally created by [forgng](https://github.com/forgng).

This is an updated version of the React Toggle Theme component. The original hasn't been updated for approximately 6 years, making it 

## Installation


```console
npm install @z4vmk/react-toggle-theme
```

```console
bun add @z4vmk/react-toggle-theme
```

```console
yarn add @z4vmk/react-toggle-theme
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

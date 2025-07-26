# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: (https://intro-section-dropdown-nav.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### What I learned

I learned how to use a `useWindowWidth` hook that listens to the window resize event and returns the current screen width. This helps build responsive components by conditionally rendering elements based on screen size, like switching between `<NavBarDesktop />` and `<NavBar />` when the width crosses a breakpoint (e.g., 768px).

```js
const width = useWindowWidth();

  return (
    <header className='flex justify-between items-center px-3 lg:px-12'>
        <img src={Logo} alt="Snap Logo" />

        {width >= 768 ? <NavBarDesktop /> : <NavBar />}
    </header>
  )
```

## Author

- Frontend Mentor - [@Anar765](https://www.frontendmentor.io/profile/Anar765)

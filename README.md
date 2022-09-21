# React-slotify ([Try now](https://codesandbox.io/s/react-slotify-example-vo2ix))

[![Build Status][build-badge]][build]
[![npm bundle size][npm-bundle-size]][build]
[![version][version-badge]][package]

[![MIT License][license-badge]][license]


A tiny way to use Slots concept in modern React apps.

## Why react-slotify:

- **✅ Replaces ["renderProps"](https://reactjs.org/docs/render-props.html) concept in a semantic way**
- **✅ Written in TypeScript with type-safe API**
- **✅ Lightweight (~500B)**
- **✅ Simple**

## Installation

Install using your package manager:

```bash
npm install --save react-slotify

yarn add react-slotify
```

## Usage

In a component where you want to hold slots in, create and place a slot. You may have as many slots as you want.
```tsx
import {createSlot} from 'react-slotify';

export const MySlot = createSlot();

export const Component = ({children}) => {
  return (
    <div>
      This component contains slot:
      
      <MySlot.Renderer childs={children}>
        This is default slot content
      </MySlot.Renderer>
      
      <div>It also renders children: {children}</div>
    </div>
  );
};
```

Import your component and it's slots and use:

```tsx
import {Component, MySlot} from './component';

const App = () => {
  return (
    <div>
      <Component>
        <MySlot>Slotted content</MySlot>
        Other content
      </Component>
    </div>
  );
};
```


## Passing props back from inside slot

If your slot conent need some params from inside such as `disabled` state, you are welcome to parametrize it:

```tsx
export const Slot = createSlot<{myParam: string}>();

export const Component = ({children}) => (
  <MySlot.Renderer childs={children} myParam="123">
    This is default slot content
  </MySlot.Renderer>
);

...

const App = () => {
  return (
    <div>
      <Component>
        <MySlot>
          {params => (<div>Param is {params.myParam}</div>)}
        </MySlot>
      </Component>
    </div>
  );
};
```

[build-badge]: https://github.com/andrey-skl/react-slotify/workflows/CI/badge.svg
[build]: https://github.com/andrey-skl/react-slotify/actions
[npm-bundle-size]: https://img.shields.io/bundlephobia/minzip/react-slotify?style=flat-square
[version-badge]: https://img.shields.io/npm/v/react-slotify.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-slotify
[license-badge]: https://img.shields.io/npm/l/react-slotify.svg?style=flat-square
[license]: https://github.com/andrey-skl/react-slotify/blob/master/LICENSE

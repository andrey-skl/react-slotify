# React-slotify

A tiny way to use Slots concept in modert React apps.

## Installation

Install using your package manager:

```sh
npm install --save react-slotify

yarn add react-slotify
```

## Usage

In a component where you want to hold slots in, create and place a slot. You may have as many slots as you want.
```typescript jsx
...
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

```typescript jsx
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

```typescript jsx
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

## Features

 - Written in TypeScript with type-safe API
 - Lightweight (~500b)

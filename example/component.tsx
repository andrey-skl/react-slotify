import * as React from 'react';
import { createSlot } from '../src/index';

interface Props {
  children: React.ReactNode;
}

export const Slot = createSlot<{myParam: string}>();

export const Component: React.FC<Props> = ({ children }) => {
  return (
    <div>
      This component contains slot:
      <Slot.Renderer childs={children} myParam="test">
        This is default slot content
      </Slot.Renderer>
      <div>It also renders children: {children}</div>
    </div>
  );
};

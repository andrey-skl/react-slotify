import * as React from 'react';
import renderer from 'react-test-renderer';

import { createSlot } from '../src';

describe('Slot', () => {
  it('Should render to slot', () => {
    const TestSlot = createSlot();

    const Component: React.FC = ({ children }) => {
      return (
        <div>
          beforeslot <TestSlot.Renderer childs={children} /> afterslot;
          ownChildren: {children}
        </div>
      );
    };

    expect(
      renderer
        .create(
          <div>
            beforecomponent
            <Component>
              BEFORE_SLOT<TestSlot>IN_SLOT</TestSlot>AFTER_SLOT
            </Component>
            aftercomponent
          </div>
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it('Should render default content if slot is not used', () => {
    const TestSlot = createSlot();

    const Component: React.FC = ({ children }) => {
      return (
        <pre>
          beforeslot
          <TestSlot.Renderer childs={children}>DEFAULT_SLOT_CONTENT</TestSlot.Renderer>
          afterslot; ownChildren: {children}
        </pre>
      );
    };

    expect(
      renderer
        .create(
          <main>
            beforecomponent
            <Component>Slot not used</Component>
            aftercomponent
          </main>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});

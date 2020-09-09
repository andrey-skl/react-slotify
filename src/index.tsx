import * as React from 'react';

interface RendererProps {
  childs: React.ReactNode;
}

type RendererType = React.FC<RendererProps>;

interface SlotProps {
  showChildren?: boolean;
}

type SlotType = React.FC & {
  Renderer: RendererType;
};

export function createSlot(): SlotType {
  const Slot: React.FC<SlotProps> = ({children, showChildren}) => (
    showChildren ? <>{children}</> : null
  );

  const Renderer: RendererType = ({childs, children}) => {
    const slotted = React.Children.toArray(childs).find(child => {
      return React.isValidElement(child) && child.type === Slot;
    });

    if (!slotted || !React.isValidElement(slotted)) {
      return <>{children}</>;
    }
    return React.cloneElement(slotted, {showChildren: true} as SlotProps);
  }

  (Slot as SlotType).Renderer = Renderer;

  return Slot as SlotType;
}

import * as React from 'react';

interface RendererProps {
  childs: React.ReactNode;
}

type RendererType<P> = React.FC<RendererProps & P>;

interface SlotProps<P> {
  showChildren?: boolean;
  restProps?: P
}

type NormalOrFunctionChildren<P> = React.ReactNode | ((props: P) => React.ReactNode);

type SlotType<P> = {
  (props: SlotProps<P> & {children?: NormalOrFunctionChildren<P>}): React.ReactElement<any, any> | null;
  Renderer: RendererType<P>;
};

export function createSlot<P extends Object>(): SlotType<P> {

  const Slot: SlotType<P> = ({ children, showChildren, restProps }) => {
    if (!showChildren) {
      return null;
    }
    if (typeof children === 'function' && restProps) {
      return children(restProps);
    }
    return <>{children}</>;
  };

  const Renderer: RendererType<P> = ({ childs, children, ...restProps }) => {
    const slotted = React.Children.toArray(childs).find(child => {
      return React.isValidElement(child) && child.type === Slot;
    });

    if (!slotted || !React.isValidElement(slotted)) {
      return <>{children}</>;
    }
    return React.cloneElement(slotted, {
      showChildren: true,
      restProps,
    } as unknown as SlotProps<P>);
  };

  Slot.Renderer = Renderer;
  return Slot as SlotType<P>;
}

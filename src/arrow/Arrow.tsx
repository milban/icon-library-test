import React, {ComponentPropsWithoutRef, ForwardRefRenderFunction} from 'react';
import './style.css';

export type ArrowProps = ComponentPropsWithoutRef<'span'>;

const Arrow: ForwardRefRenderFunction<HTMLSpanElement, ArrowProps> = ({ className, ...props}, ref) => {
  return <span ref={ref} className={"icon-iconArrow02Green24Px " + className} {...props} />;
};

export default React.forwardRef(Arrow);
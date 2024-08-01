import React, { useState } from "react";

/* 
    Aquí se crea un componente que se llama ButtonWithState, este componente
    es para poder agregarle un estado al boton, ya que por defecto los botones
    no tienen un estado, entonces se crea este componente para poder agregarle
    un estado al boton, en este caso se le agrega un estado de hover y pressed
*/


type ButtonWithStateProps = {
    Icon: React.JSX.Element
    bgHoverColor?: string
    bgPressedColor?: string
    iconColor?: string
    onClick?: () => void
}

export const ButtonWithState: React.FC<ButtonWithStateProps> = (props) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <button
        className={`z-0 group relative inline-flex items-center transform justify-center select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent px-3 min-w-16 h-8 gap-2 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground flex-1 text-xs ${
          isPressed ? 'scale-90' : ''
        } ${isHovered ? 'bg-brand-dark-accent/60 dark:bg-brand-light-accent-600/60' : ''}`}
        data-pressed={isPressed}
        data-hover={isHovered}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={props.onClick}
      >
        {props.Icon}
      </button>
    );
  };
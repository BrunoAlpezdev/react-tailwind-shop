import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react'
import { useState } from 'react'
import { subCategories } from '../interfaces/types'
import { Link } from 'react-router-dom'
import '@styles/CRUD.css'
import '@styles/Components.css'

type ButtonWithStateProps = {
  Icon: React.JSX.Element
  bgHoverColor?: string
  bgPressedColor?: string
  iconColor?: string
  onClick?: () => void
}

type DropDownButtonProps = {
  nombreBoton: string
  categorias: subCategories[]
}

type CartButtonProps = {
  Icon: React.JSX.Element
  onClick?: () => void
}

type CRUDButtonProps = {
  bgColor?: string
  Icon: React.JSX.Element
  productId?: string
}

export const ButtonWithState: React.FC<ButtonWithStateProps> = (props) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`z-0 group relative inline-flex items-center transform justify-center select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent px-3 min-w-16 h-8 gap-2 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground flex-1 text-xs ${
        isPressed ? 'scale-90' : ''
      } ${
        isHovered
          ? 'bg-brand-dark-accent/60 dark:bg-brand-light-accent-600/60'
          : ''
      }`}
      data-pressed={isPressed}
      data-hover={isHovered}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}>
      {props.Icon}
    </button>
  )
}

export const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="rounded-full">{props.nombreBoton}</Button>
      </DropdownTrigger>

      <DropdownMenu>
        {props.categorias.map((categoria) => (
          <DropdownItem key={categoria.idSubCategoria}>
            {categoria.nombreSubCategoria}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export const CartButton: React.FC<CartButtonProps> = (props) => {
  return <>{props.Icon}</>
}

export const CRUDButton: React.FC<CRUDButtonProps> = (props) => {
  const ReadClick = () => {
    console.log('Read' + props.productId)
  }

  const UpdateClick = () => {
    console.log('Update' + props.productId)
  }

  const DeleteClick = () => {
    console.log('Delete' + props.productId)
  }

  return (
    <div>
      {props.bgColor === 'Read' && (
        <button
          onClick={ReadClick}
          className={
            'button-hover-effect before:bg-icons-Read p-2 rounded-l-[96px] transition relative'
          }>
          <span>{props.Icon}</span>
        </button>
      )}
      {props.bgColor === 'Update' && (
        <button
          onClick={UpdateClick}
          className={
            'button-hover-effect before:bg-icons-Update p-2 transition relative'
          }>
          <span>{props.Icon}</span>
        </button>
      )}
      {props.bgColor === 'Delete' && (
        <button
          onClick={DeleteClick}
          className={
            'button-hover-effect before:bg-icons-Delete rounded-r-[96px] p-2 transition relative'
          }>
          <span>{props.Icon}</span>
        </button>
      )}
    </div>
  )
}

export const DropDownProfile = () => {
  return (
    <div className="flex flex-col DropDownProfile">
      <ul className="flex flex-col gap-4">
        <li>
          <Link to="/CuentaPage">Mi Cuenta</Link>
        </li>
        <li>Mis Pedidos</li>
        <li>Favoritos</li>
        <li>Cerrar sesion</li>
      </ul>
    </div>
  )
}

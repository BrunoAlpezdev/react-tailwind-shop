import { AvatarComponent } from '@/components'
/* Esto es solo un placeholder autocreado para tener las props noma */
type props = {
  nombre: string
  edad: number
  activo: boolean
  saludar: (nombre: string) => void
  cambiarActivo: () => void
  cambiarEdad: (edad: number) => void
}

export default function CuentaPage() {
  return (
    <div>
      <div>
        <li>ola</li>
      </div>
      <div>
        <AvatarComponent />
        {/* que? so*/}
      </div>
    </div>
  )
}

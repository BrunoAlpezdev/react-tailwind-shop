'use client'

import { products } from '@/interfaces/types'
import { ColumnDef } from '@tanstack/react-table'
import { CRUDButton, ReadIcon, UpdateIcon, DeleteIcon } from '@components/index'

export const Columns: ColumnDef<products>[] = [
  {
    id: 'action',
    header: () => <div className='w-fit'>Acción</div>,
    cell: ({ row }) => {
      const idProducto: string = row.getValue('idProducto')
      return (
        <section className='flex justify-center w-fit border rounded-[100px] z-50'>
          <CRUDButton
            Icon={<ReadIcon width={28} height={28} />}
            bgColor='Read'
            productId={idProducto}
          />
          <CRUDButton
            Icon={<UpdateIcon width={28} height={28} />}
            bgColor='Update'
            productId={idProducto}
          />
          <CRUDButton
            Icon={<DeleteIcon width={28} height={28} />}
            bgColor='Delete'
            productId={idProducto}
          />
        </section>
      )
    }
  },
  {
    accessorKey: 'idProducto',
    header: () => (
      <div className='w-fit text-xs sm:text-sm md:text-lg'>IDProducto</div>
    )
  },
  {
    accessorKey: 'imagen',
    header: () => <div className='flex text-center'>Amount</div>,
    cell: ({ row }) => {
      const imgSource: string = row.getValue('imagen')
      return (
        <div>
          {' '}
          <img className='w-12 h-12' src={imgSource} alt='' />{' '}
        </div>
      )
    }
  },
  {
    accessorKey: 'nombreProducto',
    header: 'Nombre Producto'
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripción Producto'
  },
  {
    accessorKey: 'categoria',
    header: 'Categoría Producto'
  }
]

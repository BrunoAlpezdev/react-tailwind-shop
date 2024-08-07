import { Columns, DataTable } from '@/components'
import { useFetchProductData } from '@/hooks'

import '@styles/CRUD.css'

function CRUDPage() {
  const { data } = useFetchProductData()

  return (
    <>
      <div>
        <p>Hola mundo</p>
      </div>
      <DataTable columns={Columns} data={data} />
    </>
  )
}

export default CRUDPage

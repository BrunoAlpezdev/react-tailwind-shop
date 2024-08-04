import CRUDTableComponent from "@components/CRUDTableComponent"
import { CreateIcon, SearchIcon }  from "@components/IconsComponent"
import '@styles/CRUD.css'

export default function CRUDPage() {

  return (
    <div className="main_body p-4">
      <section className="flex mb-4 gap-5">
        <button className="block p-1 rounded transition ease-in-out bg-brand-light-accent text-brand-light-shades hover:bg-brand-light-accent-600 dark:bg-brand-dark-accent dark:hover:bg-brand-dark-accent-600"><SearchIcon width={28} height={28}/></button>
        <input className="border-2 border-brand-light-accent dark:border-brand-dark-accent px-2 py-1 rounded outline-none" type="text" />
        <button className='transition hover:scale-150 hover:border-teal-500'><CreateIcon width={30} height={30}/></button>
      </section>
      
      <section>
        <CRUDTableComponent />
      </section>

    </div>
  )
}
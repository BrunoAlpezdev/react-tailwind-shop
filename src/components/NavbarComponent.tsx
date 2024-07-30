import DropDownButtonComponent from "./DropDownButtonComponent"
import categoriesList from '../data/categoriesList.ts'
import '../styles/App.css'

export function NavbarComponent() {
    return (
        <div className="flex justify-between items-center bg-white text-black px-4 py-2">
                <section>
                    <img src="https://cdn.discordapp.com/avatars/434778524621209610/a_bf9674e6d311743d413aa1f7f75a43cf?size=1024" alt="" className="w-16 h-16 rounded-lg" />
                </section>
                <section>
                    <div className="mr-96">
                        {categoriesList.map((category, index) => (
                            <DropDownButtonComponent key={index} nombreBoton={category.nombreBoton} categorias={category.categorias}/>
                        ))}
                    </div>
                </section>
        </div>
    )
}

/* h-16 rounded-lg */

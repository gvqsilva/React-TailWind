const Corpo = () => {
    return(
            <main className="grow">
                <h2 className="text-2xl text-center font-bold m-4">Lista de carros</h2>
                <div className="p-6 flex justify-evenly">
                    <div className="w-64 p-4 shadow-2xl shadow-indigo-500 text-center rounded-xl border border-indigo-950">
                        <h3 className="text-2xl mx-2">Porsche</h3>
                        <img className="w-2/3 block m-auto" src="vite.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni soluta voluptatum eaque enim accusamus similique dolor et, ex quas mollitia amet! Ea reprehenderit, eligendi iusto officia nobis consequuntur quia.</p>
                    </div>

                    <div className="w-64 p-4 shadow-2xl shadow-indigo-500 text-center rounded-xl border border-indigo-950">
                        <h3 className="text-2xl mx-2">McLaren</h3>
                        <img className="w-2/3 block m-auto" src="vite.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni soluta voluptatum eaque enim accusamus similique dolor et, ex quas mollitia amet! Ea reprehenderit, eligendi iusto officia nobis consequuntur quia.</p>
                    </div>

                    <div className="w-64 p-4 shadow-2xl shadow-indigo-500 text-center rounded-xl border border-indigo-950">
                        <h3 className="text-2xl mx-2">Mustang</h3>
                        <img className="w-2/3 block m-auto" src="vite.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni soluta voluptatum eaque enim accusamus similique dolor et, ex quas mollitia amet! Ea reprehenderit, eligendi iusto officia nobis consequuntur quia.</p>
                    </div>
                </div>
            </main>
    )
}
export default Corpo
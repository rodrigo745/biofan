export default function Contacto(){
    return(
        <div className="flex justify-center items-center w-full h-[90vh]">
            <div>
                <h4 style={{lineHeight: 1.4}} className="text-5xl w-[20vw] text-center text-[#1d4674]">Ponte en contacto con nosotros</h4>
            </div>
            <div className="w-[30vw] ml-28 space-y-6">
                <input type="text" placeholder="Nombre *" className="bg-[#1d4674] w-full p-3 rounded-md text-white" />
                <input type="email" placeholder="Email *" className="bg-[#1d4674] w-full p-3 rounded-md text-white" />
                <input type="number" placeholder="Teléfono " className="bg-[#1d4674] w-full p-3 rounded-md text-white" />
                <textarea name="" id="" placeholder="Mensaje *" className="bg-[#1d4674] w-full p-3 rounded-md text-white" ></textarea>
                <div>
                    <input type="checkbox" />
                    <label className="ml-4" htmlFor="">Acepto el <span className="text-cyan-600">Aviso legal</span> y la <span className="text-cyan-600">Política de privacidad</span></label>
                </div>
                <button className="w-full bg-[#fe7604] text-white p-2 rounded-md">Enviar</button>
            </div>
        </div>
    )
}
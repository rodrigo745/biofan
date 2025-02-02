import Image from "next/image"

export default function MainDos(){

    const informacion = [
        {
            titulo: "Comodidad térmica", id: "1",
            descripcion: "Brindan un mayor confort térmico para la industria, el comercio minorista y la agroindustria.", 
            img: "/inicio/iconos_eleccion/ico_1.svg"},
        {
            titulo: "Productividad", id: "2",
            descripcion: "Cuenta con tecnología innovadora de alto flujo y baja velocidad (HVLS).", 
            img: "/inicio/iconos_eleccion/ico_2.svg"},
        {
            titulo: "Económico", id: "3",
            descripcion: "Reduzca el consumo de energía de su industria, comercio minorista o agronegocio.", 
            img: "/inicio/iconos_eleccion/ico_3.svg"},
        
            {titulo: "Tecnología", id: "4",
            descripcion: "Ventiladores industriales HVLS de alta tecnología. Productos fabricados y adaptados a su entorno.", 
            img: "/inicio/iconos_eleccion/ico_4.svg"},
        {
            titulo: "Servicio", id: "5",
            descripcion: "Servicio de atención al cliente, antes, durante y después de la compra.", 
            img: "/inicio/iconos_eleccion/ico_5.svg"},
    ]

    return(
        <div className="w-full  lg:h-[100%] mt-[220px] pb-40">
            
            <div className="">
                <div className="bg-[#fe7604] w-[50vw] h-[75px] absolute mt-[50px] right-0"></div>
                <div className="bg-[#e6e6d4] w-[50vw] h-[75px] absolute mt-[125px] left-0"></div>
                <div className="bg-[#f0c50b] w-[50vw] h-[75px] absolute mt-[200px] right-0"></div>
                <div className="bg-[#fe7604] w-[50vw] h-[75px] absolute mt-[275px] left-0"></div>
                <div className="bg-[#e6e6d4] w-[50vw] h-[75px] absolute mt-[350px] right-0"></div>
                <div className="bg-[#f0c50b] w-[50vw] h-[75px] absolute mt-[420px] left-0"></div>
                <div className="bg-[#fe7604] w-[50vw] h-[75px] absolute mt-[495px] right-0"></div>
                <div className="bg-[#e6e6d4] w-[50vw] h-[75px] absolute mt-[570px] left-0"></div>
                <div className="bg-[#f0c50b] w-[50vw] h-[75px] absolute mt-[645px] right-0"></div>
            </div>

            <div className="mb-8 flex justify-end z-10 mt-20">
                <h3 className="text-3xl mt-0 lg:text-5xl z-10 font-bold roboto text-white text-right bg-[#1d4674] w-fit p-4 px-[265px] ">¿Por qué elegir BIOFAN?</h3>
            </div>
            <div className="w-full mb-2">
                <div className="lg:flex lg:flex-wrap lg:space-x-12 scale-95 justify-center imgMain">
                    <div className="w-[17vw] h-[370px] shadow-md flex flex-col justify-center py-10 px-5 pr-2 bg-[#e6e6d4] rounded-sm mt-28">
                        <p className="text-8xl sans">1</p>
                        <p className="text-3xl font-bold open mt-2">Comodidad térmica</p>
                        <p className="text-2xl helvetica mt-3">Los ventiladores BIOFAN brindan un mayor confort térmico para la industria, el comercio minorista y la agroindustria.</p>
                    </div>
                    <div className="w-[17vw] h-[370px] shadow-md flex flex-col justify-center py-10 px-5 bg-[#fe7604] text-white rounded-sm">
                        <p className="text-8xl sans">2</p>
                        <p className="text-3xl font-bold open mt-2">Servicio</p>
                        <p className="text-2xl helvetica mt-3 ">Servicio de atención al cliente, antes, durante y después de la compra.</p>
                    </div>
                    <div className="w-[17vw] h-[370px] shadow-sm flex flex-col py-5 px-5 bg-[#f0c50b] rounded-md mt-28">
                        <p className="text-8xl sans">3</p>
                        <p className="text-3xl font-bold open">Económico</p>
                        <p className="text-2xl helvetica mt-3 ">No aumenta el consumo de energía en su industria, comercio minorista o agronegocio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
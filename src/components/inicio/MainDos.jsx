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
        <div className="w-full pt-14 lg:h-[100%] mt-[200px] pb-40">
            <Image src="/inicio/inicio_main_2.png" alt="" className="w-full z-0 absolute" width={1080} height={1920} />
            <div className="mb-20 flex justify-end z-10 mt-20">
                <h3 className="text-3xl mt-4 lg:text-5xl z-10 font-bold roboto text-[#1d4674] text-right bg-white w-fit p-4 px-48 rounded-sm">¿Por qué elegir BIOFAN?</h3>
            </div>
            <div className="w-full scale-[77%]">
                <div className="lg:flex lg:flex-wrap lg:space-x-24  justify-center imgMain">
                    <div className="w-[23vw] h-[470px] shadow-md flex flex-col justify-center py-10 px-12 bg-[#e6e6d4] rounded-md mt-28">
                        <p className="text-9xl sans">1</p>
                        <p className="text-4xl font-bold open mt-2">Comodidad térmica</p>
                        <p className="text-3xl helvetica mt-5 ">Los ventiladores BIOFAN brindan un mayor confort térmico para la industria, el comercio minorista y la agroindustria.</p>
                    </div>
                    <div className="w-[23vw] h-[470px] shadow-md flex flex-col justify-center py-10 px-12 bg-[#fe7604] text-white rounded-md">
                        <p className="text-9xl sans">2</p>
                        <p className="text-4xl font-bold open mt-2">Servicio</p>
                        <p className="text-3xl helvetica mt-5 ">Servicio de atención al cliente, antes, durante y después de la compra.</p>
                    </div>
                    <div className="w-[23vw] h-[470px] shadow-md flex flex-col justify-center py-10 px-12 bg-[#f0c50b] rounded-md mt-28">
                        <p className="text-9xl sans">3</p>
                        <p className="text-4xl font-bold open mt-2">Económico</p>
                        <p className="text-3xl helvetica mt-5 ">No aumenta el consumo de energía en su industria, comercio minorista o agronegocio.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
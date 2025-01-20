import Image from "next/image"
import Link from "next/link"

export default function Nueve(){
    return(
        <div className="mb-10">
            <h3 className="text-5xl font-bold text-[#1d4674] text-center mt-12">Equipos Extracción</h3>
            <p className="mt-7 helvetica text-2xl text-center w-[57%] mx-auto font-bold">Renueva el aire durante 24 horas continuas en grandes espacios y recintos cerrados como fábricas de producción. Inyecta y/o extrae el aire, gases, vapores, polvo o impurezas.</p>
            <div className="flex space-x-20 justify-center mt-10">
                <div className="flex flex-col items-center justify-center z-10">
                    <Image src="/extraccion/1.png" height={400} width={460} className="" alt="" />
                    <p className="text-center mt-6 text-3xl font-bold text-white">Extractor de 6 palas</p>
                    <Link href="/pages/productos/16" className="bg-[#fe7604] hover:scale-105 transition font-bold mt-4 w-fit rounded-lg px-5 py-1 text-white">Conocelo aquí</Link>
                </div>
                <div className="flex flex-col items-center justify-center z-10">
                    <Image src="/extraccion/2.png" height={380} width={430} className="" alt="" />
                    <p className="text-center mt-6 text-3xl font-bold text-white">Extractor de 7 palas</p>
                    <Link href="/pages/productos/17" className="bg-[#fe7604] hover:scale-105 transition font-bold mt-4 w-fit rounded-lg px-5 py-1 text-white">Conocelo aquí</Link>
                </div>
                <div className="absolute w-full h-[390px] bg-[#1d4674] right-0 mt-24"></div>
            </div>
            <div className="bg-[#e6e6d4] mt-[-20px] z-0 w-full h-[157vh] absolute left-0"></div>
            <div className="z-10"> 
                <div className="flex justify-center z-10 w-[80%] mx-auto mt-6 space-x-20">
                    <Image src="/extraccion/3.png" className="z-10 rounded-full" width={500} height={400} alt=""/>
                    <div className="  w-[80vw] helvetica mt-8 z-10">
                        <p className="text-3xl p-6 bg-[#1d4674] z-10 font-bold text-white text-center mt-8 mb-5">La función de <span className="text-[#fe7604] z-10">EXTRACCIÓN</span> consiste en sacar aire, gases, vapores, polvos o impurezas desde el interior de un recinto cerrado hacia el exterior. </p>
                        <p className="text-[#fe7604] z-10 text-2xl font-bold px-24 mt-10 text-center">Cuando se saca el aire, se crea un vacío, el cual permite la entrada de aire fresco por las aberturas naturales del espacio (ventanas y puertas).</p>
                    </div>
                </div>
                <div className="flex justify-center w-[80%] mx-auto z-10 space-x-20">
                    <div className="  w-[80vw] helvetica mt-16 z-10">
                        <p className="text-3xl p-6 bg-[#1d4674] font-bold text-white text-center mt-8 mb-5 z-10">La función de <span className="text-[#fe7604] ">INYECCIÓN</span>, consiste en introducir aire desde el exterior a un recinto cerrado con el objetivo de renovar el aire que circula al interior del espacio. </p>
                        <p className="text-[#fe7604] text-2xl font-bold px-24 mt-10 text-center">Cuando se inyecta aire, se puede generar una leve sobrepresión al interior del recinto, obligando a que el aire que está concentrado al interior, salga por las aberturas naturales</p>
                    </div>
                    <Image src="/extraccion/4.png" className="z-10 rounded-full" width={500} height={400} alt=""/>
                </div>
                <div className="flex justify-center w-[80%] mx-auto z-10 space-x-20">
                    <Image src="/extraccion/5.png" className="z-10" width={580} height={400} alt=""/>
                    <div className="  w-[80vw] helvetica mt-16 z-10">
                        <p className="text-3xl p-6 bg-[#1d4674] font-bold text-white text-center mt-8 mb-5">La <span className="text-[#fe7604]">combinación</span> de sistemas consiste en fusionar la <span className="text-[#fe7604]">extracción e inyección</span>; la aplicación de estos dos sistemas es recomendable en los espacios que requieran un elevado número de renovaciones de aire.</p>
                    </div>
                </div>
            </div>
            <p className="text-[#1d4674] text-5xl font-bold text-center mt-16">Aplicaciones en la Industria y Comercio</p>
            <Image src="/extraccion/9.png" className="z-10 mx-auto mt-14" width={1600} height={1400} alt=""/>
            <p className="text-[#fe7604] text-4xl font-bold roboto w-[50%] mx-auto text-center mt-10 mb-10">¡Nuestros Equipos de Extracción son la solución para estos problemas!</p>

        </div>
    )
}
"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";


export default function Evaporativos(){
    // Estado para controlar las clases de las burbujas
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);


    return(
        <div>
            <div className="flex">
                <div className="text-center w-[70%] p-20">
                    <h2 className="text-5xl mb-5 text-[#1d4674] font-bold">Equipos Evaporativos</h2>
                    <p className="text-2xl text-[#1d4674] px-40 helvetica">Los ventiladores evaporativo, también conocidos como “climatizadores evaporativos” o “enfriadores de aire por evaporación”, operan mediante un proceso natural de enfriamiento basado en la evaporación del agua.</p>
                    <Image src="/evaporativos/1.png" className="rounded-[9rem] mx-auto mt-8" alt="" width={900} height={400} />
                </div>
                <div className="flex flex-col  gap-0 mt-0 mb-20" >
            {/* Burbuja 1 */}
            <div
                className={`burbuja33 mt-10 w-[230px] h-[240px] flex flex-col justify-center items-center ${
                isHovered1 ? 'circular' : 'deformada1'
                }`}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
            >
                <div
                className={`burbuja33 w-[60px] h-[60px] flex justify-center items-center text-3xl text-center mx-auto ${
                    isHovered1 ? 'deformada1' : 'circular'
                }`}
                >
                <p className="text-[#1d4674] font-bold">1</p>
                </div>
                <p className="text-[#1d4674] font-bold text-lg mt-3 mb-2">Captación de aire</p>
                <p className="text-[#1d4674] text-sm text-center mb-4">Un ventilador interno aspira el aire caliente del entorno.</p>
            </div>

            {/* Burbuja 2 */}
            <div
                className={`burbuja33 mt-5 w-[230px] h-[240px] flex flex-col justify-center items-center ${
                isHovered2 ? 'circular' : 'deformada2'
                }`}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
            >
                <div
                className={`burbuja33 w-[60px] h-[60px] flex justify-center items-center text-3xl text-center mx-auto ${
                    isHovered2 ? 'deformada2' : 'circular'
                }`}
                >
                <p className="text-[#fe7604] font-bold">2</p>
                </div>
                <p className="text-[#fe7604] font-bold text-lg mt-3 mb-2">Evaporación</p>
                <p className="text-[#1d4674] text-sm text-center mb-4 px-3">El aire caliente atraviesa un filtro o panel humedecido con agua.</p>
            </div>

            {/* Burbuja 3 */}
            <div
                className={`burbuja33 mt-5 w-[230px] h-[240px] flex flex-col justify-center items-center ${
                isHovered3 ? 'circular' : 'deformada3'
                }`}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
            >
                <div
                className={`burbuja33 w-[60px] h-[60px] flex justify-center items-center text-3xl text-center mx-auto ${
                    isHovered3 ? 'deformada3' : 'circular'
                }`}
                >
                <p className="text-[#f0c50b] font-bold">3</p>
                </div>
                <p className="text-[#f0c50b] font-bold text-lg mt-3 mb-2">Enfriamiento</p>
                <p className="text-[#1d4674] text-sm text-center mb-4">El aire, ahora más frío y humidificado, se expulsa de nuevo al ambiente.</p>
            </div>
            </div>

            </div>
            <Image src="/evaporativos/2.png" className="w-[80%] mx-auto" width={1700} height={1500} alt="" />
            <div className="flex space-x-16 mt-12 bg-[#1d4674] p-4 text-white pt-10 pb-10 justify-center">
                <p className="text-2xl font-bold text-center w-[48%]">En BIOFAN, nos enorgullecemos de ofrecer soluciones innovadoras y sostenibles para el bienestar y la comodidad en interiores con los equipos Evaporativos y de Extracción.</p>
                <Link href="/pages/inicio/7" className="px-8 py-2 mt-8 h-fit bg-[#fe7604] rounded-lg font-bold">Aprende más</Link>
            </div>


            <div className="grid grid-cols-3 gap-6 mt-12 mb-20 mx-auto w-fit items-center">
                <Link href="/pages/productos/10" className="shadow-xl cursor-pointer hover:scale-105 transition p-6 border w-[400px] h-[450px] mx-auto" >
                    <Image src="/evaporativos/1/1.png" className="mx-auto" width={280} height={400} alt=""/>
                    <p className="text-center mt-7 text-xl font-bold text-[#1d4674]"> Weather Fighter  Mod-150</p>
                </Link>
                <Link href="/pages/productos/11" className="shadow-xl cursor-pointer hover:scale-105 transition p-6 border w-[400px] h-[450px]" >
                    <Image src="/evaporativos/1/2.png" className="mx-auto" width={280} height={400} alt=""/>
                    <p className="text-center mt-4 text-xl font-bold text-[#1d4674]">Military Cool Mod-260</p>
                </Link>
                <Link href="/pages/productos/12" className="shadow-xl cursor-pointer hover:scale-105 transition p-6 border w-[400px] h-[450px]" >
                    <Image src="/evaporativos/1/3.png" className="mx-auto" width={300} height={400} alt=""/>
                    <p className="text-center mt-8 text-xl font-bold text-[#1d4674]">Military Cool Mod-120</p>
                </Link>
                <Link href="/pages/productos/14" className="shadow-xl cursor-pointer hover:scale-105 transition p-6 border w-[400px] h-[450px]" >
                    <Image src="/evaporativos/1/4.png" className="mx-auto" width={300} height={400} alt=""/>
                    <p className="text-center mt-8 text-xl font-bold text-[#1d4674]">Serie - OFS PRO</p>
                </Link>
                <Link href="/pages/productos/13" className="shadow-xl cursor-pointer hover:scale-105 transition p-6 border w-[400px] h-[450px]" >
                    <Image src="/evaporativos/1/5.png" className="mx-auto" width={300} height={400} alt=""/>
                    <p className="text-center mt-5 text-xl font-bold text-[#1d4674]">Cool Mod-335</p>
                </Link>
                <Link href="/pages/productos/15" className="shadow-xl cursor-pointer hover:scale-105 transition p-6 border w-[400px] h-[450px]" >
                    <Image src="/evaporativos/1/6.png" className="mx-auto mt-16" width={300} height={400} alt=""/>
                    <p className="text-center mt-12 text-xl font-bold text-[#1d4674]">Duct Cooler</p>
                </Link>
            </div>
        </div>
    )
}
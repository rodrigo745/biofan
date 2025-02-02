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
                <div className="text-center w-[72%] p-20 scale-95 ml-32 relative mt-[-30px]">
                    <h2 className="text-5xl mb-5 text-[#1d4674] font-bold">Equipos Evaporativos</h2>
                    <p className="text-xl text-[#1d4674] px-40 helvetica font-bold">Los ventiladores evaporativo, también conocidos como “climatizadores evaporativos” o “enfriadores de aire por evaporación”, operan mediante un proceso natural de enfriamiento basado en la evaporación del agua.</p>
                    <Image src="/evaporativos/1.png" className="rounded-[5rem] mx-auto mt-8" alt="" width={900} height={400} />
                    <p className="text-center text-[#fe7604] font-bold w-[70%] mx-auto mt-9 text-xl">El verano trae consigo temperaturas elevadas que pueden afectar seriamente el
                    bienestar y la productividad de los trabajadores en entornos industriales</p>
                </div>
                <div className="flex flex-col  gap-0 mt-16 mb-20 relative ml-[-170px]" >
                    <Image src="/evaporativos/10.png" alt="" width={220} height={300} className=""/>
                </div>
            </div>
            <div className="w-full bg-[#e6e6d4] p-14">
                <Image src="/evaporativos/2.png" className="w-[80%] mx-auto" width={1700} height={1500} alt="" />
            </div>
            <div className="flex space-x-16 bg-[#1d4674] p-4 text-white pt-10 pb-10 justify-center">
                <p className="text-xl font-bold text-center w-[60%]">“Para maximizar los beneficios de la climatización evaporativa, es esencial colocar los enfriadores en
áreas estratégicas donde el flujo de aire pueda distribuirse uniformemente. Esto incluye áreas de alta
actividad y zonas donde se genera más calor”. </p>
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
            </div>
            <p className="text-center text-[#fe7604] font-bold w-[70%] mx-auto mt-9 text-xl">Estas tecnologías no solo proporcionan un ambiente de trabajo más fresco y confortable, sino que
            también promueven una mejor calidad del aire y reducen los riesgos asociados con las altas temperaturas. </p>
            <div className="grid grid-cols-3 gap-6 mt-12 mb-20 mx-auto w-fit items-center">
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
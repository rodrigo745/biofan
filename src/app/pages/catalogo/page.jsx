import Image from "next/image"
import Link from "next/link"

export default function Catalogo(){

    const informacion = [
        {titulo: "MOVIL HDY", estilo:"bg-red-500", img: "/catalogo/items/3.PNG"},
        {titulo: "MOVIL 45° HDY", estilo:"", img: "/catalogo/items/4.PNG"},
        {titulo: "PARED HDB", estilo:"bg-orange-400", img: "/catalogo/items/5.PNG"},
        {titulo: "VERTICAL HDS/L", estilo:"bg-neutral-700", img: "/productos/7/1/11.jpg"},
        {titulo: "VERTICAL COMERCIAL HDS/L", estilo:"bg-blue-900", img: "/productos/7/1/12.jpg"},
    ]
    const informacion2 = [
        {titulo: "MODELO - 335L", estilo:"bg-[#1d4674]", img: "/productos/7/1/1.jpg"},
        {titulo: "120L Cool Military", estilo:"bg-[#1d4674]", img: "/productos/7/1/2.jpg"},
        {titulo: "150L Cool Military", estilo:"bg-[#1d4674]", img: "/productos/7/1/3.jpg"},
        {titulo: "260 Cool Military", estilo:"bg-[#1d4674]", img: "/productos/7/1/4.jpg"},
        {titulo: "130L Senapati", estilo:"bg-[#1d4674]", img: "/productos/7/1/5.jpg"},
        {titulo: "OFS PRO", estilo:"bg-[#1d4674]", img: "/productos/7/1/6.jpg"}
    ]
    return(
        <div className="">
            <h2 className="text-[#1d4674] z-10 relative text-2xl lg:text-5xl font-bold text-center mt-20 roboto">CATÁLOGOS</h2>

            <div className="flex relative scale-[.85] flex-col lg:flex z-10 lg:flex-row justify-center w-[100%] h-full lg:h-[72vh]  lg:px-36">
                 <div className="w-full lg:w[30%] flex flex-col items-center mb-14 lg:mb-0 text-center">
                    <h3 className="text-[#1d4674] text-3xl lg:text-4xl font-semibold helvetica mb-8 text-center px-40">Catálogo General</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/001-CATALOGO-GENERAL-BIO-FAN-2024.html">
                        <Image src="/catalogo/1.jpg" width={300} height={300} alt="catalogo" 
                        className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                    
                 </div>
                 <div className="w-full lg:w[30%] flex flex-col items-center mb-14 lg:mb-0">
                    <h3 className="text-[#1d4674] text-3xl lg:text-4xl font-semibold helvetica mb-8  px-28 ml-7 text-center">Catálogo Resumen</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/003-CATALOGO-RESUMEN-BIO-FAN-2024.html">
                        <Image src="/catalogo/2.jpg" width={300} height={300} alt="catalogo"
                            className="ml-7 hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                 </div>
                 <div className="w-full lg:w[20%] flex flex-col items-center mb-14 lg:mb-0 ">
                    <h3 className="text-[#1d4674] text-3xl lg:text-4xl font-semibold helvetica mb-8  px-44 text-center">Catálogo Evaporativo</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/002-CATALOGO-EVAPORATIVOS-BIO-FAN-2024.html">
                        <Image src="/catalogo/3.jpg" width={300} height={300} alt="catalogo" 
                            className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>

                 </div>
            </div>
            <div className="w-[99vw] z-0 h-[60vh] bg-[#f0c50b] absolute top-0 left-0"></div>
            <div className="w-[99vw] z-0 h-[38vh] bg-[#e6e6d4] absolute top-[60vh]  left-0"></div>
            {/* Catalogo */}
            <div className="w-full h-full flex  flex-col items-center mb-20 lg:mt-0 lg:mb-20 lg:pb-20">
                <h2 className="text-[#1d4674] roboto text-3xl lg:text-5xl font-bold mt-20 mb-10 ">CATÁLOGOS EQUIPO</h2>
                <div className="flex justify-around w-[90vw] lg:space-x-2 scale-95">
                    <a href="https://drive.google.com/file/d/1Ki7CyKthvqeaqi9FNc3ZcT8E5_Hu-0mI/view" target="_blank" className="hover:scale-110 hover:cursor-pointer transition">
                        <Image src="/catalogo/4.png" width={840} height={400} alt="" />
                        <p className="text-center mx-auto relative left-[10px] bg-[#1d4674] p-2 w-fit text-white px-5 rounded-lg text-lg font-bold">VENTILADOR INDUSTRIAL</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1OlPHEvzJrw-6v9wnU-D-UObDvGKzgxa_/view" target="_blank" className="hover:scale-110 hover:cursor-pointer transition mt-7 pr-20">
                        <Image src="/catalogo/5.png" width={580} height={400} alt="" />
                        <p className="text-center mx-auto relative left-[-3px] mt-6 bg-[#1d4674] p-2 w-fit text-white px-5 rounded-lg text-lg font-bold">VENTILADOR COMERCIAL</p>
                    </a>

                </div>
                <p className="text-4xl w-full pl-[20vw] font-bold text-[#1d4674] mt-10 bg-gradient-to-r from-neutral-300 to-white py-3">SERIE HDS</p>
                <div className="mt-10 flex justify-around w-[70%]">
                    <a href="https://drive.google.com/file/d/17mlYpaSW5fbvGVhbO41DPJDdMJTjhJ-f/view" target="_blank">
                        <Image  src="/productos/3/1.jpg" width={300} height={300} className=" hover:scale-105 transition cursor-pointer" alt=""/>
                        <p className="bg-red-500 p-2 px-5 rounded-xl mt-4 text-xl font-bold text-white">VENTILADOR DE PIE MÓVIL</p>
                    </a>
                    <div>
                        <Image  src="/productos/4/1.jpg" width={200} height={200} className="w-[260px] h-[250px] hover:scale-105 ml-9 transition cursor-pointer" alt=""/>
                        <p className="bg-red-500 p-2 px-5 rounded-xl mt-4 text-xl font-bold text-white">VENTILADOR DE PIE MÓVIL 45°</p>

                    </div>
                    
                    <a href="https://drive.google.com/file/d/11ntNmLfsbYPB-WRnDDeB8tM8sCIw4skm/view" target="_blank">
                        <Image  src="/productos/5/2.jpg" width={200} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                        <p className="bg-[#f0a84d] p-2 px-5 rounded-xl mt-6 text-xl font-bold text-white">VENTILADOR PARED</p>

                    </a>
                </div>

                <div className="flex ">
                    <p className="text-4xl w-[800px] ml-[4vw] pl-10 font-bold text-red-500 mt-10 bg-gradient-to-r from-neutral-300 to-white h-16 pt-3">SERIE HDY</p>
                    <p className="text-4xl w-[600px] ml-[-5vw] pl-[24%] font-bold text-[#f0a84d] mt-10 bg-gradient-to-r from-white to-neutral-300 h-16 pt-3">SERIE HDB</p>

                </div>

                <div className="mt-3 flex justify-around ml-24 space-x-6">
                    <a href="https://drive.google.com/file/d/1EucUUMKqkPC5SThwGCKjys6gmz0UbGRI/view" target="_blank">
                        <Image  src="/productos/1/ot.png" width={400} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                    </a>
                    <a href="https://drive.google.com/file/d/1KW3ujzYN3yathDYXlkRaEKrNGa0zs95g/view" target="_blank">
                        <Image  src="/productos/2/ot.png" width={400} height={300} className="w-[620px] hover:scale-105 transition cursor-pointer" alt=""/>
                    </a>
                </div>

            </div>
            <p className="text-4xl w-full pl-[20vw] font-bold mt-[-90px] text-[#1d4674] bg-gradient-to-r from-neutral-300 to-white py-3">SERIE HDS/L</p>

            <div className="grid grid-cols-3 gap-32 w-[59%] mx-auto items-end mb-20 mt-10">
                <Image  src="/catalogo/items/1.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                <Image  src="/catalogo/items/2.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                <Image  src="/catalogo/items/3.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
            </div>
            <p className="text-4xl w-full pl-[20vw] font-bold mt-[-10px] text-[#1d4674] bg-gradient-to-r from-neutral-300 to-white py-3">EQUIPOS EVAPORATIVOS</p>

            <div className="grid grid-cols-3 gap-32 w-[59%] mx-auto items-end mb-20 mt-10">
                <Image  src="/catalogo/items/4.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                <a href="https://drive.google.com/file/d/1AP-DubM7bC70qAOQ7q1yUCgEH0xU7eRA/view" target="_blank">
                    <Image  src="/catalogo/items/5.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                </a>
                <Image  src="/catalogo/items/6.png" width={300} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
            </div>
            <div className="flex ">
                    <p className="text-4xl w-[700px] ml-[18vw] pl-10 font-bold text-[#1d4674] bg-gradient-to-r from-neutral-300 to-white h-16 pt-3">EQUIPOS DE EXTRACCIÓN</p>
                    <p className="text-4xl w-[700px] ml-[-5vw] pl-[10%] font-bold text-[#1d4674]  bg-gradient-to-r from-white to-neutral-300 h-16 pt-3">RECUBRIMIENTO SOLAR</p>

                </div>
            <div className="grid grid-cols-3 gap-32 w-[59%] mx-auto items-end mb-20 ">

                <Image  src="/catalogo/items/7.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                <Image  src="/catalogo/items/8.png" width={250} height={300} className="w-fit hover:scale-105 transition cursor-pointer" alt=""/>
                <a href="https://drive.google.com/file/d/10uH_qife1JBbpLE1FWtVkp9f3xHk--Ac/view" target="_blank">
                    <Image  src="/catalogo/items/9.png" width={380} height={300} className="w-fit hover:scale-[1.15] transition cursor-pointer scale-110 mb-4" alt=""/>
                </a>
            </div>
        </div>
    )
}
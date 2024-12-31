"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Aplicaciones(){

    const [ pestaña, setPestaña ] = useState(false);

    const titulosIndustriales = [
        {text: "Logística de Almacén", img: "/industrial/in_1.jpg"},
        {text: "Industria Manufacturada", img: "/industrial/in_2.jpg"},
        {text: "Automotriz", img: "/industrial/in_3.jpg"},
        {text: "Sector Ganadero y Agricultura", img: "/industrial/in_4.jpg"},
        {text: "Industria Electrónica", img: "/industrial/in_5.jpg"},
        {text: "Logística Industrial", img: "/industrial/in_6.jpg"}
    ]
    const titulosComerciales = [
        {text: "Gimnasios", img: "/comercial/co_1.jpg"},
        {text: "Estaciones de Tren y Autobuses", img: "/comercial/co_2.jpg"},
        {text: "Centros Deportivos", img: "/comercial/co_3.jpg"},
        {text: "Sala de Espera", img: "/comercial/co_4.jpg"},
        {text: "Recintos Feriales y de Exposición", img: "/comercial/co_5.jpg"},
        {text: "Escuelas", img: "/comercial/co_6.jpg"}
    ]
    
    const mostrarPestaña = (e)=>{
        e.target.id === "0" ? setPestaña(false) : setPestaña(true);
    }

    const cambioDePestañasBtn = `w-full text-center cursor-pointer border-b-4 transition lg:text-2xl hover:border-b-4 hover:border-red-500 `;

    // Modal
    const [ modal, setModal ] = useState(false);
    const [ numero, setNumero ] = useState(0);

    const showModal = (propNumero)=> {
        setNumero(propNumero);
        modal ? setModal(false) : setModal(true);
    }

    return(
        <div className="w-full mb-20">
            <div className="w-full flex flex-col items-center justify-center pt-10 ">
                <h2 className="text-[#1d4674] text-2xl roboto md:text-6xl font-bold mb-8">ÁREA DE APLICACIÓN</h2>
                <p className="w-[71vw] mb-10 text-2xl text-justify helvetica">La Serie de ventiladores industriales BIOFAN ha sido cuidadosamente desarrollada para llegar a tantas aplicaciones como sea posible con la tecnología más avanzada. Ofrecemos ventiladores que se pueden encontrar en una amplia variedad de espacios industriales y comerciales. </p>
                <div className="w-[90%] md:w-[75%] flex justify-between text-md md:text-2xl mt-0 text-[#1d4674] font-bold helvetica">
                    <p onClick={mostrarPestaña} id="0" className={!pestaña ? `${cambioDePestañasBtn} border-b-4 border-red-500` : `${cambioDePestañasBtn}` }>Escenarios industriales</p>
                    <p onClick={mostrarPestaña} id="1" className={pestaña ? `${cambioDePestañasBtn} border-b-4 border-red-500` : `${cambioDePestañasBtn}` }>Escenarios comerciales</p>
                </div>
            </div>

            {/* Contenido de las pestañas */}
            <div className="w-full flex justify-center mt-6 ">
                <div className="w-[90%] md:w-[80%] flex justify-center items-center text-xl ">
                    {
                        !pestaña ? 
                        /* Industriales */
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white open">

                        {
                            titulosIndustriales.map((e, index) => (
                                <div  key={index} className="relative w-[100%] h-[250px] md:h-[300px] bg-slate-300 cursor-pointer" onClick={()=> showModal(index)}>
                                    {/* Imagen */}
                                    {
                                        e.img !== "" &&
                                        <Image src={e.img} width={900} height={900} alt="imagen comercial" className="h-full w-full"/>
                                    }
                                    {/* div con hover y texto */}
                                    <div className="absolute left-0 top-0 w-full h-full bg-transparent hover:transparent transition-colors duration-300">
                                        <div className="absolute left-0 bottom-0 w-full h-[100%] opacity-0 hover:opacity-100 transition-opacity duration-0">
                                            <div className="w-full h-14 absolute bottom-0 bg-[#1d4674] opacity-100"></div>
                                        </div>
                                        <p className="absolute hover:bg-[#1d4674] bottom-0 w-full h-14 p-3 text-left cursor-pointer text-sm lg:text-xl">{e.text}</p>
                                    </div>
                                    
                                </div>
                            ))
                        }

                        </div>
                        :
                        /* Comerciales */
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white open">
                        {
                            titulosComerciales.map((e, index) => (
                                <div key={index} className="relative w-[100%] h-[250px] md:h-[300px] bg-slate-300 cursor-pointer" onClick={()=> showModal(index+10)}>
                                    {/* Imagen */}
                                    {
                                        e.img !== "" &&
                                        <Image src={e.img} width={300} height={300} alt="imagen comercial" className="h-full w-full"/>
                                    }
                                    {/* div con hover y texto */}
                                    <div className="absolute left-0 top-0 w-full h-full bg-transparent hover:transparent transition-colors duration-30 0">
                                        <div className="absolute left-0 bottom-0 w-full h-[100%] opacity-0 hover:opacity-100 transition-opacity duration-0">
                                            <div className="w-full h-10 md:h-14 absolute bottom-0 bg-[#1d4674] opacity-100"></div>
                                        </div>
                                        <p className="absolute hover:bg-[#1d4674] bottom-0 w-full h-14 p-3 text-left cursor-pointer text-sm lg:text-xl">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                           
                        </div>
                    }
                </div>
            </div>
            {/* MODAL */}
            {modal && <div className="modalBlur" ></div>}
                                    {
                                        modal &&
                                        <div onClick={()=> showModal(0)} className="contModalAplicaciones cursor-pointer space-x-3">
                                            <button className="btnModal w-2 h-2"></button>
                                            <button className="btnModal w-3 h-3"></button>
                                            <button className="btnModal w-4 h-4"></button>
                                            <div className="modalAplicaciones relative ">
                                                <p className="relative text-center top-[-40px] text-4xl text-white text-shadow mt-[-40px] font-bold">{
                                                numero <= 6 ?
                                                    titulosIndustriales[numero].text
                                                :
                                                    titulosComerciales[numero-10].text
                                                }
                                                </p>
                                                <Image  src={`${numero <=6 ? titulosIndustriales[numero].img :  titulosComerciales[numero-10].img}`} width={800} height={800} alt="" className="w-full" />
                                            </div>
                                            <button className="btnModal w-4 h-4"></button>
                                            <button className="btnModal w-3 h-3"></button>
                                            <button className="btnModal w-2 h-2"></button>
                                        </div>
                                    }
            <div className="bg-[#f6f1f1] p-2 mt-20 mb-40">
                <p className="mt-20 text-[3.5rem] font-bold text-center text-[#1d4674] roboto">¿NO SABES POR DÓNDE EMPEZAR?</p>
                <p className="text-[#3c3c3a] text-center text-3xl font-bold mt-4 italic">No te preocupes, personalizamos una solución a tu necesidad </p>
                <p className="text-[#fe7604] text-center font-bold mt-5 text-[2.6rem]">¡Sólo dinos que estás buscando!</p>
                <div className="bg-[#fe7604] w-[98.5vw] h-[30vh] absolute z-0 mt-[250px]"></div>
                <Image src="/aplicaciones.png" alt="" width={1200} height={1200} className="mx-auto relative mt-10 z-10" />

            </div>

                                    
            <div className="w-full h-full lg:h-[100%]">
                <div className="bg-[#f0c50b] w-full h-[39vh] absolute"></div>
                <div className="bg-[#fe7604] w-[24vw] h-[36vh] absolute mt-[355px] ml-[27vw]"></div>
                <Image src="/inicio/noticias/fondo.png" width={1000} height={300} 
            alt="" className="w-[40vw] mx-auto relative pt-20"/>
            <div className="flex justify-end relative lg:right-[14vw] bottom-24">

                <div className="bg-white lg:w-[38.5%] px-8 pt-10 pl-12 flex lg:space-x-9">
                    <div className="hidden lg:block">
                        <Image src="/inicio/noticias/logo.jpg" width={100} height={100} alt=""  className="w-[140px] mt-6"/>
                    </div>
                    <div className="text-[#1d4674] roboto w-[100%] pr-10">
                        <p className="text-4xl font-medium mt-5 mb-5">Solicita un estudio de forma totalmente gratuita</p>
                        <p className="text-xl text-justify">Nuestro equipo técnico se desplazará hasta tus instalaciones para realizar estudios de confort térmico y de eficiencia energética gratuitos y ofrecerte así, la mejor solución de ventilación industrial.</p>
                        <div className="w-full pl-14 mt-5 px-8 py-4 bg-[#1d4674] flex text-white text-xl font-semibold cursor-pointer hover:bg-blue-900">SOLICITAR ESTUDIO AHORA 
                            <p className="relative left-5 mr-3 top-[1px] lineaSol"></p>
                            <p className=" relative scale-150 mt-[6px] lg:mt-0">{">"}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


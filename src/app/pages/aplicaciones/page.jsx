"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Aplicaciones() {
    const [pestaña, setPestaña] = useState(false);

    const titulosIndustriales = [
        { text: "Logística de Almacén", img: ["/industrial/in_1.jpg", "/industrial/1-1.png", "/industrial/1-2.png", "/industrial/1-3.png"] },
        { text: "Industria Manufacturada", img: ["/industrial/in_2.jpg", "/industrial/2-1.png", "/industrial/2-2.png", "/industrial/2-3.png"] },
        { text: "Automotriz", img: ["/industrial/in_3.jpg" , "/industrial/3-1.png", "/industrial/3-2.png", "/industrial/3-3.png"] },
        { text: "Sector Ganadero y Agricultura", img: ["/industrial/in_4.jpg", "/industrial/4-1.png", "/industrial/4-2.png", "/industrial/4-3.png"] },
        { text: "Industria Electrónica", img: ["/industrial/in_5.jpg", "/industrial/5-1.png", "/industrial/5-2.png", "/industrial/5-3.png"] },
        { text: "Logística Industrial", img: ["/industrial/in_6.jpg", "/industrial/6-1.png", "/industrial/6-2.png", "/industrial/6-3.png"] }
    ];
    const titulosComerciales = [
        { text: "Gimnasios", img: ["/comercial/co_1.jpg", "/comercial/1-1.png", "/comercial/1-2.png", "/comercial/1-3.png"] },
        { text: "Estaciones de Tren y Autobuses", img: ["/comercial/co_2.jpg", "/comercial/2-1.png", "/comercial/2-2.png", "/comercial/2-3.png"] },
        { text: "Centros Deportivos", img: ["/comercial/co_3.jpg", "/comercial/3-1.png", "/comercial/3-2.png", "/comercial/3-3.png"] },
        { text: "Sala de Espera", img: ["/comercial/co_4.jpg", "/comercial/4-1.png", "/comercial/4-2.png", "/comercial/4-3.png"] },
        { text: "Recintos Feriales y de Exposición", img: ["/comercial/co_5.jpg", "/comercial/5-1.png", "/comercial/5-2.png", "/comercial/5-3.png"] },
        { text: "Escuelas", img: ["/comercial/co_6.jpg", "/comercial/6-1.png", "/comercial/6-2.png", "/comercial/6-3.png"] }
    ];

    const mostrarPestaña = (e) => {
        e.target.id === "0" ? setPestaña(false) : setPestaña(true);
    };

    const cambioDePestañasBtn = `w-full text-center cursor-pointer border-b-4 transition lg:text-2xl hover:border-b-4 hover:border-red-500 `;

    // Modal
    const [modal, setModal] = useState(false);
    const [numero, setNumero] = useState(0);

    const showModal = (propNumero) => {
        setNumero(propNumero);
        modal ? setModal(false) : setModal(true);
    };

    const [imgNum, setImgNum] = useState(0);

    // Cambiar la imagen cuando se hace clic en los botones
    const cambiarImg = (id) => {
        setImgNum(id);  // Cambia la imagen según el id
    };

    return (
        <div className="w-full mb-20">
            <div className="w-full flex flex-col items-center justify-center pt-10 ">
                <h2 className="text-[#1d4674] text-2xl roboto md:text-5xl font-bold mb-4">ÁREA DE APLICACIÓN</h2>
                <p className="w-[71vw] mb-4 text-xl text-justify helvetica">La Serie de ventiladores industriales BIOFAN ha sido cuidadosamente desarrollada para llegar a tantas aplicaciones como sea posible con la tecnología más avanzada. Ofrecemos ventiladores que se pueden encontrar en una amplia variedad de espacios industriales y comerciales. </p>
                <div className="w-[90%] md:w-[75%] flex justify-between text-md md:text-2xl mt-0 text-[#1d4674] font-bold helvetica">
                    <p onClick={mostrarPestaña} id="0" className={!pestaña ? `${cambioDePestañasBtn} border-b-4 border-red-500` : `${cambioDePestañasBtn}`}>Escenarios industriales</p>
                    <p onClick={mostrarPestaña} id="1" className={pestaña ? `${cambioDePestañasBtn} border-b-4 border-red-500` : `${cambioDePestañasBtn}`}>Escenarios comerciales</p>
                </div>
            </div>

            {/* Contenido de las pestañas */}
            <div className="w-full flex justify-center mt-0 scale-90">
                <div className="w-[90%] md:w-[80%] flex justify-center items-center text-xl ">
                    {
                        !pestaña ?
                            /* Industriales */
                            <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white open">
                                {
                                    titulosIndustriales.map((e, index) => (
                                        <div key={index} className="relative w-[100%] h-[250px] md:h-[300px] bg-slate-300 cursor-pointer" onClick={() => showModal(index)}>
                                            {/* Imagen */}
                                            {
                                                e.img !== "" &&
                                                <Image src={e.img[0]} width={900} height={900} alt="imagen comercial" className="h-full w-full" />
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
                                        <div key={index} className="relative w-[100%] h-[250px] md:h-[300px] bg-slate-300 cursor-pointer" onClick={() => showModal(index + 10)}>
                                            {/* Imagen */}
                                            {
                                                e.img !== "" &&
                                                <Image src={e.img[0]} width={300} height={300} alt="imagen comercial" className="h-full w-full" />
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
                <div className="contModalAplicaciones z-10 cursor-pointer space-x-3">
                    {/* Botones de navegación de imágenes */}
                    <button id="0" onClick={() => cambiarImg(0)} className="btnModal w-3 h-3 z-10"></button>
                    <button id="1" onClick={() => cambiarImg(1)} className="btnModal w-4 h-4 z-10"></button>
                    <div className="modalAplicaciones relative ">
                        <p className="relative text-center top-[-40px] text-4xl text-white text-shadow mt-[-40px] font-bold">{
                            numero <= 6 ?
                                titulosIndustriales[numero].text
                                :
                                titulosComerciales[numero - 10].text
                        }
                        </p>
                        <p className="text-5xl w-[30px] absolute text-white font-bold mt-[-86px] right-4" onClick={() => showModal(0)} >x</p>
                        <Image src={`${numero <= 6 ? titulosIndustriales[numero].img[imgNum] : titulosComerciales[numero - 10].img[imgNum]}`} width={800} height={800} alt="" className="w-full" />
                    </div>
                    <button id="2" onClick={() => cambiarImg(2)} className="btnModal w-4 h-4 z-10"></button>
                    <button id="3" onClick={() => cambiarImg(3)} className="btnModal w-3 h-3"></button>
                </div>
            }
        
            <div className="bg-[#f6f1f1] p-2 mt-16 mb-28 ">
                <p className="mt-14 text-[2.8rem] font-bold text-center text-[#1d4674] roboto scale-90">¿NO SABES POR DÓNDE EMPEZAR?</p>
                <p className="text-[#3c3c3a] text-center text-[1.9rem] font-bold  italic scale-90">No te preocupes, personalizamos una solución a tu necesidad </p>
                <p className="text-[#fe7604] text-center font-bold text-[2.1rem] scale-90">¡Sólo dinos que estás buscando!</p>
                <div className="bg-[#fe7604] w-[98.5vw] h-[30vh] absolute  z-0 mt-[250px]"></div>
                <Image src="/apli.png" alt="" width={1000} height={1200} className="mx-auto relative z-10  scale-[0.85]" />

            </div>

                                    
            <div className="w-full h-full lg:h-[100%]">
                <div className="bg-[#f0c50b] w-full h-[39vh] absolute"></div>
                <div className="bg-[#fe7604] w-[23vw] h-[36vh] absolute mt-[355px] ml-[27vw]"></div>
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


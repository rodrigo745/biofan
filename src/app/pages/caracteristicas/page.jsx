import Image from "next/image"
import Link from "next/link"

export default function Caracteristicas(){


    return(
        <div className="w-full">
            <div className="w-full h-[100%] mt-1">
                <div className="w-full bg-[#1d4674] p-10 pb-3 pt-20 ">
                    <div className="flex w-[60%] mx-auto h-[180px] ">
                        <h3 className="text-4xl lg:text-5xl w-[35%] ml-[100px] text-center relative left-[-80px] pt-10 lg:mt-0 sombra-texto3 text-white roboto font-semibold ">Beneficios</h3>
                        <p className="text-[1.15rem] font-bold text-white mr-8 text-justify pt-2 w-[100%]">Uno de los principales beneficios de los ventiladores BIOFAN es que consumen menos energía que los ventiladores tradicionales de alta velocidad debido a su menor velocidad de rotación, lo que se traduce en menores costos energéticos y una menor huella de carbono. </p>
                    </div>
                </div>


                <div className="flex flex-col lg:flex lg:flex-row  justify-center space-x-20 scale-95 relative mt-20 px-[180px]" >
                    <Link href="/pages/beneficios/1" className="bg-[#e6e6d4] px-10 py-2 rounded-[30px] text-center w-[16%]">
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-xl font-bold text-[#1d4674] mb-4">Sensación térmica</p>
                        <button className="bg-red-500 text-white px-5 py-1 absolute ml-[-55px] rounded-md">Leer más</button>
                    </Link>
                    <Link href="/pages/beneficios/2" className="bg-[#e6e6d4]  py-2 rounded-[30px] text-center w-[16%]">
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-xl font-bold text-[#1d4674] mb-4">Estratificación y estrés térmico</p>
                        <button className="bg-red-500 text-white px-5 py-1 absolute ml-[-55px] rounded-md">Leer más</button>
                    </Link>    
                    <Link href="/pages/beneficios/3" className="bg-[#e6e6d4]  py-2 rounded-[30px] text-center w-[16%]">
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-xl font-bold text-[#1d4674] mb-4">Impacto positivo al medio ambiente</p>
                        <button className="bg-red-500 text-white px-5 py-1 absolute ml-[-55px] rounded-md">Leer más</button>
                    </Link>    
                    <Link href="/pages/beneficios/4" className="bg-[#e6e6d4] px-10 py-2 rounded-[30px] text-center w-[16%]">    
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-xl font-bold text-[#1d4674] mb-4" >Eficiencia energética</p>
                        <button className="bg-red-500 text-white px-5 py-1 absolute ml-[-55px] rounded-md">Leer más</button>
                    </Link>    
                </div>
                <div className="overflow-hidden relative w-full  mt-20 ">
                    <div className="flex animate-slideCar space-x-[170px] ">

                        <Image src="/caracteristicas/reel/1.png" className="object-cover" width={140} height={200} alt="" />
                        <Image src="/caracteristicas/reel/2.png" className="object-cover" width={140} height={200} alt="" />
                        <Image src="/caracteristicas/reel/3.png" className="" width={200} height={140} alt="" />
                        <Image src="/caracteristicas/reel/4.png" className="object-cover" width={140} height={200} alt="" />
                        <Image src="/caracteristicas/reel/5.png" className="object-cover" width={140} height={200} alt="" />
                        <Image src="/caracteristicas/reel/6.png" className="object-cover" width={140} height={200} alt="" />

                        <Image src="/caracteristicas/reel/1.png" className="object-cover scale-95" width={140} height={300} alt="" />
                        <Image src="/caracteristicas/reel/2.png" className="object-cover scale-95" width={140} height={300} alt="" />
                        <Image src="/caracteristicas/reel/3.png" className="" width={200} height={160} alt="" />
                        <Image src="/caracteristicas/reel/4.png" className="object-cover scale-95" width={140} height={300} alt="" />
                        <Image src="/caracteristicas/reel/5.png" className="object-cover scale-95" width={140} height={300} alt="" />
                        <Image src="/caracteristicas/reel/6.png" className="object-cover scale-95" width={140} height={300} alt="" />
                        <Image src="/caracteristicas/reel/1.png" className="object-cover scale-95" width={160} height={300} alt="" />
                        <Image src="/caracteristicas/reel/2.png" className="object-cover scale-95" width={160} height={300} alt="" />
                        <Image src="/caracteristicas/reel/3.png" className="" width={200} height={160} alt="" />
                        <Image src="/caracteristicas/reel/4.png" className="object-cover scale-95" width={140} height={300} alt="" />
                    </div>
                </div>
                <div className="mt-[100px] flex w-full scale-90">
                    <div className="flex flex-col w-[30%]">
                        <div style={{lineHeight: 1.3}} className="w-[100%] ml-8 pt-24 sombra-texto4 m-auto text-4xl text-center roboto font-bold text-[#1d4674]">
                        DIAGRAMA DE EXPERIENCIA CON VENTILADOR BIOFAN
                        </div>
                        <div className="text-2xl px-20 py-20 pb-32 bg-[#f0c50b] text-white font-bold text-center w-[130%]  m-auto mt-[60px]">Diseñamos propuestas basadas en las proporciones y preferencias de nuestros clientes</div>
                    </div>
                    <div className="ml-20 bg-[#f0c50b] p-14 px-24">
                        <video width="1000" height="860" autoPlay loop>
                            <source src="/caracteristicas/bio.mp4" type="video/mp4"/>
                            Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                </div>
                <div className="flex w-full scale-90">
                    <div className="flex flex-col w-[40%] bg-[#f0c50b]  p-0 pl-10 relative mt-[-200px]">
                        <video width="900" height="400" autoPlay loop>
                            <source src="/caracteristicas/bio2.mp4" type="video/mp4"/>
                            Tu navegador no soporta el formato de video.
                        </video>
                        <div className="mt-20 text-2xl text-center text-[#1d4674] font-bold bg-white relative w-[113%] helvetica ml-[-110px] p-28 pl-44">
                        BIOFAN busca hacer mas que simplememte venderle ventiladores, queremos brindarle soluciones de ventilación.
                        </div>
                    </div>
                    <div className="relative ml-[0px] bg-[#f0c50b] p-10 px-16 mt-[-90px]">
                        <div className="bg-[#f0c50b] absolute top-8 font-bold text-center text-2xl text-white p-10 px-20"
                        >
                            <p>Queremos asegurarnos de que reciba los equipos que mejor se adapten a sus necesidades</p>
                        </div>
                        <video width="800" height="420" autoPlay loop>
                            <source src="/caracteristicas/bio3.mp4" type="video/mp4"/>
                        Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                </div>
                
                <div className="text-red-500 z-30 bg-white relative top-[-50px]">
                    <p className="w-[66%] font-bold text-center text-xl mx-auto pt-20">Estos ventiladores son diseñados específicamente para manejar las demandas de las instalaciones industriales y
proporcionar un flujo de aire adecuado para el control de la temperatura, la eliminación de contaminantes y la
ventilación general.</p>
                </div>
                <div className="  pb-20 mt-[0px]">
                    <div className="bg-[#f0c50b] flex py-14 justify-center space-x-10">
                        <h2 className="text-2xl lg:text-5xl text-[#1d4674] sombra-texto3 roboto font-bold  text-center mt-12">Características</h2>
                        <p className="text-[#1d4674] w-[40%] text-xl font-bold roboto">La principal característica de los ventiladores BIOFAN es el control de la temperatura en las instalaciones industriales. <br/> Los ventiladores de techo industrial y los ventiladores de piso son comunmente utilizados para proporcionar una ventilación adecuada y para mantener una temperatura constante en el ambiente de trabajo.</p>

                    </div>
                    <div className="overflow-hidden relative w-full  mt-14 ">
                        <div className="flex animate-slideCar space-x-28 ">
                            <Image src="/caracteristicas/1.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/2.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/3.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/4.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/5.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/6.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/1.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/2.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/3.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/4.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/5.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/6.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/1.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/2.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/3.png" className="object-cover" width={160} height={300} alt="" />
                            <Image src="/caracteristicas/4.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/5.png" className="object-cover " width={160} height={300} alt="" />
                            <Image src="/caracteristicas/6.png" className="object-cover " width={160} height={300} alt="" />
                        </div>
                    </div>
                </div>
                <p className="text-red-500 font-bold text-xl text-center w-[60%] mx-auto mb-20">Los ventiladores industriales BIOFAN son una herramienta esencial para garantizar un ambiente de trabajo saludable y seguro en fábricas y naves.</p>
            </div>
        </div>
    )
}
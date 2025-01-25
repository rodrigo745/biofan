import Image from "next/image"
import Link from "next/link"

export default function Caracteristicas(){


    return(
        <div className="w-full">
            <div className="w-full h-[100%] mt-1">
                <div className="w-full bg-[#1d4674] p-10 pb-3 pt-20 ">
                    <div className="flex w-[89%] m-auto space-x-12 h-[500px] ml-20">
                        <h3 className="text-4xl lg:text-7xl w-[80%] text-center relative left-[-80px] pt-10 lg:mt-0 sombra-texto3 text-white roboto font-semibold ">BENEFICIOS</h3>
                        <p className="text-2xl font-medium text-white text-justify pt-2 w-[100%]">Uno de los principales beneficios de los ventiladores BIOFAN es que consumen menos energía que los ventiladores tradicionales de alta velocidad debido a su menor velocidad de rotación, lo que se traduce en menores costos energéticos y una menor huella de carbono. </p>
                    </div>
                </div>


                <div className="flex flex-col lg:flex lg:flex-row justify-evenly w-full lg:space-x-2 items-center lg:space-y-0 px-20 absolute mt-[-290px]" >
                    <Link href="/pages/beneficios/1" className="bg-white p-10 rounded-full text-center w-[18%]">
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-2xl font-bold text-[#1d4674] mb-4">Sensación térmica</p>
                        <button className="bg-red-500 text-white px-5 py-1 rounded-md">Leer más</button>
                    </Link>
                    <Link href="/pages/beneficios/2" className="bg-white p-10 rounded-full text-center w-[18%]">
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-2xl font-bold text-[#1d4674] mb-4">Estratificación y estrés térmico</p>
                        <button className="bg-red-500 text-white px-5 py-1 rounded-md">Leer más</button>
                    </Link>    
                    <Link href="/pages/beneficios/3" className="bg-white p-10 rounded-full text-center w-[19%]">
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-2xl font-bold  text-[#1d4674] mb-4">Impacto positivo al medio ambiente</p>
                        <button className="bg-red-500 text-white px-5 py-1 rounded-md">Leer más</button>
                    </Link>    
                    <Link href="/pages/beneficios/4" className="bg-white p-10 rounded-full text-center w-[18%]">    
                        <p className="px-2 hover:scale-105 transition cursor-pointer text-2xl font-bold text-[#1d4674] mb-4" >Eficiencia energética</p>
                        <button className="bg-red-500 text-white px-5 py-1 rounded-md">Leer más</button>
                    </Link>    
                </div>
                <div className="overflow-hidden relative w-full  mt-14">
                    <div className="flex animate-slideCar space-x-28">

                        <Image src="/caracteristicas/reel/1.png" className="object-cover" width={200} height={200} alt="" />
                        <Image src="/caracteristicas/reel/2.png" className="object-cover" width={200} height={200} alt="" />
                        <Image src="/caracteristicas/reel/3.png" className="" width={200} height={200} alt="" />
                        <Image src="/caracteristicas/reel/4.png" className="object-cover" width={200} height={200} alt="" />
                        <Image src="/caracteristicas/reel/5.png" className="object-cover" width={200} height={200} alt="" />
                        <Image src="/caracteristicas/reel/6.png" className="object-cover" width={200} height={200} alt="" />

                        <Image src="/caracteristicas/reel/1.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/2.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/3.png" className="" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/4.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/5.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/6.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/1.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/2.png" className="object-cover" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/3.png" className="" width={200} height={300} alt="" />
                        <Image src="/caracteristicas/reel/4.png" className="object-cover" width={200} height={300} alt="" />
                    </div>
                </div>
                <div className="mt-[100px] flex w-full">
                    <div className="flex flex-col w-[30%]">
                        <div style={{lineHeight: 1.3}} className="w-[100%] ml-8 pt-24 sombra-texto4 m-auto text-5xl text-center roboto font-bold text-[#1d4674]">
                        DIAGRAMA DE EXPERIENCIA CON VENTILADOR BIOFAN
                        </div>
                        <div className="text-3xl px-20 py-24 bg-[#f0c50b] text-white font-medium text-center w-[120%]  m-auto mt-[70px]">Diseñamos propuestas basadas en las proporciones y preferencias de nuestros clientes</div>
                    </div>
                    <div className="ml-20 bg-[#f0c50b] p-10 px-24">
                        <video width="1200" height="860" autoPlay loop>
                            <source src="/caracteristicas/bio.mp4" type="video/mp4"/>
                            Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-[50%] bg-[#f0c50b] p-10 px-24 relative mt-[-20px]">
                        <video width="900" height="420" autoPlay loop>
                            <source src="/caracteristicas/bio2.mp4" type="video/mp4"/>
                            Tu navegador no soporta el formato de video.
                        </video>
                        <div className="mt-20 text-3xl text-[#1d4674] text-justify font-bold bg-white relative w-[113%] helvetica ml-[-110px] p-28 pl-44">
                        BIOFAN busca hacer mas que simplememte venderle ventiladores, queremos brindarle soluciones de ventilación.
                        </div>
                    </div>
                    <div className="relative ml-[-90px] bg-[#f0c50b] p-10 px-16 mt-32">
                        <video width="800" height="420" autoPlay loop>
                            <source src="/caracteristicas/bio3.mp4" type="video/mp4"/>
                        Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-white relative top-[-40px]"></div>
                <div className="  pb-20 mt-[0px]">
                    <h2 className="text-2xl lg:text-6xl text-[#1d4674] sombra-texto3 roboto font-bold  text-center">CARACTERISTICAS</h2>
                    
                    <div className="overflow-hidden relative w-full  mt-14 ">
                        <div className="flex animate-slideCar space-x-28 ">
                            <Image src="/caracteristicas/1.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/2.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/3.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/4.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/5.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/6.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/1.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/2.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/3.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/4.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/5.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/6.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/1.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/2.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/3.png" className="object-cover" width={220} height={300} alt="" />
                            <Image src="/caracteristicas/4.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/5.png" className="object-cover " width={220} height={300} alt="" />
                            <Image src="/caracteristicas/6.png" className="object-cover " width={220} height={300} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
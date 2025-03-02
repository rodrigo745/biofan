import Image from "next/image"
import Link from "next/link"

export default function Productos(){

    const informacion = [
        {titulo: "SERIE HDS", descripcion: "VENTILADOR INDUSTRIAL", img: "/productos/1.png"},
        {titulo: "SERIE HDS", descripcion: "VENTILADOR COMERCIAL",  img: "/productos/2.png"},
        {titulo: "SERIE HDY", descripcion: "VENTILADOR MÓVIL",  img: "/productos/3.jpg"},
        {titulo: "SERIE HDY", descripcion: "VENTILADOR MÓVIL 45°",  img: "/productos/4.png"}
    ]
    const informacion2 = [
        {titulo: "", descripcion: "VENTILADOR DE PARED", img: "/productos/5.png"},
        {titulo: "", descripcion: "INDUSTRIAL VERTICAL",  img: "/productos/6.jpg"},
        {titulo: "", descripcion: "COMERCIAL VERTICAL",  img: "/productos/7.jpg"},
        {titulo: "RECUBRIMIENTO SOLAR", descripcion: "",  img: "/productos/9.png"},
    ]
        
    const recu = [{titulo: "RECUBRIMIENTO SOLAR", descripcion: "",  img: "/productos/8.png"}]

    return(
        <div className="w-full ">
            <h1 className="pt-7 text-center lg:text-5xl font-bold text-[#1d4674] ">Ventiladores BIOFAN</h1>
           
            <div className="w-full mt-4  bg-[#e6e6d4]    lg:space-x-0 py-3 px-40" >
                <div className="flex justify-center space-x-[20vw] relative top-7 z-30 h-[2px]">
                    <p className="bg-[#1d4674] p-2 px-10 text-4xl font-bold w-fit text-white h-fit rounded-full">SERIE HDS</p>
                    <p className="bg-[#eb5347] p-2 px-10 text-4xl font-bold w-fit text-white h-fit rounded-full">SERIE HDY</p>
                </div>
                <div className="w-full flex flex-col lg:flex lg:flex-row h-[260vh] lg:h-[78vh] scale-[.85]">
    
                {
                    informacion.map((e, index)=> (
                        <Link  href={`/pages/productos/${index+1}`} key={index} className={`w-[100%] lg:w-[25%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-95 transition cursor-pointer`}>
                            <Image src={e.img} width={400} height={400} alt="producto" className={`absolute w-full h-full 
                                ${index <= 1 ? "border-8 border-[#1d4674]" : " border-8 border-[#eb5347]"}`} />
                            <div className={`py-1 px-3 w-[60%] text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px]
                                ${index >= 2 ? "bg-[#eb5347]" : "bg-[#1d4674] "}
                            `}>
                                <p className="text-xl font-bold px-10">{e.descripcion}</p>
                            </div>
                        </Link>
                    ))
                }
                </div>

            </div>
            
            <p className="text-center w-[46%] mt-8 mx-auto text-xl font-bold text-[#1d4674]">Los ventiladores industriales son una solución esencial para mantener espacios
            grandes y comerciales frescos y confortables. </p>

            <div className="w-full mt-4  bg-[#e6e6d4]    lg:space-x-0 py-3 px-40" id="producto-2">
                <div className="flex ml-40 space-x-[12vw] relative top-7 z-30 h-[2px]">
                    <p className="bg-[#f0a84d] p-2 px-10 text-4xl font-bold w-fit text-white h-fit rounded-full">SERIE HDB</p>
                    <p className="bg-[#e6e6d4] p-2 text-[#1d4674] px-10 text-4xl font-bold w-fit  h-fit rounded-full">SERIE HDS/L</p>
                </div>
                <div className="w-full flex flex-col lg:flex lg:flex-row h-[260vh] lg:h-[78vh] scale-[.85]">

                {
                    informacion2.map((e, index)=> (
                        <Link href={index+5 == 8 ? "/pages/inicio/8" : `productos/${index+5}`} key={index} className={`w-[100%] lg:w-[25%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-95 transition cursor-pointer`}>
                            <Image src={e.img} width={400} height={400} alt="producto" className={`absolute w-full h-full
                                ${ index == 0 && "border-8 border-[#f0a84d]" }
                                ${ index == 1 && "border-8 border-[#e6e6d4]" }
                                ${ index == 2 && "border-8 border-[#e6e6d4]" }
                                ${ index == 3 && "border-8 border-[#fdf03c]" }`} />
                            <div className={`py-1 px-2 w-[60%] text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px]
                                ${index == 0 && "bg-[#f0a84d]"}
                                ${index == 1 && "bg-[#646363] w-[60%] px-1 "}
                                ${index == 2 && "bg-[#646363] w-[60%] px-2 "}
                                ${index > 2 && "bg-[#1d4674] px-1 py-3 text-xl"}
                            `}>
                                <h4 className={`text-xl lg:text-xl font-bold ${e.titulo === "EVAPORATIVOS" && "lg:text-[36px]"} ${e.titulo === "RECUBRIMIENTO SOLAR" && "lg:text-2xl"}
                                `}>{e.titulo}</h4>
                                <p className="text-xl font-bold px-7">{e.descripcion}</p>
                            </div>
                        </Link>
                    ))
                }
                </div>
            </div>
            <p className="text-center w-[65%] mt-8 mx-auto text-xl font-bold text-[#1d4674]">Estamos comprometidos a proporcionar soluciones de ventilación que superen las expectativas y que se adapten
            perfectamente a las necesidades específicas de cada cliente, ofreciendo tranquilidad y seguridad en cada uso.</p>
            <div className="bg-[#e6e6d4] mt-8 w-full h-[80vh] mb-10">
                <div className="scale-[.77] w-full absolute mt-[-60px] h-[260vh] lg:h-[72vh] px-20 flex justify-between mb-20 p-10">

                
                <Link href={"/pages/evaporativos"} className={`w-[100%] lg:w-[50%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-[0.95] transition cursor-pointer`}>
                            <Image src="/productos/8.png" width={800} height={800} alt="producto" className="absolute w-full h-full border-8 border-[#1d4674]" />
                            <div className={`py-3  w-fit px-10 text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px]
                                bg-[#1d4674]
                            `}>
                                <h4 className={`text-2xl lg:text-4xl font-bold ${"lg:text-[36px]"}}
                                `}>EQUIPOS EVAPORATIVOS</h4>
                                
                            </div>
                        </Link>
                        <Link href="/pages/inicio/9" className={`w-[100%] lg:w-[50%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-[0.95]  transition cursor-pointer`}>
                            <Image src="/productos/11.png" width={800} height={800} alt="producto" className="absolute w-full h-full border-8 border-white" />
                            <div className={`py-3 px-12 w-fit text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px] 
                                bg-[#1d4674] mx-auto
                            `}>
                                <h4 className={`text-2xl text-center lg:text-4xl font-bold ${"lg:text-[42px]"}}
                                `}>EQUIPOS DE EXTRACCIÓN</h4>
                            </div>
                        </Link>
                        </div>
                <h4 className="text-center pt-[600px] w-[55%] text-[#1d4674] font-semibold  pb-32 mx-auto text-2xl helvetica">Diseñados para ofrecer un rendimiento óptimo en entornos exigentes,
                nuestros ventiladores son sinónimo de calidad y confianza.</h4>
            </div>


            <div className="bg-white pb-52 mt-20">

                <div className=" flex justify-evenly">
                    <div className=" w-[485px] h-[320px] brxe-rgcaln mt-28" id="brxe-rgcaln">
                        <div className="contenido transition ">
                            <Image src="/productos/100.png" className="rodarImg -rotate-12 hover:-rotate-0 transition duration-[0.6s] scale-125" width={390} height={400} alt="" />
                        </div>
                    </div>
                    <div className=" w-[430px] h-[455px] brxe-rgcaln" id="brxe-rgcaln2">
                        <div className="contenido imgClass">
                            <Image src="/productos/2.jpg" className="rodarImg -rotate-12 hover:-rotate-0 transition duration-[0.6s]" width={460} height={500} alt="" />
                        </div>
                    </div>
                    <div className=" w-[370px] h-[400px] brxe-rgcaln mt-14" id="brxe-rgcaln3">
                        <div className="contenido imgClass">
                            <Image src="/productos/3.1.jpg" className="rodarImg w-full -rotate-12 hover:-rotate-0 transition duration-[0.6s]" width={400} height={300} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
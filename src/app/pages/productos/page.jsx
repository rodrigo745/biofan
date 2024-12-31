import Image from "next/image"
import Link from "next/link"

export default function Productos(){

    const informacion = [
        {titulo: "SERIE HDS", descripcion: "VENTILADOR INDUSTRIAL", img: "/productos/1.png"},
        {titulo: "SERIE HDS", descripcion: "VENTILADOR COMERCIAL",  img: "/productos/2.png"},
        {titulo: "SERIE HDY", descripcion: "VENTILADOR MOVIL",  img: "/productos/3.jpg"},
        {titulo: "SERIE HDY", descripcion: "VENTILADOR MOVIL 45°",  img: "/productos/4.png"}
    ]
    const informacion2 = [
        {titulo: "SERIE HDB", descripcion: "VENTILADOR DE PARED", img: "/productos/5.png"},
        {titulo: "SERIE HDS/L", descripcion: "VENTILADOR INDUSTRIAL VERTICAL",  img: "/productos/6.jpg"},
        {titulo: "SERIE HDS/L", descripcion: "VENTILADOR COMERCIAL VERTICAL",  img: "/productos/7.jpg"},
        {titulo: "EVAPORATIVOS", descripcion: "INDUSTRIAL-COMERCIAL",  img: "/productos/8.png"},
    ]
        
    const recu = [{titulo: "RECUBRIMIENTO SOLAR", descripcion: "",  img: "/productos/8.png"}]

    return(
        <div className="w-full bg-[#e6e6d4]">
            <h1 className="pt-20 pb-10 text-center lg:text-7xl font-bold text-[#1d4674] roboto">VENTILADORES {<br></br>} BIOFAN</h1>
            <p className="text-center  mb-10 w-[57%] mx-auto lg:text-3xl helvetica">Estamos comprometidos a proporcionar soluciones de ventilación que superen las expectativas y que se adapten perfectamente a las necesidades específicas de cada cliente, ofreciendo tranquilidad y seguridad en cada uso.</p>
            <div className="w-full flex  mb-16">
                <button className="text-center text-lg mx-auto w-[120px] font-semibold bg-[#fe7604] text-white px-3 py-1">Leer más</button>
            </div>
            <div className="w-full h-[260vh] lg:h-[77vh] flex flex-col lg:flex lg:flex-row  lg:space-x-12 mt-6 px-10" >
                {
                    informacion.map((e, index)=> (
                        <Link href={`/pages/productos/${index+1}`} key={index} className={`w-[100%] lg:w-[25%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-105 transition cursor-pointer`}>
                            <Image src={e.img} width={400} height={400} alt="producto" className="absolute w-full h-full" />
                            <div className={`py-3 px-3 w-[80%] text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px]
                                ${index >= 2 ? "bg-[#eb5347]" : "bg-[#1d4674]"}
                            `}>
                                <h4 className="text-2xl lg:text-4xl font-bold">{e.titulo}</h4>
                                <p className="text-2xl font-bold">{e.descripcion}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="w-full h-[260vh] lg:h-[75vh] flex flex-col lg:flex lg:flex-row  lg:space-x-12 mt-10 px-10 mb-12" id="producto-2">
                {
                    informacion2.map((e, index)=> (
                        <Link href={index+5 == 8 ? "/pages/evaporativos" : `productos/${index+5}`} key={index} className={`w-[100%] lg:w-[25%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-105 transition cursor-pointer`}>
                            <Image src={e.img} width={400} height={400} alt="producto" className="absolute w-full h-full" />
                            <div className={`py-2 px-2 w-[80%] text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px]
                                ${index == 0 && "bg-[#f0a84d]"}
                                ${index == 1 && "bg-[#646363] w-[80%] px-1 "}
                                ${index == 2 && "bg-[#646363] w-[80%] px-2 "}
                                ${index > 2 && "bg-[#1d4674] px-1 py-3"}
                            `}>
                                <h4 className={`text-2xl lg:text-4xl font-bold ${e.titulo === "EVAPORATIVOS" && "lg:text-[36px]"} ${e.titulo === "RECUBRIMIENTO SOLAR" && "lg:text-[36px]"}
                                `}>{e.titulo}</h4>
                                <p className="text-2xl font-bold">{e.descripcion}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="bg-[#e6e6d4] w-full h-[260vh] lg:h-[75vh] px-10 flex justify-between mb-24">
                <Link href={"/pages/evaporativos"} className={`w-[100%] lg:w-[23%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-105 transition cursor-pointer`}>
                            <Image src="/productos/8.png" width={400} height={400} alt="producto" className="absolute w-full h-full" />
                            <div className={`py-3 px-8 w-[90%] text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px]
                                bg-[#1d4674]
                            `}>
                                <h4 className={`text-2xl lg:text-4xl font-bold ${"lg:text-[36px]"}}
                                `}>EVAPORATIVOS</h4>
                                <p className="text-2xl font-bold">INDUSTRIAL- COMERCIAL</p>
                            </div>
                        </Link>
                        <Link href={""} className={`w-[100%] lg:w-[43%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-105 transition cursor-pointer`}>
                            <Image src="/productos/9.jpg" width={400} height={400} alt="producto" className="absolute w-full h-full" />
                            <div className={`py-3 px-8 w-[50%] text-center text-white         
                                rounded-[35px] z-30 mb-10 relative bottom-[-60px] ml-40
                                bg-[#1d4674]
                            `}>
                                <h4 className={`text-2xl lg:text-4xl font-bold ${"lg:text-[42px]"}}
                                `}>RECUBRIMIENTO SOLAR</h4>
                            </div>
                        </Link>
            </div>


            <div className="bg-white pb-52 ">
                <h4 className="text-center w-[55%] text-[#fe7604] font-semibold pt-20 pb-20 mx-auto text-3xl helvetica">Diseñados para ofrecer un rendimiento óptimo en entornos exigentes, nuestros ventiladores son sinónimo de calidad y confianza.</h4>

                <div className=" flex justify-evenly">
                    <div className=" w-[490px] h-[370px] brxe-rgcaln mt-28" id="brxe-rgcaln">
                        <div className="contenido transition ">
                            <Image src="/productos/1.jpg" className="rodarImg -rotate-12 hover:-rotate-0 transition duration-[0.6s] scale-125" width={390} height={400} alt="" />
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
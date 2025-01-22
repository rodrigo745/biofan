import Image from "next/image"
import Link from "next/link"

export default function MainCuatro(){

    const informacion = [
            {
                titulo: "Grandes ventiladores de techo para almacenes y fabricación.",
                descripcion: "Ventiladores de techo para almacenes: una solución rentable para mejorar la circulación del aire. Los ventiladores de techo para almacenes son una forma sencilla y eficaz de mejorar la circulación del aire y...",
                img: "/inicio/noticias/1.jpg",
                direccion: "/pages/noticias"
            },
            {
                titulo: "¿Qué entornos son adecuados para grandes ventiladores industriales?",
                descripcion: "¿En qué zonas se pueden utilizar grandes ventiladores? Los grandes ventiladores industriales tienen excelentes efectos de enfriamiento y extracción por lo que pueden usarse en muchos...",
                img: "/inicio/noticias/2.jpg",
                direccion: "/pages/noticias"
    
            },
            {
                titulo: "Una descripción general de los ventiladores de techo industriales.",
                descripcion: "Cuando desee un ventilador de techo grande para su fabrica, almacén u otro espacio, un ventilador de techo industrial es la opción lógica...",
                img: "/inicio/noticias/3.jpg",
                direccion: "/pages/noticias"
    
            }
        ]

    return(
        
        <div className="mt-48 mb-20 z-30"> {/* NOTICIAS */}
            <h2 className="text-[#1d4674] text-center text-2xl md:text-[3.3rem] font-bold mb-14 roboto z-30">BLOG Y NOTICIAS</h2>
            <div className="flex flex-col lg:flex-row justify-center space-x-14 ">
                {
                    informacion.map((e, index)=> (
                    <Link href={`/pages/noticias/${index}`} key={index} className="flex flex-col justify-center items-center lg:w-[20%] hover:border transition hover:scale-105 hover:cursor-pointer  bg-[#e6e6d4]">
                        <Image className="" src={e.img} width={420} height={250} alt="" />
                        <p className={`text-[#1d4674] text-[1.16rem] font-bold  mt-6 mb-1 h-[90px] text-center p-2 px-10`}>{e.titulo}</p>
                        <p className="h-[160px] w-[90%] text-center">{e.descripcion}</p>
                        <button className=" text-[#fe7604] font-bold relative w-full  text-start pl-8">Leer más</button>
                        <p className="w-full text-start pl-8 mt-4 text-sm text-[#fe7604] mb-4">29 de Septiembre de 2023</p>
                    </Link>

                    ) )
                }
            </div>
        </div>

    )
}
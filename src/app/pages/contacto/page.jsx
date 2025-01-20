import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import Image from "next/image";

export default function Contacto(){
    return(
        <div>
            <Image src="/contacto/1.jpg" width={2000} height={2000} alt="" className="absolute left-0 top-0 w-full h-full z-0" />
            <div className="flex flex-col items-center h-full  w-full mt-10 z-20">
                <div className="bg-neutral-900  w-[340px] lg:w-[600px] h-[540px] z-20 lg:h-[510px] rounded-xl  text-white px-4">
                    <h2 className="text-4xl text-center pt-5">Contacto</h2>
                    <input type="text" placeholder="Nombre *" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-[#1d4674] text-white border"/>
                    <input type="text" placeholder="Email *" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-[#1d4674] text-white border"/>
                    <input type="text" placeholder="Teléfono" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-[#1d4674] text-white border"/>
                    <textarea placeholder="Mensaje *" className="p-2 w-full rounded-xl mt-5 px-4 bg-[#1d4674] text-white border resize-none h-[100px] overflow-auto"/>
                    <div className="mt-5">
                        <input type="checkbox" className="scale-110"/>
                        <label className="ml-4">
                            Acepto el <span className="text-blue-500 cursor-pointer">Aviso legal </span>
                            y la <span className="text-blue-500 cursor-pointer">Política de privacidad</span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="p-2 px-6 rounded-lg mt-6 bg-orange-700">Enviar</button>
                    </div>
                </div>
            <div className="w-full z-20 flex flex-col lg:flex lg:flex-row justify-center mt-10 items-center lg:space-x-20 mb-20 lg:mb-5">
                <div className="text-center hover:scale-125 transition p-2 rounded-lg flex flex-col items-center w-[300px]">
                    <IoCall className="text-orange-500 text-6xl "/>
                    <h3 className="text-2xl font-bold mb-2 text-white">Llámanos</h3>
                    <p className="text-white">633175711</p>
                </div>
                <div className="text-center hover:scale-125 transition p-2 rounded-lg flex flex-col items-center w-[300px]">
                    <TbMailFilled className="text-orange-500 text-6xl"/>
                    <h3 className="text-2xl font-bold mb-2 text-white">Escríbenos</h3>
                    <p className="text-white">info@bio-fan.com</p>
                </div>
                <div className="text-center  hover:scale-125 transition p-2 rounded-lg flex flex-col items-center w-[300px]">
                    <FaMapMarkedAlt className="text-orange-500 text-6xl"/>
                    <h3 className="text-2xl font-bold mb-2 text-white">Localización</h3>
                    <p className="text-white">C/ Univercitat de Girona - 17005 - Girona - GIRONA</p>
                </div>
            </div>
            </div>
            <div className="w-full h-[46vh] z-20">
            <div className="w-[99vw] h-[40vh] bg-[#0000004f] absolute top-0 left-0 z-10"></div>
                <Image src="/mapa.png" className="w-full mt-10 h-[400px]" width={2300} height={1200} alt=""/>
            </div>
        </div>
    )
}
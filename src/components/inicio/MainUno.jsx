import Image from "next/image"

export default function MainUno(){
    return(
        <div className="w-full pt-[140px] lg:h-[100%] space-x-4 flex flex-col lg:flex lg:flex-row justify-between items-center px-10 xl:px-28 2xl:pl-[300px] 2xl:pr-48 lg:mt-[-50px]" >
           
            <div className="flex  w-[100%] lg:w-[80%] pl-10 mt-16"> {/* Izquierda */}
                <div className="absolute w-[61vw] h-[190px] bg-[#f0c50b] left-0 mt-[-38px] "></div>
                <div className="absolute w-[36vw] h-[240px] bg-white right-0 mt-[-38px] "></div>
                <div className="z-10 relative mt-[-65px] scale-90 ml-10">
                    <Image loading="lazy" src="/inicio/inicio_main_1.jpg" width={700} height={650} alt="imagen acerca de bio fan" className=" w-[21vw] pr-10 z-10"/>
                </div>
                <div className="flex flex-col scale-[85%] relative ml-[-70px]">
                    <h3 style={{lineHeight: 1.2}} className="text-2xl w-[100%] lg:text-[3.5rem] helvetica text-[#1d4674] font-bold z-10 mt-[-40px]">ACERCA <br/> DE BIOFAN</h3>
                    <p style={{lineHeight: 1.7}} className="text-[#1d4674] w-[515px] text-md lg:text-[1.3rem] text-justify mt-16 open pr-12 ">En BioFan, nuestra misión es entregar productos y servicios de la más alta calidad sin compromisos. Nuestros ventiladores BioFan son diseñados y fabricados con los más altos estándares de calidad para garantizar la máxima eficiencia y confiabilidad, siempre con un enfoque en la seguridad de nuestros clientes.
                    </p>
                    <button className="p-1 pb-2 px-8 font-semibold text-lg mt-7 rounded-lg bg-[#fe7604] text-white w-fit">Leer más</button>
                </div>
            </div>
            <div className="w-[100%] lg:w-[20%] relative"> {/* Derecha */}
                <Image loading="lazy" src="/inicio/uno_derecha.png" width={720} height={650} alt="imagen acerca de bio fan" className=" w-[100vw] scale-[1.2] ml-[-225px] absolute mt-[-40px] z-10" />
                <div className="absolute w-[24vw] h-[190px] bg-[#fe7604] right-[-192px] mt-[5px]"></div>
            </div>
        </div>
    )
}
import Image from "next/image"

export default function MainUno(){
    return(
        <div className="w-full  lg:h-[100%] space-x-4 flex flex-col lg:flex lg:flex-row justify-between items-center px-10 xl:px-28 2xl:pl-32 2xl:pr-48 lg:mt-[-50px]" >
           
            <div className="flex  w-[100%] lg:w-[80%] pl-10 mt-16"> {/* Izquierda */}
                <div className="absolute w-[64vw] h-[260px] bg-[#f0c50b] left-0 mt-[-35px] "></div>
                <div className="absolute w-[36vw] h-[260px] bg-white right-0 mt-[-35px] "></div>
                <div className="z-10 relative mt-[-35px]">
                    <Image loading="lazy" src="/inicio/inicio_main_1.jpg" width={700} height={650} alt="imagen acerca de bio fan" className=" w-[27vw] pr-10 z-10"/>
                </div>
                <div className="flex flex-col">
                    <h3 style={{lineHeight: 1.2}} className="text-3xl w-[100%] lg:text-[4.2rem] roboto text-[#1d4674] font-bold z-10 mt-5">ACERCA <br/> DE BIOFAN</h3>
                    <p style={{lineHeight: 1.5}} className="text-[#1d4674] w-[600px] text-md lg:text-2xl text-justify mt-20 open pr-20 ">En BioFan, nuestra misión es entregar productos y servicios de la más alta calidad sin compromisos. Nuestros ventiladores BioFan son diseñados y fabricados con los más altos estándares de calidad para garantizar la máxima eficiencia y confiabilidad, siempre con un enfoque en la seguridad de nuestros clientes.
                    </p>
                    <button className="p-1 pb-2 px-8 font-semibold text-lg mt-7 rounded-lg bg-[#fe7604] text-white w-fit">Leer más</button>
                </div>
            </div>
            <div className="w-[100%] lg:w-[20%] relative"> {/* Derecha */}
                <Image loading="lazy" src="/inicio/uno_derecha.png" width={700} height={650} alt="imagen acerca de bio fan" className=" w-[100vw] scale-150 ml-[-60px] absolute mt-[-30px] z-10" />
                <div className="absolute w-[24vw] h-[260px] bg-[#fe7604] right-[-192px] mt-[-35px]"></div>
            </div>
        </div>
    )
}
import Image from "next/image"

export default function MainTres(){
    return(
        <div className="w-full mb-0 lg:mb-0 lg:h-[100%] flex flex-col-reverse lg:flex lg:flex-row  lg:items-center px-10 xl:pl-0 mt-10 lg:mt-10 relative">
            <div className="absolute w-[60vw] h-[90vh] bg-[#e6e6d4] top-[-80px]"></div>
            <div className="w-[100%]  z-10 lg:w-[90%] mb-10 lg:mb-0 lg:ml-0 ">
                <p className="bg-[#f0c50b] text-[#1d4674] text-center px-40 mr-0 text-5xl font-bold py-5 roboto">Ventiladores <br/>BIOFAN</p>
                <p className="text-2xl helvetica ml-8 text-center w-[90%] mt-9 px-20" style={{lineHeight: 1.4}}>Los ventiladores industriales BIOFAN,
                se pueden instalar en cualquier espacio
                con techos de más de 4 metros de altura.</p>
            </div>
            <div className="w-[110%] lg:w-[110%] bg-white px-20 hover:scale-105 transition z-10 ml-0">
               <Image loading="lazy" className="pt-5" src="/inicio/inicio_main_3.png" width={900} height={800} alt="imagen sobre nuestra experiencia" />
            </div>
        </div>
    )
}
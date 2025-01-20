import Image from "next/image"

export default function Ocho(){
    return(
        <div>
            <Image src="/solar/1.png" className="mt-10 w-[70%] mx-auto" width={2000} height={2000} alt=""/>
            <Image src="/solar/2.png" className="mt-10 w-[70%] mx-auto" width={2000} height={2000} alt=""/>
            <p className="helvetica text-2xl mt-10 font-bold text-center w-[60%] mx-auto text-[#1d4674]">¡Descubre la innovadora PINTURA TÉRMICA BIOFAN! Con microesferas especiales de vacío, ofrece un aislamiento térmico excepcional, ahorra hasta un 40% de energía y previene la formación de humedad. ¡Transforma tus espacios con eficiencia y durabilidad!</p>
            <Image src="/solar/3.png" className="mt-10 w-[70%] mx-auto" width={2000} height={2000} alt=""/>
            <Image src="/solar/4.png" className="mt-10 w-[70%] mx-auto" width={2000} height={2000} alt=""/>
            <p className="helvetica text-5xl mt-3 font-bold text-center w-[60%] mx-auto text-[#1d4674]">Principales propiedades</p>
            <Image src="/solar/5.png" className="mt-10 mb-20 w-[70%] mx-auto" width={2000} height={2000} alt=""/>

        </div>
    )
}
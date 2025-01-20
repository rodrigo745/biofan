"use client"
import Image from "next/image"
import ImageSlider from "@/components/imagenSuperpuesta"


export default function Siete(){
    return(
        <div className="helvetica mb-20">
            <h3 className="text-[#1d4674] font-bold text-3xl w-[60%] mt-16 mb-16 mx-auto text-center">Nuestros sistemas evaporativos son una opción inteligente para quienes buscan una alternativa eficiente y ecológica para la climatización</h3>
            <div className="flex w-full justify-center">
                <div className="w-[40%]">
                    <Image src="/evaporativos/3.png" className="mx-auto" width={550} height={500} alt="" />
                </div>
                <div className="w-[40%] bg-[#1d4674] pt-14 px-20">
                    <p className="text-3xl font-bold text-center mb-5 text-white" >Eficiencia Energética</p>
                    <p className="text-white text-lg font-bold text-justify">Los sistemas evaporativos de BIOFAN utilizan una fracción de la energía requerida por los sistemas de aire acondicionado tradicionales. Al aprovechar el proceso natural de evaporación del agua, nuestros sistemas reducen significativamente el consumo de energía, consumiendo hasta un 80% menos de energía que los aires acondicionados tradicionales, lo que se traduce en facturas de energía más bajas y una huella ambiental reducida.</p>
                </div>
            </div>
            <div className="flex w-full justify-center mt-12">
                <div className="w-[40%] bg-[#1d4674] pt-14 px-20">
                    <p className="text-3xl font-bold text-center mb-5 text-white" >Bajo Costo Operativo</p>
                    <p className="text-white text-lg font-bold text-justify">Además de su eficiencia energética, los sistemas evaporativos de BIOFAN requieren un mantenimiento mínimo y tienen costos operativos más bajos en comparación con los sistemas de aire acondicionado convencionales. Esto significa que no solo ahorras en costos de energía, sino también en gastos de mantenimiento a largo plazo.</p>
                </div>
                <div className="w-[40%]">
                    <Image src="/evaporativos/4.png" className="mx-auto" width={550} height={500} alt="" />
                </div>
            </div>
            <div className="flex flex-col mx-auto justify-center w-[80%] mt-12 bg-[#1d4674] py-14 px-20">
                <p className="text-3xl font-bold text-center mb-5 text-white">Adaptabilidad y Versatilidad</p>
                <p className="text-white text-lg font-bold text-justify">Los sistemas evaporativos de BIOFAN son altamente adaptables y versátiles, lo que los hace adecuados para una amplia gama de aplicaciones, desde comercios y oficinas hasta almacenes y espacios industriales. Sea cual sea tu necesidad de climatización, tenemos la solución perfecta para ti.</p>
                <div className="flex space-x-24 mt-10 justify-center">
                    <Image src="/evaporativos/5.png" className="" width={520} height={400} alt=""/>
                    <Image src="/evaporativos/6.png" className="" width={520} height={400} alt=""/>
                </div>
            </div>
            <p className="text-[#1d4674] text-4xl mb-10 font-bold text-center mt-12 roboto">¡Soluciones de refrigeración definitivas!</p>
            <ImageSlider/>

        </div>
    )
}
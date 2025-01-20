"use client";
import info from "./info.json";
import { useState } from "react";
import Image from "next/image";
import TablaVariante from "@/components/productos/tablaVariante";
import Link from "next/link";
import ImageSlider from "@/components/imagenSuperpuesta";

export default function Producto({params}){

    const parametro = params;
    let ne = info.filter((e) => e.id == parametro.id)
    const e = ne[0];

    const [ pestaña, setPestaña ] = useState(0);
    const [ imagen, setImagen ] = useState(e.img[0]);

    const mostrarPestaña = (e)=> {
        if(e === 0){
            setPestaña(0);
        } else if(e === 1) {
            setPestaña(1);
        } else if(e === 2){
            setPestaña(2);
        }
    }
    const mostrarImagen = (ev)=>{
        setImagen(e.img[ev])
    }




    const enlace = e.titulo.toUpperCase();

    return(
        <div className="mt-20 mb-20">
            <div className="flex lg:space-x-7">
                    <div className="lg:w-[13%] h-[60vh] overflow-auto flex flex-col items-end pr-10 justify-start space-y-4 scrollable-div" >
                    {
                        e.img.map((e,index) => (
                            
                            <Image onClick={()=> mostrarImagen(index)}  key={index} src={e} width={90} height={90} alt="" className="relative top-1 cursor-pointer hover:translate-y-[-3px] hover:border transition w-[100px] h-[100px] " />
                        ))
                    }
                </div>
                <div className="lg:w-[33%] h-[66%] my-auto relative  flex justify-center items-center">
                    
                    <Image className="w-[80%] h-full " src={imagen} width={2000} height={2000} alt="producto" />
                    
                </div>
                <div className="lg:w-[46%]">
                    <p className="font-semibold text-neutral-400 roboto"> <Link href="/pages/productos" className="hover:text-neutral-800">EQUIPOS</Link>  /  {
                        e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" || e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" ? "ENFRIADOR EVAPORATIVO INDUSTRIAL" : enlace
                        } {e.serie}</p>
                    <h3 className="text-4xl font-semibold text-[#1d4674] mt-5 mb-4 roboto border-b-4 border-neutral-400 pb-3 w-fit" dangerouslySetInnerHTML={{__html: e.titulo}}></h3>
                    <button className={`py-2 mb-8 px-12 rounded-md roboto lg:text-xl font-semibold  mt-3
                        ${e.titulo === "Ventilador de Techo Industrial" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Ventilador de Techo Comercial" && "bg-[#f0c50b] text-white"}
                        ${e.titulo === "Ventilador Móvil Industrial" && "bg-[#ff3131] text-white"} 
                        ${e.titulo === "Ventilador Móvil de 45°" && "bg-[#f0c50b] text-white"}
                        ${e.titulo === "Ventilador de Pared" && "bg-[#1d4674] text-white"}
                        ${e.titulo === "Ventilador Comercial Vertical" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Military Cool Mod-260" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Ventilador Industrial Vertical" && "bg-[#e6e6d4] text-[#090d12]"}
                        ${e.titulo === "Military Cool Mod-120" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "EVAPORATIVO INDUSTRIAL Serie - OFS PRO" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "EVAPORATIVO INDUSTRIAL Mod-335L" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Duct Cooler" && "bg-[#fe7604] text-white"}
                        ${e.titulo === "Extractor de 6 palas" && "bg-[#ff3131] text-white"}                         
                        ${e.titulo === "Weather Fighter Mod-150" && "bg-[#fe7604] text-white"}`} 
                        >Enviar consulta</button>
                    <p className="text-xl helvetica text-justify" style={{lineHeight: 1.8}} dangerouslySetInnerHTML={{__html: e.descripcion1}} />
                    {e.rango != "no" && <p className="w-full mt-8 text-xl helvetica text-justify"><strong>Rango de diámetro del ventilador:</strong> <br /><span dangerouslySetInnerHTML={{__html: e.rango}}></span></p>}
                    {e.gama != "no" && <p className="mt-8 text-xl helvetica"><strong>Gama de motores PMSM:</strong> <span dangerouslySetInnerHTML={{__html: e.gama}}></span></p>}
                    {e.caracteristicas != "no" && <p className="mt-8 text-xl helvetica"><strong>Características: </strong> <span dangerouslySetInnerHTML={{__html: e.caracteristicas}}></span></p>}
                </div>
            </div>
            <div className=" p-3 w-[90%] mx-auto mt-20">
                <div className="flex space-x-2">
                    <button onClick={()=> mostrarPestaña(0)} className={`open border-2 p-4 px-6 text-xl font-semibold hover:bg-slate-100 cursor-pointer 
                        ${pestaña === 0 ? " text-black" : "text-neutral-400"}`}>Descripción</button>
                    <button onClick={()=> mostrarPestaña(1)} className={`open border-2 p-4 px-6 text-xl font-semibold hover:bg-slate-100 cursor-pointer 
                        ${pestaña === 1 ? " text-black" : "text-neutral-400" }`}>Especificación Técnica</button>
                    <button onClick={()=> mostrarPestaña(2) } className={`open border-2 p-4 px-6 font-semibold text-xl hover:bg-slate-100 cursor-pointer 
                        ${pestaña === 2 ? " text-black" : "text-neutral-400"}`}>Manual Técnico</button>
                </div>
                
                
                <div className="border-2 p-10">
                {
                    pestaña === 0 &&
                    <>
                        {e.descripcion2.map((ev,index) => (
                            <p key={index} className={`text-xl text-justify px-7 helvetica
                                ${e.titulo === "Weather Fighter Mod-150" && "hidden" }
                                `} style={{lineHeight: 1.9}} dangerouslySetInnerHTML={{ __html: ev }} />
                        ))}

                       

                        {
                            e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" &&
                            <div className="flex">
                                <ul style={{lineHeight: 1.9}} className="list-disc text-xl text-justify px-10 helvetica italic ml-20 mt-7 w-[45%]" >
                                    <li>De fácil instalación y mantenimiento.</li>
                                    <li>Permite una colocación fija o móvil con o sin manga de distribución del aire.</li>
                                    <li>Material de alta tecnología, acero galvanizado con aluminio y un revestimiento principalmente hecho en magnesio.</li>
                                </ul>
                                <ul style={{lineHeight: 1.9}} className="list-disc text-xl text-justify px-0 helvetica italic ml-20 mt-7 w-[45%]" >
                                <li>Elevada resistencia a la corrosión puede ser instalado en cualquier ambiente.</li>
                                <li>Los tres paneles evaporativos pueden ser removidos fácilmente para su mantenimiento.</li>
                                <li>Equipado con un tanque de agua de gran capacidad 335 Litros. </li>
                            </ul>
                            </div>
                        }
                        {
                            e.titulo === "Weather Fighter Mod-150" &&
                            <div className="flex">   
                                <div className="w-[70%]">
                                    {e.descripcion2.map((ev,index) => (
                                        <p key={index} className="text-lg text-justify px-7 helvetica" style={{lineHeight: 1.9}} dangerouslySetInnerHTML={{ __html: ev }} />
                                    ))}
                                </div>
                                <div>
                                    <Image src="/productos/11/66.png" className="mt-7 ml-20" width={300} height={300} alt="" />
                                </div>
                            </div>
                        }
                    </>    
                }
                {
                    pestaña === 1 &&
                    <div className="flex flex-col lg:flex-row">
                        {
                            e.titulo === "Ventilador de Pared" ?
                                <TablaVariante/>
                            :                        
                            <>
                                {
                                    e.titulo === "Ventilador Industrial Vertical" || e.titulo === "Ventilador Comercial Vertical"  ?
                                            
                                    <table class="border-separate border-spacing-2 w-[90%] border-b-2 border-red-400">
                                    <thead>
                                      <tr>
                                            <th className="bg-[#ed6c00] p-2">MODELO</th>
                                            <th className="bg-[#ed6c00] p-2">ESPECIFICACIONES <br/> (m/ft)</th>
                                            <th className="bg-[#ed6c00] p-2">Ød <br/>(mm)</th>
                                            <th className="bg-[#ed6c00] p-2">ØD  <br/>(mm)</th>
                                            <th className="bg-[#ed6c00] p-2">h <br/>(m)</th>
                                            <th className="bg-[#ed6c00] p-2">H <br/>(m)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center ">
                                      
                                      <tr>
                                        <td class=" p-3 text-center" rowspan="3">HDS/L</td>
                                        <td class=" flex space-x-1 justify-around">
                                            <p className=" p-4">3-3.7m</p>
                                            <p className=" p-4">10-12ft</p>
                                        </td>
                                            <td class=" p-3">80</td>
                                        <td class=" p-3">114</td>
                                        <td class=" p-3">3</td>
                                        <td class=" p-3">3.5</td>
                                      </tr>
                                      <tr className="">
                                        <td class=" flex space-x-1 justify-around border-b-2 border-red-400">
                                            <p className="bg-[#f8c499] w-full p-4">4.3-5m</p>
                                            <p className="bg-[#f8c499] w-full p-4">14-16ft</p>
                                        </td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">114</td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">140</td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">3</td>
                                        <td class="bg-[#f8c499] p-3 border-b-2 border-red-400">4</td>
                                      </tr>
                                      <tr>
                                        <td class=" flex space-x-1 justify-around">
                                            <p className=" p-4">6.1-7.3m</p>
                                            <p className=" p-4">20-24ft</p>
                                        </td>
                                        <td class=" p-3">160</td>
                                        <td class=" p-3">220</td>
                                        <td class=" p-3">6</td>
                                        <td class=" p-3">7</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  
                                    :

                                
                    <table className="border-separate border-spacing-2 w-[60%]">
                    {
                        e.titulo !== "Recubrimiento Superior Solar" ?
                        
                        <thead>
                        <tr className="">
                        {
                            // Iteramos sobre la primera fila del JSON (encabezados)
                            e.especificacion[0].map((ev, index) => (
                                <th 
                                className={`bg-[#1d4674] text-white p-2 py-4 text-xl rounded-sm`} 
                                style={{width: `${ev.num}1%`}} 
                                key={index}
                                colSpan={ev.num > 1 ? ev.num : 1} // Si 'num' es mayor a 1, usamos colspan
                                >
                                {ev.text}
                            </th>
                            ))
                        }
                        </tr>
                    </thead>
                    :
                    <thead className="border-separate border-spacing-2">
                        <tr className="">
                        {
                            // Iteramos sobre la primera fila del JSON (encabezados)
                            e.especificacion[0].map((ev, index) => (
                                <th 
                                className={`bg-[#1d4674] text-white p-2 py-4 text-xl rounded-sm`} 
                                style={{width: `${ev.num}1%`}} 
                                key={index}
                                colSpan={ev.num > 1 ? ev.num : 1} // Si 'num' es mayor a 1, usamos colspan
                                dangerouslySetInnerHTML={{__html: ev.text}}>
                                
                            </th>
                            ))
                        }
                        </tr>
                    </thead>    
                    }
                    {
                        e.id === "" ?
                        <tbody>
                            {
      e.especificacion.slice(1).map((row, rowIndex) => (
        <tr key={rowIndex}>
          {
            row.map((cell, index) => {
              const colspan = cell.num > 1 ? cell.num : 1;

              // Definimos el color para las celdas alternas
              const isEvenIndex = index % 2 === 0; // Si el índice es par
              const isLastRow = rowIndex === e.especificacion.length - 2; // Verifica si es la última fila

              return (
                <td 
                  className={`text-center text-lg rounded-sm font-bold p-3 ${isLastRow ? 'bg-[#eb5347] text-white' : isEvenIndex ? 'bg-[#e6e6d4]' : 'bg-[#f0a84d]'}
                  ${e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && "bg-none"}
                  
                  `} 
                  style={{width: `${cell.num}1%`}} 
                  key={index}
                  colSpan={colspan}
                >
                  {cell.text}
                </td>
              );
            })
          }
        </tr>
      ))
    }
                        </tbody>
                        :

                    <tbody>
                        {
                            e.especificacion.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                            {
                                row.map((cell, index) => {
                                    const colspan = cell.num > 1 ? cell.num : 1;
                                    // Determinamos el estilo para la primera celda de cada fila y las demás
                                    const isFirstCell = index === 0; // Es la primera celda
                                    const isFirstCellInRow = rowIndex >= 1; // A partir de la segunda fila

                                    return (
                                        <td 
                                        className={`rounded-sm px-3 py-4 text-lg font-bold
                                            ${isFirstCellInRow ? '' : ''} 
                                        ${isFirstCell ? 'bg-[#eb5347] text-white' : 'bg-[#e6e6d4] text-center'}`} 
                                        style={{width: `${cell.num}1%`}} 
                                        key={index}
                                        colSpan={colspan}
                                        >
                                    {cell.text}
                                    </td>
                                );
                                })
                            }
                            </tr>
                        ))
                        }
                    </tbody>
                    }
                    
                  </table>
                  }
                  {
                    e.titulo === "Weather Fighter Mod-150" &&
                    <div>
                        <Image src="/productos/10/7.png" className="ml-20 mt-20" height={500} width={400} alt="" />
                    </div>
                  }
                  {
                    e.titulo === "Military Cool Mod-260" &&
                    <div>
                        <Image src="/productos/11/16.png" className="ml-20 mt-20" height={500} width={400} alt="" />
                    </div>
                  }
                  {
                    e.titulo === "Military Cool Mod-120" &&
                    <div>
                        <Image src="/productos/12/7.png" className="ml-20 mt-20" height={500} width={400} alt="" />
                    </div>
                  }
                  {
                    e.titulo === "EVAPORATIVO INDUSTRIAL Mod-335L" &&
                    <div>
                        <Image src="/productos/13/14.png" className="ml-20 mt-10" height={600} width={800} alt="" />
                    </div>
                  }
                  {
                    e.titulo === "EVAPORATIVO INDUSTRIAL Serie - OFS PRO" && 
                    <div className="h-[80vh]">
                        <Image src="/productos/14/15.png" className="absolute w-[60%] left-[150px]" width={2500} height={500} alt="" />
                    </div>
                  }
                  {
                    e.titulo === "Extractor de 6 palas" && 
                    <div className="h-[80vh]">
                        <Image src="/productos/16/15.png" className="absolute w-[60%] left-[150px]" width={2500} height={500} alt="" />
                    </div>
                  }
                  {
                    e.titulo === "Extractor de 7 palas" && 
                    <div className="h-[80vh]">
                        <Image src="/productos/16/15.png" className="absolute w-[60%] left-[150px]" width={2500} height={500} alt="" />
                    </div>
                  }
                  </>
                        }
                    {
                        e.titulo != "Ventilador de Pared" && e.titulo != "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" && e.titulo != "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY" &&
                        <div className="ml-20 flex flex-col justify-center">
                            <p className="font-bold text-lg italic">{e.espePuntos[0]}</p>
                            <ul>
                            {
                                e.espePuntos[1].map((e,index)=> (
                                    <li className="list-disc italic text-lg ml-5 mt-1 helvetica" key={index} dangerouslySetInnerHTML={{__html:e}} ></li>
                                ))
                            }
                            </ul>
                        </div>
                    }
                    {
                        e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L"  &&
                        <div className="w-[70%]">
                            <Image src="/productos/10/12.jpg" width={700} height={600} alt="" className="mt-10 ml-10" />
                        </div>
                    }
                    {
                        e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-150L COOL MILITARY"  &&
                        <div className="w-[70%]">
                            <Image src="/productos/10/12.jpg" width={700} height={600} alt="" className="mt-10 ml-10" />
                        </div>
                    }
                    
                  </div>
                }
                {
                    pestaña === 2 &&
                    <div className="flex w-full justify-center space-x-32 pr-20">
                    <div className="flex space-x-12 justify-center items-center">
                        <div className="flex flex-col space-y-5">
                            <input type="text" placeholder="Nombre *" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white" />
                            <input type="text" placeholder="Email *" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white" />
                            <input type="text" placeholder="Teléfono" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white" />
                            <textarea placeholder="Mensaje *" className="px-5 border border-orange-500 rounded-lg bg-[#1d4674] py-3 text-white resize-none h-28"/>
                            </div>
                        <div>
                            <p className="font-semibold text-2xl open">Solicita el Manual</p>
                            <button className="py-2 w-full rounded-md mt-3 text-xl text-white bg-[#fe7604]">Enviar</button>
                        </div>
                    </div>
                    
                    </div>
                }
                    
                </div>
                    
                    
            </div>
            
            {
                e.titulo === "EVAPORATIVO INDUSTRIAL <br/> Mod-335L" &&
                <div className="relative mt-[-300px] left-[-25vw] z-50">
                    <ImageSlider/>
                </div>
            }
        </div>
    )
}
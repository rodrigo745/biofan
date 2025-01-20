import Uno from "@/components/inicio/LeerMas/uno"
import Siete from "@/components/inicio/LeerMas/Siete"
import Nueve from "@/components/inicio/LeerMas/Nueve"
import Ocho from "@/components/inicio/LeerMas/Ocho"



export default function LeerMas({params}){
    return(
        <div>
            { params.id == 0 && <Uno/> }
            { params.id == 7 && <Siete/> }
            { params.id == 8 && <Ocho/>}
            { params.id == 9 && <Nueve/> }


        </div>
    )
}
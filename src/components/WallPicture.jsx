import React, { useEffect, useRef, useState } from "react";
import { DoubleSide } from 'three';
import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber";
import Alianza from "../images/Alianza.jpg"
import Horda from "../images/Horda.jpg"

export default function WallImage() {
    const AlianzaTexture = useLoader(TextureLoader, Alianza)
    const HordaTexture = useLoader(TextureLoader, Horda)
    const [textura,setTextura] = useState(AlianzaTexture)
    const [change,setChange] = useState(false)
    useEffect(()=>{
        if(change){
            setTextura(HordaTexture)
        }else{
            setTextura(AlianzaTexture)
        }
    },[change])

    const onHandleVideo = (event) => {
        console.log(change)
        setChange(!change)
    }
    
    return (
        <mesh position={[5,1,-3]} rotation-y={Math.PI / 2} scale = {10} dispose={null} onPointerEnter={onHandleVideo} > 
                <planeGeometry />
                <meshBasicMaterial map={textura} side={DoubleSide} toneMapped={false}/> 
                 
        </mesh>
        
    );
}

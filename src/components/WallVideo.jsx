import React, { useEffect, useRef, useState } from "react";
import src from "../videos/Video1.mp4"
import { DoubleSide } from 'three'
import { useVideoTexture } from '@react-three/drei';

export default function WallVideo() {
    const [isPlaying,setIsPlaying] = useState(false)
    const [props, setProps] = useState({ autoPlay: false , muted: false})
    const texture = useVideoTexture(src, props);

    useEffect(()=>{
        if(isPlaying) {
            texture?.image.play();
        }else{
            texture?.image.pause();
        }
    },[isPlaying])

    const onHandleVideo = (e) => {
        setIsPlaying(!isPlaying)
    }
    
    return (
        <mesh position={[0,1,-8]} scale = {10} dispose={null} onClick={onHandleVideo} > 
                <planeGeometry />
                <meshBasicMaterial map={texture} side={DoubleSide} toneMapped={false}/> 
                 
        </mesh>
        
    );
}

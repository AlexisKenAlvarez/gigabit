import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroScene from "~/scene/HeroScene";

import {
    BrightnessContrast,
    EffectComposer,
    HueSaturation
} from "@react-three/postprocessing";

const HeroCanvas = () => {


    return (
        <Canvas>
            <Suspense fallback={null}>
                <HeroScene />
            </Suspense>
            <EffectComposer>
                <HueSaturation saturation={0.4} />
                <BrightnessContrast brightness={-0.1} contrast={0.4} />
            </EffectComposer>
        </Canvas>
    );
}

export default HeroCanvas;
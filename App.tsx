import { Suspense } from 'react'
import { useAssets } from 'expo-asset'
import { Canvas, useThree } from './lib/fiber'
import { Text } from './lib/drei'

const Lorem = () => {

  const { viewport } = useThree();
  const color = '#EC2D2D';
  const fontSize = 10.5;
  const maxWidth = 90;
  const lineHeight = 0.75;
  const letterSpacing = -0.08;
  const textAlign = 'center';

  return (
    <Text
        color={color}
        fontSize={fontSize}
        maxWidth={(viewport.width / 100) * maxWidth}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        textAlign={textAlign}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT
        LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO
        LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN
        VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT
        NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.
      </Text>
  );
}

export default function App() {
  // const [assets, error] = useAssets([require('./assets/iphone.glb')])
  // console.error("error", error)
  // console.log("assets", assets)


  return (
    <Canvas gl={{ useLegacyLights: true }} camera={{ position: [-6, 0, 16], fov: 36 }}>
      <ambientLight />
      <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
      <directionalLight intensity={0.8} position={[-6, 2, 2]} />

      
      <Lorem />

    </Canvas>
  )
}

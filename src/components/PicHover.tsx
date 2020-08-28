import React, { useState, useEffect } from 'react'
import '../style/css/picHover.css'

interface PicHoverProps {
  pic: string;
}

export default function PicHover (props: PicHoverProps) {
  const { pic } = props
  const [refl, setRefl] = useState<any>()
  const [card, setCard] = useState<any>()

  const over = () => {
    refl.style.opacity = 1
  }
  const leave = () => {
    refl.style.opacity = 0
    card.style.transform = 'perspective(500px) rotateX(3deg) rotateY(4deg) rotateZ(-5deg) scale(1.2)'
  }
  const move = (event: any) => {
    const relX = (event.offsetX + 1) / card.offsetWidth
    const relY = (event.offsetY + 1) / card.offsetHeight
    const rotY = `rotateY(${(relX - 0.5) * 60}deg)`
    const rotX = `rotateX(${(relY - 0.5) * -60}deg)`
    card.style.transform = `perspective(500px) scale(1.4) ${rotY} ${rotX}`

    const lightX = scale(relX, 0, 1, 150, -50)
    const lightY = scale(relY, 0, 1, 30, -100)
    const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7)
    const lightOpacity = scale(lightConstrain, 0.3, 1, 1, 0) * 255
    const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`
    const lightShadeBlack = 'rgba(0, 0, 0, 1)'
    refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`
  }

  const scale = (val: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin)
  }

  useEffect(() => {
    setCard(document.querySelector('.card'))
    setRefl(document.querySelector('.reflection'))
  }, [])

  return (
    <div className="card w-32 mr-10 flex-shrink-0" onMouseMove={() => move(event)} onMouseLeave={leave} onMouseOver={over}>
      <div className="reflection"></div>
      <img className="shadow" src={pic} />
    </div>
  )
}

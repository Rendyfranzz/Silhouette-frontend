import foto1 from "../image/foto1.jpg"
import foto2 from "../image/foto2.jpg"
import foto3 from "../image/foto3.jpg"
import ImageCard from "./ImageCard"
const ImageHome = () => {
    const style = "contrast-50 hover:scale-105 hover:contrast-100 transition ease-in-out duration-500"
  return (
    <div className="w-screen h-1/2 flex flex-row justify-evenly">
        <ImageCard><img className={style} src={foto1} alt="foto1" /></ImageCard>
        <ImageCard><img className={style} src={foto2} alt="foto1" /></ImageCard>
        <ImageCard><img className={style} src={foto3} alt="foto1" /></ImageCard>
        </div>
  )
}

export default ImageHome
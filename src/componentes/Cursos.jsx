import './Cursos.css'

import ImgLash from '../utils/lash-lifting.jpg'
import ImgHidra from '../utils/hidra-gloss.jpg'
import ImgDesign from '../utils/design-de-sobrancelha.jpg'
import ImgBrow from '../utils/brow-lamination.jpg'

import PgLash from "../paginas/PgLash"
import PgHidra from "../paginas/PgHidra"
import PgDesign from "../paginas/PgDesign"
import PgBrow from "../paginas/PgBrow"


function Cursos(){
    return(
        <div>
            <div className="lash">
                <a href={PgLash}>Lash Lifting</a>
                <img id="img01" src={ImgLash} alt="" />
            </div>

            <div className="hidra">
                <a href={PgHidra}>Hidra Gloss</a>
                <img id="img02" src={ImgHidra} alt="" />
            </div>

            <div className="design">
                <a href={PgDesign}>Master Designer de Sobrancelhas</a>
                <img id="img03" src={ImgDesign} alt="" />
            </div>

            <div className="brow">
                <a href={PgBrow}>Brow Lamination</a>
                <img id="img04" src={ImgBrow} alt="" />
            </div>

           
        </div>
    )
}

export default Cursos
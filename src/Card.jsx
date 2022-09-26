import React from 'react'
import Data from './Data'
import "./card.css"
import { useState } from 'react'

const Card = () => {
    const [menu, setMenu] = useState(Data);
    console.log(menu)

    const filterItem = (cu) => {
        console.log(cu)
        const updateitems = Data.filter((cur) => {
            return cur.category === cu
        })
        setMenu(updateitems)
    }
    return (
        <>
            <div className='heder'>
                <h3 className='Logo'>H<span>ey</span></h3></div>
            <hr />
            <section className='btnF' >
                <button onClick={() => setMenu(Data)} className="btnH">ALL</button>
                <button onClick={() => filterItem("Gujarati")} className="btnH">Gujarati</button>
                <button onClick={() => filterItem("Punjabi")} className="btnH">Punjabi</button>
                <button onClick={() => filterItem("south_indian")} className="btnH">south indian</button>

            </section>
            <section>

                <div className='go'>
                    <p className='contine-lin'  >Buy 2 Get1 free</p></div>
                <div className='cardF'  >
                    {
                        menu.map((elm, inx) => {
                            return (
                                <>

                                    <div className='card '>
                                        <img src={elm.src} alt="" className='cardimg' />
                                        <p> {elm.category}</p>
                                        <h3>{elm.detail}</h3>
                                        <h6>price:{elm.price}</h6>
                                        <button className='btn btns'>comment</button>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Card

import React, { Component } from 'react'

class State extends Component {



    render() {
        var item = ""
        
        if (this.props.getGlasses) {
            document.querySelector("#br1").style.opacity = 0.6 
            document.querySelector(".img1").style.opacity = 1
            item = this.props.getGlasses

        }
        const { name, url, desc } = item

        return (
            <div>

                <div className='gr__ d-flex justify-content-around'>
                    <div className="box__change w-25" style={{ height: '100px' }}>
                        <img className='img1' src="./img/model.jpg" alt="" />
                        <div className="box__top">
                            <img className='img2' src={url} alt="" />
                        </div>
                        <div className="box_123">
                            <div className="box_br" id='br1'></div>
                            <div className="box__bottom">
                                <p className='text1 fw-bold'>{name}</p>
                                <p className='text2'>{desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="box__change w-25" style={{ height: '100px' }}>
                        <img className='w-100' src="./img/model.jpg" alt="" />
                    </div>
                </div>


                <div className='box__stage py-4'>
                    {this.props.data.map((item, i) => {
                        return (
                            <div className="gr_box" key={item.id}>
                                <img className='img2' onClick={() => { this.props.onSelectImg(item) }} src={`./img/v${i + 1}.png`} alt="" />
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}
export default State
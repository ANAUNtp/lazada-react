import './Flashsale.css'
import glass from './Image/glass.jpg'

function Flashsale(){
    return(
        <div className="Flash">
            <div className='TextFS' >Flash Sale</div>
            <div className="Flashbar">
                <div className="Flashmenu">
                    <div className="OSN">On Sale Now</div>
                    <div className="EN">Ending Now</div>
                    <div className="SAP">SHOP ALL PRODUCTS</div>
                </div>
            </div>
            <div className="goodsbar">
                    <div className="item item-1">
                        <img className="glass" src={glass}></img>
                        <p>30oz แก้วเก็บความเย็น ยี่ห้อPANDA แถมหลอด สแตนเลสแท้304 รับประกันไอน้ำไม่เกาะแก้ว แก้วน้ำเก็บความเย็น แก้วสแตนเลส</p>
                        <p className="price">฿20.68</p>
                        <p className="sale"><del>฿50.0</del>0 -59%</p>
                    </div>
                    <div className="item item-2">
                        <img className="glass" src={glass}></img>
                        <p>30oz แก้วเก็บความเย็น ยี่ห้อPANDA แถมหลอด สแตนเลสแท้304 รับประกันไอน้ำไม่เกาะแก้ว แก้วน้ำเก็บความเย็น แก้วสแตนเลส</p>
                        <p className="price">฿20.68</p>
                        <p className="sale"><del>฿50.0</del>0 -59%</p>
                    </div>
                    <div className="item item-3">
                        <img className="glass" src={glass}></img>
                        <p>30oz แก้วเก็บความเย็น ยี่ห้อPANDA แถมหลอด สแตนเลสแท้304 รับประกันไอน้ำไม่เกาะแก้ว แก้วน้ำเก็บความเย็น แก้วสแตนเลส</p>
                        <p className="price">฿20.68</p>
                        <p className="sale"><del>฿50.0</del>0 -59%</p>
                    </div>
                    <div className="item item-4">
                        <img className="glass" src={glass}></img>
                        <p>30oz แก้วเก็บความเย็น ยี่ห้อPANDA แถมหลอด สแตนเลสแท้304 รับประกันไอน้ำไม่เกาะแก้ว แก้วน้ำเก็บความเย็น แก้วสแตนเลส</p>
                        <p className="price">฿20.68</p>
                        <p className="sale"><del>฿50.0</del>0 -59%</p>
                    </div>
                    <div className="item item-5">
                        <img className="glass" src={glass}></img>
                        <p>30oz แก้วเก็บความเย็น ยี่ห้อPANDA แถมหลอด สแตนเลสแท้304 รับประกันไอน้ำไม่เกาะแก้ว แก้วน้ำเก็บความเย็น แก้วสแตนเลส</p>
                        <p className="price">฿20.68</p>
                        <p className="sale"><del>฿50.0</del>0 -59%</p>
                    </div>
                    <div className="item item-6">
                        <img className="glass" src={glass}></img>
                        <p>30oz แก้วเก็บความเย็น ยี่ห้อPANDA แถมหลอด สแตนเลสแท้304 รับประกันไอน้ำไม่เกาะแก้ว แก้วน้ำเก็บความเย็น แก้วสแตนเลส</p>
                        <p className="price">฿20.68</p>
                        <p className="sale"><del>฿50.0</del>0 -59%</p>
                    </div>
                </div>
        </div>
    );
}



export default Flashsale
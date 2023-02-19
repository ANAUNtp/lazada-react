import './channel.css'
import Lazblog from "./Image/Lazblog.png"
import LazMall from "./Image/LazMall.png"
import LazPick from "./Image/LazPick.png"
import TB from "./Image/Top-Up, Bills&Food.png"
import Voucher from "./Image/Vouchers.png"

function Channel(){
    return(
        <div className='Ch'>
            <div className='namech'>
                <div className='block LM' >
                    <img className='LazMall' src={LazMall}></img>
                    <div className='text'>LazMall</div>
                </div>
                <div className='block VC'>
                    <img className='Vouchers' src={Voucher}></img>
                    <div className='text'>Vouchers</div>
                </div>
                <div className='block TB'>
                    <img className='TB' src={TB}></img>
                    <div className='text'>Top-Up, Bills&Food</div>
                </div>
                <div className='block LB'>
                    <img className='Lazblog' src={Lazblog}></img>
                    <div className='text'>Lazblog</div>
                </div>
                <div className='block LP'>
                    <img className='LazPig' src={LazPick}></img>
                    <div className='text'>LazPig</div>
                </div>
            </div>
        </div>
    );
}


export default Channel;
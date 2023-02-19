import "./App.css";
import "./Search";
import Search from "./Search";
import Channel from "./channel";
import Flashsale from "./Flashsale";
import LZP from "./Image/LZ-P.webp";
import LZ_logo from "./Image/LZ-logo.png";
import Airpod from "./Image/Airpod.webp";
import Visa1 from "./Image/Visa1.jpg";
import Visa2 from "./Image/Visa2.jpg";
import Visa3 from "./Image/Visa3.jpg";
import Lazada from "./Image/lazada.png";
import EIOAG from "./Image/EIOAG.png";
import GIOGP from "./Image/GIOGP.png";
import AOTAP from "./Image/AOTAP.png";
import Iphone from "./Image/Iphone.webp";
import {FaStar,FaChevronRight } from "react-icons/fa";


function App() {
  return (
    <div>
      <div className="Navbar">
        <div className="NavText">
          <div>SAVE MORE ON APP</div>
          <div>SELL ON LAZADA</div>
          <div>CUSTOMER CARE</div>
          <div>TRACK MY ORDER</div>
          <div>LOGIN</div>
          <div>SIGNUP</div>
          <div>เปลี่ยนภาษา</div>
        </div>
      </div>
      <Search/>
      <div className="container">
        <Channel/>
        <Flashsale/>
        <div className="LZ-Box">
          <div className="LZ-top">
            <p>LazMall</p>
            <p>Shop more</p>
            <FaChevronRight className="More" />
          </div>
          <div className="Product-box-LZ">
            <div className="Product-LZ">
              <img className="PdLZ" src={LZP}></img>
              <div className="Pd-logo">
                <img className="Pd-img" src={LZ_logo}></img>
              </div>
              <div className="LZ-Des">
                <p>CB Cotton</p>
                <p>CB Cotton</p>
              </div>
            </div>
            <div className="Product-LZ">
              <img className="PdLZ" src={LZP}></img>
              <div className="Pd-logo">
                <img className="Pd-img" src={LZ_logo}></img>
              </div>
              <div className="LZ-Des">
                <p>CB Cotton</p>
                <p>CB Cotton</p>
              </div>
            </div>
            <div className="Product-LZ">
              <img className="PdLZ" src={LZP}></img>
              <div className="Pd-logo">
                <img className="Pd-img" src={LZ_logo}></img>
              </div>
              <div className="LZ-Des">
                <p>CB Cotton</p>
                <p>CB Cotton</p>
              </div>
            </div>
            <div className="Product-LZ">
              <img className="PdLZ" src={LZP}></img>
              <div className="Pd-logo">
                <img className="Pd-img" src={LZ_logo}></img>
              </div>
              <div className="LZ-Des">
                <p>CB Cotton</p>
                <p>CB Cotton</p>
              </div>
            </div>
            <div className="Product-LZ">
              <img className="PdLZ" src={LZP}></img>
              <div className="Pd-logo">
                <img className="Pd-img" src={LZ_logo}></img>
              </div>
              <div className="LZ-Des">
                <p>CB Cotton</p>
                <p>CB Cotton</p>
              </div>
            </div>
            <div className="Product-LZ">
              <img className="PdLZ" src={LZP}></img>
              <div className="Pd-logo">
                <img className="Pd-img" src={LZ_logo}></img>
              </div>
              <div className="LZ-Des">
                <p>CB Cotton</p>
                <p>CB Cotton</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Cata-box">
          <div className="Cata-top">
            <p>Categories</p>
          </div>
          <div className="Product-box-Cata">
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
          </div>
          <div className="Product-box-Cata-2">
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
            <div className="Product-Cata">
              <img className="PdCata" src={Airpod}></img>
              <div>Wireless Earbuds</div>
            </div>
          </div>
        </div>
        <div className="JFU-Box">
          <p>Just For You</p>
          <div className="Product-box-JFU">
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
          </div>
          <div className="Product-box-JFU">
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
          </div>
          <div className="Product-box-JFU">
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
          </div>
          <div className="Product-box-JFU">
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
            <div className="Product-JFU">
              <img className="Iphone JFU" src={Iphone} alt=""></img>
              <p className="Des">
                มีสิทธิรับ❗❗ [วันที่ 19 ก.พ. 66] Samsung Galaxy S20 FE 5G
                8/128 GB - Cloud Navy [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]
              </p>
              <p className="Price-FS">฿1.00</p>
              <p className="Real-Price">
                {" "}
                <span>฿23,900.00</span> <span>-99%</span>
                <div className="Review">
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <FaStar className="Star" />
                  <span>(259)</span>
                </div>
              </p>
            </div>
          </div>
          <div className="LoadMore">LOAD MORE</div>
        </div>
        <div className="VisaCard">
          <img className="Visa" src={Visa1} alt=""></img>
          <img className="Visa" src={Visa2} alt=""></img>
          <img className="Visa" src={Visa3} alt=""></img>
        </div>
        <div className="CC-lazada">
          <div className="CC">
            <p>Customer Care</p>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>International Product Policy</li>
            <li>How to Return</li>
            <li>Contact Us</li>
          </div>
          <div className="Lazada">
            <p>Lazada</p>
            <li>All Categories</li>
            <li>About Lazada</li>
            <li>Afﬁliate Program</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Press & Media</li>
            <li>Security</li>
            <li>Popular Products</li>
            <li>Intellectual Property Protection</li>
          </div>
          <div className="Dwn-app">
            <img className="Laz-logo" src={Lazada} alt=""></img>
            <div className="Dwn-text">
              <p>Go where your heart beats</p>
              <p>Download the App</p>
            </div>
          </div>
          <div className="Dwn-img">
            <div>
              <img className="Dwn-logo1" src={AOTAP} alt=""></img>
              <img className="Dwn-logo2" src={GIOGP} alt=""></img>
            </div>
            <img className="Dwn-logo3" src={EIOAG} alt=""></img>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;

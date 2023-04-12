import FooterStyle from "./footerStyle";
import logo from "../../assets/Motors shop.png"
import angleUp from "../../assets/angle-up.png"




function Footer() {
    return (
      <FooterStyle>
        <div>
       <img src={logo} alt=""/>
        </div>
        <p>© 2022 - Todos os direitos reservados</p>

        <div><button ><img src={angleUp} alt="" /></button></div>

      </FooterStyle>
    );
  }
  export default Footer;
  
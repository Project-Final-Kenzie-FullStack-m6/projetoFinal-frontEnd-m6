import StyledContainer from "./style.adversiment"
import bmw from "../../../assets/bmw.png"
import { Button } from "../../../components/button/style.button"
import Footer from "../../../components/Footer"


const Adversiment = () => {
    return(
    <StyledContainer>
        <div className="divMain">
            <div className="divSideOne">
                <div className="divImagePrimary">
                    <img src={bmw} alt="car" />
                </div>

                <div className="divDetails">
                    <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h1>

                    <div className="divAgePrice">
                        <div>
                            <span>2013</span>
                            <span>0 km</span>
                        </div>

                        <span><b>R$ 00.000,00</b></span>
                    </div>
                    <Button font="brand-6-7">Comprar</Button>
                </div>

                <div className="divDescription">
                    <h1>Descrição</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="divCommentsBox">
                    <h1>Comentários</h1>

                    <div className="divComments">
                        <div>
                            <Button font="ball-0-1">JL</Button>
                            <span className="span1">Júlia Lima</span>
                            <span className="span2">há 3 dias</span>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <br />
                    <div className="divComments">
                        <div>
                            <Button font="ball-0-1">JL</Button>
                            <span className="span1">Júlia Lima</span>
                            <span className="span2">há 3 dias</span>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

                <div className="divPostComment">
                    <div>
                        <Button font="ball-0-1">SL</Button>
                        <span>Samuel Leão</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <textarea name="" id=""></textarea>
                        <Button font="brand-0-1" style={{ position: 'absolute', top: 80, right: 80 }}>Comentar</Button>
                    </div>

                    <div className="divBtnEvent">
                        <button className="btn1">Gostei Muito!</button>
                        <button className="btn2">Incrível</button>
                        <button className="btn3">Recomendarei para meus amigos!</button>
                    </div>
                </div>
            </div>

            <div className="divSideTwo">

                <div className="divImagesSecondary">

                    <div className="divTitle">
                        <h1>Fotos</h1>
                    </div>

                    <div className="divImages">
                        <div>
                            <img src={bmw} alt="car" />
                        </div>
                        <div>
                            <img src={bmw} alt="car" />
                        </div>
                        <div>
                            <img src={bmw} alt="car" />
                        </div>
                        <div>
                            <img src={bmw} alt="car" />
                        </div>
                        <div>
                            <img src={bmw} alt="car" />
                        </div>
                        <div>
                            <img src={bmw} alt="car" />
                        </div>
                        
                    </div>
                
                </div>

                <div className="divDetailsUser">
                    <div>
                        <Button font="ball-0-3">SL</Button>
                        <span>Samuel Leão</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <button className="button2">Ver todos anuncios</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="divFooter">
            <Footer/>
        </div>
    </StyledContainer>
        
    )
}

export default Adversiment
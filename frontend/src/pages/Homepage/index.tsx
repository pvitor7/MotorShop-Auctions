import { Header } from "../../components/header";
import ListAuction from "../../components/listAuctionCard";
import ListCard from "../../components/listCard";
import { useVehicle } from "../../providers/vehicles";
import Button from '../../components/button';
import { HomePageStyled, ButtonStyled } from './style';
import { motion } from 'framer-motion';
import * as C from "../../components/index";

const HomePage = () => {

    const { listCars, listMotorcycles, listVehicles } = useVehicle();

    const auctionVehicles = listVehicles.filter((car: any) => {
        return car.status});

    return(
        <HomePageStyled>
            <Header/>
            <motion.div className="welcome">
                <h1>Velocidade e experiência em um lugar perfeito para você</h1>
                
                <p>Um ambiente feito para você explorar o seu melhor</p>

                <div className="div--botoes">
                    <ButtonStyled>Leilão</ButtonStyled>
                    <ButtonStyled>Carros</ButtonStyled>
                    <ButtonStyled>Motos</ButtonStyled>
                </div>
            </motion.div>
            <ListAuction listVehicles={auctionVehicles}/>
            <ListCard title={"Carros"} listVehicles={listCars}/>
            <ListCard title={"Motos"} listVehicles={listMotorcycles}/>
            <C.Footer/>
        </HomePageStyled>
        )
}

export default HomePage;
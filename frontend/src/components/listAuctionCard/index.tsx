import { useVehicle } from "../../providers/vehicles";
import AuctionCard from "../auctionCard";
import { ListAuctionStyle } from "./style";
import { useRef } from "react";
import asset from "../../img/icons/asset.png";
import styled from "styled-components";
import { ITitleSection } from "../../interface/propsComponents/index";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";




const ListAuction = ({ listVehicles }: ITitleSection) => {
  const carousel: any = useRef(null);
  
  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 1.3;
  };
  
  const handleRigthClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 1.3;
  };

  

  return (
    <ListAuctionStyle>
      <h2>Leilão</h2>
      <div id="leilao">
        <button onClick={(e) => handleLeftClick(e)}>
          <BsFillCaretLeftFill className="arrow"/>
        </button>
        <ul ref={carousel}>
          {listVehicles?.map((car: any, index: number) => {
            return <AuctionCard key={index} car={car} />;
          })}
        </ul>
        <button  onClick={(e) => handleRigthClick(e)}>
          <BsFillCaretRightFill className="arrow"/>
        </button>
      </div>
    </ListAuctionStyle>
  );
};
export default ListAuction;

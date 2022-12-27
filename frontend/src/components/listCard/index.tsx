import { ITitleSection } from "../../interface/propsComponents";
import { useVehicle } from "../../providers/vehicles";
import Card from "../card";
import { ListStyle } from "./style";
import { useRef } from "react";
import asset from "../../img/icons/asset.png";
import styled from "styled-components";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const ListCard = ({ owner, title, listVehicles }: ITitleSection) => {
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
    <ListStyle>
      <h2>{title}</h2>

      <div id={`${title}`}>
        <button onClick={(e) => handleLeftClick(e)}>
        <BsFillCaretLeftFill className="arrow"/>
        </button>
        <ul ref={carousel}>

          {listVehicles?.map((vehicle, index) => (
            <Card owner={owner} key={index} vehicle={vehicle} />
          ))}
          
        </ul>
        <button onClick={(e) => handleRigthClick(e)}>
          <BsFillCaretRightFill className="arrow"/>
        </button>
      </div>
    </ListStyle>
  );
};

export default ListCard;

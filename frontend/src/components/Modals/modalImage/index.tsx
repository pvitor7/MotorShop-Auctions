import { ModalImageStyled, ImageProductStyled } from "./styled";
import { useModal } from "../../../providers/modal";
import { useState } from "react";

const ModalGalery = ({ photo }: any) => {
  const { hidenModalImageGalery, inOnModalGalery } = useModal();
  const [showImage, setShowImage] = useState("");

  const modal = inOnModalGalery ? "containerModal" : "hidden";

  return (
    <ModalImageStyled>
      <div className={modal}>
        <ImageProductStyled>
          <button onClick={() => hidenModalImageGalery()}>X</button>
          <div>
            <img src={photo} />
          </div>
        </ImageProductStyled>
      </div>
    </ModalImageStyled>
  );
};

export default ModalGalery;

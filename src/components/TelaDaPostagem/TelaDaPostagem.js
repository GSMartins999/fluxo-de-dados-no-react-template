import React from "react";
import { ContainerPostagem, Title, Image, Description, Autor} from "./TelaDaPostagem.styled";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <Title>{props.titulo}</Title>
      <Image src={props.imagem} />
      <Description>{props.descricao}</Description>
      <Autor>{props.autor}</Autor>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;


// "https://picsum.photos/536/354"
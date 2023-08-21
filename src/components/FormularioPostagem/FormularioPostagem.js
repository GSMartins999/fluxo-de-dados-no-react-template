import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";


export const FormularioCadastro = (props) => {

  const aleterarTitulo = (event) => {
    props.setTitulo(event.target.value)
  }
  const aleterarImagem = (event) => {
    props.setImagem(event.target.value)
  }
  const aleterarDescricao = (event) => {
    props.setDescricao(event.target.value)
  }

  const aleterarAutor = (event) => {
    props.setAutor(event.target.value)
  }
  console.log(props.titulo, props.imagem, props.descricao)
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={aleterarTitulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={aleterarImagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={aleterarDescricao}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Autor:
          <Input id="autor" value={props.autor} onChange={aleterarAutor}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

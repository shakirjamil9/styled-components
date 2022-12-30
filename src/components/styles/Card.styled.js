import styled from "styled-components";
import { TypoColored } from "./TypoColored.styled";

// type Props {
//     text1: string,
//     text22?: string
// }

export const CardText = (props: Props) => {
  const { text1, text2 } = props;
  return (
    <div>
      <h2>{text1}</h2>
      <TypoColored> {text2} </TypoColored>
    </div>
  );
};

export const Card = styled.div`
  padding: 30px 30px;
  width: 350px;
  height: 450px;
  background-color: #1b1c1d;
  border-radius: 10px;
  color: linear-gradient(
    48.57deg,
    #7e54c6 22.14%,
    #ad39ac 89.78%,
    #b236a9 96.23%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 200px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
  }
`;
/* h1 {
    background: -webkit-linear-gradient(
      48.57deg,
      #7e54c6 22.14%,
      #ad39ac 89.78%,
      #b236a9 96.23%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */

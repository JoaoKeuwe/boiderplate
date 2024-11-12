/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./style";

export const Main = ({ title, p }: any) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <p>{p}</p>
    </S.Wrapper>
  );
};

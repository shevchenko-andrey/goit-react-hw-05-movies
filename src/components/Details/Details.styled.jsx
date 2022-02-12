import styled from 'styled-components';
export const MovieCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailsWrapper = styled.div`
  max-width: 400px;
  max-height: 450px;
  overflow-y: auto;
  margin-left: 30px;
`;
export const StyledTitle = styled.h2`
  margin-bottom: 20px;
`;
export const StyledText = styled.p`
  margin-bottom: 20px;
`;
export const ImgWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
`;
export const AdditionInfo = styled.div`
  margin-top: 40px;
`;
export const AdditionRefList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const AdditionItem = styled.li`
  text-align: center;
`;

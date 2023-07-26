import { StyledNotFoundPage } from "./style";

export const NotFound = () => {
  return (
    <StyledNotFoundPage>
     <div className="text">
      <h1> 404 not found</h1>
      <p> A página que você está procurando não existe ou não pode ser encotrada! </p>
     </div>
    </StyledNotFoundPage>
  );
};


import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;
export const Value = styled.span`
  margin: 0 10px;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
`;
export const RemoveButton = styled.button`
  font-size: 16px;
  cursor: pointer;
`;

export const Price = styled.span`
  width: 23%;
`;

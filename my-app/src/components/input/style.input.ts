import styled, { css } from "styled-components";
import { iStyleProps } from "../../interface/styled";

const Input = styled.input`
  ${({ font }: iStyleProps) => {
    switch (font) {
      case "regular-input":
        return css`
          width: 315px;
          height: 48px;
          padding: 0px 16px 0px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.5s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
          outline: none;
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey.g3};
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.brand.b2};
          }
          &:hover {
            filter: brightness(0.9);
          }
        `;
      case "regular-input-2":
        return css`
          width: 226px;
          height: 48px;
          padding: 0px 16px 0px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.5s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
          outline: none;
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey.g3};
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.brand.b2};
          }
          &:hover {
            filter: brightness(0.9);
          }
        `;


    }
  }}
`;

const Select = styled.select`
  ${({ font }: iStyleProps) => {
    switch (font) {
      case "regular-select":
        return css`
          width: 315px;
          height: 48px;
          padding: 0px 16px 0px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.8s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
          outline: none;
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey.g3};
          }
          &:hover {
            filter: brightness(0.9);
          }
        `;

      case "regular-select-2":
        return css`
          width: 226px;
          height: 48px;
          padding: 0px 16px 0px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.8s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
          outline: none;
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey.g3};
          }
          &:hover {
            filter: brightness(0.9);
          }
        `;
    }
  }}
`;

const TextArea = styled.textarea`
  ${({ font }: iStyleProps) => {
    switch (font) {
      case "text-area":
        return css`
          width: 315px;
          height: 80px;
          padding: 24px 16px 24px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.5s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
          outline: none;
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey.g3};
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.brand.b2};
          }
          &:hover {
            filter: brightness(0.9);
          }
        `;
        
      case "text-area-2":
        return css`
          width: 466px;
          height: 80px;
          padding: 24px 16px 24px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.5s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
          outline: none;
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey.g3};
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.brand.b2};
          }
          &:hover {
            filter: brightness(0.9);
          }
        `;
    }
  }}
`;

export { Input, Select, TextArea };

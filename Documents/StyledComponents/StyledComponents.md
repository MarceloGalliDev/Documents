
> StyledComponents
  - Posso concatenar JS dentro dos parametros de CSS
    - Exemplo:
      var primaryColor = '#F52273';
      export const Valor = styled('p')`
        margin: 0;
        font-weight: bold;
        color: ${() => primaryColor};
      `;
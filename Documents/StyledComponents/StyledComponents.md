>>CSS
> StyledComponents

  - Posso concatenar JS dentro dos parametros de CSS
    - Exemplo:
      var primaryColor = '#F52273';
      export const Valor = styled('p')`
        margin: 0;
        font-weight: bold;
        color: ${() => primaryColor};
      `;

> Theme
    - Crio um theme central e aplico a toda aplicação, onde posso resgatar utilizando props
        - Exemplo:
            export const Valor = styled('p')`
                margin: 0;
                font-weight: bold;
                color: ${(props) => props.theme.palette.primary.main};
            `;
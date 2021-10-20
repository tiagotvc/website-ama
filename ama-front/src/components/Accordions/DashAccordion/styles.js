import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
  

    
`
export const AccordionHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(126deg,rgba(2,0,36,1) 0%,rgba(123,90,231,1) 0%,rgba(88,54,206,1) 100% );
    color:white;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    height:70px;
    width: 500px;


`

export const AccordionContent = styled.div`
    width: 500px;
    display: flex;
    opacity: 1;
    transition: all 600ms ease-in-out;
    border-left: 1px solid #dbe3eb;
    border-right: 1px solid #dbe3eb;
    border-bottom: 1px solid #dbe3eb;
    color:black;
    height:200px;
    
    
`

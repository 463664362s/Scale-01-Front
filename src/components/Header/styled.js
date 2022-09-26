import styled from "styled-components";

export const AreaHeader = styled.div`

    background-color: #A9A9A9;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .logo{
        flex: 1;

        img{
            width: 220px;
        }
        
    }

    p{
        flex: 1;
    }

    nav{

        ul{
            display: flex;
        }
        li{
            list-style: none;
            margin-left: 20px;
        }
    }
`;
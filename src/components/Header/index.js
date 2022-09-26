import React from "react";

import { AreaHeader } from './styled'

function Header(){
    return(
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img  src="../../../Got-Logo.png" />
                </div>
                    <p>PERSONAGENS</p>
                <nav>
                </nav>
            </div>

        </AreaHeader>
    )
}

export default Header;
import React from 'react'
import { Sidenav,Nav } from 'rsuite';
import { Checkbox } from 'rsuite';
import "./sidebar.css"
const sideBar = () =>{
    return(
        <div className="sideBar">
                    <Checkbox className="check"> LGBTQ+ </Checkbox>
                    <Checkbox className="check"> WOMENS </Checkbox>
                    <Checkbox className="check"> MENS </Checkbox>
                    <Checkbox className="check"> YOUTH </Checkbox>
                    <Checkbox className="check"> PET FRIENDLY</Checkbox>
                    <Checkbox className="check"> NO PETS</Checkbox>
                    <Checkbox className="check"> SERVES MEALS</Checkbox>
                    <Checkbox className="check"> OVERNIGHT </Checkbox>
                    <Checkbox className="check"> STAY PERIOD </Checkbox>
                     {/*The one above and below needs to be a checkbox when updated to the sidenav form */}
                    <Checkbox className="check"> RATING </Checkbox>
                    <Checkbox className="check"> DONATABLE </Checkbox>
                    <Checkbox className="check"> WIFI </Checkbox>
                    <Checkbox className="check"> REHABILITATION </Checkbox>

        </div>
    )
}

export default sideBar
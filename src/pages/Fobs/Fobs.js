import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

// Graphics Components
import Table from '../../components/Table/Table';
import Button from '../../components/Button/HeaderButton';

class Fobs extends Component {
    render(){
        return (
          <>
            <Button variant="outlined" text={"test"}/>
            <Table path="key"
              columns={["FOB ID", "HOLDER"]}
              rows={[
                [<Button variant="flat" onClick={() => window.location.href="fob/89412"} text="89412" />, <Button variant="flat" onClick={() => window.location.href="user/ExternalExaminers"} text="ExternalExaminers" />],
                [<Button variant="flat" onClick={() => window.location.href="fob/89412"} text="78920" />, <Button variant="flat" onClick={() => window.location.href="user/JessicaCampbell"} text="JessicaCampbell" />],
                [<Button variant="flat" onClick={() => window.location.href="fob/89412"} text="55846" />, <Button variant="flat" onClick={() => window.location.href="user/JoBloggs"} text="JoBloggs" />],
                [<Button variant="flat" onClick={() => window.location.href="fob/89412"} text="38945" />, <Button variant="flat" onClick={() => window.location.href="user/N436AccessFob"} text="N436AccessFob" />],
                [<Button variant="flat" onClick={() => window.location.href="fob/89412"} text="10258" />, <Button variant="flat" onClick={() => window.location.href="user/StacyGoodman"} text="StacyGoodman" />],
                [<Button variant="flat" onClick={() => window.location.href="fob/89412"} text="88614" />, <Button variant="flat" onClick={() => window.location.href="user/StaffFob"} text="StaffFob" />],
              ]}/>
            </>
        );
    }

}
export default Fobs;

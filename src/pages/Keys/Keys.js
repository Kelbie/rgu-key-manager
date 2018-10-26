import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import Table from '../../components/Table/Table';
import Button from '../../components/Button/HeaderButton';

class People extends Component {
    render(){
        return (
          <>
            <Button variant="outlined" text={"test"}/>
            <Table path="key"
              columns={["KEY ID", "OPENS", "STORED", "NO. OF DUPLICATES"]}
              rows={[
                ["123(1)", "N533", "N433", "3"],
                ["123(2)", "N533", "N433", "3"],
                ["123(3)", "N533", "N433", "3"],
                ["932(1)", "N533", "N433", "6"],
                ["932(2)", "N533", "N433", "6"],
                ["932(3)", "N533", "N433", "6"],
                ["932(4)", "N533", "N433", "6"],
                ["932(5)", "N533", "N433", "6"],
                ["932(6)", "N533", "N433", "6"],
              ]}/>
            </>
        );
    }

}
export default People;

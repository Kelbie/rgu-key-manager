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
              columns={["KEY ID", "TYPE", "HOLDER", "OPENS", "STORED", "NO. OF DUPLICATES"]}
              rows={[
                ["80(1)", "Tambour Unit", "EMatheson", "N/A", "N/A", 1],
                ["80(2)", "Tambour Unit", "ShonaLilly", "N/A", "N/A", 1],
                ["11254(1)", "-", "ShonaLilly", "N/A", "N/A", 0],
                ["SK54(1)", "-", "ShonaLilly", "N/A", "N/A", 0],
                ["PQ858(1)", "-", "VDawod", "N/A", "N/A", 0],
                ["D3108(1)", "-", "VDawod", "N/A", "N/A", 0],
                ["D3062(1)", "-", "VDawod", "N/A", "N/A", 0],
                ["0045(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["D4003(1)", "-", "-", "N/A", "N/A", 1],
                ["D4003(2)", "-", "ShonaLilly", "N/A", "N/A", 1],
                ["0977(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["110(1)", "Pedestal", "ShonaLilly", "N/A", "N/A", 0],
                ["D4129(1)", "Door Key", "ShonaLilly", "N/A", "N/A", 0],
                ["D4129(2)", "Door Key?", "-", "N/A", "N/A", 0],
                ["D4052(1)", "Door Key", "PHolt", "N/A", "N/A", 1],
                ["D4052(2)", "Door Key", "ShonaLilly", "N/A", "N/A", 1],
                ["D4131(1)", "Door Key", "VDawod", "N/A", "N/A", 0],
                ["D4131(2)", "Door Key", "VDawod", "N/A", "N/A", 0],
                ["D4133(1)", "-", "ShonaLilly", "N/A", "N/A", 0],
                ["D4134(1)", "Door Key", "JMcCall", "N/A", "N/A", 0],
                ["D4130(1)", "Door Key", "-", "N/A", "N/A", 0],
                ["D4130(1)", "Door Key?", "-", "N/A", "N/A", 0],
                ["010(1)", "Pedestal", "-", "N/A", "N/A", 1],
                ["0103(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0271(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0937(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["168(1)", "Pedestal", "-", "N/A", "N/A", 0],
                ["D4060(1)", "Door Key", "-", "N/A", "N/A", 0],
                ["D4060(2)", "Door Key?", "-", "N/A", "N/A", 0],
                ["W8759789(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["010(2)", "Pedestal", "-", "N/A", "N/A", 1],
                ["SM082(1)", "-", "-", "N/A", "N/A", 0],
                ["FM118(1)", "-", "-", "N/A", "N/A", 0],
                ["TPT2425D/31(1)", "-", "-", "N/A", "N/A", 0],
                ["D4054(1)", "Door Key", "-", "N/A", "N/A", 0],
                ["D4075(1)", "Door Key", "-", "N/A", "N/A", 0],
                ["D4135(1)", "Door Key", "-", "N/A", "N/A", 0],
                ["6499(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0018(1)", "Tambour Unit", "-", "N/A", "N/A", 1],
                ["0018(2)", "Tambour Unit", "-", "N/A", "N/A", 1],
                ["0049(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0096(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0100(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0141(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0152(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["0159(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["1J4073(1)", "-", "-", "N/A", "N/A", 0],
                ["CC0305(1)", "-", "-", "N/A", "N/A", 0],
                ["S117(1)", "Pedestal", "-", "N/A", "N/A", 0],
                ["S173(1)", "Pedestal", "-", "N/A", "N/A", 0],
                ["S186(1)", "Pedestal", "-", "N/A", "N/A", 0],
                ["BT11(1)", "-", "-", "N/A", "N/A", 0],
                ["M0492828978(1)", "-", "-", "N/A", "N/A", 1],
                ["M0492828978(2)", "-", "-", "N/A", "N/A", 1],
                ["18587(1)", "-", "-", "N/A", "N/A", 0],
                ["0051(1)", "Tambour Unit", "-", "N/A", "N/A", 0],
                ["181(1)", "Pedestal", "-", "N/A", "N/A", 0],
                ["D4059(1)", "Door Key", "-", "N/A", "N/A", 0],
                ["SMK.38798(1)", "MASTER", "-", "N/A", "N/A", 3],
                ["SMK.38798(2)", "MASTER", "-", "N/A", "N/A", 3],
                ["SMK.38798(3)", "MASTER", "-", "N/A", "N/A", 3],
                ["SMK.38798(4)", "MASTER", "-", "N/A", "N/A", 3],
                ["PMM1(1)", "-", "-", "N/A", "N/A", 0],
                ["S206(1)", "Pedestal", "-", "N/A", "N/A", 0],
                ["932(1)", "-", "-", "N/A", "N/A", 0],
                ["768RA399(1)", "-", "-", "N/A", "N/A", 0],



              ]}/>
            </>
        );
    }

}
export default People;

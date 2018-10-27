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
                [<Button variant="flat" onClick={() => window.location.href="key/80(1)"} text="80(1)" />, "Tambour Unit", <Button variant="flat" onClick={() => window.location.href="user/EMatheson"} text="EMatheson" />, "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/80(2)"} text="80(2)" />, "Tambour Unit", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"} text="ShonaLilly" />, "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/11254(1)"} text="11254(1)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"} text="ShonaLilly" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/SK54(1)"} text="SK54(1)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"} text="ShonaLilly" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/PQ858(1)"} text="PQ858(1)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/VDawod"} text="VDawod" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D3108(1)"} text="D3108(1)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/VDawod"} text="VDawod" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D3062(1)"} text="D3062(1)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/VDawod"} text="VDawod" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0045(1)"} text="0045(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4003(1)"} text="D4003(1)" />, "-", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/D4003(2)"} text="D4003(2)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"} text="ShonaLilly" />, "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/0977(1)"} text="0977(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/110(1)"} text="110(1)" />, "Pedestal", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"}  text="ShonaLilly" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4129(1)"} text="D4129(1)" />, "Door Key", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"}  text="ShonaLilly" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4129(2)"} text="D4129(2)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4052(1)"} text="D4052(1)" />, "Door Key", "PHolt", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/D4052(2)"} text="D4052(2)" />, "Door Key", <Button variant="flat"onClick={() => window.location.href="user/ShonaLilly"}  text="ShonaLilly" />, "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/D4131(1)"} text="D4131(1)" />, "Door Key", <Button variant="flat" onClick={() => window.location.href="user/VDawod"}  text="VDawod" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4131(2)"} text="D4131(2)" />, "Door Key", <Button variant="flat" onClick={() => window.location.href="user/VDawod"}  text="VDawod" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4133(1)"} text="D4133(1)" />, "-", <Button variant="flat" onClick={() => window.location.href="user/ShonaLilly"}  text="ShonaLilly" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4134(1)"} text="D4134(1)" />, "Door Key", <Button variant="flat" onClick={() => window.location.href="user/JMcCall"}  text="JMcCall" />, "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4130(1)"} text="D4130(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4130(1)"} text="D4130(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/010(1)"} text="010(1)" />, "Pedestal", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/0103(1)"} text="0103(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0271(1)"} text="0271(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0937(1)"} text="0937(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/168(1)"} text="168(1)" />, "Pedestal", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4060(1)"} text="D4060(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4060(2)"} text="D4060(2)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/W8759789(1)"} text="W8759789(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/010(2)"} text="010(2)" />, "Pedestal", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/SM082(1)"} text="SM082(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/FM118(1)"} text="FM118(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/TPT2425D/31(1)"} text="TPT2425D/31(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4054(1)"} text="D4054(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4075(1)"} text="D4075(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4135(1)"} text="D4135(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/6499(1)"} text="6499(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0018(1)"} text="0018(1)" />, "Tambour Unit", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/0018(2)"} text="0018(2)" />, "Tambour Unit", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/0049(1)"} text="0049(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0096(1)"} text="0096(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0100(1)"} text="0100(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0141(1)"} text="0141(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0152(1)"} text="0152(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0159(1)"} text="0159(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/1J4073(1)"} text="1J4073(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/CC0305(1)"} text="CC0305(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/S117(1)"} text="S117(1)" />, "Pedestal", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/S173(1)"} text="S173(1)" />, "Pedestal", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/S186(1)"} text="S186(1)" />, "Pedestal", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/BT11(1)"} text="BT11(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/M0492828978(1)"} text="M0492828978(1)" />, "-", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/M0492828978(2)"} text="M0492828978(2)" />, "-", "-", "N/A", "N/A", 1],
                [<Button variant="flat" onClick={() => window.location.href="key/18587(1)"} text="18587(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0051(1)"} text="0051(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/181(1)"} text="181(1)" />, "Pedestal", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/D4059(1)"} text="D4059(1)" />, "Door Key", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/SMK.38798(1)"} text="SMK.38798(1)" />, "MASTER", "-", "N/A", "N/A", 3],
                [<Button variant="flat" onClick={() => window.location.href="key/SMK.38798(2)"} text="SMK.38798(2)" />, "MASTER", "-", "N/A", "N/A", 3],
                [<Button variant="flat" onClick={() => window.location.href="key/SMK.38798(3)"} text="SMK.38798(3)" />, "MASTER", "-", "N/A", "N/A", 3],
                [<Button variant="flat" onClick={() => window.location.href="key/SMK.38798(4)"} text="SMK.38798(4)" />, "MASTER", "-", "N/A", "N/A", 3],
                [<Button variant="flat" onClick={() => window.location.href="key/PMM1(1)"} text="PMM1(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/S206(1)"} text="S206(1)" />, "Pedestal", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/932(1)"} text="932(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/768RA399(1)"} text="768RA399(1)" />, "-", "-", "N/A", "N/A", 0],
                [<Button variant="flat" onClick={() => window.location.href="key/0359(1)"} text="0359(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0, true],
                [<Button variant="flat" onClick={() => window.location.href="key/0828(1)"} text="0828(1)" />, "Tambour Unit", "-", "N/A", "N/A", 0, true],
                [<Button variant="flat" onClick={() => window.location.href="key/D4060(3)"} text="D4060(3)" />, "-", "-", "N/A", "N/A", 0, true],
              ]}/>
            </>
        );
    }

}
export default People;

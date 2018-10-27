import React, {Component} from 'react';

import AppLogo from '../../app-logo.svg';

// Graphics Components
import Table from '../../components/Table/Table';
import Button from '../../components/Button/HeaderButton';

var fobs = [
  [
    {
      text: "89412",
      type: "button",
      linkTo: "fob/89412"
    }, {
      text: "ExternalExaminers",
      type: "plain"
    }
  ],
  [
    {
      text: "78920",
      type: "button",
      linkTo: "fob/78920"
    }, {
      text: "JessicaCampbell",
      type: "button",
      linkTo: "user/JessicaCampbell"
    }
  ],
  [
    {
      text: "55846",
      type: "button",
      linkTo: "fob/55846"
    }, {
      text: "JoBloggs",
      type: "button",
      linkTo: "user/JoBloggs"
    }
  ],
  [
    {
      text: "38945",
      type: "button",
      linkTo: "fob/38945"
    }, {
      text: "N436AccessFob",
      type: "plain"
    }
  ],
  [
    {
      text: "10258",
      type: "button",
      linkTo: "fob/10258"
    }, {
      text: "StacyGoodman",
      type: "button",
      linkTo: "user/StacyGoodman"
    }
  ],
  [
    {
      text: "88614",
      type: "button",
      linkTo: "fob/88614"
    }, {
      text: "StaffFob",
      type: "plain"
    }
  ]
]

class Fobs extends Component {
  render() {
    return (<> < Button variant = "outlined" text = {
      "test"
    } /> <Table path="key" columns={["FOB ID", "HOLDER"]} rows={fobs}/>
  </>);
  }

}
export default Fobs;

import React, {Component} from 'react';

import AppLogo from '../../app-logo.svg';

import async from 'async';

// Firebase
import firebase, {auth, database, firestore} from "../../components/Firebase/Firebase";

// Material UI Components
import TextField from '@material-ui/core/TextField';

// Graphics Components
import Table from '../../components/Table/Table';
import Button from '../../components/Button/MiniButton';

class Keys extends Component {
  state = {filterKeys: [], keys: [], filterText: ""}
  constructor() {
    super();
  }

  async componentWillMount() {
    const keysRef = await firestore.collection('keys')

    try {
      const snap = await keysRef.get()
      console.log(888, snap)
      snap.forEach(row => {
        row = row.data()
        console.log(888, row.keyid)
        this.state.keys.push([
            {
              text: row.keyid,
              type: "button",
              linkTo: "/key/" + row.keyid
            },
            {
              text: row.type,
              type: "plain"
            },
            {
              text: row.holder.id,
              type: "button",
              linkTo: "/user/" + row.holder.id
            },
            {
              text: row.opens.id,
              type: "plain",
            },
            {
              text: row.stored.id,
              type: "plain",
            },
            {
              text: 0,
              type: "plain"
            }
        ])
        this.setState({filterKeys: this.state.keys})
      })
    } catch (e) {
      console.log(e)
    }
  }

  filter = (obj) => {
    if (this.state.filterText != "") {
      return obj[0].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[1].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[2].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[3].text.toUpperCase().includes(this.state.filterText.toUpperCase()) ||
             obj[4].text.toUpperCase().includes(this.state.filterText.toUpperCase())
    } else {
      return true
    }
  }

  handleOnChange = (filterText) => {
    this.setState({
      filterText: filterText
     }, ()=>{
       this.setState({filterKeys: this.state.keys.filter(this.filter)})
       console.log(this.state.filterKeys.length, this.state.keys.length)
     });

  }

  render() {
    return (<>
      <TextField onChange={(filterText) => this.handleOnChange(filterText.target.value)} label="Filter" />
        <Table path="key"
          columns={["KEY ID", "TYPE", "HOLDER", "OPENS", "STORED", "DUPLICATES"]}
          rows={this.state.filterKeys}/>
  </>);
  }

}
export default Keys;

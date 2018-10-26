import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

import Table from '../../components/Table/Table';

class People extends Component {
    render(){
        return (
          <Table path="user"
            columns={["USERNAME", "NO. OF KEYS", "NO. OF KEY FOBS"]}
            rows={[
              ["Shona", "10", "2"],
              ["Test1", "10", "2"],
              ["Test2", "10", "2"],
              ["Test3", "10", "2"],
              ["Test4", "10", "2"],
              ["Test5", "10", "2"],
              ["Test6", "10", "2"],
              ["Test7", "10", "2"],
              ["Test8", "10", "2"],
              
            ]}/>
        );
    }

}
export default People;

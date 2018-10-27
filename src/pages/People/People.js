import React, { Component } from 'react';

import AppLogo from '../../app-logo.svg';

// Graphics Components
import HeaderButton from '../../components/Button/HeaderButton';
import Table from '../../components/Table/Table';

var people = [
  [
    {
      text: "ShonaLilly",
      role: "Super Admin",
      type: "button",
      linkTo: "user/ShonaLilly",
    },
    {
      text: 24,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ],
  [
    {
      text: "EMatheson",
      type: "button",
      role: "Admin",
      linkTo: "user/EMatheson",
    },
    {
      text: 10,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ],
  [
    {
      text: "VDawod",
      type: "button",
      role: "Admin",
      linkTo: "user/VDawod",
    },
    {
      text: 8,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ],
  [
    {
      text: "JMcCall",
      type: "button",
      role: "None",
      linkTo: "user/JMcCall",
    },
    {
      text: 6,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "PHolt",
      type: "button",
      role: "None",
      linkTo: "user/PHolt",
    },
    {
      text: 6,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "SRae",
      type: "button",
      role: "None",
      linkTo: "user/SRae",
    },
    {
      text: 5,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "HKalutarage",
      type: "button",
      role: "None",
      linkTo: "user/HKalutarage",
    },
    {
      text: 3,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "KHui",
      type: "button",
      role: "None",
      linkTo: "user/KHui",
    },
    {
      text: 6,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "AFryer",
      type: "button",
      role: "None",
      linkTo: "user/AFryer",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "SSturley",
      type: "button",
      role: "None",
      linkTo: "user/SSturley",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "APetrovky",
      type: "button",
      role: "None",
      linkTo: "user/APetrovky",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "IArana",
      type: "button",
      role: "None",
      linkTo: "user/IArana",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "MZarb",
      type: "button",
      role: "None",
      linkTo: "user/MZarb",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "RMcDermott",
      type: "button",
      role: "None",
      linkTo: "user/RMcDermott",
    },
    {
      text: 2,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "RLothian",
      type: "button",
      role: "None",
      linkTo: "user/RLothian",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "LMorison",
      type: "button",
      role: "None",
      linkTo: "user/LMorison",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 1,
      type: "plain",
    }
  ],
  [
    {
      text: "AilsaMcWhirter",
      type: "button",
      role: "None",
      linkTo: "user/AilsaMcWhirter",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 0,
      type: "plain",
    }
  ],
  [
    {
      text: "FionaMatheson",
      type: "button",
      role: "None",
      linkTo: "user/FionaMatheson",
    },
    {
      text: 1,
      type: "plain",
    },
    {
      text: 2,
      type: "plain",
    }
  ]
]

class People extends Component {
    render(){
        return (
          <Table path="user"
            columns={["USERNAME", "NO. OF KEYS", "NO. OF KEY FOBS"]}
            rows={people}/>
        );
    }

}
export default People;

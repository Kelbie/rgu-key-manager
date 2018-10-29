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

// var keys = [
//   [
//     {
//       "text": "80(1)",
//       "type": "button",
//       "linkTo": "key/80(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//       "text": "EMatheson",
//       "type": "button",
//       "linkTo": "/user/EMatheson"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "80(2)",
//       "type": "button",
//       "linkTo": "key/80(2)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "11254(1)",
//       "type": "button",
//       "linkTo": "key/11254(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "SK54(1)",
//       "type": "button",
//       "linkTo": "key/SK54(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "PQ858(1)",
//       "type": "button",
//       "linkTo": "key/PQ858(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "VDawod",
//       "type": "button",
//       "linkTo": "/user/VDawod"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D3108(1)",
//       "type": "button",
//       "linkTo": "key/D3108(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "VDawod",
//       "type": "button",
//       "linkTo": "/user/VDawod"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D3062(1)",
//       "type": "button",
//       "linkTo": "key/D3062(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "VDawod",
//       "type": "button",
//       "linkTo": "/user/VDawod"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0045(1)",
//       "type": "button",
//       "linkTo": "key/0045(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4003(1)",
//       "type": "button",
//       "linkTo": "key/D4003(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4003(2)",
//       "type": "button",
//       "linkTo": "key/D4003(2)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0977(1)",
//       "type": "button",
//       "linkTo": "key/0977(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "110(1)",
//       "type": "button",
//       "linkTo": "key/110(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4129(1)",
//       "type": "button",
//       "linkTo": "key/D4129(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4129(2)",
//       "type": "button",
//       "linkTo": "key/D4129(2)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4052(1)",
//       "type": "button",
//       "linkTo": "key/D4052(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4052(2)",
//       "type": "button",
//       "linkTo": "key/D4052(2)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4131(1)",
//       "type": "button",
//       "linkTo": "key/D4131(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//       "text": "VDawod",
//       "type": "button",
//       "linkTo": "/user/VDawod"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4131(2)",
//       "type": "button",
//       "linkTo": "key/D4131(2)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//       "text": "VDawod",
//       "type": "button",
//       "linkTo": "/user/VDawod"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4133(1)",
//       "type": "button",
//       "linkTo": "key/D4133(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "ShonaLilly",
//       "type": "button",
//       "linkTo": "/user/ShonaLilly"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4134(1)",
//       "type": "button",
//       "linkTo": "key/D4134(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//       "text": "JMcCall",
//       "type": "button",
//       "linkTo": "/user/JMcCall"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4130(1)",
//       "type": "button",
//       "linkTo": "key/D4130(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4130(1)",
//       "type": "button",
//       "linkTo": "key/D4130(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "010(1)",
//       "type": "button",
//       "linkTo": "key/010(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0103(1)",
//       "type": "button",
//       "linkTo": "key/0103(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0271(1)",
//       "type": "button",
//       "linkTo": "key/0271(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plains"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0937(1)",
//       "type": "button",
//       "linkTo": "key/0937(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "168(1)",
//       "type": "button",
//       "linkTo": "key/168(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4060(1)",
//       "type": "button",
//       "linkTo": "key/D4060(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4060(2)",
//       "type": "button",
//       "linkTo": "key/D4060(2)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "W8759789(1)",
//       "type": "button",
//       "linkTo": "key/W8759789(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "010(2)",
//       "type": "button",
//       "linkTo": "key/010(2)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "SM082(1)",
//       "type": "button",
//       "linkTo": "key/SM082(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "FM118(1)",
//       "type": "button",
//       "linkTo": "key/FM118(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "TPT2425D/31(1)",
//       "type": "button",
//       "linkTo": "key/TPT2425D/31(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4054(1)",
//       "type": "button",
//       "linkTo": "key/D4054(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4075(1)",
//       "type": "button",
//       "linkTo": "key/D4075(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4135(1)",
//       "type": "button",
//       "linkTo": "key/D4135(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "6499(1)",
//       "type": "button",
//       "linkTo": "key/6499(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0018(1)",
//       "type": "button",
//       "linkTo": "key/0018(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0018(2)",
//       "type": "button",
//       "linkTo": "key/0018(2)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0049(1)",
//       "type": "button",
//       "linkTo": "key/0049(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0096(1)",
//       "type": "button",
//       "linkTo": "key/0096(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0100(1)",
//       "type": "button",
//       "linkTo": "key/0100(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0141(1)",
//       "type": "button",
//       "linkTo": "key/0141(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0152(1)",
//       "type": "button",
//       "linkTo": "key/0152(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0159(1)",
//       "type": "button",
//       "linkTo": "key/0159(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "1J4073(1)",
//       "type": "button",
//       "linkTo": "key/1J4073(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "CC0305(1)",
//       "type": "button",
//       "linkTo": "key/CC0305(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "S117(1)",
//       "type": "button",
//       "linkTo": "key/S117(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "S173(1)",
//       "type": "button",
//       "linkTo": "key/S173(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "S186(1)",
//       "type": "button",
//       "linkTo": "key/S186(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "BT11(1)",
//       "type": "button",
//       "linkTo": "key/BT11(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "M0492828978(1)",
//       "type": "button",
//       "linkTo": "key/M0492828978(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "M0492828978(2)",
//       "type": "button",
//       "linkTo": "key/M0492828978(2)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 1,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "18587(1)",
//       "type": "button",
//       "linkTo": "key/18587(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0051(1)",
//       "type": "button",
//       "linkTo": "key/0051(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "181(1)",
//       "type": "button",
//       "linkTo": "key/181(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "D4059(1)",
//       "type": "button",
//       "linkTo": "key/D4059(1)"
//     }, {
//       "text": "Door Key",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "SMK.38798(1)",
//       "type": "button",
//       "linkTo": "key/SMK.38798(1)"
//     }, {
//       "text": "MASTER",
//       "type": "plain"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 3,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "SMK.38798(2)",
//       "type": "button",
//       "linkTo": "key/SMK.38798(2)"
//     }, {
//       "text": "MASTER",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 3,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "SMK.38798(3)",
//       "type": "button",
//       "linkTo": "key/SMK.38798(3)"
//     }, {
//       "text": "MASTER",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 3,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "SMK.38798(4)",
//       "type": "button",
//       "linkTo": "key/SMK.38798(4)"
//     }, {
//       "text": "MASTER",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 3,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "PMM1(1)",
//       "type": "button",
//       "linkTo": "key/PMM1(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "S206(1)",
//       "type": "button",
//       "linkTo": "key/S206(1)"
//     }, {
//       "text": "Pedestal",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "932(1)",
//       "type": "button",
//       "linkTo": "key/932(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "768RA399(1)",
//       "type": "button",
//       "linkTo": "key/768RA399(1)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "type": "plain"
//     }
//   ],
//   [
//     {
//       "text": "0359(1)",
//       "type": "button",
//       "linkTo": "key/0359(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "lost": true
//     }
//   ],
//   [
//     {
//       "text": "0828(1)",
//       "type": "button",
//       "linkTo": "key/0828(1)"
//     }, {
//       "text": "Tambour Unit",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       "lost": true
//     }
//   ],
//   [
//     {
//       "text": "D4060(3)",
//       "type": "button",
//       "linkTo": "key/D4060(3)"
//     }, {
//       "text": "-",
//       "type": "plain"
//     }, {
//   "text": "-",
//   "type": "plain"
// }, {
//       "text": "N/A",
//       "type": "plain",
//     }, {
//       "text": "N/A",
//       "type": "plain"
//     }, {
//       "text": 0,
//       "type": "plain"
//     }, {
//       lost: true
//     }
//   ]
// ]

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

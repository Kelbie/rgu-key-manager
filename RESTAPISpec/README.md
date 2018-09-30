# REST API Specification

Using [this](https://github.com/jamescooke/restapidocs/blob/master/examples/README.md) template.

## Open Endpoints

Open endpoints require no Authentication.

- [Register](): `POST /register/`
- [Login](login.md): `POST /login/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from the Login view above.

- [User](): `GET /user/:username`
- [Key](): `GET /key/:keyId`
- [Place](): `GET /place/:placeId`

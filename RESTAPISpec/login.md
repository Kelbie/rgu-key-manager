# Login

Used to collect a Token for a registered User.

**URL** : `/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints** :

```
{
  "username": "[valid email address]",
  "password" "[password in plain text]"
}
```

**Data example** :

```
{
  "username": example@domain.com,
  "password": "noonewillguessthis"
}
```

## Success Response

**Code** : `200 OK`

**Content example** :

```
{
  "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : if 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```
{
  "error": {
    "reason": "Unable to login with provided credentials."
  }
}
```

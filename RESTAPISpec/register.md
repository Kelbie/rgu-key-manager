# Register

Used to generate account for a user.

**URL** : `/register/`

**Method** : `POST`

**Auth required** : NO

**Data constraints** :

```
{
  "email": "[valid email address]",
  "username": "[unique username]",
  "password" "[password in plain text]",
  "password_repeat": "[repeat 'password']"
}
```

**Data example** :

```
{
  "username": ShonaLilly@rgu.ac.uk,
  "username": "ShonaLilly",
  "password": "noonewillguessthis",
  "password_repeat": "noonewillguessthis"
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

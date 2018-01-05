export const UserValidator = {
  'username': {
    presence: {
      message: "is required."
    },
    email: {
      message: "is invalid format!"
    }
  },
  'password': {
    presence: {
      message: "is required."
    }
    /*,
    format: {
      pattern: "[a-z][0-9][!@#$%^&*]+",
      flags: "i",
      message: "can only contain a-z."
    }*/
  },
  'sessionID': {
    presence: {
      message: "is required"
    }
  }
}


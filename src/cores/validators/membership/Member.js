import { default as moment } from 'moment'
export const MemberValidator = {
  'id': {
    presence: {
      message: "is required."
    },
    format: {
      pattern: "[a-z0-9]+",
      flags: "i",
      message: "can only contain a-z and 0-9."
    }
  },
  'firstName': {
    presence: {
      message: "is required."
    },
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z."
    }
  },
  'lastName': {
    presence: {
      message: "is required."
    },
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z."
    }
  },
  'sex': {
    presence: {
      message: "is required."
    },
    inclusion: {
      within: [0, 1],
      message: "^is currently out of %{value}"
    }
  },
  birthday: {
    datetime: {
      dateOnly: true,
      latest: moment.utc().subtract(18, 'years'),
      message: "^You need to be atleast 18 years old"
    }
  },
  registeredDate: {
    presence: true,
    datetime: true
  },
  'email': {
    email: {
      message: "doesn't look like a valid email"
    }
  }
}


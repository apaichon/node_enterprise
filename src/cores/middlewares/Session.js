import { default as session } from 'express-session'

const Session = session({
  secret: 'keyboard cat',
  cookie: { }
})

export { Session }
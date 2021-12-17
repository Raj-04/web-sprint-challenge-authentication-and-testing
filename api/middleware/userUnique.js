const { findBy } = require('../auth/auth-model')

async function userUnique (req, res, next) {
  try {
    const { username } = req.body
    const [user] = await findBy({ username })
    if (user) {
      next({
        status: 400, message: 'username taken'
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = userUnique

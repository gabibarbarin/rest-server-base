const getUser = (req, res) => {
  const { q, p2, p3 = 'Parametro no enviado' } = req.query

  res.status(200).json({
    msg: 'get API - controller',
    q,
    p2,
    p3,
  })
}

const postUser = (req, res) => {
  const { name, age } = req.body
  res.json({
    msg: 'post API - controller',
    name,
    age,
  })
}

const putUser = (req, res) => {
  const { id } = req.params

  res.json({
    msg: 'put API - controller',
    id,
  })
}

const deleteUser = (req, res) => {
  res.json({
    msg: 'delete API - controller',
  })
}

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
}

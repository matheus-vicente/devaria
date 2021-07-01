module.exports = {
  ensureUserIsAdmin(req, res, next) {
    const { admin } = req.user;

    if (!admin) {
      return res.status(400).json({ error: 'O usuário precisa ser administrador para realizar esta operação!' });
    }

    return next();
  }
}

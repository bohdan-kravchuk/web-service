export default (err, _req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  res.status(err.status || 500).send(err);
};

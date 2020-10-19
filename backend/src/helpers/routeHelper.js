export const run = method => (req, res, next) => {
  method(req).then(result => res.send(result)).catch(next);
};

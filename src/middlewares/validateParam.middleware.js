function validateParams(schema) {
  return (req, res, next) => {
    const { params } = req;
    const { value, error } = schema.validate(params, { abortEarly: false });

    if (error) return res.status(422).send(error.details.map((detail) => detail.message));

    res.locals.params = value;
    next();
  };
}

export default validateParams;

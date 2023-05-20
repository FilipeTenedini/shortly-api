function validateBody(schema) {
  return (req, res, next) => {
    const { body } = req;
    const { value, error } = schema.validate(body, { abortEarly: false });

    if (error) return res.status(422).send(error.details.map((detail) => detail.message));

    res.locals.body = value;
    next();
  };
}

export default validateBody;

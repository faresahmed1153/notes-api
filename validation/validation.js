const Joi = require("joi");
const signupSchema = Joi.object({
  name: Joi.string().alphanum().required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .required(),
});

const signinSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    .required(),
});

const noteSchema = Joi.object({
  title: Joi.string().alphanum().max(20).required(),
  desc: Joi.string().max(300).required(),
});

const signupValidation = () => {
  return (req, res, next) => {
    const { name, email, password } = req.body;
    let { error } = signupSchema.validate(
      { name, email, password },
      { abortEarly: false }
    );
    if (error == undefined) {
      next();
    } else {
      res.json({ error });
    }
  };
};

const signinValidation = () => {
  return (req, res, next) => {
    const { email, password } = req.body;
    let { error } = signinSchema.validate(
      { email, password },
      { abortEarly: false }
    );
    if (error == undefined) {
      next();
    } else {
      res.json({ error });
    }
  };
};

const noteValidation = () => {
  return (req, res, next) => {
    const { title, desc } = req.body;
    let { error } = noteSchema.validate({ title, desc }, { abortEarly: false });
    if (error == undefined) {
      next();
    } else {
      res.json({ error });
    }
  };
};

module.exports = { signupValidation, signinValidation, noteValidation };

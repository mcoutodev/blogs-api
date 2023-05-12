const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required().messages({
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
        'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string(),
});

const categorySchema = Joi.object({ name: Joi.string().required() });

const newBlogPostSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
});

const updateBlogPostSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

module.exports = {
    loginSchema,
    userSchema,
    categorySchema,
    newBlogPostSchema,
    updateBlogPostSchema,
};

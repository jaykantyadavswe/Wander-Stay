const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.object({
            url: Joi.string().allow("", null)
        }).optional(),
        bedrooms: Joi.number().required(),
        bathrooms: Joi.number().required(),
        maxGuests: Joi.number().required(),
        area: Joi.number().required(),
        amenities: Joi.array().items(Joi.string()).required()
    }).required()
})

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        author: Joi.string().required(),
        email: Joi.string().required(),
        rating: Joi.number().required().max(5).min(1),
        comment: Joi.string().required(),
    }).required()
})
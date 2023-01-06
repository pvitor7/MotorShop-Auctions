import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required().email().min(11).max(30),
    password: yup.string().required().min(6).max(25),
})

export const registerSchema = yup.object().shape({
    name: yup.string().required().min(10).max(60),
    celphone: yup.string().required().min(10).max(16),
    email: yup.string().required().email().min(11).max(30),
    password: yup.string().min(6).max(25).required(),
    is_active: yup.boolean().required()
})
"use client";

import React, { useState, useEffect } from "react";
import { Locale } from "@/config/siteConfig";
import Link from "next/link";

interface ContactFormProps {
    lang: Locale;
}

const translations = {
    pt: {
        nameLabel: "Nome completo",
        companyLabel: "Empresa",
        emailLabel: "E-mail corporativo",
        phoneLabel: "Telefone / WhatsApp",
        messageLabel: "Mensagem",
        lgpdPart1: "Li e concordo com o tratamento dos meus dados conforme a ",
        lgpdLink: "Política de Privacidade",
        invalidEmail: "Informe um e-mail válido.",
        whatsappBtn: "Agendar via WhatsApp",
        emailBtn: "Enviar por E-mail",
        placeholder: "Como podemos ajudar?",
    },
    en: {
        nameLabel: "Full Name",
        companyLabel: "Company",
        emailLabel: "Corporate E-mail",
        phoneLabel: "Phone / WhatsApp",
        messageLabel: "Message",
        lgpdPart1: "I read and agree to the processing of my data according to the ",
        lgpdLink: "Privacy Policy",
        invalidEmail: "Enter a valid email address.",
        whatsappBtn: "Schedule via WhatsApp",
        emailBtn: "Send via E-mail",
        placeholder: "How can we help?",
    },
    es: {
        nameLabel: "Nombre completo",
        companyLabel: "Empresa",
        emailLabel: "E-mail corporativo",
        phoneLabel: "Teléfono / WhatsApp",
        messageLabel: "Mensaje",
        lgpdPart1: "He leído y acepto o tratamento de mis datos conforme a la ",
        lgpdLink: "Política de Privacidad",
        invalidEmail: "Ingrese un correo válido.",
        whatsappBtn: "Agendar por WhatsApp",
        emailBtn: "Enviar por E-mail",
        placeholder: "¿Cómo podemos ayudar?",
    }
};

export function ContactForm({ lang }: ContactFormProps) {
    const t = translations[lang];
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        acceptedLGPD: false
    });

    const [errors, setErrors] = useState({
        email: false
    });

    const [isValid, setIsValid] = useState(false);

    const validateEmail = (email: string) => {
        // Standard email validation (not blocking common providers)
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    useEffect(() => {
        const isEmailValid = validateEmail(formData.email);
        const allFieldsFilled =
            formData.name.trim() !== "" &&
            formData.company.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.message.trim() !== "";

        setErrors({ email: formData.email !== "" && !isEmailValid });
        setIsValid(allFieldsFilled && isEmailValid && formData.acceptedLGPD);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, acceptedLGPD: e.target.checked }));
    };

    const getFormMessage = () => {
        return `Olá! Quero agendar um Diagnóstico Estratégico.\n\n` +
            `Nome: ${formData.name}\n` +
            `Empresa: ${formData.company}\n` +
            `E-mail: ${formData.email}\n` +
            `Telefone/WhatsApp: ${formData.phone}\n` +
            `Mensagem: ${formData.message}`;
    };

    const handleWhatsApp = () => {
        if (!isValid) return;
        const msg = encodeURIComponent(getFormMessage());
        window.open(`https://wa.me/5541991934437?text=${msg}`, "_blank");
    };

    const handleEmail = () => {
        if (!isValid) return;
        const subject = encodeURIComponent(`Diagnóstico Estratégico - ${formData.company}`);
        const body = encodeURIComponent(getFormMessage());
        window.location.href = `mailto:comercial@apixtech.com.br?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-white text-left">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2 ml-1">
                            {t.nameLabel} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary transition-all duration-200 outline-none rounded-md font-inter"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2 ml-1">
                            {t.companyLabel} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary transition-all duration-200 outline-none rounded-md font-inter"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2 ml-1">
                            {t.emailLabel} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full bg-white border ${errors.email ? 'border-red-500/50' : 'border-neutral-300'} px-4 py-3 text-neutral-900 focus:border-secondary transition-all duration-200 outline-none rounded-md font-inter`}
                        />
                        {errors.email && <p className="text-[10px] text-red-500 mt-1 ml-1">{t.invalidEmail}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2 ml-1">
                            {t.phoneLabel} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary transition-all duration-200 outline-none rounded-md font-inter"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-2 ml-1">
                        {t.messageLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        placeholder={t.placeholder}
                        className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary transition-all duration-200 outline-none resize-none rounded-md font-inter placeholder:text-neutral-400"
                    ></textarea>
                </div>

                {/* LGPD Checkbox Minimalista */}
                <div className="flex items-center gap-3 py-2 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input
                            id="lgpd"
                            type="checkbox"
                            checked={formData.acceptedLGPD}
                            onChange={handleCheckboxChange}
                            className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-neutral-300 bg-white transition-all checked:border-black checked:bg-black"
                        />
                        <svg className="absolute w-2.5 h-2.5 ml-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <label htmlFor="lgpd" className="text-sm text-neutral-600 leading-relaxed cursor-pointer font-inter select-none">
                        {t.lgpdPart1}
                        <Link href={`/${lang}/privacidade`} target="_blank" className="text-neutral-900 font-semibold hover:text-black transition-colors underline underline-offset-4">
                            {t.lgpdLink}
                        </Link>
                    </label>
                </div>

                {/* Botões (Apple Style + Vidro Premium) */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
                    <button
                        type="button"
                        onClick={handleWhatsApp}
                        disabled={!isValid}
                        className={`relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-out group
                            ${isValid
                                ? "bg-emerald-300/25 backdrop-blur-xl border border-emerald-500/30 text-emerald-900 hover:bg-emerald-400 hover:text-black shadow-[0_10px_30px_-18px_rgba(16,185,129,0.35)] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_18px_45px_-20px_rgba(16,185,129,0.75)] active:scale-95"
                                : "bg-neutral-100 text-neutral-400 cursor-not-allowed"}
                        `}
                    >
                        {/* Efeito Corrugado (Glass Ribbed) */}
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_7px,transparent_12px)] transition-opacity group-hover:opacity-0" />

                        {/* Shine Animation - Softened */}
                        <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                        <span className="relative z-10">{t.whatsappBtn}</span>
                    </button>

                    <button
                        type="button"
                        onClick={handleEmail}
                        disabled={!isValid}
                        className={`relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-out group
                            ${isValid
                                ? "bg-[#E6B800]/18 backdrop-blur-xl border border-[#E6B800]/35 text-black hover:bg-[#E6B800]/25 hover:backdrop-blur-2xl hover:border-[#E6B800]/60 hover:shadow-[0_0_0_1px_rgba(230,184,0,0.45),0_12px_35px_-18px_rgba(230,184,0,0.65)] shadow-[0_10px_30px_-18px_rgba(230,184,0,0.38)] active:scale-95"
                                : "border-neutral-200 text-neutral-300 cursor-not-allowed"}
                        `}
                    >
                        {/* Efeito Corrugado (Glass Ribbed - Ouro) */}
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_7px,transparent_12px)] transition-opacity group-hover:opacity-0" />

                        {/* Shine Animation - Softened */}
                        <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                        <span className="relative z-10">{t.emailBtn}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

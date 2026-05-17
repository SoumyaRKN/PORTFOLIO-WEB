"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { saveContactInquiry } from "@/actions/contact";
import { inquiryInterests } from "@/content/site";
import { contactInquirySchema, type ContactInquiryInput } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { slideUpVariants, staggerContainerVariants } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type FormState = {
    status: "idle" | "submitting" | "success" | "error";
    message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function ContactSection() {
    const prefersReduced = useReducedMotion();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactInquiryInput>();

    const [state, setState] = useState<FormState>(initialState);

    async function onSubmit(values: ContactInquiryInput) {
        const parsed = contactInquirySchema.safeParse(values);

        if (!parsed.success) {
            setState({ status: "error", message: "Please fix validation errors and try again." });
            return;
        }

        setState({ status: "submitting", message: "Sending inquiry..." });
        const result = await saveContactInquiry(parsed.data);

        if (result.status) {
            reset();
            setTimeout(() => setState(initialState), 3000);
            setState({ status: "success", message: result.message });
            return;
        }

        setState({ status: "error", message: result.message });
    }

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariants(prefersReduced)}
            >
                <SectionHeading subtitle="Available for backend engineering roles, API platform work, and architecture-focused consulting.">
                    Start a conversation
                </SectionHeading>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 grid gap-5 rounded-xl border border-border bg-surface p-6 md:grid-cols-2 lg:p-8"
                variants={staggerContainerVariants(prefersReduced)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div className="flex flex-col gap-2" variants={slideUpVariants(prefersReduced)}>
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                    </label>
                    <Input
                        id="firstName"
                        placeholder="Your first name"
                        {...register("firstName", { required: true })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                        <span id="firstName-error" className="text-xs text-danger" role="alert">First name is required</span>
                    )}
                </motion.div>

                <motion.div className="flex flex-col gap-2" variants={slideUpVariants(prefersReduced)}>
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                    </label>
                    <Input
                        id="lastName"
                        placeholder="Your last name"
                        {...register("lastName", { required: true })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                        <span id="lastName-error" className="text-xs text-danger" role="alert">Last name is required</span>
                    )}
                </motion.div>

                <motion.div className="flex flex-col gap-2" variants={slideUpVariants(prefersReduced)}>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" className="text-xs text-danger" role="alert">Email is required</span>}
                </motion.div>

                <motion.div className="flex flex-col gap-2" variants={slideUpVariants(prefersReduced)}>
                    <label htmlFor="mobile" className="text-sm font-medium text-foreground">
                        Mobile
                    </label>
                    <Input
                        id="mobile"
                        placeholder="+91 90000 00000"
                        {...register("mobile", { required: true })}
                        aria-invalid={errors.mobile ? "true" : "false"}
                        aria-describedby={errors.mobile ? "mobile-error" : undefined}
                    />
                    {errors.mobile && <span id="mobile-error" className="text-xs text-danger" role="alert">Mobile is required</span>}
                </motion.div>

                <motion.div className="flex flex-col gap-2 md:col-span-2" variants={slideUpVariants(prefersReduced)}>
                    <label htmlFor="interestedIn" className="text-sm font-medium text-foreground">
                        What are you interested in?
                    </label>
                    <select
                        id="interestedIn"
                        className="h-11 rounded-md border border-border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                        {...register("interestedIn", { required: true })}
                        aria-invalid={errors.interestedIn ? "true" : "false"}
                        aria-describedby={errors.interestedIn ? "interestedIn-error" : undefined}
                    >
                        <option value="">Select an option</option>
                        {inquiryInterests.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    {errors.interestedIn && (
                        <span id="interestedIn-error" className="text-xs text-danger" role="alert">Please select an option</span>
                    )}
                </motion.div>

                <motion.div className="flex flex-col gap-2 md:col-span-2" variants={slideUpVariants(prefersReduced)}>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Share your goals, timeline, and technical context."
                        {...register("message", { required: true })}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <span id="message-error" className="text-xs text-danger" role="alert">Message is required</span>}
                </motion.div>

                <motion.div
                    className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                    variants={slideUpVariants(prefersReduced)}
                >
                    {state.message && (
                        <p
                            className={`text-sm ${state.status === "success" ? "text-green-600 dark:text-green-400" : "text-danger"
                                }`}
                            role={state.status === "error" ? "alert" : "status"}
                            aria-live={state.status === "error" ? "assertive" : "polite"}
                        >
                            {state.message}
                        </p>
                    )}
                    <Button
                        type="submit"
                        isLoading={state.status === "submitting"}
                        disabled={state.status === "submitting"}
                        className="w-full sm:w-auto"
                    >
                        {state.status === "submitting" ? "Sending..." : "Send Inquiry"}
                    </Button>
                </motion.div>
            </motion.form>
        </section>
    );
}

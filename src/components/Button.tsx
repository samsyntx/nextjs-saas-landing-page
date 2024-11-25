import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classess = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-line-400",
            secondary: "border-white text-white bg-transparent",
        },
    },
});

const Button = (
    props: {
        type?: "submit" | "reset" | "button";
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) => {
    const { variant, className, type = "button", children } = props;

    return (
        <button type={type} className={classess({ variant, className })}>
            {children}
        </button>
    );
};

export default Button;

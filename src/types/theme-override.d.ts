import { ButtonVariant } from "@mantine/core"

declare module "@mantine/core"{
    export interface ButtonProps{
        variant?: ButtonVariant | "nav-btn" | "dark";
    }
}
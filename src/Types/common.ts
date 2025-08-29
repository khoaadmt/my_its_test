import { ReactNode } from "react";

export interface Option {
    value: string | number;
    label: string;
    disabled?: boolean;
}

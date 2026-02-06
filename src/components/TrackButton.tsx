import React from "react";
import type { LucideIcon } from "lucide-react";
interface TrackButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    icon?: LucideIcon;
}

export const TrackButton: React.FC<TrackButtonProps> = ({ label, onClick, variant = "primary", icon: Icon }) => {
    const baseStyle = "w-[60vw] h-14 rounded-3xl font-bold transition duration-200 flex items-center justify-center gap-3 shadow-lg";
    const variantStyle = variant === 'primary'
        ? "bg-default-green hover:bg-opacity-80 text-white"
        : "bg-default-green hover:bg-opacity-70 text-gray-800"

    return (
        <button
            className={`${baseStyle} ${variantStyle}`}
            onClick={onClick}>
            {Icon && <Icon size={24} strokeWidth={2.5} />}
            <span>{label}</span>
        </button>
    );
}
import React from "react";

interface TrackButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

export const TrackButton: React.FC<TrackButtonProps> = ({ label, onClick, variant = "primary" }) => {
    const baseStyle = "px-4 py-2 rounded-lg font-bold transition duration-200";
    const variantStyle = variant === 'primary'
        ? "bg-green-500 hover:bg-green-600 text-white"
        : "bg-green-200 hover:bg-green-300 text-gray-800";

    return (
        <button
            className={`${baseStyle} ${variantStyle}`}
            onClick={onClick}>
            {label}
        </button>
    );
}
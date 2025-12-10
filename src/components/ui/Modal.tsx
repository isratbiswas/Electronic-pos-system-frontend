"use client";

import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    title: string,
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({isOpen, title, onClose, children} : ModalProps) => {
    if(!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-lw-lg rounded-lg shadow-lg overflow-hidden">
                {/* header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
                        x
                    </button>
                </div>
                {/* body */}
                <div className="p-4">{children}</div>
            </div>
            
        </div>
    );
};

export default Modal;
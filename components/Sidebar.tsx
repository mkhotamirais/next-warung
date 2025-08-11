"use client";

import { useState, createContext, useContext, ReactNode, isValidElement, cloneElement } from "react";
import clsx from "clsx";
import { FaXmark } from "react-icons/fa6";

// Context untuk Sidebar
const SidebarContext = createContext<{ close: () => void } | undefined>(undefined);

function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("SidebarClose must be used inside Sidebar");
  return ctx;
}

interface SidebarProps {
  children: ReactNode;
  trigger: ReactNode;
  bg?: string;
  title?: ReactNode;
  close?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Sidebar({
  className,
  children,
  trigger,
  bg = "",
  title,
  close,
  ariaLabel = "menu",
}: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button type="button" onClick={() => setOpen(!open)} aria-label={ariaLabel} className="flex items-center">
        {trigger}
      </button>
      <div
        className={clsx("fixed inset-0 z-50 transition-all", open ? "visible opacity-100" : "invisible opacity-0", bg)}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "absolute right-0 w-64 h-full bg-white border border-gray-200 rounded shadow-lg transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <SidebarContext.Provider value={{ close: () => setOpen(false) }}>
            <div className="p-3">
              <div className="flex items-center justify-between">
                {title}
                {close ? (
                  <SidebarClose>
                    <FaXmark />
                  </SidebarClose>
                ) : null}
              </div>
              {children}
            </div>
          </SidebarContext.Provider>
        </div>
      </div>
    </div>
  );
}

interface SidebarCloseProps {
  children: ReactNode;
  asChild?: boolean;
}

// Komponen khusus untuk menutup sidebar
export function SidebarClose({ children, asChild }: SidebarCloseProps) {
  const { close } = useSidebar();

  if (asChild && isValidElement(children)) {
    // cast lokal ke element yang kita yakini memiliki onClick (DOMAttributes)
    const child = children as React.ReactElement<React.DOMAttributes<HTMLElement>>;

    const originalOnClick = child.props.onClick as React.MouseEventHandler<HTMLElement> | undefined;

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
      if (typeof originalOnClick === "function") originalOnClick(e);
      close();
    };

    // cloneElement sekarang tahu tipe props child -> tidak akan error di compile
    return cloneElement(child, {
      onClick: handleClick,
    });
  }

  return (
    <button type="button" aria-label="Close Sidebar" onClick={close} className="text-gray-500 hover:text-gray-700">
      {children}
    </button>
  );
}

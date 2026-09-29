'use client'

import { useState, type ComponentPropsWithoutRef } from 'react'
import { Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/shared/Logo/Logo'

const NAV_LINKS = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#contacto', label: 'Contacto' },
] as const

interface IconButtonProps extends ComponentPropsWithoutRef<typeof Button> {
    label: string
}

function IconButton({ label, children, ...props }: IconButtonProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            className="size-9 rounded-none"
            {...props}
        >
            {children}
        </Button>
    )
}

export const CustomHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
            <nav
                aria-label="Navegación principal"
                className="relative mx-auto flex h-18 max-w-360 items-center px-5 sm:px-10 lg:px-14"
            >
                {/* Layout Mobile */}
                <div className="flex w-full items-center justify-between lg:hidden">
                    <div className="flex items-center gap-1">
                        <IconButton
                            label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((open) => !open)}
                        >
                            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </IconButton>
                        <IconButton label="Buscar">
                            <Search className="size-5" />
                        </IconButton>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Logo />
                    </div>

                    <div className="flex items-center gap-1">
                        <IconButton label="Mi cuenta">
                            <UserRound className="size-5" />
                        </IconButton>
                        <IconButton label="Bolsa de compras">
                            <ShoppingBag className="size-5" />
                        </IconButton>
                    </div>
                </div>

                {/* Layout Desktop */}
                <div className="hidden w-full items-center justify-between lg:flex">
                    <ul className="flex items-center gap-10">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-[10px] font-medium uppercase tracking-[0.02em] transition-opacity hover:opacity-60"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Logo />
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            type="button"
                            className="flex items-center gap-1 text-[10px] font-medium uppercase transition-opacity hover:opacity-60"
                            aria-label="Seleccionar divisa"
                        >
                            MXN <span aria-hidden="true">⌄</span>
                        </button>
                        <IconButton label="Buscar">
                            <Search className="size-4" />
                        </IconButton>
                        <IconButton label="Mi cuenta">
                            <UserRound className="size-4" />
                        </IconButton>
                        <IconButton label="Bolsa de compras">
                            <ShoppingBag className="size-4" />
                        </IconButton>
                    </div>
                </div>
            </nav>

            {/* Menú Desplegable Mobile */}
            {isMenuOpen && (
                <div className="border-t border-zinc-200 bg-white px-5 py-5 lg:hidden">
                    <ul className="flex flex-col gap-4">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="block text-xs font-medium uppercase tracking-[0.08em]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
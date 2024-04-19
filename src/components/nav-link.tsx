'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, ReactNode } from 'react'

type NavLinkProps = ComponentProps<typeof Link> & { children: ReactNode }

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-muted-foreground/80 data-[current=true]:font-medium data-[current=true]:text-foreground"
      data-current={pathname === props.href}
      {...props}
    >
      {children}
    </Link>
  )
}

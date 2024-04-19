'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, ReactNode } from 'react'

type NavLinkProps = ComponentProps<typeof Link> & { children: ReactNode }

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      className="text-muted-foreground font-medium text-sm data-[current=true]:text-foreground data-[current=true]:font-medium hover:text-muted-foreground/80 transition-colors"
      data-current={pathname === props.href}
      {...props}
    >
      {children}
    </Link>
  )
}

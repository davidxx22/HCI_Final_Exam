import type { ReactNode, Ref } from 'react'
import { ChevronDown, ExternalLink, Search, type LucideIcon } from 'lucide-react'

export const iconProps = { 'aria-hidden': true as const, focusable: false as const, size: 19, strokeWidth: 1.8 }

export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <header className="wrap page-intro">
      <h1 tabIndex={-1} data-page-heading>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export function Card({ title, icon: Icon, children, action }: {
  title: string; icon: LucideIcon; children: ReactNode; action?: ReactNode
}) {
  return (
    <article className="card">
      <span className="icon-box"><Icon {...iconProps} size={22} /></span>
      <h3>{title}</h3>
      {children}
      {action && <div className="card-action">{action}</div>}
    </article>
  )
}

export function OfficialLink({ href, children, className = 'text-link' }: {
  href: string; children: ReactNode; className?: string
}) {
  return <a className={className} href={href}>{children}<ExternalLink {...iconProps} size={15} /></a>
}

export function SearchField({ id, label, value, placeholder, onChange, inputRef }: {
  id: string; label: string; value: string; placeholder: string
  onChange: (value: string) => void; inputRef: Ref<HTMLInputElement>
}) {
  return (
    <div className="field search-field">
      <label htmlFor={id}>{label}</label>
      <div className="input-wrap">
        <Search {...iconProps} />
        <input ref={inputRef} id={id} type="search" value={value} placeholder={placeholder}
          onChange={event => onChange(event.target.value)} />
      </div>
    </div>
  )
}

export function CategorySelect({ id, value, categories, onChange }: {
  id: string; value: string; categories: readonly { value: string; label: string }[]
  onChange: (value: string) => void
}) {
  return (
    <div className="field">
      <label htmlFor={id}>Category</label>
      <div className="select-wrap">
        <select id={id} value={value} onChange={event => onChange(event.target.value)}>
          <option value="">All categories</option>
          {categories.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        <ChevronDown {...iconProps} size={16} />
      </div>
    </div>
  )
}

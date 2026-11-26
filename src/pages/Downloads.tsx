import { useEffect, useRef, useState } from 'react'
import { FileText, SearchX, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { CategorySelect, iconProps, OfficialLink, PageIntro, SearchField } from '../components/UI'
import { formCategories, forms, links, type OfficialForm } from '../content/philhealth'

function FormDetails({ form, onClose }: { form: OfficialForm | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (form && dialog.current && !dialog.current.open) dialog.current.showModal()
  }, [form])

  return (
    <dialog ref={dialog} className="form-dialog" aria-labelledby="form-details-title"
      aria-describedby="form-details-description" onClose={onClose}>
      {form && (
        <>
          <div className="dialog-top">
            <span className="icon-box"><FileText {...iconProps} size={22} /></span>
            <button className="icon-button" type="button" aria-label="Close form details" autoFocus
              onClick={() => dialog.current?.close()}><X {...iconProps} /></button>
          </div>
          <span className="form-code">{form.code} · PDF</span>
          <h2 id="form-details-title">{form.title}</h2>
          <p className="form-audience"><strong>For:</strong> {form.audience}</p>
          <p id="form-details-description">{form.description}</p>
          <div className="button-row">
            <OfficialLink className="button button-primary" href={form.pdf}>Open official PDF</OfficialLink>
            <button className="button button-outline" type="button" onClick={() => dialog.current?.close()}>Close</button>
          </div>
        </>
      )}
    </dialog>
  )
}

export function Downloads() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const requestedCategory = params.get('category')
  const category = formCategories.find(item => item.value === requestedCategory)?.value ?? ''
  const search = useRef<HTMLInputElement>(null)
  const detailsTrigger = useRef<HTMLButtonElement>(null)
  const [selected, setSelected] = useState<OfficialForm | null>(null)
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const results = forms.filter(form => {
    if (category && form.category !== category) return false
    const searchable = [form.code, form.title, form.audience, form.description].join(' ').toLowerCase()
    return terms.every(term => searchable.includes(term))
  })

  function setFilters(nextQuery: string, nextCategory: string) {
    const next = new URLSearchParams()
    if (nextQuery) next.set('q', nextQuery)
    if (nextCategory) next.set('category', nextCategory)
    setParams(next, { replace: true })
  }

  function clearFilters() {
    setFilters('', '')
    search.current?.focus()
  }

  const emptyTitle = query.trim() ? 'No forms match “' + query.trim() + '”.' : 'No forms match these filters.'

  return (
    <>
      <PageIntro title="Downloads" description="Find selected PhilHealth forms for membership, claims, and employers." />
      <section className="wrap section-block" aria-labelledby="find-form-heading">
        <div className="section-heading" data-scroll-reveal>
          <h2 id="find-form-heading">Find a form</h2>
          <p>Search by name or code, or narrow the list by category.</p>
        </div>
        <div className="filters" role="search" aria-label="Form filters" data-scroll-reveal>
          <SearchField id="form-search" label="Search forms" value={query} placeholder="For example, PMRF"
            inputRef={search} onChange={value => setFilters(value, category)} />
          <CategorySelect id="form-category" value={category} categories={formCategories}
            onChange={value => setFilters(query, value)} />
          <button className="button button-outline filter-clear" type="button" onClick={clearFilters}>Clear filters</button>
        </div>
        <p className="results-status" role="status">
          {results.length ? results.length + (results.length === 1 ? ' form found' : ' forms found') : 'No forms found'}
        </p>
        {results.length ? (
          <div className="card-grid card-grid-two">
            {results.map(form => (
              <article className="card form-card" key={form.code}>
                <div className="form-meta"><span className="icon-box"><FileText {...iconProps} size={22} /></span>
                  <span className="form-code">{form.code} · PDF</span></div>
                <h3>{form.title}</h3>
                <p className="form-audience"><strong>For:</strong> {form.audience}</p>
                <p>{form.description}</p>
                <div className="card-action">
                  <button className="button button-outline" type="button" aria-label={'View form details for ' + form.code}
                    onClick={event => {
                      detailsTrigger.current = event.currentTarget
                      setSelected(form)
                    }}>View form details</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state" data-scroll-reveal>
            <span className="icon-box"><SearchX {...iconProps} size={24} /></span>
            <h3>{emptyTitle}</h3>
            <p>Try a different keyword or clear your filters to see all forms in this list.</p>
            <button className="button button-primary" type="button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
        <div className="related-panel" data-scroll-reveal>
          <div><h2>Looking for another document?</h2><p>Use the official directory for the complete list of forms and publications.</p></div>
          <OfficialLink className="button button-outline" href={links.downloads}>View all official downloads</OfficialLink>
        </div>
        <FormDetails form={selected} onClose={() => {
          setSelected(null)
          detailsTrigger.current?.focus()
        }} />
      </section>
    </>
  )
}

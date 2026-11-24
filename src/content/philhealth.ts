const official = 'https://www.philhealth.gov.ph'

export const links = {
  home: official + '/',
  about: official + '/about_us/',
  mandate: official + '/about_us/mandate.php',
  mission: official + '/about_us/vis_mis_core.php',
  contact: official + '/about_us/directory/',
  benefits: official + '/benefits/',
  members: official + '/members/',
  partners: official + '/partners/',
  providers: official + '/partners/providers/',
  employers: official + '/partners/employers/',
  serviceProviders: official + '/partners/emr/',
  collecting: official + '/partners/collecting/',
  facilities: official + '/partners/providers/facilities/accredited/',
  services: official + '/services/',
  downloads: official + '/downloads/',
  advisories: official + '/advisories/',
  news: official + '/news/',
}

export const formCategories = [
  { value: 'membership', label: 'Membership' },
  { value: 'claims', label: 'Claims' },
  { value: 'employers', label: 'Employers' },
] as const

export interface OfficialForm {
  code: string
  title: string
  audience: string
  description: string
  category: typeof formCategories[number]['value']
  pdf: string
}

export const forms: OfficialForm[] = [
  {
    code: 'PMRF',
    title: 'PhilHealth Member Registration Form',
    audience: 'Filipino applicants and members',
    description: 'Use this form to register as a member or update your membership information.',
    category: 'membership',
    pdf: links.downloads + 'membership/pmrf_012020.pdf',
  },
  {
    code: 'PMRF-FN',
    title: 'PhilHealth Member Registration Form for Foreign Nationals',
    audience: 'Foreign national applicants and members',
    description: 'This version is for foreign nationals registering or updating membership information.',
    category: 'membership',
    pdf: links.downloads + 'membership/PMRF_ForeignNatl.pdf',
  },
  {
    code: 'CF1',
    title: 'Claim Form 1: Member and Patient Information',
    audience: 'Members, patients, and their representatives',
    description: 'Provides member and patient details for a PhilHealth benefit claim.',
    category: 'claims',
    pdf: links.downloads + 'claim/ClaimForm1_092018.pdf',
  },
  {
    code: 'CSF',
    title: 'Claim Signature Form',
    audience: 'Members and healthcare providers',
    description: 'Records the signatures and certification required on this claim document.',
    category: 'claims',
    pdf: links.downloads + 'claim/ClaimSignatureForm_2018.pdf',
  },
  {
    code: 'ER1',
    title: 'Employer Data Record',
    audience: 'Employers',
    description: 'Records employer details for PhilHealth registration.',
    category: 'employers',
    pdf: links.downloads + 'employer/er1.pdf',
  },
  {
    code: 'ER2',
    title: 'Report of Employee-Members',
    audience: 'Employers',
    description: 'Reports employee membership details to PhilHealth.',
    category: 'employers',
    pdf: links.downloads + 'employer/er2.pdf',
  },
]

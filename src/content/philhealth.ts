const official = 'https://www.philhealth.gov.ph'

export const links = {
  home: official + '/',
  about: official + '/about_us/',
  mandate: official + '/about_us/mandate.php',
  mission: official + '/about_us/vis_mis_core.php',
  contact: official + '/about_us/directory/',
  benefits: official + '/benefits/',
  members: official + '/members/',
  directContributors: official + '/members/#:~:text=Direct%20Contributors',
  indirectContributors: official + '/members/#:~:text=Indirect%20Contributors',
  partners: official + '/partners/',
  providers: official + '/partners/providers/',
  employers: official + '/partners/employers/',
  serviceProviders: official + '/partners/emr/',
  collecting: official + '/partners/collecting/',
  facilities: official + '/partners/providers/facilities/accredited/',
  services: official + '/services/',
  memberPortal: 'https://memberinquiry.philhealth.gov.ph/member/',
  registration: 'https://memberinquiry.philhealth.gov.ph/member/pinApplication.xhtml',
  downloads: official + '/downloads/',
  circulars: official + '/circulars/',
  advisories: official + '/advisories/',
  news: official + '/news/',
  invitationsToBid: official + '/suppliers/iaeb/',
  anniversaryNews: official + '/news/up/article/2026/news_69925c2c0008f.php',
  jobs: official + '/about_us/vacancies/2025/',
  statements: official + '/ofclstmnts/2026/',
  yakapIssuances: official + '/yakap/issuances/',
  jointIssuances: official + '/joint_issuances/',
  transparency: 'https://philhealth.open.gov.ph/',
  disclaimer: official + '/disclaimer/',
  privacy: official + '/privacy/',
  facebook: 'https://www.facebook.com/PhilHealthOfficial',
  x: 'https://x.com/teamphilhealth',
  youtube: 'https://www.youtube.com/@teamphilhealth',
  instagram: 'https://www.instagram.com/team_philhealth/',
}

interface OnlineService {
  title: string
  description: string
  features?: string[]
  actions: { label: string; href: string }[]
}

export const serviceGroups: {
  id: 'membership' | 'benefits' | 'contribution' | 'collection' | 'accreditation'
  title: string
  services: OnlineService[]
}[] = [
  {
    id: 'membership',
    title: 'Membership',
    services: [
      {
        title: 'Member Portal',
        description: 'View your PhilHealth records and contributions.',
        features: ['Pay premiums online', 'View or print your Member Data Record (MDR)', 'Choose your YAKAP clinic'],
        actions: [{ label: 'Register or sign in to Member Portal', href: 'https://memberinquiry.philhealth.gov.ph/member' }],
      },
      {
        title: 'Electronic Group Enrollment System',
        description: 'See PhilHealth’s advisory on the deactivation of the system for organized groups.',
        actions: [{ label: 'Read the deactivation advisory (PDF)', href: official + '/eAdvisory/20260417_EGROUP-DEACTIVATION-ADVISORY.pdf' }],
      },
    ],
  },
  {
    id: 'benefits',
    title: 'Benefits',
    services: [
      {
        title: 'Case Rates Search',
        description: 'Look up official case rates and benefit packages.',
        actions: [{ label: 'Search case rates', href: official + '/services/acr/' }],
      },
      {
        title: 'Claims Eligibility Checking',
        description: 'Healthcare providers can verify a member’s eligibility for benefits.',
        actions: [{ label: 'Sign in to check claims eligibility', href: 'https://cec.philhealth.gov.ph/' }],
      },
    ],
  },
  {
    id: 'contribution',
    title: 'Contribution',
    services: [
      {
        title: 'Electronic Premium Remittance System',
        description: 'Employers can remit their PhilHealth contributions online.',
        actions: [
          { label: 'Sign in to EPRS', href: 'https://eprs01.philhealth.gov.ph/' },
          { label: 'Open employer ePOAF', href: 'https://epoaf.philhealth.gov.ph/employer/' },
        ],
      },
    ],
  },
  {
    id: 'collection',
    title: 'Collection',
    services: [
      {
        title: 'Electronic Collection Reporting System',
        description: 'Accredited collecting agents can submit their daily RF2 reports.',
        actions: [{ label: 'Sign in to ECRS', href: 'https://ecrs.philhealth.gov.ph/' }],
      },
      {
        title: 'SPA Generator',
        description: 'Generate a Statement of Premium Account (SPA).',
        actions: [
          { label: 'Open SPA Generator', href: 'https://spagen.philhealth.gov.ph' },
          { label: 'Read the SPA guide (PDF)', href: official + '/services/spagen/STEP-BY-STEP-SPAGEN-PROCEDURE.pdf' },
        ],
      },
    ],
  },
  {
    id: 'accreditation',
    title: 'Accreditation',
    services: [
      {
        title: 'Health Facilities',
        description: 'Look up healthcare facilities and their accreditation status.',
        actions: [
          { label: 'Sign in to Health Facilities', href: 'https://ihcp.philhealth.gov.ph/' },
          { label: 'How to register a facility', href: official + '/services/hci/' },
        ],
      },
      {
        title: 'Health Care Professionals',
        description: 'Check accreditation or claims status and generate an electronic accreditation ID.',
        actions: [
          { label: 'Register or sign in as a professional', href: 'https://partners.philhealth.gov.ph/portal' },
          { label: 'Watch the registration guide', href: 'https://drive.google.com/file/d/1VVCmF9b5CPs4ooPBO7swHIhlVK5PrNkT/view' },
        ],
      },
    ],
  },
]

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

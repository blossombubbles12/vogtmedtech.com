import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  items: [
    {
      q: 'Are your solutions HIPAA and GDPR compliant?',
      a: (
        <>
          Yes. All VogtMedTech cloud services and on‑premise deployments are designed
          to meet HIPAA and GDPR requirements. We offer BAAs, data encryption in transit
          and at rest, audit logging, role‑based access controls, and regional data residency
          options where required.
        </>
      ),
    },
    {
      q: 'Do you integrate with existing EHR and PACS systems?',
      a: (
        <>
          We provide native integrations for major EHRs (HL7, FHIR) and imaging systems
          (DICOM, PACS/VNA). Our interoperability team will validate interfaces in a test
          environment before go‑live to ensure zero workflow disruption.
        </>
      ),
    },
    {
      q: 'What clinical validation supports your AI models?',
      a: (
        <>
          Our algorithms are validated on multi‑site, diverse datasets and benchmarked against
          board‑certified clinicians. We publish performance metrics (sensitivity, specificity,
          AUC) and can share peer‑reviewed studies and FDA clearance details upon request.
        </>
      ),
    },
    {
      q: 'Can your platform be deployed on‑premises?',
      a: (
        <>
          Yes. We support cloud, hybrid, and fully on‑prem deployments. On‑prem installations
          include containerized services, hardware sizing guidance, reference architecture, and
          optional managed updates with zero‑downtime rollouts.
        </>
      ),
    },
    {
      q: 'How long does implementation typically take?',
      a: (
        <>
          Typical timelines range from 4–8 weeks for a single department pilot to 12–16 weeks
          for multi‑site rollouts, depending on the number of interfaces, data migration needs,
          and training requirements.
        </>
      ),
    },
    {
      q: 'What training and support do you provide?',
      a: (
        <>
          We deliver role‑based training for clinicians, admins, and IT staff, plus
          on‑demand learning modules. Enterprise support includes a dedicated Customer Success
          Manager, 24/7 critical support, and quarterly optimization reviews.
        </>
      ),
    },
    {
      q: 'How is data secured and who owns it?',
      a: (
        <>
          Customer data is encrypted end‑to‑end and logically isolated per tenant. You retain
          full ownership of all PHI and clinical data. We access data only for support purposes
          under your authorization and audit all access.
        </>
      ),
    },
    {
      q: 'What are your uptime and SLA commitments?',
      a: (
        <>
          We maintain a 99.9%+ uptime target with redundant infrastructure and continuous
          monitoring. Enterprise SLAs cover response times, incident communications, and
          remediation timelines.
        </>
      ),
    },
  ],
}

export default faq

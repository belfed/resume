# Resume

Personal resume built with React and Tailwind CSS, bundled with Vite. Optimized for A4 print layout.

## Stack

- React 18
- Tailwind CSS 4
- Vite 5

## Getting Started

```bash
npm install
npm run dev
```

## Data

Create a `data.yaml` inside `/src/data` with the following structure and insert your data:
```yaml
header:
  name: John Doe
  role: Cloud & DevOps Engineer

contacts:
  mobile: "+1 555-0143"
  location: "Austin, TX, USA"
  email: john.doe@example.com
  github: https://github.com/johndoe-dev
  linkedin: https://linkedin.com/in/johndoe-cloud

aboutMe: >-
  I am a **systems and cloud engineer** focused on building **scalable infrastructure** and automation pipelines. 
  I thrive in **platform teams** that treat infrastructure as code and value reliability and security. 
  Currently, I am exploring **service mesh architectures** and advanced Kubernetes networking patterns.

skills:
  cloud:
    - AWS
    - Google Cloud Platform
  automation:
    - Terraform
    - Ansible
    - GitHub Actions
  containers:
    - Docker
    - Kubernetes
    - Helm
  languages:
    - Go
    - Python
    - Bash
  monitoring:
    - Prometheus
    - Grafana
    - ELK Stack

certifications:
  - name: CKA (Certified Kubernetes Administrator)
    issuer: The Linux Foundation
    year: "2024"

languages:
  - language: English
    level: Native
  - language: German
    level: B1 (Intermediate)

workExperience:
  - role: Site Reliability Engineer
    company: Nexus Cloud Systems
    website: https://www.nexus-cloud-example.com
    type: Hybrid / Austin, USA
    start: "2023"
    end: Present
    description: >-
      Managing and scaling distributed infrastructure for a high-availability **e-commerce platform**.
    details:
      - Migrated legacy microservices to **Kubernetes**, improving resource utilization by **40%**.
      - Built automated **CI/CD pipelines** that reduced deployment times from 45 minutes to under 8 minutes.
      - Established an on-call rotation and reduced critical incident resolution times (MTTR) by **25%**.

  - role: DevOps Engineer
    company: Stratos Software
    website: https://www.stratos-software-example.com
    type: Remote
    start: "2021"
    end: "2023"
    description: >-
      Implemented infrastructure as code (IaC) and automated environment provisioning for development teams.
    details:
      - Authored reusable **Terraform modules** to standardize multi-region AWS deployments across 6 engineering teams.
      - Managed centralized logging and monitoring stacks, processing over **1TB of logs daily**.
      - Assisted software developers in containerizing their applications and troubleshooting environment mismatches.

education:
  - institution: "University of Texas at Austin"
    degree: Bachelor of Science in Computer Engineering
    location: Austin, TX, USA
    grade: "Honors"
    thesis: "Automated Scaling Patterns in Cloud Environments"

hobbies:
  - Home-labbing and self-hosting
  - Mechanical keyboards
  - Astrophotography
```

## Print

Use the browser's print function (`Ctrl+P`) to export as PDF. The layout is designed for A4 format.

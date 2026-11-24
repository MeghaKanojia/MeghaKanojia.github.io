export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="exp-card">
        <div className="edu-top">
          <div className="exp-title-row">
            <a
              className="exp-logo-link"
              href="https://www.optum.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Optum website"
            >
              <img className="exp-logo" src={`${import.meta.env.BASE_URL}logos/optum-logo.svg`} alt="Optum" />
            </a>
            <h3>Optum (UnitedHealth Group), Software Engineer, Data &amp; Analytics</h3>
          </div>
          <span className="edu-dates">Jun 2022 &ndash; Aug 2025</span>
        </div>
        <p className="edu-location">Gurugram, India</p>
        <ul className="exp-bullets">
          <li>
            Developed an event-driven ETL pipeline, with Azure Functions triggered off Kafka, ingesting
            cross-channel event and campaign data from marketing APIs, JSON payloads, and CSV feeds,
            transforming it into clean, accurately formatted data for Adobe Experience Cloud analytics
            and reporting, with validation rules routing bad records to a dead-letter queue and
            maintaining a 99% SLA for reliable data delivery.
          </li>
          <li>
            Validated campaign data using SQL, Python, and Excel against documented business rules,
            catching and resolving data quality issues before they reached reporting.
          </li>
          <li>
            Built and maintained Power BI dashboards and reports, giving stakeholders visibility into
            campaign and event data.
          </li>
          <li>
            Worked on content modernisation across Adobe Experience Cloud (AEM, Adobe Analytics, Adobe
            Data Collection), supporting content publishing, tag management, and event tracking for 10+
            marketing and engineering teams in an agile, HIPAA-regulated environment, and delivered
            presentations and documentation for the final handover of migrated sites to application
            teams and stakeholders.
          </li>
          <li>
            Migrated on-premises AEM to AEM as a Cloud Service (AEMaaCS), rebuilding 25+ components,
            custom workflows, and editable templates, and testing them against the on-premises versions.
          </li>
          <li>
            Held a 98% MBO score across web analytics, resolving security vulnerabilities and 200+
            support tickets, by building cross-functional relationships across 50+ teams: onboarding
            teams onto AEMaaCS, supporting teams that relied on the ETL pipelines for analytics, and
            creating report suites (provisioned for 100,000 estimated daily page views) and provisioning
            RBAC for teams using Adobe Analytics.
          </li>
        </ul>
      </div>
    </section>
  );
}

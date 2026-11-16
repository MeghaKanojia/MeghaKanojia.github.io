export const featuredProjects = [
  {
    name: "Job Search Agent",
    link: "https://github.com/MeghaKanojia/job-search-agent-public",
    dates: "Aug 2026 – Present",
    stack: "Python, FastAPI, SQLAlchemy, React, TypeScript, LangGraph, pgvector, Docker",
    problem:
      "Job hunting means manually tracking postings across sources and writing tailored application material for each one, with no way to be sure a drafted claim about my own background is actually true.",
    solution:
      "Built a full-stack AI agent: a custom RAG pipeline (fastembed embeddings + pgvector similarity search) retrieves relevant profile facts, and a LangGraph state graph orchestrates generation through a self-correcting draft → validate → retry loop, where a second LLM call acts as a grounding critic and automatically redrafts any output referencing a fact not present in my source profile. Shipped with a FastAPI/SQLAlchemy backend and a React/TypeScript review dashboard, deployed via Docker on Render and Vercel with HTTP Basic auth, Fernet-encrypted secrets, and OAuth read-only scopes.",
    results:
      "Consolidates postings from 5+ external sources into one pipeline. Every generated draft is automatically checked for groundedness before it reaches me, verified end to end with unit and integration tests. Designed, built, deployed, and run solo, with AI-assisted development (Claude Code) as part of the workflow.",
    images: [
      { src: "jobsearch-new-matches.png", alt: "New Matches queue, showing AI-sourced job postings with match scores" },
      { src: "jobsearch-review-queue.png", alt: "Review Queue, generating a tailored resume and cover letter before staging" },
      { src: "jobsearch-analytics.png", alt: "Analytics dashboard tracking new matches, staged, applied, and interview funnel" },
    ],
  },
  {
    name: "Merchant Credit Risk Scorecard & Expected Loss Model",
    link: "https://github.com/MeghaKanojia/credit-risk-scorecard",
    dates: "May 2026 – Jun 2026",
    stack: "Python, Scikit-learn, LightGBM, SHAP, Power BI",
    problem:
      "Lenders need an interpretable way to price credit risk at scale, not just a black-box prediction that underwriters and regulators can't inspect.",
    solution:
      "Engineered features from 300,000+ applicant records across 7 relational tables, then built an industry-standard Weight-of-Evidence scorecard (the interpretable approach regulators and credit committees actually use), benchmarked against a LightGBM challenger model with SHAP explainability.",
    results:
      "0.53 Gini on the LightGBM challenger. Converted model outputs into an Expected Loss (PD × LGD × EAD) view of portfolio risk and exported score-band summaries to a Power BI dashboard for underwriting and pricing decisions.",
    images: [
      { src: "credit-scorecard-shap.png", alt: "SHAP feature importance plot for the LightGBM challenger model" },
      { src: "credit-scorecard-distribution.png", alt: "Score distribution across the applicant population" },
      { src: "credit-scorecard-default-band.png", alt: "Default rate by score band" },
    ],
  },
  {
    name: "Independent Credit Model Validation & Backtesting Audit",
    link: "https://github.com/MeghaKanojia/credit-model-validation-audit",
    dates: "Oct 2026",
    stack: "Python, Statistical Testing, Model Governance",
    problem:
      "A model's reported performance is only as trustworthy as the validation behind it; before trusting one, it needs to be tested independently rather than taken on the original developer's word.",
    solution:
      "Rebuilt a credit risk model from its underlying code and specification from scratch, then ran a full validation suite (Information Value for target leakage, Hosmer-Lemeshow discrimination/calibration, Population Stability Index, Variance Inflation Factor, stress testing) mapped to real bank regulatory frameworks (IFRS 9/IRB-style testing, Pillar 2/ICAAP).",
    results:
      "Produced a structured governance report with findings and recommendations, the same category of audit financial institutions run before relying on a model in production.",
    images: [
      { src: "credit-audit-calibration.png", alt: "Calibration backtest chart comparing predicted vs. actual default rates" },
      { src: "credit-audit-psi.png", alt: "Population Stability Index by feature" },
      { src: "credit-audit-stress-test.png", alt: "Stress-test expected loss under adverse scenarios" },
    ],
  },
  {
    name: "Missense Variant Pathogenicity Prediction using GNNs",
    link: "https://github.com/MeghaKanojia/missense-variant-pathogenicity-prediction",
    dates: "Oct 2025 – Aug 2026",
    stack: "PyTorch, PyTorch Geometric, XGBoost, ESM-2, AlphaFold2",
    problem:
      "Only ~2% of the 4M+ catalogued missense variants in humans have a confirmed pathogenic/benign label; the rest are Variants of Uncertain Significance, and wet-lab validation can't close that gap at the rate new variants are found. We set out to test whether fusing AlphaFold's structural confidence (PAE) with ESM-2's evolutionary embeddings in a graph neural network could improve on existing predictors, and specifically whether PAE-weighted graph edges add value over treating every structural contact as equally reliable.",
    solution:
      "Built and benchmarked 5 model architectures (GCN, GraphSAGE, XGBoost, and PAE-weighted/unweighted GATv2) across 7 trained configurations, on a leakage-safe, protein-level split of 49,303 ClinVar variants (6,597 proteins, split so no protein's structure appeared in both train and test). Tested 3 independent PAE edge-weight encodings with bootstrap and DeLong significance testing to rigorously evaluate the central hypothesis, then diagnosed the result mechanistically with a confidence-score saturation check.",
    results:
      "GraphSAGE was the best of our own models at 0.9148 test AUPRC, ahead of XGBoost (0.9125) and every GATv2 variant (0.907–0.911), though AlphaMissense (the external state of the art) stayed significantly ahead at 0.9286 (p < 0.001). PAE-weighting itself showed no significant benefit over unweighted edges (–0.31%, p = 0.07), a rigorously tested negative result we traced to AlphaFold's confidence scores saturating within the graph's own contact radius, leaving little signal for attention to exploit.",
    images: [
      { src: "missense-summary.png", alt: "Test AUPRC comparison across all seven trained models and AlphaMissense" },
      { src: "missense-phase5-comparison.png", alt: "Model comparison summary across the study's five architectures" },
    ],
  },
  {
    name: "AI-Generated Image Detection for Etsy Listings",
    link: "https://github.com/MeghaKanojia/ai-image-detection-etsy",
    dates: "Personal Project",
    stack: "PyTorch, EfficientNetV2, ConvNeXt, Focal Loss, TTA",
    problem:
      "Marketplaces like Etsy need to tell whether a product photo is a real photograph or AI-generated, since sellers can pass off synthetic images as genuine, scored by F1 on a hidden test set.",
    solution:
      "Ran a 3-phase study across ~3,840 training and 2,058 hidden test images: classical classifiers on frozen embeddings, then end-to-end fine-tuning (EfficientNetV2-S), then advanced training (focal loss, AdamW, OneCycleLR with SWA, mixup, 5-view test-time augmentation, and a frequency-domain FFT branch) with model ensembling.",
    results:
      "Lifted F1 from 0.8134 (best classical baseline) to 0.9356 (best single model, ConvNeXt-Base). Also found, by testing it, that a 3-model ensemble (0.9317) didn't beat the single best model, a genuine negative result reported rather than hidden.",
  },
  {
    name: "Atmospheric Radioactivity Time-Series Forecasting",
    link: "https://github.com/MeghaKanojia/forecasting-radioactivity",
    dates: "Oct 2025 – Nov 2025",
    stack: "R, SARIMA, ETS, TBATS",
    problem:
      "Environmental monitoring agencies need reliable forecasts of atmospheric radioactivity, but the model that fits best on paper isn't always the one that generalizes best.",
    solution:
      "Built a forecasting pipeline in R comparing SARIMA, ETS, and TBATS models on 8 years of monthly EU monitoring data, validating assumptions with ADF, KPSS, and Ljung-Box tests.",
    results:
      "Selected the model that generalized best on held-out test error rather than training fit alone, a methodology directly transferable to monitoring operational or telemetry data over time.",
    images: [
      { src: "forecasting-actual-vs-forecast.png", alt: "Actual vs. forecast radioactivity levels on the held-out test period" },
      { src: "forecasting-timeseries-components.png", alt: "Decomposed time series components (trend, seasonal, remainder)" },
    ],
  },
  {
    name: "Walmart Grocery Sales ETL Pipeline",
    link: "https://github.com/MeghaKanojia/walmart-etl-pipeline",
    dates: "Personal Project",
    stack: "Python, Pandas, SQL, PyArrow",
    problem:
      "Walmart's e-commerce division needed clean, analysis-ready sales data to understand how public holidays affect weekly sales, starting from raw, unmerged tables.",
    solution:
      "Built a Python/Pandas/SQL ETL pipeline merging a SQL sales table with a separate Parquet feature file, cleaning and filtering 231,522 raw rows down to 106,193 validated records, then aggregating mean weekly sales by month.",
    results:
      "Found December and November weekly sales averaging ~$39,249 and ~$36,594, roughly 20% above October's low of ~$32,737, with the mean-vs-median gap ($34,214 vs $24,195) revealing a right-skewed distribution driven by a small number of holiday-week outliers.",
    images: [{ src: "walmart-header.jpg", alt: "Walmart grocery sales project header image" }],
  },
  {
    name: "Grammy Winners vs. Spotify Popularity Analysis",
    link: "https://github.com/MeghaKanojia/grammy-spotify-analysis",
    dates: "Personal Project",
    stack: "PySpark, Pandas, Seaborn",
    problem:
      "Does critical acclaim (Grammy wins) actually track mainstream listener taste, or do the two diverge?",
    solution:
      "Built an end-to-end PySpark ETL and analytics pipeline over 1,159,764 Spotify tracks and 25,370 Grammy records spanning 2000 to 2023, manually resolving 41 ambiguous name-matching edge cases, then compared 12 audio features (danceability, energy, valence, tempo, and more) across Grammy winners, Spotify's annual Top 100, and the general population.",
    results:
      "Found Grammy winners lean toward dance, pop, and hip-hop and show more year-to-year volatility, while mainstream \"Listener Hits\" track the general population far more closely, meaning acclaim and popular taste genuinely diverge.",
    images: [
      { src: "grammy-genre-comparison.png", alt: "Genre distribution comparison between Grammy winners and Spotify's general population" },
      { src: "grammy-valence-trend.png", alt: "Valence (musical positivity) trend by year across cohorts" },
    ],
  },
];

export const otherProjects = [
  {
    name: "Cyclistic Bike Share Analysis",
    link: "https://github.com/MeghaKanojia/cyclistic-bike-share",
    description: "Google Data Analytics capstone case study comparing casual riders and annual members.",
  },
  {
    name: "Coupon Redemption Prediction",
    link: "https://github.com/MeghaKanojia/Coupon-Redemption",
    description: "Predicts coupon redemption likelihood over a 10-year horizon from 18 years of historical data.",
  },
  {
    name: "CocoBean",
    link: "https://github.com/MeghaKanojia/CocoBean",
    liveUrl: "https://meghakanojia.github.io/CocoBean/",
    description: "A chocolate brand website built with HTML and CSS.",
  },
  {
    name: "Resume Project",
    link: "https://github.com/MeghaKanojia/Resume-Project",
    liveUrl: "https://meghakanojia.github.io/Resume-Project/",
    description: "A resume template built using only HTML.",
  },
  {
    name: "HTML Portfolio",
    link: "https://github.com/MeghaKanojia/html-portfolio",
    liveUrl: "https://meghakanojia.github.io/html-portfolio/",
    description: "An early personal portfolio site, built for practice.",
  },
  {
    name: "Digit Recognition",
    link: "https://github.com/MeghaKanojia/Digit-Recognition",
    description: "Computer vision practice project on handwritten digit classification.",
  },
  {
    name: "Fire Detection using OpenCV",
    link: "https://github.com/MeghaKanojia/Fire-Detection-using-OpenCV",
    description: "Computer vision practice project detecting fire in images and video using OpenCV.",
  },
  {
    name: "Hello World",
    link: "https://github.com/MeghaKanojia/Hello-World",
    description: "First GitHub repository, from learning the platform's basics.",
  },
];

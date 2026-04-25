### PROJECT SNAPSHOT

- **Project:** Terraform Remediation Agent
- **Organization:** HashiCorp
- **Timeframe:** 2025-2026 (discovery through private-beta definition)
- **Role:** Product Designer
- **Tools:** Internal prototypes, GitHub PR workflows, customer-zero conversations
- **Summary:** I helped shape an agentic remediation workflow for HCP Terraform that could identify issues and write fixes back into infrastructure code through pull requests. The real design challenge was not the AI itself. It was making the workflow trustworthy enough that security, platform, and application teams could actually use it.

### CASE STUDY

#### Overview

This project started inside a broader exploration of what agentic workflows could look like in HCP Terraform. But the useful question was much narrower: if teams already know about infrastructure problems, how do we help them fix those problems without adding even more risk?

That framing mattered. Customers and internal teams already had signals from security scanners, cost tools, and internal systems. The pain was in the gap between detection and action. I worked on the early design direction for a Terraform remediation agent that could turn those signals into reviewable code changes while still giving teams enough control to trust what the system was doing.

**Image Idea:** Open with an end-to-end concept diagram. Options: a simple flow from *issue detected -> remediation proposed -> PR opened -> human review*; a hero mock that combines a remediation summary with a PR preview; or a one-slide framing visual that contrasts "detection" versus "actual remediation."

#### The Problem

The core problem was not a lack of signals. Teams already had those. The hard part was turning signals into safe, reviewable changes in Terraform code.

That gap created a lot of friction. Security teams could identify misconfigurations, but they often did not own the code. Platform teams owned standards and patterns, but not every repository. App teams were closest to delivery, but not always set up to handle infrastructure remediation quickly. The result was predictable: handoffs, backlog churn, and a lot of repetitive work for changes that mattered but were rarely anyone's favorite job - provider bumps, module updates, control fixes, tagging, and other day-two maintenance tasks.

The design challenge was to make remediation feel genuinely helpful without making it feel reckless.

#### Context

The work sat within HashiCorp's broader agentic exploration, including Project Iverson, and was closely tied to HCP Terraform's role as the system where infrastructure changes are planned and applied. Early conversations treated remediation as a foundation, not a one-off feature. If HashiCorp could safely generate changes and write them back into source control, the same pattern could eventually support security fixes, cost improvements, upgrades, and other operational cleanup.

That made the problem bigger than a single feature surface. It touched onboarding, credentials, repository boundaries, workspace structure, notifications, PR history, and a pretty fundamental question: who should be allowed to act on behalf of whom?

**Image Idea:** Use a systems view here. Options: a map of the ecosystem around the agent (scanner/tool -> HCP Terraform -> VCS -> reviewer); a permissions and ownership diagram showing security, platform, and app teams; or a platform-context visual showing where the agent sits in the Terraform workflow.

#### My Approach

I approached the work as a workflow design problem, not a generic AI feature. My role was to help define what the first useful experience should be, where trust would break down, and how the interaction model could fit the way Terraform teams already worked.

I synthesized strategy conversations, customer-zero discussions, and internal design and engineering syncs into a tighter product shape. I spent most of my time on the moments where the experience could either build confidence or lose it: onboarding a repo or workspace, understanding why a remediation was suggested, reviewing blast radius, tracking what the agent had already done, and deciding how much of the experience should live in HCP Terraform versus in GitHub pull requests.

#### Research and Key Insights

1. **Detection was not the bottleneck; remediation was.** The strongest recurring signal in the notes was that teams already knew about many problems. What they lacked was a low-friction path from issue detection to code change.

2. **Toil reduction was the clearest value proposition.** Repetitive, lower-ambiguity tasks like provider upgrades and straightforward remediations came up over and over as the best place to start. The promise was not autonomous infrastructure management. It was getting painful, high-volume maintenance work off people's plates.

3. **Trust depended on context, not just accuracy.** When people saw automatically created PRs, the reaction was not simply "great, ship it." They wanted to know what rule or control triggered the change, how confident the system was, what else might be affected, and whether similar changes could be grouped instead of creating a flood of noise.

4. **A focused workflow was more compelling than a chatbot.** The notes kept leaning toward opinionated, task-specific experiences over an open-ended assistant. People wanted help with real jobs to be done, not a vague prompt box.

5. **Ownership boundaries shaped the UX.** The workflow had to account for real organizational seams: security identifying issues, platform setting standards, and application teams reviewing or owning the code change. That made auditability, history, and clear handoff points just as important as the remediation itself.

**Image Idea:** This section would benefit from a trust-focused artifact. Options: a quote-and-insight board centered on trust, blast radius, and explainability; a small framework diagram showing the ingredients of trust in the workflow; or a visual comparison of "generic chatbot" versus "focused remediation workflow."

#### Twists and Turns

One of the biggest tensions was scope. It was easy to imagine a broad "agentic experience" that connected lots of tools and lots of use cases at once. But the bigger the concept got, the harder it was to make the first workflow feel concrete and trustworthy. The team kept coming back to a narrower question: what is the first remediation loop that creates real value and proves the model?

Another major twist was onboarding. Repo-based onboarding looked simpler from an implementation standpoint because the agent ultimately needed to write back to source control. But that created its own problems, especially in monorepos and shared-module setups where a single repo could affect many Terraform workspaces. Workspace- or project-based onboarding better matched HCP Terraform's mental model and the user's sense of blast radius, even if it was more complicated under the hood.

There was also a tension between designing a product experience and designing plumbing. VCS write-back, OAuth and service-account strategy, permission validation, and notification behavior could easily get treated like implementation details, but they were central to whether the workflow felt safe and understandable. I ended up treating those surfaces as UX, not just infrastructure.

The work also surfaced a useful distinction between exploration and near-term scope. Dashboards, broader posture views, and richer conversational interaction were all explored, but the notes point to a more constrained private-beta direction centered on proactive remediation, PR creation, and a clearer history of what the system had done.

**Image Idea:** Show the tradeoffs directly. Options: a side-by-side of repo-based onboarding versus workspace/project onboarding; a scope funnel that narrows from broad agentic vision to first remediation loop; or a concept matrix separating exploratory ideas from likely private-beta scope.

#### Key Design Decisions

**1. Design for a specific remediation job, not generic AI interaction.**  
I pushed the experience toward a focused workflow where the system identifies an issue, proposes a fix, and writes back through familiar PR mechanics. That direction fit better with how teams already review infrastructure changes and avoided the vagueness of a chatbot-first model.

**2. Make trust visible inside the workflow.**  
The agent could not just say "here's a fix." The design needed to explain why the change existed, show a confidence signal, surface likely blast radius, and give people a history of prior PRs, issues, and actions. Those elements were not extra polish. They were the product.

**3. Treat write-back as a reusable product surface.**  
Rather than designing a one-off handoff from a single source like Wiz or Cloudability, the work evolved toward a more general write-back model: issue creation, PR history, logs, notifications, and approval states that could support multiple remediation sources over time.

**4. Favor the user's operational model over the technically simpler model.**  
Repo-first thinking was tempting, but it risked obscuring scope and ownership. Leaning back toward workspace and project context gave users a clearer sense of what the agent was acting on and matched the way Terraform operations are actually managed in practice.

**Image Idea:** This is a strong place for annotated product work. Options: an onboarding flow comparing repo-first and workspace-first entry points; a PR detail mock showing confidence, rule context, and blast radius; or a reusable write-back surface diagram covering issue creation, PR history, logs, and notifications.

#### Outcome

The clearest outcome of this work was a sharper, more believable product direction. The team moved from a broad agentic concept toward a narrower remediation workflow built around proactive scanning, generated PRs, and reusable write-back patterns. The design work also made trust requirements explicit: confidence, blast radius, history, and explainability were not side features. They were part of the MVP.

The notes support strong internal alignment and customer-zero interest more clearly than a public launch story. What I can say confidently is that the work shaped the private-beta definition, clarified where the initial experience should live, and influenced how adjacent integration and VCS workflows were framed. It also surfaced the operational requirements that would have to be solved before the experience could scale beyond an internal or early-adopter setting.

**Image Idea:** Close with a "where the work landed" visual. Options: a private-beta MVP summary card; a final concept frame showing the remediation list plus PR history; or a progression visual from broad exploration to a tighter, more shippable workflow.

#### Reflection

This project sharpened the way I think about AI in enterprise products. The interesting design problem was never "how do we add an agent?" It was how to make automation feel accountable inside a messy system of repos, workspaces, permissions, and human ownership boundaries.

It pushed me to work more like a systems designer, connecting product strategy, platform constraints, and UX details that could easily get dismissed as edge cases. It also reinforced something I keep coming back to in enterprise design: the more powerful the automation, the more important it is to design for verification, control, and shared understanding.

### Unsupported or ambiguous details to clarify before publishing

- Whether the remediation agent reached public launch, private beta, or remained in internal/customer-zero definition during the period covered by these notes.
- The final onboarding model: repo-based, workspace-based, project-based, or a hybrid.
- Whether proactive scanning was fully committed as the initial trigger model, or whether manual/integration-triggered entry points also remained in scope.
- The exact first remediation use case chosen for the MVP, beyond general themes like provider upgrades and security-related fixes.
- Whether dashboards and posture views became part of the first release or stayed exploratory.
- Any quantitative outcomes such as PR acceptance rate, remediation speed, or adoption. The notes support the problem framing well, but not publishable metrics.

### Tighter portfolio version (300-500 words)

I worked on the early design direction for a Terraform remediation agent at HashiCorp: a workflow intended to turn detected infrastructure issues into safe, reviewable code changes. The project sat within a broader exploration of agent-based experiences in HCP Terraform, but the real design challenge was much more grounded than "AI for ops." Teams were already finding problems through security and cost tools. The hard part was getting fixes back into Terraform code without adding more handoffs, more noise, or more risk.

I approached the work as a workflow problem, not a chatbot problem. Through customer-zero discussions and cross-functional product and engineering syncs, I helped shape the first useful loop: identify a remediation opportunity, generate a proposed change, and write it back through a pull request. The strongest signal across the notes was that toil reduction mattered more than novelty. Repetitive, lower-ambiguity work like provider upgrades and straightforward fixes looked like the right place to start.

The biggest insight was that trust depended on context, not just whether the generated change was technically correct. As soon as people saw auto-created PRs, they wanted to know what rule triggered the change, how confident the system was, what else might be affected, and how to review prior actions. That pushed the design beyond a single recommendation screen. I focused on the surrounding experience: onboarding, blast radius, PR and issue history, logs, notifications, and the question of whether the workflow should start from repositories or from Terraform workspaces and projects.

One of the biggest tradeoffs was between technical simplicity and user clarity. Repo-based onboarding was easier to reason about from a write-back perspective, but workspace- and project-based context better matched how Terraform teams understand ownership and operational scope, especially in monorepos. I helped steer the work toward that operational model while also treating VCS write-back as a reusable product surface rather than a one-off integration.

The outcome was a clearer and more credible private-beta direction. The work narrowed a broad agentic concept into a more focused remediation workflow and made trust requirements explicit: confidence, explainability, blast radius, and history were part of the core value, not secondary features. It was a good reminder that in enterprise AI, the product is not just automation. It is automation people can understand, verify, and safely act on.

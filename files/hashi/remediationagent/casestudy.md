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

#### The user problem

<b> There is fundamentally a lot of toil when it comes to managing cloud infrastructure at scale.</b>

Security teams spotted problems but didn't own the code. Platform teams owned standards but not every repo. App teams were closest to delivery but rarely set up for infra remediation. The result: handoffs, backlog churn, and repetitive work like provider bumps, module updates, control fixes, and tagging that mattered but belonged to no one.




#### How might we?

How might we create an agent that reduces toil for Terraform practictioners?


#### Solution

1. **Auto raised PRs** The strongest recurring signal in the notes was that teams already knew about many problems. What they lacked was a low-friction path from issue detection to code change.


2. **Autonomously finding issues** When people saw automatically created PRs, the reaction was not simply "great, ship it." They wanted to know what rule or control triggered the change, how confident the system was, what else might be affected, and whether similar changes could be grouped instead of creating a flood of noise.

4. **A focused workflow that could be built upon** The notes kept leaning toward opinionated, task-specific experiences over an open-ended assistant. People wanted help with real jobs to be done, not a vague prompt box.


**Image Idea:** 3 cards of each member of the solution.

#### Designs impact and process


**1.Designing the Pull request**  
Artifacts:
- excalidraw
- PR body
- Confidence score
- Workflow of github

Metrics
- PRs raised
- Merge rate

**2. Agent discovered issue tracking**  
Artifacts:
- PR page
- Finding page
- Diff page
- Change requests and why that didn't work
- Github issues as an entrypoint and why that doesn't work

Metrics
- Archive and close rate
- Issues found
- Remediations


**3. Extraneous workflows**  
Artifacts:
- Landing page
- Wiz remediation
- Plan analyzer

Metrics: Impressions

#### Outcome

The clearest outcome of this work was a sharper, more believable product direction. The team moved from a broad agentic concept toward a narrower remediation workflow built around proactive scanning, generated PRs, and reusable write-back patterns. The design work also made trust requirements explicit: confidence, blast radius, history, and explainability were not side features. They were part of the MVP.

The notes support strong internal alignment and customer-zero interest more clearly than a public launch story. What I can say confidently is that the work shaped the private-beta definition, clarified where the initial experience should live, and influenced how adjacent integration and VCS workflows were framed. It also surfaced the operational requirements that would have to be solved before the experience could scale beyond an internal or early-adopter setting.

**Image Idea:** Close with a "where the work landed" visual. Options: a private-beta MVP summary card; a final concept frame showing the remediation list plus PR history; or a progression visual from broad exploration to a tighter, more shippable workflow.

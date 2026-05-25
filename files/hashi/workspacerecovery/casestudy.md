### PROJECT SNAPSHOT

- **Project:** Terraform Remediation Agent
- **Organization:** HashiCorp
- **Timeframe:** 2025-2026 (discovery through private-beta definition)
- **Role:** Product Designer
- **Tools:** Internal prototypes, GitHub PR workflows, customer-zero conversations
- **Summary:** I helped shape an agentic remediation workflow for HCP Terraform that could identify issues and write fixes back into infrastructure code through pull requests. The real design challenge was not the AI itself. It was making the workflow trustworthy enough that security, platform, and application teams could actually use it.

### CASE STUDY

#### Overview


Workspace Recovery began with a question that sounded small: can customers undelete a workspace? Pretty quickly, it became clear this was not really about an undo button. In HCP Terraform, deleting a workspace can wipe out the state and metadata Terraform needs to manage real infrastructure. When that happened, customers were often left recreating workspaces by hand, pulling snapshots, or re-importing resources one by one.

That made the project feel bigger than a convenience feature. For customers, accidental deletion could mean downtime, messy recovery work, and long stretches of manual cleanup. For HashiCorp, it exposed a gap between what people assumed a managed infrastructure product would protect and what the product could actually recover.

**Image Idea:** Open with a simple "why this mattered" visual. Options: a before/after journey showing *deleted workspace -> manual recovery* versus *deleted workspace -> Recoverable Items -> recovery run*; an annotated screenshot of the deleted-state problem if you have one; or a single stat/quote card built around the Epic Games recovery estimate.

#### The user problem

<b> Deleting workspaces or stacks could lead to hours to days of downtime on mission critical infrastructure.</b>

This directly impacts customer revenue, and brand perception as a result.




#### How might we?

How might we design a seamless, disaster recovery process?


#### Solution

1. **Recoverable items table** The strongest recurring signal in the notes was that teams already knew about many problems. What they lacked was a low-friction path from issue detection to code change.


2. **Frictionless flow** When people saw automatically created PRs, the reaction was not simply "great, ship it." They wanted to know what rule or control triggered the change, how confident the system was, what else might be affected, and whether similar changes could be grouped instead of creating a flood of noise.

4. **A new pattern** The notes kept leaning toward opinionated, task-specific experiences over an open-ended assistant. People wanted help with real jobs to be done, not a vague prompt box.


**Image Idea:** 3 cards of each member of the solution.

#### Designs impact and process


**1.Recoverable table**
Artifacts:
- Table
- Modal
- Filters
- why on workspace table didn't work
- IA

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

## PROJECT SNAPSHOT

- **Project:** Workspace Recovery / Recoverable Items
- **Organization:** HashiCorp, HCP Terraform
- **Timeframe:** Jul-Nov 2025
- **Role:** Product Designer, Terraform Core-Cloud
- **Tools:** Figma, customer interviews, synthesis docs
- **Summary:** I led design on a recovery flow for accidentally deleted HCP Terraform workspaces. What sounded like a simple "undelete" request turned out to be a much bigger reliability problem, and I helped turn it into a scoped MVP called **Recoverable Items**.

## CASE STUDY

### Overview

Workspace Recovery began with a question that sounded small: can customers undelete a workspace? Pretty quickly, it became clear this was not really about an undo button. In HCP Terraform, deleting a workspace can wipe out the state and metadata Terraform needs to manage real infrastructure. When that happened, customers were often left recreating workspaces by hand, pulling snapshots, or re-importing resources one by one.

That made the project feel bigger than a convenience feature. For customers, accidental deletion could mean downtime, messy recovery work, and long stretches of manual cleanup. For HashiCorp, it exposed a gap between what people assumed a managed infrastructure product would protect and what the product could actually recover.

**Image Idea:** Open with a simple "why this mattered" visual. Options: a before/after journey showing *deleted workspace -> manual recovery* versus *deleted workspace -> Recoverable Items -> recovery run*; an annotated screenshot of the deleted-state problem if you have one; or a single stat/quote card built around the Epic Games recovery estimate.

### The Problem

The real problem was not that deletion existed. It was that recovery barely existed.

The notes were very consistent on that point: once a workspace was deleted, support could not natively restore it. Customers either had to recreate the workspace and manually import orphaned resources, or, in Terraform Enterprise, roll back a much larger snapshot just to get one workspace back. Neither path matched the size of the mistake.

One support example made the cost feel especially concrete. Epic Games had nine deleted workspaces, and recovery was estimated at **three to five days per workspace**. That is a serious operational problem, not a small usability issue.

### Context

HCP Terraform is an infrastructure management product, so a "workspace" is not just a project container. It holds the state, variables, history, and workflow context needed to manage real infrastructure over time.

The user context mattered just as much. My research plan focused on two main personas: app developers and platform engineers. In practice, the person who triggered a deletion was often not the person best equipped to recover from it. Several notes point to downstream teams or automation layers deleting workspaces through API calls, internal tooling, or workspace-as-code workflows, while the actual cleanup landed with upstream platform admins.

That mismatch shaped the whole problem. Recovery had to fit the reality of enterprise operations, not just the UI.

**Image Idea:** Add a quick actor map here. Options: a two-persona diagram showing app developer vs. platform admin responsibilities; a swimlane showing who deletes versus who recovers; or a lightweight systems diagram showing API/tooling deletion paths flowing into admin-led recovery.

### My Approach

I partnered with PM Garvita Rai to frame the work around three questions: how accidental deletion actually happened, what a believable recovery path should bring back, and how customers were already trying to protect themselves from this risk.

From there, I ran customer interviews and contextual inquiry, then pulled the findings into a tighter MVP definition. My role was not just to design a flow. I was helping the team decide what problem we were actually solving, who the feature was really for in the moment of failure, and where to stop before "workspace recovery" quietly turned into a much larger disaster-recovery or archival project.

I translated that research into a decision doc covering information architecture, terminology, friction, retention, and the adjacent product rules that make enterprise features real, like naming conflicts and billing behavior.

### Research and Key Insights

**1. State recovery was the real value.**  
Across the notes, customers consistently treated the state file as the thing that really mattered. Variables and history were important, but manual re-import was the true pain point, especially for large workspaces. In one interview summary, a workspace with 1,000+ resources made import-based recovery feel basically unrealistic.

**2. The demand came from two different mindsets.**  
Some customers had already been burned by accidental deletion. Others wanted protection for something they hoped would never happen. One customer said they should "theoretically never use this feature," but still wanted it there. That mattered because I was designing for both actual recovery and peace of mind.

**3. Existing guardrails did not solve the problem.**  
Customers already had guardrails: Git-based approvals, Terraform-managed Terraform, Sentinel policies, and internal controls. Mistakes still happened anyway. In some cases, the riskiest failures came from automation and API-driven flows, which meant more confirmation UI was never going to be enough.

**4. The real recovery actor was usually an org admin.**  
One of the most useful findings in the decision doc was that downstream workspace admins usually escalated deletion issues to upstream Terraform org admins. That helped me stop thinking about recovery as a workspace-level action and place it at the organization level instead.

**5. Retention was a product decision, not a default setting.**  
Seven days was too short. A much longer window raised the risk of drift, expired variables, and misuse. Research pointed to a 30-day retention period as the most balanced answer.

**Image Idea:** This section would work well with a synthesis artifact. Options: a research board screenshot with key themes called out; a small "what customers said" quote collage; or a decision matrix visual comparing short, medium, and long retention windows with the 30-day choice highlighted.

### Twists and Turns

This project got messy fast because "recovery" could mean a lot of different things.

At first, it was tempting to think the answer was better deletion prevention. But the notes show the team had already added friction in the UI, and many accidental deletions still came through code and API workflows. That pushed the work away from prevention-only thinking and toward recovery as its own product capability.

Scope pressure was constant. Some customers wanted configurable retention windows. Some wanted archival behavior for stale workspaces. Some wanted rollback to older states, not just recovery of the most recently deleted workspace. The research plan explicitly scoped out things like full audit history and n-2 rollback, and that restraint mattered. Without it, the project could have turned into a much blurrier platform effort.

There was also a real tension between simplicity and safety. A one-click restore sounds great until you think about what happens next. The notes make it clear that silent restoration could hide drift or other problems until a user made a critical change later. I had to design for confidence, not just speed.

### Key Design Decisions

**I placed recovery at the org level.**  
Because the operational owner was usually a platform engineer or org admin, I kept the flow at the organization level instead of scattering it across workspace and project views.

**I renamed the feature from "workspace recovery" to "Recoverable Items."**  
That was not just a naming exercise. It gave the product room to include stacks and other recoverable objects later without forcing a second IA change.

**I kept friction in the recovery flow.**  
Rather than restoring a workspace silently and pretending nothing happened, I supported a deliberate recovery flow that nudged users to verify what they were bringing back. Later notes describe this as a dedicated recovery run that behaves like a normal Terraform plan/apply, but with more context.

**I chose a fixed 30-day retention window.**  
This came straight out of the research tradeoffs: long enough to be useful, short enough to avoid turning the feature into archival storage or long-term drift debt.

**I treated edge cases like naming collisions and billing as part of the design.**  
The docs show how quickly this feature touched adjacent systems. It was a good reminder that enterprise UX is often as much about product rules as it is about flows and screens.

**Image Idea:** Show the product thinking, not just final UI. Options: an IA diagram for why recovery lives at the org level; a side-by-side of "Workspace Recovery" versus "Recoverable Items" naming and scope; or an annotated recovery flow showing the deliberate friction and recovery run.

### Outcome

The clearest outcome in the notes is that the work moved from a recurring request into a defined MVP. By the end of the project, the team had aligned on an in-product recovery concept called **Recoverable Items**, scoped around accidentally deleted workspaces and stacks, organization-level access, a 30-day retention window, and a recovery run that restores the workspace "as if it were never deleted."

I also see evidence that the work was shared beyond the core team. The support-sync notes mention a short internal presentation and demo, with the feature described as straightforward, nearly ready, and targeted for beta soon. Just as important, the design work clarified what was not part of the MVP: not full audit history, not unlimited retention, and not a generic archival system.

I would not overclaim beyond that. This folder does not give me a clean public-launch story or measured post-launch impact. What it does support is a research-backed product direction, a tighter MVP, and a clear set of decisions the team could actually build from.

**Image Idea:** End with something that feels concrete and shippable. Options: a polished mock of the Recoverable Items list and recovery entry point; a storyboard of the recovery run experience; or a one-slide MVP summary showing what was in scope vs. explicitly out of scope.

### Reflection

This project sharpened the way I think about enterprise UX. The hard part was not drawing an "undelete" flow. It was understanding the system around the failure: who caused it, who owned the recovery, what data actually mattered, and where a tightly scoped fix could accidentally turn into a much bigger platform promise.

It also reminded me that good product judgment often shows up in what you choose not to build. By keeping the work focused on high-confidence recovery instead of generalized rollback or archival, I helped the team move from reacting to a feature request to defining something more coherent and buildable.

## Unsupported or ambiguous details to clarify before publishing

1. **Whether the feature ultimately shipped publicly.** The notes support an internal demo and "beta expected soon," but not a confirmed launch.
2. **Exact beta timing.** A support-sync mentions beta in "the next two weeks," but the exact date is unclear.
3. **Final naming-collision behavior.** One doc says deleted names should not be reusable during the 30-day window; the later support-sync says a conflicting workspace can exist but must be renamed before recovery.
4. **Final scope of what was restored beyond state, variables, and history.** Working notes mention varsets, policy sets, run tasks, and VCS settings as considerations, but the final MVP scope is not fully explicit.
5. **Whether recovery was admin-only or broadly self-service.** The design rationale points to org-level admin ownership, but some notes still describe the feature as self-service.
6. **Measured customer or business impact after release.** The folder includes strong pre-release evidence, but no confirmed post-launch metrics.

## Tighter portfolio version (300-500 words)

Workspace Recovery started with a simple question that had a surprisingly messy answer: what should happen when someone accidentally deletes an HCP Terraform workspace?

At the time, the honest answer was "not much." Once a workspace was gone, customers often had to recreate it and manually import resources one by one, or restore much larger system snapshots to recover a single thing. One internal support note cited Epic Games, where recovering nine deleted workspaces was estimated at three to five days per workspace. That made it clear this was not just about adding an undo button.

I partnered with PM Garvita Rai to understand how deletion actually happened, what customers expected recovery to restore, and how they were already trying to protect themselves from this risk. We ran customer interviews and contextual inquiry, then used that research to shape a scoped MVP.

Three insights really drove the design. First, the state file was the core asset; manual import was the part customers could not scale. Second, the person who caused the problem was often not the person who fixed it. Deletions frequently came from downstream teams or automation, but recovery usually escalated to platform admins. Third, existing guardrails were not enough. Customers already had approvals, policies, and workflow controls, but mistakes still slipped through, especially in API-driven systems.

That led to several key decisions. I placed the feature at the organization level instead of duplicating it across workspace views. I renamed it from "workspace recovery" to **Recoverable Items** so it could extend to stacks and other object types later. I also kept deliberate friction in the flow: instead of silently restoring a workspace, the design guided users through a recovery action and into a recovery run so they could verify what they were bringing back. The research also helped me land on a fixed **30-day retention window**: long enough to be useful, but not so long that it turned into archival storage.

The outcome was a research-backed MVP definition for in-product recovery of deleted workspaces and stacks. The notes show the team aligning around **Recoverable Items**, with organization-level access and a recovery run that restored the workspace "as if it were never deleted." The docs do not confirm a public launch, so I frame the result as a strong product direction and internal alignment, not shipped impact.

What I learned from the project was simple: enterprise UX is often about designing for failure, not just success. The real work was setting the boundaries clearly enough that the team could build something trustworthy without accidentally promising a much larger disaster-recovery system.

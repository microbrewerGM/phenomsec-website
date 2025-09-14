---
layout: default
title:  "Factorial Separation of Duties for Modern AppSec Compliance"
date:   2023-02-21 20:52:52
categories: appsec compliance
show_sidebar: true
---

# Factorial Separation of Duties for Modern AppSec Compliance

Author: Aaron Smith

Original posting for [The Purple Book Club](https://www.thepurplebook.club/blog-posts/factorial-separation-of-duties-for-modern-appsec-compliance)
Originally Posted: February 21, 2023

## What's on the other side of the mountain?

(../img/fact-separation-moutain-image-DALL.webp)

The place where the customers and users of our software applications are; it’s what’s driving our organizations to climb over to the other side.

Traditionally, climbing was the only way to cross a mountain pass. We form a plan because it's a risky endeavor. We pull together our supplies, wear our packs, familiarize ourselves with our guide, set up a meeting location, and then start our journey. The first target is  base camp, the first of many waypoints and stoppages. If you enjoy mountain climbing or have read or watched content about it, this may sound familiar.

With today’s technology we can ride in a car instead of a risky climbing endeavor. So how do we, as technologists, help get the software to the other side of the mountain faster? I would say, build a road. Or better yet, use the roads that other technologists have built so that we do not have to build our own. Again, we can’t do it quickly or independently, because we (our hypothetical organization) are building parts of the vehicle that traverse the new roads (built by other organizations that focus on roads). Some of us are concerned about the trip's travel time, while others fret about the road's condition and tight curves.

What about the guides, support staff, and staging camps that we absolutely depended upon to keep us safe and transport supplies? The majority of organizations are stuck driving around roads built between the staging camps. This is our current state of manual gates for QA (quality assurance) checks for software pipelines – we have automated very well up to each transition point in our development pipelines.

How do we build a better metaphorical road for our software factories and pipelines to avoid costly stoppages? We build the guardrails and safety checks to keep us safe on the road if we have to veer for any reason. When it comes to technology guardrails we can accomplish this via Factorial Separation of Duties (SoD).

"Factorial separation is applied when several factors contribute to the completion of the activity. (For example, two-factor access authentication.)" (Baykara)

There are a slew of high-risk activities throughout DevSecOps workflows, such as open source software usage, code merges, application factory pipelines, release and deployment to production. As business leaders, architects, and engineers for software security, we can reduce risk and speed up.

## How do we do that?

We perform risk reduction to help mitigate errors, deficiencies, inaccuracies, irregularities or corruption. We divide up our tasks to be completed, our undertakings and activities, as well as decisions and transactions. This division is one of the primary principles of SoD. We assign responsibilities to different people to reduce the risk around approvals, implementations, recording, managing control, purchasing or interactions.

Factorial SoD enables product managers, development teams, security teams, operations teams and business leaders, to ensure that their responsibilities and concerns are met. How do I know (regardless of where I sit in the organization) that the new code being merged into our trunk is functioning and safe to run? Let's factor our risk out.

A code merge can combine newly developed code and additional third-party code, typically Free/Libre and Open Source Software (FLOSS). Let's model our roles, concerns, and risk reduction activities.

Role --> Concern --> Activity

Product Manager --> FLOSS Vulnerabilities --> FLOSS Vulnerability Checks

Legal Counsel --> FLOSS Licensing --> FLOSS Licensing Checks

Business Director --> App Code Vulnerabilities --> Static Code Checks

Operations Lead --> App and Data Exposure via IaC --> IaC Checks

Operations Lead --> Production Drift Detection --> Web App Vulnerability Checks

Compliance Analyst --> Production Releases --> Committing Fraud via Code Functions

We are missing one critical component of our model, which is risk management thresholds. Not everything is binary and it’s how the role holder knows the activity satisfies the concern put forth. Thresholds will allow us to perform an activity without an absolute 100% reduction of the risk. Completing every single task and reducing every single risk to zero is an academic endeavor – the real world can’t slow down to accommodate this  time and cost. 

Let's pick on our FLOSS code for a bit. We put in vulnerability and licensing checks to be executed, with thresholds to meet, to satisfy our concerns. I am a cybersecurity professional (my role), and I'm concerned about high and critically-defined FLOSS vulnerabilities residing in my code that is executed in production. Once the FLOSS scanners check for our concerns and if they meet our threshold (no critical or high issues), we are satisfied and really don't need to be alerted, emailed, or have a daily standup to ask how the security of our FLOSS code is.

We continue to factor out our risks and put rigor behind the automated protections built up to satisfy our concerns. I encourage those of you in the industry to take a look at The DevOps Audit Defense Toolkit.

"The Toolkit summarizes the techniques they use to mitigate risk, and also provides a section answering the most common questions about value creation, compliance, and DevOps." 

An example within the Toolkit pertains to committing fraud within code functions. Protections, such as dual-developer or peer code reviews, and handling new code are put into place followed by FLOSS and static code analysis, with each rule set for analysis approved by the Change Approval Board (CAB).

Allowing developers to code and release to production is analogous to allowing the driver of the car to be in charge all alone up the mountain, bypassing those stopping points. How can we trust the driver with our important product, get it to the customer, and get it back again with payment? Those mountain roads aren't straight as an arrow or level, nor do they have guardrails to keep the car on the road, and the road builders never protect you or your cargo.

These safeguards are our responsibility because we live and work in the age of the Shared Responsibility Model from cloud providers (a.k.a., road builders). We gather our resources from others that have done it before and done a decent job at it, just as we bring in FLOSS to handle some of the extremely common components. Why would we invent and build a wheel when some great builders out there have already built wheels for us to use? The risk reduction is to test the wheel to make sure it works for the vehicle that we are building to go up the road and over the mountain. Factorial SoD allows us to have visibility into the safety checks that go into the automated workflow of developing applications in our dynamic, modern era.
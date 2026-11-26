# UX notes and demonstration guide

This student prototype covers Home, About Us, Benefits, Partners, Members, Online Services, and Downloads. It presents selected official information and links. The group can use it to illustrate recommendations from the original-site evaluation. Treat expected benefits as design hypotheses until the redesign is tested with participants.

## Demonstrate the three interaction heuristics

| Principle | Scenario | What to record |
| --- | --- | --- |
| User control and freedom | In Downloads, select Membership and search for PMRF. Open the PMRF-FN details, then close with Escape or Close. | The same query and category remain selected, and keyboard focus returns to the button that opened the details. |
| Error prevention | Compare PMRF and PMRF-FN side by side. Open one details dialog before opening its PDF. | Both cards show the complete title, intended audience, and PDF format. The official document opens only after the separate Open official PDF action. |
| Error recognition and recovery | Search for a term with no match. Use Clear filters. Then visit an invalid local address such as `/missing-page` and choose Browse Downloads. | The empty state explains the outcome and returns focus to search after clearing. The invalid-address screen explains the problem and links to a working page. |

The no-results screen is an empty state. The unknown-route screen demonstrates recovery from a navigation error.

## Review the other heuristics

Check that the active navigation and filter result counts show status. Assess plain service labels and the reuse of patterns across pages. Confirm that task shortcuts are easy to scan and that official contact, directory, and document links give users somewhere to get help. Evaluate visual hierarchy against the tasks the group identifies in the original-site study.

## Capture evidence

Use the same browser width and zoom for each original and redesigned screenshot. Record the route, tested task, observed problem, and proposed change. For a behavior that a single screenshot cannot show, capture the relevant interaction states in sequence. Put confirmed findings and screenshot references in the checklist.

## Screenshots

These comparisons are design evidence captured on November 24, 2026. Add the group’s evaluation results when available.

| Task or state | Original | Prototype |
| --- | --- | --- |
| Find membership, benefits, or forms from the homepage | [Original homepage](evidence/homepage-original.jpg) | [Redesigned homepage](evidence/homepage-prototype.jpg) |
| Choose a membership form | [Official Downloads with Forms expanded](evidence/downloads-original.jpg) | [Form comparison](evidence/downloads-form-comparison.jpg) |
| Check a form before opening the PDF | | [Form details](evidence/downloads-form-details.jpg) |
| Recover from a search with no matches | | [No results](evidence/downloads-no-results.jpg) |
| Recover from an invalid address | | [Page not found](evidence/invalid-address.jpg) |

## Sources

- [Group Figma reference](https://www.figma.com/proto/IF6adxRCmazFUqwbYPUw55/HCI-Assignment?page-id=489%3A217&node-id=489-256)
- [PhilHealth Home](https://www.philhealth.gov.ph/) and [official anniversary artwork](https://www.philhealth.gov.ph/images/philhealth-31st-anniversary.png)
- [PhilHealth About Us](https://www.philhealth.gov.ph/about_us/), [Benefits](https://www.philhealth.gov.ph/benefits/), [Partners](https://www.philhealth.gov.ph/partners/), [Members](https://www.philhealth.gov.ph/members/), and [Downloads](https://www.philhealth.gov.ph/downloads/)
- [PhilHealth Online Services](https://www.philhealth.gov.ph/services/) for the service categories and destinations
- [Jakob Nielsen’s ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [W3C Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/)

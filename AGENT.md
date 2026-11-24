# PhilHealth HCI project instructions

## Scope

Maintain the six frontend prototype pages: Home, About Us, Benefits, Partners, Members, and Downloads. Use React, TypeScript, Vite, React Router, Lucide icons, and plain CSS. Keep data local and link separately to official PhilHealth services. The app handles public information only.

## Design and behavior

- Follow the group’s Figma visual direction with a green palette, yellow accents, a compact hero, and service cards. Keep user tasks prominent.
- Use readable type, descriptive labels, and consistent components. Use icons with text where the meaning matters. Avoid emojis.
- Use semantic HTML, keyboard controls, visible focus, meaningful image descriptions, and accessible names. Verify responsive layout and WCAG 2.1 AA contrast targets.
- Keep form names and destinations tied to published sources. Use the full form title, audience, and format to prevent mistakes. Make dismiss, reset, and recovery actions behave as labeled.
- Keep public URLs and structured form data in the content module and use the shared component and style layers.
- Use the local site for QA. Run `npm run build` and check the affected interactions before updating the checklist. Record observed study findings and proposed changes separately.

## Publishing

After verifying each completed user-requested change, commit the intended files, push to `origin/main`, and verify the production deployment on Vercel.

## PAUSE and CONTINUE

On **PAUSE**, stop development immediately. Stop active work owned by the current session where possible, and report the last completed step and anything still running or unverified. Preserve changes already on disk. On **CONTINUE**, inspect the checklist and current files, then resume the first unfinished step.

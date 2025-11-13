# Material Design Research Notes

## Style Guide Summary
**Source:** [Material Design Style Guide](https://github.com/kaw393939/swiss_design_lineage_vibecoding/blob/main/style-guides/advanced/MATERIAL-DESIGN-GUIDE.md)

### Core Philosophy
- Digital surfaces behave like physical materials
- Motion reveals relationships and hierarchy  
- Bold color creates visual delight
- Grid-based layouts with intentional white space
- Typography and imagery work together

### Key Visual Elements

#### Color System
- **Primary:** #6200EE (purple 500)
- **Secondary:** #03DAC6 (teal 200)  
- **Surface:** #FFFFFF
- **Background:** #FAFAFA
- **Error:** #B00020

#### Typography (Roboto)
- **H1:** Roboto Light 96px, -1.5px tracking
- **H2:** Roboto Light 60px, -0.5px tracking
- **H3:** Roboto Regular 48px, 0px tracking
- **H4:** Roboto Regular 34px, 0.25px tracking
- **H5:** Roboto Regular 24px, 0px tracking
- **H6:** Roboto Medium 20px, 0.15px tracking
- **Body 1:** Roboto Regular 16px, 0.5px tracking
- **Body 2:** Roboto Regular 14px, 0.25px tracking

#### Grid System
- **8dp grid system** - Everything aligns to 8px baseline
- **Responsive breakpoints:** 600px, 1024px, 1440px, 1920px
- **Column grids:** 4-col (mobile), 8-col (tablet), 12-col (desktop)
- **Margins:** 16dp (mobile), 24dp (tablet), 24dp+ (desktop)
- **Gutters:** 16dp (mobile), 24dp (tablet/desktop)

#### Elevation & Shadows
- **0dp:** Background surface
- **1dp:** Cards at rest  
- **2dp:** Raised buttons
- **4dp:** App bar
- **6dp:** Floating action button (FAB)
- **8dp:** Navigation drawer
- **16dp:** Modal dialogs
- **24dp:** Pop-up menus

#### Motion & Animation
- **Easing:** cubic-bezier(0.4, 0.0, 0.2, 1) (standard)
- **Duration:** 100ms (simple), 200-300ms (complex), 400ms (screen transitions)
- **Transforms:** Scale, translate, opacity (avoid rotate)

## Reference Sources to Find
- [ ] material.io - Official guidelines
- [ ] Google's apps (Gmail, Drive, Calendar)
- [ ] Android OS interface examples
- [ ] Material Components demo sites

## Design Prompt Templates (Ready to Use)

### Initial Transformation
```
Transform this Swiss design site into Material Design:

Reference the Material Design guidelines at material.io.

Key requirements:
- Use 8dp grid system throughout
- Implement elevation with realistic shadows (use 1dp, 4dp, 6dp levels)
- Color palette: Primary [#6200EE purple], Secondary [#03DAC6 teal]
- Typography: Roboto font family with Material type scale
- Cards with 4dp border-radius and 1dp elevation at rest
- Floating Action Button (FAB) in bottom-right, primary color, 6dp elevation
- Motion: 300ms standard easing for interactions
- Responsive: 4-col mobile, 8-col tablet, 12-col desktop grid

Start with the hero section. Show me the result.
```

### Component Refinement
```
Review this [component name] and refine it to match Material Design principles:

Specific checks:
- Is elevation appropriate for this component type?
- Are shadows using correct ambient + directional light?
- Does color contrast meet WCAG AA (4.5:1 minimum)?
- Is typography using correct Roboto weight and size from type scale?
- Are touch targets minimum 48x48dp for mobile?
- Are corner radiuses 4dp (cards, buttons)?
- Does motion use standard easing curve and 200-300ms duration?
- Is spacing using 8dp increments?

Screenshot: [paste image]

Suggest specific refinements with Material Design guidelines references.
```

## Common Mistakes to Avoid
- ❌ Flat surfaces everywhere (Material needs elevation hierarchy)
- ❌ Incorrect shadows (using generic CSS box-shadow)  
- ❌ Wrong corner radius (using arbitrary radiuses instead of 4dp)
- ❌ Poor color contrast (not checking WCAG AA compliance)
- ❌ Inconsistent spacing (using random pixels instead of 8dp increments)
- ❌ Overusing FAB (more than one FAB per screen)
- ❌ Wrong typography (not using Roboto or incorrect weights/sizes)

## Authenticity Checklist
- [ ] 8dp grid system used throughout
- [ ] Elevation hierarchy clear (0dp to 24dp range)  
- [ ] Shadows use ambient + directional light
- [ ] Bold, saturated colors (not muted or pastel)
- [ ] Primary and secondary colors clearly defined
- [ ] Cards have 4dp border-radius and appropriate elevation
- [ ] Roboto font family used exclusively
- [ ] Type scale follows Material specifications
- [ ] FAB present for primary action
- [ ] Motion uses Material easing curves
- [ ] WCAG AA contrast minimum (4.5:1)

---
*Research completed: [Date]*
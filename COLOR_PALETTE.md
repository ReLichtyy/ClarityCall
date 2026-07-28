# Clarity Call Color Palette

## Base Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| background | `#070812` | Main background color |
| sidebar | `#10101A` | Sidebar background |
| surface | `#0D1520` | Card/panel background |
| surface-elevated | `#111829` | Elevated elements |
| surface-hover | `#162335` | Hover states |
| surface-active | `#192444` | Active/pressed states |

## Border Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| border-subtle | `#182434` | Subtle borders |
| border-default | `#243247` | Default borders |
| border-strong | `#344765` | Strong/emphasized borders |
| border-focus | `#5BBCFF` | Focus states |

## Text Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| text-primary | `#F3F6FA` | Primary text |
| text-secondary | `#A6B1C2` | Secondary text |
| text-muted | `#6F7091` | Muted/disabled text |
| text-disabled | `#465367` | Disabled text |

## Semantic Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| primary | `#5BBCFF` | Primary actions, links |
| secondary | `#52C7D2` | Secondary actions |
| success | `#46CD9A` | Success states, confirmations |
| warning | `#E28B48` | Warning states |
| danger | `#F07178` | Error states, destructive actions |
| info | `#6BA7FF` | Informational content |

## Subtle Semantic Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| primary-subtle | `#14264A` | Primary backgrounds, badges |
| secondary-subtle | `#102034` | Secondary backgrounds |
| success-subtle | `#102025` | Success backgrounds |
| warning-subtle | `#302510` | Warning backgrounds |
| danger-subtle | `#321810` | Danger backgrounds |
| info-subtle | `#142640` | Info backgrounds |

## Gradients & Effects

| Name | Value | Usage |
|------|-------|-------|
| gradient-brand | `linear-gradient(135deg, #14254A 0%, #001520 100%)` | Brand gradient backgrounds |
| glow-blue | `rgba(91, 140, 255, 0.18)` | Subtle blue glow effects |

## CSS Variables Usage

```css
:root {
  /* Base Colors */
  --background: #070812;
  --sidebar: #10101A;
  --surface: #0D1520;
  --surface-elevated: #111829;
  --surface-hover: #162335;
  --surface-active: #192444;

  /* Borders */
  --border-subtle: #182434;
  --border-default: #243247;
  --border-strong: #344765;
  --border-focus: #5BBCFF;

  /* Text Colors */
  --text-primary: #F3F6FA;
  --text-secondary: #A6B1C2;
  --text-muted: #6F7091;
  --text-disabled: #465367;

  /* Semantic Colors */
  --primary: #5BBCFF;
  --secondary: #52C7D2;
  --success: #46CD9A;
  --warning: #E28B48;
  --danger: #F07178;
  --info: #6BA7FF;

  /* Subtle Semantic Colors */
  --primary-subtle: #14264A;
  --secondary-subtle: #102034;
  --success-subtle: #102025;
  --warning-subtle: #302510;
  --danger-subtle: #321810;
  --info-subtle: #142640;

  /* Gradients and Effects */
  --gradient-brand: linear-gradient(135deg, #14254A 0%, #001520 100%);
  --glow-blue: rgba(91, 140, 255, 0.18);
}
```

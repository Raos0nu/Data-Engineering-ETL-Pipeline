# 🎨 Visual Design Guide

## Color Palette

### Primary Colors
```
Purple Gradient: #667eea → #764ba2
Background: Full gradient purple overlay
White Cards: #FFFFFF with shadows
```

### Accent Colors
```
Success Green: #48bb78
Warning Orange: #ed8936  
Error Red: #fc8181
Info Blue: #4299e1
```

### Text Colors
```
Primary Text: #2d3748 (dark gray)
Secondary Text: #718096 (medium gray)
Tertiary Text: #cbd5e0 (light gray)
Link Color: #667eea (purple)
```

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes
```
h1: 2rem (32px)
h2: 1.75rem (28px)
h3: 1.5rem (24px)
Body: 1rem (16px)
Small: 0.875rem (14px)
```

## Layout Structure

```
┌──────────────────────────────────────────────────────────┐
│ Header (Sticky)                                          │
│ ┌─────────────────────────┐  ┌────────────────────────┐│
│ │ 📊 ETL Pipeline         │  │ 🚀 Run ETL Pipeline   ││
│ │ Sales Data Management   │  │                        ││
│ └─────────────────────────┘  └────────────────────────┘│
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ Tab Navigation                                           │
│ [📈 Dashboard] [📋 Data Table] [➕ Add Data] [📊 Analytics]│
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│                                                           │
│                    Main Content Area                      │
│                   (Changes based on tab)                  │
│                                                           │
└──────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────┐
│ Footer                                                    │
│ © 2025 ETL Pipeline Dashboard | Built with React & Flask │
└──────────────────────────────────────────────────────────┘
```

## Dashboard Layout

```
┌────────────────────────────────────────────────────────┐
│ Stats Cards (4-column grid)                            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ 📦       │ │ 💰       │ │ 📊       │ │ 🛍️      │ │
│ │ Total    │ │ Total    │ │ Average  │ │ Items    │ │
│ │ Orders   │ │ Revenue  │ │ Order    │ │ Sold     │ │
│ │ 7        │ │ $1259.93 │ │ $179.99  │ │ 31       │ │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ 📋 Recent Orders                                       │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Order #7              $1000.00                   │ │
│ │ Fee                   1 items × $1000.00         │ │
│ └──────────────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Order #6              $500.00                    │ │
│ │ Game CD               5 items × $100.00          │ │
│ └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

## Data Table Layout

```
┌────────────────────────────────────────────────────────┐
│ 📋 Sales Data Table                                    │
│ ┌────────────────────┐ ┌──────────┐                  │
│ │ 🔍 Search...       │ │ 7 records│                  │
│ └────────────────────┘ └──────────┘                  │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ Order ID ↕│ Product ↕│ Quantity ↕│ Price ↕│ Total ↕│   │
├───────────┼──────────┼───────────┼────────┼────────┼───┤
│ #1        │ Widget   │ 10        │ $9.99  │ $99.90 │🗑️│
│ #2        │ Gadget   │ 5         │ $19.99 │ $99.95 │🗑️│
│ #3        │ Widget   │ 7         │ $9.99  │ $69.93 │🗑️│
└────────────────────────────────────────────────────────┘
```

## Add Data Form Layout

```
┌──────────────────────────────┐ ┌──────────────────┐
│ ➕ Add New Sales Record      │ │ 💡 Tips          │
│                              │ │                  │
│ Order ID *                   │ │ • Unique ID      │
│ [________]                   │ │ • Descriptive    │
│                              │ │ • Whole numbers  │
│ Product Name *               │ │ • Include cents  │
│ [________]                   │ │ • Auto-calc      │
│                              │ │                  │
│ Quantity *      Price (USD)* │ └──────────────────┘
│ [____]          [____]       │
│                              │
│ Total Price: $0.00           │
│                              │
│ [✅ Add Record]              │
└──────────────────────────────┘
```

## Analytics Layout

```
┌────────────────────────────────────────────────────────┐
│ 📊 Sales Analytics & Insights                          │
│ Comprehensive visualization of your sales performance  │
└────────────────────────────────────────────────────────┘

┌──────────────────────────┐ ┌──────────────────────────┐
│ 💰 Revenue by Product    │ │ 📈 Sales Distribution    │
│                          │ │                          │
│ [Bar Chart]              │ │ [Pie Chart]              │
│                          │ │                          │
└──────────────────────────┘ └──────────────────────────┘

┌──────────────────────────┐ ┌──────────────────────────┐
│ 📦 Quantity Sold         │ │ 🛒 Orders per Product    │
│                          │ │                          │
│ [Bar Chart]              │ │ [Line Chart]             │
│                          │ │                          │
└──────────────────────────┘ └──────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ 🏆 Product Performance Summary                         │
│ Product     │Orders│Units│Revenue  │Avg per Order     │
│ ● Widget    │  2   │ 17  │$169.83  │$84.92           │
│ ● Gadget    │  1   │ 5   │$99.95   │$99.95           │
└────────────────────────────────────────────────────────┘
```

## UI Components

### Stat Card
```
┌──────────────┐
│ 📦          │  ← Icon (3rem)
│ Total Orders │  ← Label (gray, small)
│ 7           │  ← Value (2rem, bold)
└──────────────┘
Colors: White background, purple left border
Hover: Lifts up 4px
Shadow: Soft 0 4px 20px
```

### Button
```
┌─────────────────────────┐
│ 🚀 Run ETL Pipeline    │
└─────────────────────────┘
Colors: Purple gradient background
Hover: Lifts up 2px, stronger shadow
Disabled: 60% opacity
Padding: 0.875rem 2rem
Border-radius: 12px
```

### Tab Button
```
Active:   [📈 Dashboard]  ← White bg, purple border
Inactive: [📋 Data Table] ← Transparent bg
Hover: White bg, shadow
```

### Input Field
```
┌────────────────────────┐
│ e.g., Laptop          │
└────────────────────────┘
Default: 2px solid #e2e8f0
Focus: 2px solid #667eea + shadow ring
Error: 2px solid #fc8181
Padding: 0.875rem 1.25rem
Border-radius: 12px
```

### Notification
```
┌────────────────────────────────┐
│ ✅ Data added successfully!   │
└────────────────────────────────┘
Success: Green background (#d4edda)
Error: Red background (#f8d7da)
Animation: Slide down from top
Auto-dismiss: 5 seconds
```

## Animation Specs

### Fade In
```css
@keyframes fadeIn {
  from: opacity 0, translateY(20px)
  to: opacity 1, translateY(0)
  duration: 0.5s
}
```

### Hover Lift
```css
transform: translateY(-4px)
box-shadow: stronger
transition: 0.3s ease
```

### Slide In (Notification)
```css
@keyframes slideIn {
  from: opacity 0, translateY(-20px)
  to: opacity 1, translateY(0)
  duration: 0.3s
}
```

## Responsive Breakpoints

### Desktop (> 1200px)
- Stats: 4 columns
- Charts: 2 columns
- Form: 2 columns (form + tips)

### Tablet (768px - 1200px)
- Stats: 2 columns
- Charts: 1 column
- Form: 2 columns

### Mobile (< 768px)
- Stats: 1 column
- Charts: 1 column
- Form: 1 column (stacked)
- Tabs: Wrap to multiple rows
- Table: Horizontal scroll

## Shadow Levels

```css
Level 1 (Subtle): 0 4px 20px rgba(0, 0, 0, 0.08)
Level 2 (Normal): 0 4px 20px rgba(0, 0, 0, 0.12)
Level 3 (Hover): 0 8px 30px rgba(0, 0, 0, 0.15)
Level 4 (Focus): 0 0 0 3px rgba(102, 126, 234, 0.1)
```

## Border Radius Guide

```css
Small: 8px (delete button)
Medium: 12px (inputs, cards)
Large: 16px (main cards)
```

## Spacing System

```css
xs: 0.5rem (8px)
sm: 0.75rem (12px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
xxl: 3rem (48px)
```

## Icon Usage

```
📊 - Dashboard, Analytics
📈 - Charts, Growth
📋 - Table, List
➕ - Add, Create
💰 - Money, Revenue
📦 - Orders, Products
🛍️ - Shopping, Sales
🚀 - Action, Launch
✅ - Success, Complete
❌ - Error, Delete
⏳ - Loading, Processing
🔍 - Search
🗑️ - Delete
💡 - Tips, Info
🏆 - Performance, Best
ℹ️ - Information
```

## Chart Colors

```css
Color 1: #667eea (Purple)
Color 2: #764ba2 (Violet)
Color 3: #f093fb (Pink)
Color 4: #4facfe (Blue)
Color 5: #43e97b (Green)
Color 6: #fa709a (Red-Pink)
```

## Accessibility

### Contrast Ratios
- Text on white: 4.5:1 minimum
- Large text: 3:1 minimum
- Focus indicators: Visible ring

### Keyboard Navigation
- Tab order: Logical flow
- Focus visible: All interactive elements
- Enter/Space: Activates buttons

### Screen Reader
- Alt text: All images
- ARIA labels: Interactive elements
- Semantic HTML: Proper heading hierarchy

---

## Component Examples

### Stat Card HTML Structure
```html
<div class="stat-card card-purple">
  <div class="stat-icon">📦</div>
  <div class="stat-content">
    <h3>Total Orders</h3>
    <p class="stat-value">7</p>
  </div>
</div>
```

### Order Item HTML Structure
```html
<div class="order-item">
  <div class="order-header">
    <span class="order-id">Order #1</span>
    <span class="order-price">$99.90</span>
  </div>
  <div class="order-details">
    <span class="product-name">Widget</span>
    <span class="quantity">10 items × $9.99</span>
  </div>
</div>
```

---

**This guide ensures consistent, beautiful design throughout the application! 🎨✨**


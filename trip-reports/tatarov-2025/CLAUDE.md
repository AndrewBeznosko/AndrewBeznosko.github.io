# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a standalone HTML document that generates a comprehensive trip expense report for a vacation to Tatariv, Carpathians (August 29-31, 2025). The project consists of a single static HTML file that creates a multi-page expense report with detailed analytics, route information, and cost breakdowns.

## Architecture

### Single File Structure
- **trip-invoice.html**: Complete standalone HTML document containing:
  - Embedded CSS styling (lines 7-451)
  - HTML structure for multi-page report (lines 458-757)
  - Multiple sections: cover page, detailed expenses table, category analytics, visited places, and routes

### Styling Architecture
- **CSS Grid Layout**: Extensive use of CSS Grid for responsive card layouts
- **Print Optimization**: Dedicated print styles (@media print) for PDF generation
- **Mobile Responsive**: Breakpoints at 768px for mobile devices
- **Gradient Design System**: Consistent color gradients throughout for visual appeal

### Report Sections
1. **Cover Page**: Summary cards, fuel expenses, and participant totals
2. **Detailed Expenses**: Comprehensive table of all transactions
3. **Analytics Dashboard**: Category breakdown and hiking statistics
4. **Locations**: Maps and visited places with external links
5. **Routes**: Car travel routes with Google Maps integration

## Key Features

### Data Structure
- **Expense Tracking**: Manual entry system with categorization
- **Multi-participant**: Tracks expenses across 3 people (You, Діма, Антон)
- **Settlement Calculations**: Automatic calculation of who owes whom
- **Fuel Tracking**: Separate tracking for fuel expenses

### External Integrations
- **Google Maps**: Direct links to routes and locations
- **Print Functionality**: Built-in browser print to PDF capability

## Development Notes

### No Build System
This is a static HTML file requiring no compilation, bundling, or build process. Simply open in a browser.

### Localization
- Content is in Ukrainian language
- Currency in Ukrainian Hryvnia (₴)
- Date format: DD.MM format

### Data Management
All expense data is hardcoded in the HTML. To update expenses:
1. Modify the expenses table (lines 640-660)
2. Update summary calculations manually
3. Adjust category totals in analytics section

### External Dependencies
None - completely self-contained HTML file with no external CSS, JavaScript, or font dependencies.
<div align="center">

# 🏋️ Velora

### A Complete Gym Management System

A modern, responsive gym management platform built to manage members, captains, subscriptions, transactions, expenses, accounts, and business performance from one place.

**This is not a tutorial project. The system was originally developed for a real gym based on actual business requirements and daily operational workflows.**

<br />

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_Project-F97316?style=for-the-badge&logo=vercel&logoColor=white)](https://velora-sepia-one.vercel.app/)

</div>

---

## 🚀 Try the Live Demo

You can explore the complete system using the following demo account:

| Demo Information | Details |
|---|---|
| **Live Website** | [velora-sepia-one.vercel.app](https://velora-sepia-one.vercel.app/) |
| **Email** | `example@gmail.com` |
| **Password** | `test-xx` |

> The public demo uses sample data and was prepared to demonstrate the system's features without exposing the real client's information.

---

## 📖 Project Overview

**Velora** is a complete gym management system that transforms daily gym operations into one organized digital workflow.

The system was originally requested by a real client who needed an easier way to manage:

- Gym members and their subscriptions
- Captains and their assigned members
- Subscription renewals and freezing periods
- Member payments and outstanding balances
- Captain and gym financial shares
- Income, expenses, and actual profit
- User accounts and system access
- Gym performance through statistics and charts

Instead of relying on notebooks, spreadsheets, or disconnected tools, Velora provides one centralized platform where gym staff can manage the entire business.

The project focuses not only on the user interface, but also on implementing the actual business rules required to operate a gym.

---

## 💡 The Business Problem

Managing a gym manually can create several problems:

- Difficulty tracking subscription expiration dates
- Losing member payment information
- Forgetting frozen subscriptions
- Incorrectly calculating captain and gym shares
- Mixing income with operational expenses
- Difficulty identifying the gym's actual profit
- Scattered member and captain information
- No clear overview of business performance
- Limited control over staff accounts and system access

Velora was built to solve these problems through a complete and easy-to-use management system.

---

# ✨ Main Features

## 👥 Complete Member Management

The system provides a complete workflow for managing gym members.

Gym staff can:

- Add new members
- Edit existing member information
- View complete member details
- Store phone numbers, age, notes, and personal information
- Assign each member to a captain
- Set the subscription price
- Record paid and remaining amounts
- Set subscription start and expiration dates
- View the member's current subscription status
- Search and filter members
- Track member payment information
- Review the member's related transactions

Each member has an organized profile containing the information required by the gym staff.

---

## 🔄 Subscription Renewal

When a member renews their subscription, the system provides a complete renewal workflow.

Staff can:

- Set the new subscription period
- Update the subscription price
- Record the paid amount
- Calculate the remaining amount
- Update the expiration date
- Create the related financial transaction
- Keep payment and subscription information synchronized

This makes renewals faster and reduces mistakes in subscription and payment records.

---

## ❄️ Subscription Freezing

Velora supports freezing member subscriptions when a member needs to pause their membership.

The system can store:

- Freeze status
- Number of frozen days
- Freeze reason
- Subscription information
- Member status during the freezing period

This feature reflects an actual gym workflow and helps staff manage subscription pauses without losing important information.

---

## 📅 Subscription Status Tracking

The system automatically organizes members according to their subscription status.

Supported statuses include:

- Active subscriptions
- Expired subscriptions
- Subscriptions expiring soon
- Frozen subscriptions

This allows gym staff to quickly identify members who need follow-up or renewal.

---

## 🏋️ Captain Management

Velora includes a dedicated system for managing captains.

Staff can:

- Add new captains
- Edit captain information
- View captain details
- Assign members to captains
- View members assigned to each captain
- Track captain-related transactions
- Calculate the captain's financial share
- Review captain statistics and performance

This provides a clear connection between captains, members, and financial records.

---

# 💰 Accounting and Financial Management

One of the most important parts of Velora is its accounting system.

The system does not only store member information—it tracks every financial operation through a centralized transactions table.

## Transaction Management

Every financial operation can be recorded as a transaction.

The transaction system supports:

- Subscription payments
- Member payments
- Captain-related payments
- Gym income
- Operational expenses
- Payment notes
- Transaction dates
- Income and expense directions
- Connections between members, captains, and transactions

This creates a clear financial history for the gym.

---

## 🤝 Gym and Captain Share Calculation

Some member payments must be divided between the gym and the captain.

For these transactions, the system records and calculates:

- Total amount paid
- Captain's share
- Gym's share
- Related member
- Related captain
- Transaction date
- Additional notes

This helps prevent calculation mistakes and makes every payment transparent.

---

## 💸 Expense Management

The system supports recording gym expenses, not only income.

Examples include:

- Equipment maintenance
- Utility bills
- Staff-related costs
- Operational expenses
- Other gym expenses

Expenses are deducted when calculating the gym's actual financial performance.

This means the dashboard does not only display total revenue—it can provide a clearer view of the gym's real profit after expenses.

---

## 💳 Outstanding Payment Tracking

The system tracks:

- Subscription price
- Amount paid
- Remaining amount
- Last payment date
- Outstanding member payments

This helps gym staff know which members still have unpaid balances and how much money remains to be collected.

---

# 📊 Professional Dashboard

Velora includes a modern dashboard that transforms system data into clear and useful business insights.

The dashboard displays:

- Total revenue
- Gym profit
- Total expenses
- Outstanding payments
- Total number of members
- Total number of captains
- Expired subscriptions
- Subscriptions expiring soon

It also contains interactive charts for understanding the gym's financial and operational performance.

---

## 📈 Charts and Data Visualization

The dashboard uses **Recharts** to present data visually.

Charts help the user understand:

- Revenue performance
- Income changes over time
- Member payment status
- Paid and outstanding subscription amounts
- Subscription activity
- Business performance across different periods

Instead of reviewing individual records manually, the gym owner can understand the current business situation at a glance.

---

## 🗓️ Period-Based Statistics

Dashboard statistics can be reviewed across different periods, allowing the gym owner to compare recent performance and make better decisions.

Examples include:

- Today's performance
- Weekly performance
- Monthly performance
- Longer reporting periods

---

# 🔐 Authentication and User Accounts

Velora includes a secure authentication system powered by Supabase.

The system supports:

- Email and password login
- Protected application routes
- Authenticated user sessions
- Secure access to management pages
- Logout functionality
- User account management
- Control over who can access the system

Only authenticated users can access the gym's private management data.

---

## 👤 Account Management

Authorized users can manage the accounts used to access the system.

This makes the platform suitable for gyms with multiple staff members who need access to the management dashboard.

---

# ⚙️ System Settings

Velora includes a settings section where the gym's system information can be managed from one place.

The settings structure makes the application easier to configure without modifying the source code for normal business changes.

---

# 🌙 Complete Dark Mode

The platform includes full dark mode support across the system.

Dark mode is applied consistently to:

- Pages and layouts
- Navigation elements
- Cards and statistics
- Forms and inputs
- Tables and transactions
- Modals
- Text and backgrounds
- Hover and active states
- Charts and visual elements

The theme is stored so the user's selected mode remains active after refreshing the application.

---

# 📱 Fully Responsive Design

Velora is fully responsive and optimized for:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

The interface adapts to different screen sizes while keeping the main management actions accessible and organized.

This allows gym staff to manage operations from the gym computer or directly from a mobile device.

---

# 🌍 Arabic and RTL Interface

The system was designed for an Arabic-speaking client and supports a complete right-to-left experience.

This includes:

- Arabic navigation
- RTL page layouts
- Arabic forms and labels
- Arabic dashboard statistics
- Responsive RTL components
- Clear and familiar terminology for gym staff

---

# 🧩 System Modules

```text
Velora Gym Management System
│
├── Dashboard
│   ├── Revenue statistics
│   ├── Gym profit
│   ├── Expenses
│   ├── Outstanding payments
│   ├── Member statistics
│   ├── Captain statistics
│   ├── Subscription insights
│   └── Interactive charts
│
├── Members
│   ├── Add members
│   ├── Edit members
│   ├── Member details
│   ├── Subscription renewal
│   ├── Subscription freezing
│   ├── Payment tracking
│   └── Subscription status
│
├── Captains
│   ├── Add captains
│   ├── Edit captains
│   ├── Captain details
│   ├── Assigned members
│   └── Financial shares
│
├── Transactions
│   ├── Income
│   ├── Expenses
│   ├── Member payments
│   ├── Gym share
│   └── Captain share
│
├── Accounts
│   ├── Authentication
│   ├── User management
│   └── Protected access
│
└── Settings
    └── System configuration
```

---

# 🛠️ Technologies Used

| Technology | Usage |
|---|---|
| **React** | Building the user interface and reusable components |
| **Tailwind CSS** | Responsive styling and dark mode |
| **Supabase** | Database, authentication, views, and backend services |
| **React Query** | Server-state management, caching, and data synchronization |
| **Recharts** | Dashboard charts and data visualization |
| **React Icons** | Consistent icons across the application |
| **Context API** | Managing shared application state such as the theme |
| **Vercel** | Hosting and deploying the public demo |

---

# 🗄️ Backend and Database

Supabase is used as the backend of the application.

The system stores and manages:

- Members
- Captains
- Transactions
- Sessions
- Settings
- User accounts
- Authentication data

The database relationships keep members, captains, payments, and transactions connected.

The project also uses database views and functions to calculate dashboard statistics and prepare business data efficiently.

---

# ⚡ Performance and Code Organization

The project was structured with maintainability and performance in mind.

It includes:

- Reusable React components
- Custom hooks for data operations
- Centralized API functions
- React Query caching
- Lazy-loaded application pages
- Organized feature-based code
- Loading and empty states
- Form validation and user feedback
- Responsive reusable UI components
- Optimized database queries
- Clear separation between UI and data logic

---

# 🎯 Business Value

Velora helps the gym owner and staff:

- Save time managing daily operations
- Keep all member information organized
- Reduce subscription tracking mistakes
- Follow up on expired subscriptions
- Track remaining member payments
- Calculate gym and captain shares accurately
- Record income and expenses
- Understand actual gym profitability
- Manage captains and their members
- Review business performance through charts
- Secure private gym data
- Access the system from different devices

---

# 🏆 Why This Project Is Different

This project is more than a dashboard design.

It includes:

- Real business requirements
- Real subscription workflows
- Real accounting logic
- Connected members, captains, and transactions
- Automatic financial calculations
- Authentication and account management
- Responsive Arabic interface
- Complete light and dark themes
- Database-backed charts and statistics
- A working public demo

The goal was to build a system that could actually be used by gym staff—not just displayed as a design concept.

---

# 🚧 Project Status

The core system is complete.

The public version is a demo prepared to showcase the project's main workflows while protecting the original client's private information.

Sample data and test credentials are used inside the demo.

---

# 👨‍💻 Developed By

**Anass Mahmoud**

Frontend Developer focused on building modern, responsive, and business-oriented web applications using React, Next.js, Tailwind CSS, and Supabase.

---

<div align="center">

## Ready to Explore Velora?

[![Open Live Demo](https://img.shields.io/badge/Open_Live_Demo-F97316?style=for-the-badge&logo=vercel&logoColor=white)](https://velora-sepia-one.vercel.app/)

### Demo Credentials

`example@gmail.com`  
`test-xx`

<br />

If you like the project, consider giving the repository a ⭐

</div>
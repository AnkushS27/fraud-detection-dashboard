# Fraud Detection Dashboard 🕵️‍♀️🚨

## Overview

The Fraud Detection Dashboard is a powerful web application designed to provide real-time insights into fraudulent activities, enabling security teams to monitor, analyze, and mitigate risks effectively.

## 🌟 Features

### Key Capabilities

- **Real-time Fraud Trend Visualization**

  - Interactive 30-day trend analysis chart
  - Visual representation of fraud detection metrics

- **Comprehensive Fraud Monitoring**

  - Catalog of detected fraudulent applications
  - List of suspicious URLs

- **Advanced Security Controls**
  - User authentication system

## 🛠 Tech Stack

### Frontend

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charting**: Recharts
- **UI Components**: shadcn/ui

### Backend

- **API**: Next.js Server Routes
- **Authentication**: JWT-based authentication
- **Data Management**: Server-side data fetching

### Development Tools

- **Package Manager**: PNPM
- **Version Control**: Git
- **Deployment**: Vercel

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- PNPM (v8 or later)
- Git

## 🚀 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AnkushS27/fraud-detection-dashboard
cd fraud-detection-dashboard
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment

Create a `.env.local` file in the project root:

```bash
# JWT Authentication
JWT_SECRET=your_super_secret_and_secure_key

```

### 4. Run Development Server

```bash
pnpm dev
```

Access the application at `http://localhost:3000`

## 🔐 Demo Credentials

For testing and exploration:

### Admin Access

- **Email**: admin@frauddashboard.com
- **Password**: $2a$10$XYZ1234abcd$

### Analyst Access

- **Email**: analyst@frauddashboard.com
- **Password**: $2a$10$ABC5678efgh$

**⚠️ Security Note**: These credentials are for demonstration only. Always use strong, unique passwords in production.

## 🌐 Live Demo

Check out the deployed application:
[Fraud Detection Dashboard](https://fraud-detection-dashboard-navy.vercel.app/)

## 🔍 Data Sources

Currently using mock data for demonstration. Production implementation should integrate with:

- Fraud detection APIs
- Security databases
- Real-time threat intelligence platforms

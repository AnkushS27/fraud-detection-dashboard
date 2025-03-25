export interface FraudulentApp {
  app_name: string;
  developer: string;
  category: string;
  risk_level: 'High' | 'Medium' | 'Low';
  reported_on: string;
}

export interface FraudulentUrl {
  url: string;
  risk_level: 'High' | 'Medium' | 'Low';
  detected_on: string;
  category: string;
}

export interface FraudTrend {
  date: string;
  fraud_cases_detected: number;
}

export interface User {
  email: string;
  password_hashed: string;
  role: 'Admin' | 'Analyst';
}
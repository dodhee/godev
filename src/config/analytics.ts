/**
 * Google Analytics Configuration for GoDev
 * 
 * Measurement ID: G-G0NEG69QSL
 * Setup date: 2026-07-10
 * 
 * This file contains the Google Analytics Measurement ID for tracking godev.biz.id website
 */

export const GOOGLE_ANALYTICS_ID = 'G-G0NEG69QSL';

export const analyticsConfig = {
  vendors: {
    googleAnalytics: {
      id: GOOGLE_ANALYTICS_ID,
      partytown: true, // Load analytics script in web worker for better performance
    },
  },
};

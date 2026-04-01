import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SettingsPage from '../page';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({
    theme: 'light',
    setTheme: vi.fn(),
  })),
}));

describe('SettingsPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the page title and description', () => {
    render(<SettingsPage />);

    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Manage your app preferences')).toBeInTheDocument();
  });

  it('displays app information section', () => {
    render(<SettingsPage />);

    expect(screen.getByText('App Information')).toBeInTheDocument();
    expect(screen.getByText('App Name')).toBeInTheDocument();
    expect(screen.getByText('MysteryD')).toBeInTheDocument();
    expect(screen.getByText('Version')).toBeInTheDocument();
    expect(screen.getByText('1.0.0')).toBeInTheDocument();
  });

  it('displays appearance section with theme toggle', () => {
    render(<SettingsPage />);

    expect(screen.getByText('Appearance')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('Light mode')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('displays store connection section', () => {
    render(<SettingsPage />);

    expect(screen.getByText('Store Connection')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Connected to Shopify')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Store Domain')).toBeInTheDocument();
    expect(screen.getByText('mysteryd.myshopify.com')).toBeInTheDocument();
    expect(screen.getByText('Manage Store Connection')).toBeInTheDocument();
  });

  it('renders theme icons', () => {
    render(<SettingsPage />);

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
});

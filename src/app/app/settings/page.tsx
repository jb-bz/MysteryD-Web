'use client';

import * as React from 'react';
import { Settings, Moon, Sun, Store, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your app preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Settings className="h-5 w-5" />
            App Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">App Name</p>
              <p className="text-sm text-muted-foreground">MysteryD</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Version</p>
              <p className="text-sm text-muted-foreground">1.0.0</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                {isDarkMode ? 'Dark mode' : 'Light mode'}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={!isDarkMode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
              </Button>
              <Button
                variant={isDarkMode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Store className="h-5 w-5" />
            Store Connection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Status</p>
              <p className="text-sm text-muted-foreground">Connected to Shopify</p>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Store Domain</p>
              <p className="text-sm text-muted-foreground">mysteryd.myshopify.com</p>
            </div>
          </div>
          <div className="pt-2 border-t">
            <Button variant="outline" size="sm">
              Manage Store Connection
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

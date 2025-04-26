
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getVotingStats, getElections } from '@/services/blockchain';
import { Shield, Users, ChartBar, Calendar } from "lucide-react";

export const AdminDashboard = () => {
  const stats = getVotingStats();
  const elections = getElections();

  return (
    <div className="container px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-voting-muted">Manage your blockchain voting system</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Voters</CardTitle>
              <Users className="h-4 w-4 text-voting-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.registeredVoters}</div>
              <p className="text-xs text-voting-muted">Registered in the system</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
              <ChartBar className="h-4 w-4 text-voting-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.votesRecorded}</div>
              <p className="text-xs text-voting-muted">Votes cast</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Elections</CardTitle>
              <Calendar className="h-4 w-4 text-voting-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {elections.filter(e => e.status === 'active').length}
              </div>
              <p className="text-xs text-voting-muted">Currently running</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blockchain Status</CardTitle>
              <Shield className="h-4 w-4 text-voting-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.blocksVerified}</div>
              <p className="text-xs text-voting-muted">Verified blocks</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Elections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {elections.map(election => (
                <div key={election.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <h3 className="font-medium">{election.title}</h3>
                    <p className="text-sm text-voting-muted">
                      {new Date(election.startDate).toLocaleDateString()} - {new Date(election.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    election.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : election.status === 'upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

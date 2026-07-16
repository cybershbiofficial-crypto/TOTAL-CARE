/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { format } from "date-fns";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);

    if (localStorage.getItem("mock_admin_session")) {
      setLeads([
        {
          id: "demo-1",
          name: "John Doe",
          email: "john@example.com",
          phone: "+971 50 123 4567",
          service: "Waterproofing",
          message: "Looking for a quote for villa waterproofing in Dubai Hills.",
          status: "new",
          created_at: new Date().toISOString(),
        },
      ]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load leads: " + error.message);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", id);
    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success("Status updated");
      setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    }
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-display-md text-foreground">Leads Management</h1>
        <p className="text-mute mt-2">Manage incoming inquiries and project requests.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-mono-xs text-mute uppercase tracking-widest border-b border-line">
            <tr>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Contact Details</th>
              <th className="px-6 py-4 font-medium">Service / Location</th>
              <th className="px-6 py-4 font-medium">Message</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/50">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-mute">
                  Loading leads...
                </td>
              </tr>
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-mute">
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-surface/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-mute">
                    {format(new Date(lead.created_at), "MMM d, yyyy")}
                    <div className="text-mono-xs mt-1 opacity-70">
                      {format(new Date(lead.created_at), "HH:mm")}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-foreground font-medium">{lead.name}</div>
                    <div className="text-mute mt-1">{lead.email}</div>
                    {lead.phone && <div className="text-mute mt-1">{lead.phone}</div>}
                  </td>
                  <td className="px-6 py-4 text-mute">
                    <div className="max-w-[200px] truncate" title={lead.service}>
                      {lead.service || "General"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-mute">
                    <div className="max-w-xs truncate" title={lead.message}>
                      {lead.message}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className="bg-background border border-line text-foreground text-sm rounded px-3 py-1.5 focus:border-accent outline-none"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

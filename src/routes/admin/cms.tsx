/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/admin/cms")({
  component: AdminCMS,
});

function AdminCMS() {
  const [content, setContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [newSectionId, setNewSectionId] = useState("");

  const fetchContent = async () => {
    setLoading(true);


    const { data, error } = await supabase
      .from("cms_content")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      if (error.code === "42P01") {
        toast.error("cms_content table does not exist yet. Please run the SQL migration.");
      } else {
        toast.error("Failed to load CMS content: " + error.message);
      }
    } else {
      setContent(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleUpdate = async (id: string, newContent: string) => {
    setSaving(id);
    try {
      const parsed = JSON.parse(newContent);
      const { error } = await supabase.from("cms_content").upsert({
        id,
        section: id.split("_")[0],
        content_json: parsed,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      toast.success(`Updated ${id}`);
      fetchContent();
    } catch (err: any) {
      toast.error(`Invalid JSON or save failed: ${err.message}`);
    } finally {
      setSaving(null);
    }
  };

  const handleCreateNew = async () => {
    if (!newSectionId) return;
    setSaving("new");
    try {
      const { error } = await supabase
        .from("cms_content")
        .insert({ id: newSectionId, section: "custom", content_json: {} });
      if (error) throw error;
      toast.success(`Created ${newSectionId}`);
      setNewSectionId("");
      fetchContent();
    } catch (err: any) {
      toast.error(`Failed to create section: ${err.message}`);
    } finally {
      setSaving(null);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-display-md text-foreground">Content Management System</h1>
          <p className="text-mute mt-2">
            Edit homepage copy, themes, and site information directly.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="new_section_id"
            value={newSectionId}
            onChange={(e) => setNewSectionId(e.target.value)}
            className="bg-background border border-line px-4 py-2 text-sm outline-none focus:border-accent w-48"
          />
          <button
            onClick={handleCreateNew}
            disabled={saving === "new" || !newSectionId}
            className="bg-accent text-background px-4 py-2 flex items-center gap-2 hover:bg-foreground transition-colors disabled:opacity-50 text-[12px] uppercase font-bold tracking-widest"
          >
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {loading ? (
          <div className="text-mute">Loading content...</div>
        ) : content.length === 0 ? (
          <div className="text-accent">No content available or table is missing.</div>
        ) : (
          content.map((item) => (
            <div key={item.id} className="border border-line p-6 bg-surface rounded-xl">
              <h2 className="text-lg font-medium text-foreground mb-4 font-display">{item.id}</h2>
              <textarea
                className="w-full h-48 bg-background border border-line p-4 text-sm text-foreground outline-none focus:border-accent font-mono rounded-md"
                defaultValue={JSON.stringify(item.content_json, null, 2)}
                id={`input-${item.id}`}
              />
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    const el = document.getElementById(`input-${item.id}`) as HTMLTextAreaElement;
                    if (el) handleUpdate(item.id, el.value);
                  }}
                  disabled={saving === item.id}
                  className="bg-accent px-8 py-3 text-[12px] uppercase tracking-[0.2em] font-bold text-background transition-all hover:bg-foreground hover:shadow-lg disabled:opacity-50"
                >
                  {saving === item.id ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

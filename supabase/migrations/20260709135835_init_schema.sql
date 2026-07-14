-- Create leads table for the contact form
CREATE TABLE public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create cms_content table for editable homepage/services content
CREATE TABLE public.cms_content (
    id TEXT PRIMARY KEY,
    section TEXT NOT NULL,
    content_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_content ENABLE ROW LEVEL SECURITY;

-- Policies for leads
-- Anyone can insert a lead (public form submission)
CREATE POLICY "Allow public insert on leads" ON public.leads
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Only authenticated users (admins) can view, update or delete leads
CREATE POLICY "Allow authenticated full access to leads" ON public.leads
    FOR ALL
    TO authenticated
    USING (true);

-- Policies for cms_content
-- Anyone can view CMS content (public website rendering)
CREATE POLICY "Allow public select on cms_content" ON public.cms_content
    FOR SELECT
    TO public
    USING (true);

-- Only authenticated users (admins) can modify CMS content
CREATE POLICY "Allow authenticated full access to cms_content" ON public.cms_content
    FOR ALL
    TO authenticated
    USING (true);

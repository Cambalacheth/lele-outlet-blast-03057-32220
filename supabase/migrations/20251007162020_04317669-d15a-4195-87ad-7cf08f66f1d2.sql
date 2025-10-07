-- Create table for outlet registrations
CREATE TABLE public.outlet_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  privacy_accepted BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.outlet_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations (public form)
CREATE POLICY "Anyone can insert registrations" 
ON public.outlet_registrations 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view registrations (for admin purposes)
CREATE POLICY "Authenticated users can view registrations" 
ON public.outlet_registrations 
FOR SELECT 
TO authenticated
USING (true);
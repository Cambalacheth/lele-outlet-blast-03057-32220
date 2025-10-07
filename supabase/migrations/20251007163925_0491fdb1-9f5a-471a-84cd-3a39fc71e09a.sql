-- Create outlet_registrations table
CREATE TABLE IF NOT EXISTS public.outlet_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.outlet_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can register"
  ON public.outlet_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_outlet_registrations_email ON public.outlet_registrations(email);
CREATE INDEX idx_outlet_registrations_created_at ON public.outlet_registrations(created_at DESC);
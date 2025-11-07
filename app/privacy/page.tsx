import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy Redirect | Mike\'s Garage Door Repair Center',
  description: 'Redirecting to privacy policy page for Mike\'s Garage Door Repair Center.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://mikesgarage.c.dblseo.com/privacy-policy/',
  },
}

export default function PrivacyRedirect() {
  redirect('/privacy-policy/')
}

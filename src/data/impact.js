import { GraduationCap, HeartPulse, Apple, Droplets } from 'lucide-react'
export const programs = [
  { id: 'education', icon: GraduationCap, title: 'Education', text: 'Helping children stay in school with learning materials, scholarships and educational support.' },
  { id: 'healthcare', icon: HeartPulse, title: 'Healthcare', text: 'Supporting access to basic healthcare, health screenings and essential medical assistance.' },
  { id: 'nutrition', icon: Apple, title: 'Nutrition', text: 'Helping vulnerable children access nutritious meals and improve their overall wellbeing.' },
  { id: 'water', icon: Droplets, title: 'Clean Water', text: 'Supporting communities with access to safe water, sanitation and hygiene resources.' },
]
export const stats = [
  { value: 25000, suffix: '+', label: 'Children Supported' },
  { value: 120, suffix: '+', label: 'Communities Reached' },
  { value: 18, suffix: '', label: 'Active Programs' },
  { value: 92, suffix: '%', label: 'Funds Directed to Programs' },
]
export const breakdown = [
  { pct: 92, label: 'Programs & Direct Support', color: 'var(--primary)' },
  { pct: 5, label: 'Operations', color: 'var(--accent)' },
  { pct: 3, label: 'Fundraising & Outreach', color: '#8a97ad' },
]
export const plans = [
  { amount: 500, text: 'Helps provide learning materials and school support.' },
  { amount: 1000, text: 'Supports education, nutrition and essential care.' },
  { amount: 2000, text: "Provides broader long-term support for a child's development." },
]
export const programDetails = {
  education: { more: 'We work with local schools and learning centres so children can attend regularly, keep up with their classes and move on to the next grade.', points: ['School bags, books and stationery', 'Scholarships and fee support', 'After-school learning help'] },
  healthcare: { more: 'Community health workers visit villages and schools to spot problems early, so small illnesses do not become serious ones.', points: ['Regular health check-ups', 'Vaccination and hygiene awareness', 'Referral and treatment support'] },
  nutrition: { more: 'Children learn better when they are well fed. We support school meals and take-home nutrition for families who need it most.', points: ['Daily school meals', 'Nutrition checks and supplements', 'Family cooking and food guidance'] },
  water: { more: 'Safe water protects children from illness and saves hours every day that are otherwise spent collecting it.', points: ['Community water points and filters', 'Clean toilets in schools', 'Handwashing and hygiene training'] },
}

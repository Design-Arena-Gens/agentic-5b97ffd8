"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Industry, Region, leads } from "@/data/leads";

type PlatformFilter = "Instagram" | "YouTube" | "TikTok" | "LinkedIn" | "Website";

const industryOptions = Array.from(new Set(leads.map((lead) => lead.industry))).sort() as Industry[];
const locationOptions = Array.from(new Set(leads.map((lead) => lead.location))).sort() as Region[];
const platformOptions: PlatformFilter[] = ["Instagram", "YouTube", "TikTok", "LinkedIn", "Website"];

const gradientBackground =
  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,0,0,0.08) 40%, rgba(0,0,0,0.75) 100%)";

function TogglePill<T extends string>({
  label,
  isActive,
  onClick,
}: {
  label: T;
  isActive: boolean;
  onClick: (value: T) => void;
}) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        isActive
          ? "border-transparent bg-red-500 text-white shadow-lg shadow-red-500/30"
          : "border-zinc-300 bg-white/70 text-zinc-700 hover:border-red-400 hover:text-red-500"
      }`}
    >
      {label}
    </button>
  );
}

function StatBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/30 px-5 py-4 shadow-md shadow-zinc-500/10 backdrop-blur">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{label}</span>
      <p className="mt-2 text-2xl font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function LeadCard({ lead }: { lead: (typeof leads)[number] }) {
  const platforms = [lead.instagram, ...lead.supportingPlatforms];

  return (
    <article className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-xl shadow-zinc-600/10 backdrop-blur transition hover:-translate-y-1 hover:border-red-400/80 hover:shadow-2xl">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.30em] text-red-500">{lead.industry}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.30em] text-zinc-500">{lead.location}</span>
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-950">{lead.name}</h2>
          <p className="mt-1 text-sm text-zinc-600">{lead.headline}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href={lead.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            Instagram
          </Link>
          <Link
            href={lead.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900"
          >
            Website
          </Link>
        </div>
      </header>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Brand Snapshot</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">{lead.overview}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Visual Hooks</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {lead.visualHooks.map((hook) => (
                <li
                  key={hook}
                  className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white"
                >
                  {hook}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Why Nodi Verse Fits</h3>
            <ul className="mt-2 space-y-1.5">
              {lead.fitReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-zinc-700">
                  <span className="mt-1 size-2 rounded-full bg-red-500" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-zinc-200 bg-white/90 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Key Platforms</h3>
            <ul className="mt-3 space-y-3">
              {platforms.map((platform) => (
                <li key={`${platform.platform}-${platform.handle}`} className="rounded-xl border border-zinc-100 bg-zinc-50/80 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{platform.platform}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900">{platform.handle}</p>
                  <p className="text-xs text-zinc-500">Followers: {platform.followers}</p>
                  <p className="mt-1 text-xs text-zinc-600">{platform.cadence}</p>
                  <Link
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-600"
                  >
                    View →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white/90 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Decision Makers</h3>
            <ul className="mt-3 space-y-3">
              {lead.decisionMakers.map((person) => (
                <li key={`${lead.id}-${person.name}`} className="text-sm text-zinc-700">
                  <p className="font-semibold text-zinc-900">{person.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{person.role}</p>
                  {person.linkedin && (
                    <Link
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-600"
                    >
                      LinkedIn →
                    </Link>
                  )}
                  {person.notes && <p className="mt-1 text-xs text-zinc-600">{person.notes}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Content Opportunities</h3>
          <ul className="mt-3 space-y-2">
            {lead.contentOpportunities.map((idea) => (
              <li key={idea} className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="mt-1 size-2 rounded-full bg-zinc-900" />
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Recommended Deliverables</h3>
          <ul className="mt-3 space-y-2">
            {lead.recommendedDeliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="mt-1 size-2 rounded-full bg-red-500" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Outreach Angle
          </p>
          <p className="mt-2 text-sm text-zinc-700">{lead.outreachAngle}</p>
        </div>
      </section>
    </article>
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<Region[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformFilter[]>([]);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesIndustry =
        selectedIndustries.length === 0 || selectedIndustries.includes(lead.industry);
      const matchesLocation =
        selectedLocations.length === 0 || selectedLocations.includes(lead.location);

      const availablePlatforms = [
        lead.instagram.platform,
        ...lead.supportingPlatforms.map((platform) => platform.platform),
      ] as PlatformFilter[];

      const matchesPlatform =
        selectedPlatforms.length === 0 ||
        selectedPlatforms.some((platform) => availablePlatforms.includes(platform));

      const normalizedHaystack = [
        lead.name,
        lead.headline,
        lead.overview,
        lead.outreachAngle,
        ...lead.brandKeywords,
        ...lead.visualHooks,
        ...lead.fitReasons,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchTerm.trim().length === 0 ||
        normalizedHaystack.includes(searchTerm.trim().toLowerCase());

      return matchesIndustry && matchesLocation && matchesPlatform && matchesSearch;
    });
  }, [selectedIndustries, selectedLocations, selectedPlatforms, searchTerm]);

  const industryBreakdown = useMemo(() => {
    return industryOptions.map((industry) => ({
      industry,
      count: leads.filter((lead) => lead.industry === industry).length,
    }));
  }, []);

  const regionBreakdown = useMemo(() => {
    return locationOptions.map((region) => ({
      region,
      count: leads.filter((lead) => lead.location === region).length,
    }));
  }, []);

  const averageFollowers = useMemo(() => {
    const followerTotals = leads
      .map((lead) => Number(lead.instagram.followers.replace(/[^0-9.]/g, "")))
      .filter((count) => !Number.isNaN(count));

    if (!followerTotals.length) {
      return "—";
    }

    const avg = followerTotals.reduce((sum, count) => sum + count, 0) / followerTotals.length;
    return `${Math.round(avg)}K+`;
  }, []);

  const toggleSelection = <T extends string>(current: T[], value: T, setValue: (next: T[]) => void) => {
    const exists = current.includes(value);
    setValue(exists ? current.filter((item) => item !== value) : [...current, value].sort());
  };

  return (
    <div
      className="min-h-screen w-full px-4 py-16 sm:px-8 lg:px-12 2xl:px-16"
      style={{ backgroundImage: gradientBackground, backgroundAttachment: "fixed" }}
    >
      <main className="mx-auto flex max-w-6xl flex-col gap-12">
        <section className="rounded-3xl border border-white/30 bg-white/60 p-10 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
                Nodi Verse | Lead Research
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                High-impact creative collaborations for cinematic storytelling.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                Curated pipeline of premium, visually-led brands ready for AI-enhanced animation,
                launch films, and futuristic campaign worlds. Filter by industry, region, and
                platform to prioritize outreach.
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Updated {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="grid w-full max-w-sm gap-3">
              <StatBadge label="Active Leads" value={`${leads.length}`} />
              <StatBadge
                label="Industries Covered"
                value={`${industryOptions.length} focus areas`}
              />
              <StatBadge label="Avg. Instagram Reach" value={averageFollowers} />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/30 bg-white/70 p-8 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <label htmlFor="search" className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Intelligent Search
                </label>
                <input
                  id="search"
                  placeholder="Search by brand, keywords, storytelling angle..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white/90 px-5 py-3 text-sm text-zinc-800 shadow-inner shadow-zinc-900/5 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>
              <div className="flex justify-end">
                <span className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
                  {filteredLeads.length} leads match
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Industries
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {industryOptions.map((industry) => (
                    <TogglePill
                      key={industry}
                      label={industry}
                      isActive={selectedIndustries.includes(industry)}
                      onClick={(value) =>
                        toggleSelection(selectedIndustries, value, setSelectedIndustries)
                      }
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Regions
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {locationOptions.map((location) => (
                    <TogglePill
                      key={location}
                      label={location}
                      isActive={selectedLocations.includes(location)}
                      onClick={(value) =>
                        toggleSelection(selectedLocations, value, setSelectedLocations)
                      }
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Key Platforms
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {platformOptions.map((platform) => (
                    <TogglePill
                      key={platform}
                      label={platform}
                      isActive={selectedPlatforms.includes(platform)}
                      onClick={(value) => toggleSelection(selectedPlatforms, value, setSelectedPlatforms)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Industry Spread
                </p>
                <ul className="mt-3 space-y-1.5">
                  {industryBreakdown.map((item) => (
                    <li key={item.industry} className="flex justify-between text-sm text-zinc-700">
                      <span>{item.industry}</span>
                      <span>{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Regional Focus
                </p>
                <ul className="mt-3 space-y-1.5">
                  {regionBreakdown.map((item) => (
                    <li key={item.region} className="flex justify-between text-sm text-zinc-700">
                      <span>{item.region}</span>
                      <span>{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8">
          {filteredLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
          {filteredLeads.length === 0 && (
            <div className="rounded-3xl border border-dashed border-red-300 bg-white/60 p-12 text-center text-zinc-500">
              <p className="text-lg font-semibold text-zinc-700">No leads match the current filters.</p>
              <p className="mt-2 text-sm text-zinc-500">
                Try broadening the industry, region, or platform criteria to reveal more collaboration
                prospects.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

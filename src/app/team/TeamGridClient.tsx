"use client";

import { useEffect, useId, useMemo, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  photoSrc: string;
  linkedinUrl?: string;
  bio: string;
  credentials?: string[];
  profile?: string[];
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.83-2.71 3.74V23h-4V8.5z" />
    </svg>
  );
}

function TeamCard({ m }: { m: TeamMember }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(37,58,135,0.06),transparent_45%),radial-gradient(800px_circle_at_90%_20%,rgba(31,106,58,0.06),transparent_45%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-black/10 bg-black/[.03]">
            {imgOk ? (
              <img
                src={m.photoSrc}
                alt={m.name}
                className="h-full w-full object-cover"
                onLoad={() => setImgOk(true)}
                onError={() => setImgOk(false)}
              />
            ) : null}
            {!imgOk ? (
              <div
                className="absolute inset-0 flex items-center justify-center text-base font-semibold text-black/60"
                aria-hidden="true"
              >
                {initials(m.name)}
              </div>
            ) : null}
          </div>

          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-tight text-[var(--rma-ink)]">
              {m.name}
            </p>
            <p className="mt-1 inline-flex items-center rounded-full bg-black/[.04] px-3 py-1 text-xs font-semibold text-black/60">
              {m.role}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[color:var(--rma-muted)]">
          {m.bio}
        </p>
      </div>
    </div>
  );
}

export function TeamGridClient({ team }: { team: TeamMember[] }) {
  const [openName, setOpenName] = useState<string | null>(null);
  const baseId = useId();

  const openMember = useMemo(() => {
    if (!openName) return null;
    return team.find((t) => t.name === openName) || null;
  }, [openName, team]);

  useEffect(() => {
    if (!openName) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenName(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openName]);

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <button
            key={m.name}
            type="button"
            onClick={() => setOpenName(m.name)}
            className="text-left"
            aria-haspopup="dialog"
            aria-controls={`${baseId}-team-dialog`}
          >
            <TeamCard m={m} />
          </button>
        ))}
      </div>

      {openMember ? (
        <div
          id={`${baseId}-team-dialog`}
          role="dialog"
          aria-modal="true"
          aria-label={`${openMember.name} profile`}
          className="fixed inset-0 z-[80]"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close profile"
            onClick={() => setOpenName(null)}
          />

          <div className="absolute left-1/2 top-1/2 w-[min(92vw,860px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold tracking-tight text-[var(--rma-ink)]">
                  {openMember.name}
                </p>
                <p className="mt-1 text-sm text-black/60">{openMember.role}</p>
              </div>
              <div className="flex items-center gap-2">
                {openMember.linkedinUrl ? (
                  <a
                    href={openMember.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-[color:var(--rma-blue)] shadow-sm hover:bg-black/[.02]"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setOpenName(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 hover:bg-black/[.03]"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-12 sm:p-8">
              <div className="sm:col-span-4">
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[.03]">
                  <img
                    src={openMember.photoSrc}
                    alt={openMember.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="sm:col-span-8">
                {openMember.credentials && openMember.credentials.length ? (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {openMember.credentials.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-black/10 bg-black/[.02] px-3 py-1 text-xs font-semibold text-black/60"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="space-y-3">
                  {(openMember.profile && openMember.profile.length
                    ? openMember.profile
                    : [openMember.bio]
                  ).map((p) => (
                    <p key={p} className="text-sm leading-7 text-black/70">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}


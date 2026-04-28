"use client";

type TeamMember = {
  name: string;
  role: string;
  photoSrc: string;
  bio: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

function TeamCard({ m }: { m: TeamMember }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(37,58,135,0.06),transparent_45%),radial-gradient(800px_circle_at_90%_20%,rgba(31,106,58,0.06),transparent_45%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-black/10 bg-black/[.03]">
            <img
              src={m.photoSrc}
              alt={m.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-base font-semibold text-black/60">
              {initials(m.name)}
            </div>
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
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((m) => (
        <TeamCard key={m.name} m={m} />
      ))}
    </div>
  );
}


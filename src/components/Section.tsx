import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-18">
      <div className="rma-container">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-wider text-black/50">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-7 text-black/60">
                {description}
              </p>
            ) : null}
          </div>
          <div className="md:col-span-7">{children}</div>
        </div>
      </div>
    </section>
  );
}


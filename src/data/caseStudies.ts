import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudyEntry = CollectionEntry<'case-studies'>;

export const caseStudyPlaceholderImage = '/images/case-studies/placeholder.webp';

export interface CaseStudySummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  sortTimestamp: number;
  image: string;
}

export function getCaseStudySlug(study: CaseStudyEntry) {
  return study.id.replace(/\.md$/, '');
}

export function getCaseStudyImage(image: string) {
  return image || caseStudyPlaceholderImage;
}

function getCaseStudySortTimestamp(date: Date | undefined) {
  return date?.getTime() ?? 0;
}

export function toCaseStudySummary(study: CaseStudyEntry): CaseStudySummary {
  return {
    slug: getCaseStudySlug(study),
    title: study.data.title,
    description: study.data.description,
    category: study.data.category,
    sortTimestamp: getCaseStudySortTimestamp(study.data.date),
    image: getCaseStudyImage(study.data.image),
  };
}

export async function getCaseStudyEntries() {
  return getCollection('case-studies');
}

export async function getCaseStudySummaries() {
  const studies = await getCaseStudyEntries();

  return studies
    .map(toCaseStudySummary)
    .sort(
      (a, b) =>
        b.sortTimestamp - a.sortTimestamp || a.title.localeCompare(b.title, 'ja'),
    );
}

export async function getCaseStudyStaticPaths() {
  const studies = await getCaseStudyEntries();

  return studies.map((study) => ({
    params: { slug: getCaseStudySlug(study) },
    props: { study },
  }));
}

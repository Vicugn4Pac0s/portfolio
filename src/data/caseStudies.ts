import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudyEntry = CollectionEntry<'case-studies'>;

export interface CaseStudySummary {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export function getCaseStudySlug(study: CaseStudyEntry) {
  return study.id.replace(/\.md$/, '');
}

export function toCaseStudySummary(study: CaseStudyEntry): CaseStudySummary {
  return {
    slug: getCaseStudySlug(study),
    number: study.data.number,
    title: study.data.title,
    description: study.data.description,
    image: study.data.image,
  };
}

export async function getCaseStudyEntries() {
  return getCollection('case-studies');
}

export async function getCaseStudySummaries() {
  const studies = await getCaseStudyEntries();

  return studies
    .map(toCaseStudySummary)
    .sort((a, b) => a.number.localeCompare(b.number));
}

export async function getCaseStudyStaticPaths() {
  const studies = await getCaseStudyEntries();

  return studies.map((study) => ({
    params: { slug: getCaseStudySlug(study) },
    props: { study },
  }));
}

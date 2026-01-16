import { createContentService, type ContentEntry, type ContentPageData } from './factory';

export interface PhilosophyMetadata {
    title: {
        text: string;
        config?: string;
        hash?: string;
    };
    description: string;
    updated_at?: string;
    published_at?: string;
    tags?: string[];
}

export type PhilosophyEntry = ContentEntry<PhilosophyMetadata>;
export type PhilosophyPageData = ContentPageData<PhilosophyMetadata>;

const includeDrafts = import.meta.env.DEV;
const draftSortFallback = Number.MIN_SAFE_INTEGER;

const parsePublishedAt = (value?: string): number | null => {
    if (!value) {
        return null;
    }
    const timestamp = new Date(value).getTime();
    return Number.isNaN(timestamp) ? null : timestamp;
};

const getSortValue = (entry: PhilosophyEntry) =>
    parsePublishedAt(entry.metadata.published_at) ?? draftSortFallback;

const isPublished = (entry: PhilosophyEntry) => parsePublishedAt(entry.metadata.published_at) !== null;

const philosophyService = createContentService<PhilosophyMetadata>({
    modules: import.meta.glob('/content/philosophy/*/+page.svx'),
    contentType: 'philosophy',
    slugFromPath: (path) => {
        const cleaned = path.replace(/\/\+page\.svx$/, '');
        return cleaned.substring(cleaned.lastIndexOf('/') + 1);
    },
    filter: (entry) => includeDrafts || isPublished(entry),
    sort: (a, b) => getSortValue(b) - getSortValue(a)
});

export const getAllPhilosophy = philosophyService.getAll;
export const getPhilosophyBySlug = philosophyService.getBySlug;

const PHILOSOPHY_COUNT = 4;
export const getLatestPhilosophy = () => philosophyService.getLatest(PHILOSOPHY_COUNT);

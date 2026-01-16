import { createContentService, type ContentEntry, type ContentPageData } from './factory';

export interface PoetryMetadata {
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

export type PoetryEntry = ContentEntry<PoetryMetadata>;
export type PoetryPageData = ContentPageData<PoetryMetadata>;

const includeDrafts = import.meta.env.DEV;
const draftSortFallback = Number.MIN_SAFE_INTEGER;

const parsePublishedAt = (value?: string): number | null => {
    if (!value) {
        return null;
    }
    const timestamp = new Date(value).getTime();
    return Number.isNaN(timestamp) ? null : timestamp;
};

const getSortValue = (entry: PoetryEntry) =>
    parsePublishedAt(entry.metadata.published_at) ?? draftSortFallback;

const isPublished = (entry: PoetryEntry) => parsePublishedAt(entry.metadata.published_at) !== null;

const poetryService = createContentService<PoetryMetadata>({
    modules: import.meta.glob('/content/poetry/*/+page.svx'),
    contentType: 'poetry',
    slugFromPath: (path) => {
        const cleaned = path.replace(/\/\+page\.svx$/, '');
        return cleaned.substring(cleaned.lastIndexOf('/') + 1);
    },
    filter: (entry) => includeDrafts || isPublished(entry),
    sort: (a, b) => getSortValue(b) - getSortValue(a)
});

export const getAllPoetry = poetryService.getAll;
export const getPoetryBySlug = poetryService.getBySlug;

const POETRY_COUNT = 4;
export const getLatestPoetry = () => poetryService.getLatest(POETRY_COUNT);

import { measurePerformance } from '$lib/utils/performance';

export interface CommitLanguage {
	size: number;
	name: string;
	color: string;
}

export interface V2CommitItem {
	repo: string;
	additions: number;
	deletions: number;
	commitUrl: string;
	committedDate: string;
	oid: string;
	messageHeadline: string;
	messageBody: string;
}

export interface KatibV2Response {
	commits: V2CommitItem[];
	languages: CommitLanguage[];
	stats: { totalAdditions: number; totalDeletions: number; totalCommits: number };
}

export interface ProcessedCommit {
	repo: string;
	message: string;
	href: string;
	sha: string;
	date: string;
	additions?: number;
	deletions?: number;
}

export interface CommitData {
	commits: ProcessedCommit[];
	languages: CommitLanguage[];
	totalAdditions: number;
	totalDeletions: number;
	totalCommits: number;
}

const FALLBACK_RAW: KatibV2Response = {
	commits: [],
	languages: [],
	stats: { totalAdditions: 0, totalDeletions: 0, totalCommits: 0 }
};

function processResponse(data: KatibV2Response): CommitData {
	const commits: ProcessedCommit[] = (data.commits || []).map((c) => ({
		repo: c.repo,
		message: c.messageHeadline,
		href: c.commitUrl,
		sha: c.oid,
		date: c.committedDate,
		additions: c.additions,
		deletions: c.deletions
	}));

	const totalAdditions =
		data.stats?.totalAdditions ?? commits.reduce((acc, c) => acc + (c.additions || 0), 0);
	const totalDeletions =
		data.stats?.totalDeletions ?? commits.reduce((acc, c) => acc + (c.deletions || 0), 0);
	const totalCommits = data.stats?.totalCommits ?? commits.length;

	return {
		commits,
		languages: data.languages || [],
		totalAdditions,
		totalDeletions,
		totalCommits
	};
}

/**
 * Fetches the latest commits from the katib API (Vercel version - no KV)
 */
export async function fetchLatestCommits(): Promise<CommitData> {
	console.log('[PERF] fetchLatestCommits: fetching from katib...');
	return await refreshCache();
}

async function refreshCache(): Promise<CommitData> {
	return await measurePerformance('katib-api-fetch', async () => {
		try {
			// Using DsChauhan08 username
			const response = await fetch(
				'https://katib.jasoncameron.dev/v2/commits/latest?username=DsChauhan08&limit=5',
				{
					headers: { Accept: 'application/json', 'User-Agent': 'nyx-website/1.0' },
					signal: AbortSignal.timeout(1500)
				}
			);

			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const json: KatibV2Response = await response.json();
			return processResponse(json);
		} catch (err) {
			console.warn('katib fetch failed:', err);
			console.log('Using fallback data after fetch failure');
			return processResponse(FALLBACK_RAW);
		}
	});
}

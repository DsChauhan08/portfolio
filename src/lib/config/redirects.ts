/*
 * Copyright (c) 2025. Dhananjay Singh Chauhan
 * All Rights Reserved
 */
import Site from '$lib/config/common';
import createRedirects from '$utils/redirects';

const redirects = createRedirects([
	{ paths: ['/github', '/gh'], url: Site.out.github },
	{ paths: '/kaggle', url: Site.out.kaggle },
	{ paths: '/huggingface', url: Site.out.huggingface },
	{ paths: '/repo', url: Site.repo.url }
]);

export default redirects;

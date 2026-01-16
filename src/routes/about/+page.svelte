<script lang="ts">
	import {
		IconUser,
		IconBrandGithub,
		IconMail,
		IconCode,
		IconShield,
		IconBrain
	} from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
</script>

<svelte:head>
	<title>About Me | Dhananjay Singh Chauhan</title>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-8 px-4 py-8">
	<!-- About Me Section -->
	<section class="space-y-6">
		<h1 class="text-3xl font-bold">About Me</h1>

		<div class="space-y-4">
			<p class="text-subtext0 leading-relaxed">
				<b>Hey!</b> I'm Dhananjay Singh Chauhan (DsChauhan08) — a Year 12 student interested in
				cybersecurity, forensics, and blue team work.
			</p>

			<p class="text-subtext0 leading-relaxed">
				I write code like a stoic. Configure systems like a monk. Break things like a scientist.
			</p>

			<p class="text-subtext0 leading-relaxed">
				NixOS user, reality compiler, LLM enjoyer. I believe in building tools that work offline,
				require no cloud dependencies, and respect user privacy.
			</p>
		</div>

		<!-- Currently Learning -->
		<div class="border-surface0 rounded-lg border p-4">
			<h2 class="text-text mb-3 flex items-center gap-2 font-semibold">
				<IconBrain size={18} class="text-accent" />
				Currently Learning
			</h2>
			<ul class="text-subtext0 space-y-1 text-sm">
				<li>• CCNA (Network Fundamentals, Routing, Switching)</li>
				<li>• CompTIA Security+ (Threats, Attacks, Hardening)</li>
				<li>• Malware Analysis & DFIR</li>
				<li>• LLM architecture, fine-tuning, prompt engineering</li>
			</ul>
		</div>

		<!-- Specialties -->
		<div class="border-surface0 rounded-lg border p-4">
			<h2 class="text-text mb-3 flex items-center gap-2 font-semibold">
				<IconCode size={18} class="text-accent" />
				Specialties
			</h2>
			<ul class="text-subtext0 space-y-1 text-sm">
				<li>• Malware behavior analysis</li>
				<li>• C, JavaScript and Java development, occasionally Python</li>
				<li>• Networking (subnetting, switching, routing)</li>
				<li>• Nix flakes + system reproducibility</li>
				<li>• LLM fine-tuning (QLoRA, PEFT, dataset curation)</li>
			</ul>
		</div>

		<!-- Links -->
		<div class="flex flex-wrap gap-4 pt-2">
			<a
				href={Site.out.github}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
			>
				<IconBrandGithub size={16} />
				GitHub
			</a>

			<span class="text-surface1">•</span>

			<a
				href={Site.out.kaggle}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
			>
				Kaggle
			</a>

			<span class="text-surface1">•</span>

			<a
				href={Site.out.huggingface}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
			>
				HuggingFace
			</a>

			<span class="text-surface1">•</span>

			<a
				href={Site.out.email}
				class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
			>
				<IconMail size={16} />
				Email
			</a>
		</div>
	</section>

	<!-- Philosophy -->
	<section class="space-y-4">
		<h2 class="text-2xl font-bold">Philosophy</h2>
		<blockquote class="text-subtext0 border-accent/50 border-l-2 pl-4 italic">
			"Write code like a stoic. Configure systems like a monk. Break things like a scientist."
		</blockquote>
		<p class="text-subtext0 leading-relaxed">
			I read code and books with equal hostility. Currently working through the Bhagavad Gita,
			Marcus Aurelius, and learning from the best resources I can find.
		</p>
	</section>
</div>

import { a6 as head, $ as attr } from "../../../chunks/index2.js";
import { M as Mail, S as Site } from "../../../chunks/common.js";
import { B as Brain } from "../../../chunks/brain.js";
import { C as Code } from "../../../chunks/code.js";
import { B as Brand_github } from "../../../chunks/brand-github.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("cwls5q", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>About Me | Dhananjay Singh Chauhan</title>`);
      });
    });
    $$renderer2.push(`<div class="mx-auto max-w-3xl space-y-8 px-4 py-8"><section class="space-y-6"><h1 class="text-3xl font-bold">About Me</h1> <div class="space-y-4"><p class="text-subtext0 leading-relaxed"><b>Hey!</b> I'm Dhananjay Singh Chauhan (DsChauhan08) — a Year 12 student interested in
				cybersecurity, forensics, and blue team work.</p> <p class="text-subtext0 leading-relaxed">I write code like a stoic. Configure systems like a monk. Break things like a scientist.</p> <p class="text-subtext0 leading-relaxed">NixOS user, reality compiler, LLM enjoyer. I believe in building tools that work offline,
				require no cloud dependencies, and respect user privacy.</p></div> <div class="border-surface0 rounded-lg border p-4"><h2 class="text-text mb-3 flex items-center gap-2 font-semibold">`);
    Brain($$renderer2, { size: 18, class: "text-accent" });
    $$renderer2.push(`<!----> Currently Learning</h2> <ul class="text-subtext0 space-y-1 text-sm"><li>• CCNA (Network Fundamentals, Routing, Switching)</li> <li>• CompTIA Security+ (Threats, Attacks, Hardening)</li> <li>• Malware Analysis &amp; DFIR</li> <li>• LLM architecture, fine-tuning, prompt engineering</li></ul></div> <div class="border-surface0 rounded-lg border p-4"><h2 class="text-text mb-3 flex items-center gap-2 font-semibold">`);
    Code($$renderer2, { size: 18, class: "text-accent" });
    $$renderer2.push(`<!----> Specialties</h2> <ul class="text-subtext0 space-y-1 text-sm"><li>• Malware behavior analysis</li> <li>• C, JavaScript and Java development, occasionally Python</li> <li>• Networking (subnetting, switching, routing)</li> <li>• Nix flakes + system reproducibility</li> <li>• LLM fine-tuning (QLoRA, PEFT, dataset curation)</li></ul></div> <div class="flex flex-wrap gap-4 pt-2"><a${attr("href", Site.out.github)} target="_blank" rel="noopener noreferrer" class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors">`);
    Brand_github($$renderer2, { size: 16 });
    $$renderer2.push(`<!----> GitHub</a> <span class="text-surface1">•</span> <a${attr("href", Site.out.kaggle)} target="_blank" rel="noopener noreferrer" class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors">Kaggle</a> <span class="text-surface1">•</span> <a${attr("href", Site.out.huggingface)} target="_blank" rel="noopener noreferrer" class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors">HuggingFace</a> <span class="text-surface1">•</span> <a${attr("href", Site.out.email)} class="hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors">`);
    Mail($$renderer2, { size: 16 });
    $$renderer2.push(`<!----> Email</a></div></section> <section class="space-y-4"><h2 class="text-2xl font-bold">Philosophy</h2> <blockquote class="text-subtext0 border-accent/50 border-l-2 pl-4 italic">"Write code like a stoic. Configure systems like a monk. Break things like a scientist."</blockquote> <p class="text-subtext0 leading-relaxed">I read code and books with equal hostility. Currently working through the Bhagavad Gita,
			Marcus Aurelius, and learning from the best resources I can find.</p></section></div>`);
  });
}
export {
  _page as default
};

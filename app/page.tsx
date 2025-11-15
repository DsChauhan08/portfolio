import { Content, ContentTitle, Page, Section } from "@/components/content";
import { Experience, ExperienceAndProjects, TimelineEnd, TimelineStart } from "@/components/experience";
import { Sidebar, SidebarTitle, SidebarName, SidebarSubtitle, SidebarNavigation, SidebarNavLink } from "@/components/sidebar";
import { SidebarNavItem } from "@/components/sidebar-client";
import { tags } from "./tags";
import { Email, GitHub } from "@/components/icons";
import Quote from "@/components/quote";
import { Contact, ContactEnd, ContactLink, ContactStart } from "@/components/contact";
import { jetbrainsMono } from "@/lib/fonts";

export default function Portfolio() {
	return (
		<Page>
			<Sidebar rows={4}>
				<SidebarName>
					<SidebarTitle>{"Dhananjay"}</SidebarTitle>
					<SidebarSubtitle>{"Security Engineer"}</SidebarSubtitle>
					<SidebarSubtitle secondary>{"Software Developer"}</SidebarSubtitle>
				</SidebarName>
				<SidebarNavigation>
					<SidebarNavItem section="stack">{"* Tech Stack"}</SidebarNavItem>
					<br/>
					<SidebarNavItem section="experience">{"* Experience"}</SidebarNavItem>
					<br/>
					<SidebarNavItem section="projects">{"* Projects"}</SidebarNavItem>
					<br/>
					<SidebarNavItem section="contact">{"* Contact"}</SidebarNavItem>
				</SidebarNavigation>
				<SidebarNavigation inter>
					<SidebarNavLink href="https://github.com/DsChauhan08">
						<div className="flex flex-row items-end gap-4">
							<GitHub size={32} />
							<span>{"GitHub"}</span>
						</div>
					</SidebarNavLink>
				</SidebarNavigation>
				<div className="h-full flex flex-col justify-center text-slate-400 text-sm">
					<p>{"Open Source"}</p>
					<p>{"Bug Bounty"}</p>
				</div>
			</Sidebar>
			<Content>
				<Section id="stack">
					<ContentTitle>{"Tech Stack"}</ContentTitle>
					<div className="px-16 pb-16 pt-8">
						<div className="flex flex-wrap gap-4 max-w-[80ch]">
							{[tags.linux, tags.c, tags.javascript, tags.git, tags.rust, tags.rhel].map((tag, index) => (
								<div key={index} className={`${jetbrainsMono.className} border-2 border-slate-600/60 hover:border-sky-500/80 transition-colors duration-200 py-3 px-5 rounded-2xl text-lg font-semibold text-slate-300 flex flex-row items-center gap-3`}>
									{tag.icon && tag.icon}
									<span>{tag.name}</span>
								</div>
							))}
						</div>
					</div>
				</Section>
				<Section id="experience">
					<ContentTitle>{"Experience"}</ContentTitle>
					<ExperienceAndProjects>
						<TimelineStart />
						<Experience
							title="Security Researcher & Bug Bounty Hunter"
							content="Active on HackerOne platform, identifying and reporting security vulnerabilities in web applications and systems. Focused on finding critical security flaws including authentication bypasses, XSS, CSRF, and other OWASP Top 10 vulnerabilities."
							time="2023 - Present"
							state="Security Research"
							tags={[tags.security, tags.pentesting]}
							website="https://hackerone.com/dschauhan08"
						/>
						<Experience
							title="Open Source Contributor"
							content="Active contributor to various open-source projects with consistent GitHub contributions. Working on diverse projects ranging from web development to security tools. Passionate about collaborative development and giving back to the community."
							time="2023 - Present"
							state="Open Source"
							tags={[tags.git, tags.opensource]}
							github="https://github.com/DsChauhan08"
						/>
						<Experience
							title="High School"
							content="Currently in Year 12, STEM student focusing on computer science, security engineering, and philosophy. Maintaining strong academic performance while actively contributing to open-source projects and security research."
							time="2023 - Present"
							state="Education"
						/>
						<TimelineEnd />
					</ExperienceAndProjects>
				</Section>
				<Section id="projects">
					<ContentTitle>{"Projects"}</ContentTitle>
					<ExperienceAndProjects>
						<TimelineStart />
						<Experience
							title="Flameshot Contribution"
							content="Contributed to Flameshot, a powerful yet simple to use screenshot software with built-in annotation tools. Open source project with over 24k GitHub stars."
							time="2024"
							state="Open Source"
							tags={[tags.cpp, tags.opensource]}
							website="https://flameshot.org"
							github="https://github.com/flameshot-org/flameshot"
						/>
						<Experience
							title="Game Shop"
							content="E-commerce platform for video games with modern UI, shopping cart functionality, and user authentication. Built with responsive design principles."
							time="2024"
							state="Completed"
							tags={[tags.javascript, tags.react]}
							github="https://github.com/DsChauhan08/Game-shop"
						/>
						<Experience
							title="EasyCopy"
							content="Simple and efficient clipboard management tool. Streamlines copy-paste workflows with enhanced functionality and user-friendly interface."
							time="2024"
							state="Completed"
							tags={[tags.javascript]}
							github="https://github.com/DsChauhan08/easycopy"
						/>
						<Experience
							title="Security Tools & Scripts"
							content="Developed custom security assessment tools and automation scripts for penetration testing workflows. Created utilities for reconnaissance, vulnerability scanning, and exploit development."
							time="2023 - 2024"
							state="Ongoing"
							tags={[tags.python, tags.bash]}
							github="https://github.com/DsChauhan08"
						/>
						<TimelineEnd />
					</ExperienceAndProjects>
				</Section>
				<Section id="contact">
					<ContentTitle>{"Contact"}</ContentTitle>
					<Contact>
						<ContactStart />
						<ContactLink icon={<Email size={32} className="text-slate-400" />} title="singhdschauhan10@gmail.com" href="mailto:singhdschauhan10@gmail.com" />
						<ContactLink icon={<GitHub size={32} className="text-slate-400" />} title="GitHub" href="https://github.com/DsChauhan08" />
						<ContactEnd />
					</Contact>
				</Section>
				<Quote>
					<span className="text-slate-700">{"\""}</span>
					<span>{"Strive for "}</span>
					<span className="text-sky-400">{"greatness"}</span>
					<span>{", not "}</span>
					<br/>
					<span className="text-sky-400">{"power"}</span>
					<span>{"."}</span>
					<span className="text-slate-700">{"\""}</span>
				</Quote>
			</Content>
		</Page>
	);
}

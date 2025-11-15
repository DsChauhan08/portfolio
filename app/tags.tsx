import { Angular, Arduino, Assembly, AuthJS, CPP, CSharp, Docker, Firebase, JavaScript, NextJS, NodeJS, PostgreSQL, React, Rust, ShadCN, Swift, TailwindCSS, TypeScript } from "@/components/icons";

export type Tag = {
	name: string;
	url?: string;
	icon?: React.ReactNode;
};

export const tags = {
	react: {
		name: "React",
		url: "https://react.dev",
		icon: <React size={24} className="group-hover:text-sky-300" />,
	},
	nextjs: {
		name: "Next.js",
		url: "https://nextjs.org",
		icon: <NextJS size={24} className="group-hover:text-slate-300" />,
	},
	tailwindcss: {
		name: "Tailwind CSS",
		url: "https://tailwindcss.com",
		icon: <TailwindCSS size={24} className="group-hover:text-sky-300" />,
	},
	typescript: {
		name: "TypeScript",
		url: "https://typescriptlang.org",
		icon: <TypeScript size={24} className="group-hover:text-sky-300" />,
	},
	javascript: {
		name: "JavaScript",
		icon: <JavaScript size={24} className="group-hover:text-yellow-200" />,
	},
	nodejs: {
		name: "Node.js",
		url: "https://nodejs.org",
		icon: <NodeJS size={24} className="group-hover:text-green-300" />,
	},
	firebase: {
		name: "Firebase",
		url: "https://firebase.google.com",
		icon: <Firebase size={24} className="group-hover:text-yellow-200" />,
	},
	postgresql: {
		name: "PostgreSQL",
		url: "https://postgresql.org",
		icon: <PostgreSQL size={24} className="group-hover:text-sky-300" />,
	},
	rust: {
		name: "Rust",
		url: "https://rust-lang.org",
		icon: <Rust size={28} className="group-hover:text-red-300" />,
	},
	docker: {
		name: "Docker",
		url: "https://docker.com",
		icon: <Docker size={24} className="group-hover:text-sky-300" />,
	},
	shadcnui: {
		name: "shadcn/ui",
		url: "https://ui.shadcn.com",
		icon: <ShadCN size={24} className="group-hover:text-slate-300"/>,
	},
	authjs: {
		name: "Auth.js",
		url: "https://authjs.dev",
		icon: <AuthJS size={24} className="group-hover:text-purple-300" />,
	},
	assembly: {
		name: "Assembly",
		icon: <Assembly size={24} className="group-hover:text-red-300" />,
	},
	cpp: {
		name: "C++",
		url: "https://isocpp.org",
		icon: <CPP size={24} className="group-hover:text-sky-300" />,
	},
	c: {
		name: "C",
		url: "https://en.wikipedia.org/wiki/C_(programming_language)",
		icon: <CPP size={24} className="group-hover:text-sky-300" />,
	},
	rhel: {
		name: "RHEL",
		url: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-10-5zm0 2.2l6 3V12c0 4.5-3.1 8.8-6 10-2.9-1.2-6-5.5-6-10V7.2l6-3z"/></svg>,
	},
	arduino: {
		name: "Arduino",
		url: "https://arduino.cc",
		icon: <Arduino size={24} className="group-hover:text-sky-300" />,
	},
	swift: {
		name: "Swift",
		url: "https://swift.org",
		icon: <Swift size={24} className="group-hover:text-red-300" />,
	},
	angular: {
		name: "Angular",
		url: "https://angular.dev",
		icon: <Angular size={24} className="group-hover:text-red-300" />,
	},
	csharp: {
		name: "C#",
		url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
		icon: <CSharp size={24} className="group-hover:text-blue-300" />,
	},
	linux: {
		name: "Linux",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S14 4.8 14 4s-.7-1.5-1.5-1.5zm-2 3c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm5 0c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zM12 7c-3.3 0-6 2.7-6 6v3c0 1.1.9 2 2 2h1c.6 0 1-.4 1-1v-5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v5c0 .6.4 1 1 1h1c1.1 0 2-.9 2-2v-3c0-3.3-2.7-6-6-6z"/></svg>,
	},
	python: {
		name: "Python",
		url: "https://python.org",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9.8 2c-1.8 0-3.3.2-4.5.5C3.8 2.9 3 3.5 3 5v3h7v1H5c-1.7 0-3 1.3-3 3v3c0 1.7 1.3 3 3 3h2v-2.5c0-1.7 1.3-3 3-3h6c1.4 0 2.5-1.1 2.5-2.5V5c0-1.5-.8-2.1-2.3-2.5-1.2-.3-2.7-.5-4.5-.5H9.8zM8 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM14 10h7v1h-7v-1zm-4 2c-1.7 0-3 1.3-3 3v3c0 1.5.8 2.1 2.3 2.5 1.2.3 2.7.5 4.5.5h1.5c1.8 0 3.3-.2 4.5-.5 1.5-.4 2.3-1 2.3-2.5v-3h-7v-1h5c1.7 0 3-1.3 3-3v-3h-2v2.5c0 1.7-1.3 3-3 3h-6zm6 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/></svg>,
	},
	bash: {
		name: "Bash",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l16 8-16 8V4m2 2.5v11l11-5.5-11-5.5z"/></svg>,
	},
	html: {
		name: "HTML",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l1.5 16.5L12 21l7.5-1.5L21 3H3zm4.5 5.5h9l-.3 3h-5.7l.3 3h5.1l-.3 3-3.3 1-3.3-1-.2-2h-2.5l.3 3.5L12 19l4.5-1.5.6-7.5-11.1-.5z"/></svg>,
	},
	css: {
		name: "CSS",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l1.5 16.5L12 21l7.5-1.5L21 3H3zm12 11.5l-.5 1.5-3.5 1-3.5-1-.3-1.5h2l.1.5 2 .5 2-.5.2-1h-6l-.5-5h9l-.3 2H9l.2 1h5.5l-.7 2.5z"/></svg>,
	},
	bootstrap: {
		name: "Bootstrap",
		url: "https://getbootstrap.com",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-9 14H8V8h3c1.7 0 3 1.3 3 3 0 .8-.3 1.5-.8 2 .5.5.8 1.2.8 2 0 1.7-1.3 3-3 3zm.5-4c.8 0 1.5-.7 1.5-1.5S12.3 9 11.5 9H10v3h1.5zm0 4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H10v3h1.5z"/></svg>,
	},
	figma: {
		name: "Figma",
		url: "https://figma.com",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2c-1.7 0-3 1.3-3 3s1.3 3 3 3h3V2H8zm0 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3v-3H8zm8-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-3 8h3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3v-3z"/></svg>,
	},
	vscode: {
		name: "VS Code",
		url: "https://code.visualstudio.com",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2l-11 10L2 8.5 16.5 22 22 20V4l-5.5-2zM16 17l-9-5 9-5v10z"/></svg>,
	},
	git: {
		name: "Git",
		url: "https://git-scm.com",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 11.3l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4zM12 18l-6-6 6-6 6 6-6 6z"/></svg>,
	},
	github: {
		name: "GitHub",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z"/></svg>,
	},
	opensource: {
		name: "Open Source",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6h2c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4v2c3.3 0 6-2.7 6-6s-2.7-6-6-6z"/></svg>,
	},
	security: {
		name: "Security",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm0 2.2l6 3V12c0 4.5-3.1 8.8-6 10-2.9-1.2-6-5.5-6-10V7.2l6-3z"/></svg>,
	},
	pentesting: {
		name: "Pentesting",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>,
	},
	burpsuite: {
		name: "Burp Suite",
		icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>,
	},
}


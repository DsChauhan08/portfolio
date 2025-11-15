"use client";

import { useObserver } from "@/hooks/observer";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function SidebarNavItem({ children, section }: { children: React.ReactNode; section: string; }) {
	const active = useObserver(["stack", "experience", "projects", "blog", "contact"]);
	const router = useRouter();

	const navigate = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		
		// If it's a path like "/", navigate to it
		if (section === "/") {
			router.push("/");
			return;
		}
		
		// Otherwise, scroll to section
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	return (
		<a className={cn("text-3xl transition-colors duration-200 font-semibold text-slate-500 hover:text-sky-400 text-nowrap", active === section && "text-sky-400")} href={section === "/" ? "/" : `#${section}`} onClick={navigate}>
			{children}
		</a>
	)
}


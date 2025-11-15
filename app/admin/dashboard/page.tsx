import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import DashboardClient from './dashboard-client';
import { posts } from '@/app/blog/posts/data';

export default async function AdminDashboard() {
	const session = await auth();

	if (!session?.user) {
		redirect('/admin/login');
	}

	return <DashboardClient posts={posts} />;
}

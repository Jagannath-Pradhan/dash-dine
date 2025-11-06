import MenuItem from '@/app/menu/components/MenuItem';
import Link from 'next/link';
import { getMenuData } from '../components/Menu';

export default async function CategoryPage({ params }) {
    const { slug } = await params
    const { categories, menuItems } = await getMenuData();

    const category = categories.find((c) => c.slug === slug);
    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Category not found</h2>
                    <p className="text-gray-500 mt-2">Try selecting another category.</p>
                    <Link href="/menu" className="mt-4 inline-block px-4 py-2 bg-white border rounded-lg">Back to menu</Link>
                </div>
            </div>
        );
    }

    // all items for this category
    const items = menuItems.filter((it) => it.category === slug);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        {category.name}
                    </h1>
                    <p className="text-gray-600 mt-2">{items.length} items</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link href="/menu" className="text-sm text-gray-600 hover:underline">← Back to full menu</Link>
                </div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {items.map((item) => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

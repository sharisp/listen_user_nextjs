export default async function CategoryPage({ params }: { params: { slug: string } }) {
   const { slug } = await params;
    console.log(slug);
  return <div>Category: {slug}</div>;
}
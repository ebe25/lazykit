import NotFound from "@/components/pages/not-found";
import PAGES_CONFIG from "./_configs/_pages.config";
import MethodPage from "./_pages/method-page";

const DocsPage = ({ params: { slug } }: { params: { slug: string[] } }) => {
  const predefinedPage = PAGES_CONFIG.find(
    (page) => page.path === `/docs/${slug.join("/")}`
  );
  if (predefinedPage) {
    return <predefinedPage.component />;
  }
  if (slug.length === 3) {
    return <MethodPage slug={slug} />;
  }
  return <NotFound />;
};
export default DocsPage;

import Maybern from "../../components/projects/Maybern";
import Vault from "../../components/projects/Vault";
import HereAfter from "../../components/projects/HereAfter";
import Parker from "../../components/projects/Parker";
import Caravan from "../../components/projects/Caravan";
import { notFound } from "next/navigation";

const PROJECTS = {
  Maybern,
  Vault,
  HereAfter,
  Parker,
  Caravan,
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ProjectComponent = PROJECTS[slug as keyof typeof PROJECTS];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <div className="max-w-[800px] pt-[64px]">
      <ProjectComponent />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({
    slug,
  }));
}

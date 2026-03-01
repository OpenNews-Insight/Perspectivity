import PageWrapper from "@/components/PageWrapper";
import TeamHeroSection from "@/components/teams/TeamHeroSection";
import FounderSection from "@/components/teams/FounderSection";
import DepartmentSection from "@/components/teams/DepartmentSection";
import BottomCTA from "@/components/teams/BottomCTA";
import { founder, departments } from "@/data/teamData";

export default function TeamsPage() {
  const totalMembers = new Set([
    founder.name,
    ...departments.flatMap((d) => d.members.map((m) => m.name)),
  ]).size;

  return (
    <PageWrapper>
      <TeamHeroSection totalMembers={totalMembers} />
      <FounderSection />
      {departments.map((dept, index) => (
        <DepartmentSection
          key={dept.name}
          dept={dept}
          index={index}
          isLastDept={index === departments.length - 1}
        />
      ))}
      <BottomCTA />
    </PageWrapper>
  );
}

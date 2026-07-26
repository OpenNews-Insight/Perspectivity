import PageWrapper from "@/components/PageWrapper";
import TeamHeroSection from "@/components/teams/TeamHeroSection";
import FounderSection from "@/components/teams/FounderSection";
import DepartmentSection from "@/components/teams/DepartmentSection";
import BottomCTA from "@/components/teams/BottomCTA";
import { founders, departments } from "@/data/teamData";

/** "Abdullah Khan Zehady (Aninda)" and "Abdullah Khan Zehady" are one person
 *  written two ways, so the nickname comes off before counting. */
const canonicalName = (name: string) => name.replace(/\s*\(.*?\)\s*/g, " ").trim();

export default function TeamsPage() {
  // Counts unique people across founders and departments — the founder also
  // sits on the research team, under a name without the nickname.
  const totalMembers = new Set(
    [
      ...founders.map((f) => f.name),
      ...departments.flatMap((d) => d.members.map((m) => m.name)),
    ].map(canonicalName),
  ).size;

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

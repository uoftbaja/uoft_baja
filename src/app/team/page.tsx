import TeamMember from "@/components/TeamMember";

const teamMembers = [
  {
    name: "Russell Passmore",
    program: "MECH 2T7 + PEY",
    linkedinUrl: "https://www.linkedin.com/in/russell-passmore",
    imagePath: "/ind/russell_passmore.png",
  },
  {
    name: "Qin Bei",
    program: "MECH 2T7 + PEY",
    linkedinUrl: "https://www.linkedin.com/in/qin-bei",
    imagePath: "/ind/qin_bei_lol.png",
  },
  {
    name: "Naomi Lau",
    program: "MECH 2T7 + PEY",
    imagePath: "/ind/naomi_lau.png",
  },
  {
    name: "Stephen Kang",
    program: "MECH 2T7 + PEY",
    linkedinUrl: "https://www.linkedin.com/in/stephenjkang",
    imagePath: "/ind/stephen_kang.png",
  },
  {
    name: "Ali Alizada",
    program: "MECH 2T7 + PEY",
    linkedinUrl: "https://www.linkedin.com/in/ali-alizada-4b0287189",
    imagePath: "/ind/ali_alizada.png",
  },
  {
    name: "Benjamin Noto",
    program: "ECE 2T7 + PEY",
    imagePath: "/ind/ben_noto.png",
  },
  {
    name: "Julie Hayes",
    program: "Rotman - Finance and Economics, Year 2",
    imagePath: false,
  },
  {
    name: "Fiona Wang",
    program: "Rotman - Accounting, Year 2",
    imagePath: false,
  },
  {
    name: "Winston Zhao",
    program: "Rotman - Management with a focus in Marketing, Year 2",
    imagePath: false,
  },
];

export default function Team() {
  return (
    <main className="bg-white min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 py-16 md:px-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              program={member.program}
              linkedinUrl={member.linkedinUrl}
              imagePath={member.imagePath}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  program: string;
  linkedinUrl?: string;
  imagePath?: string | boolean;
}

export default function TeamMember({
  name,
  program,
  linkedinUrl,
  imagePath,
}: TeamMemberProps) {
  return (
    <div className="relative group">
      <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
        {imagePath ? (
          <Image
            src={imagePath as string}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center"></div>
        )}

        {/* Overlay with LinkedIn icon */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            !linkedinUrl && "pointer-events-none"
          }`}
        >
          <FaLinkedin className="text-white text-5xl" />
        </a>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{program}</p>
      </div>
    </div>
  );
}

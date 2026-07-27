import { motion } from "framer-motion";
import { cardChild } from "@/lib/motion";

interface Props {
  photo: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
}

export function TeamCard({ photo, name, credentials, role, bio }: Props) {
  return (
    <motion.div
      {...cardChild}
      className="bg-white border border-border rounded-[10px] overflow-hidden group hover:border-warm/20 hover:shadow-lg transition-all duration-300"
    >
      <img
        src={photo}
        alt={name}
        className="w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-500"
      />
      <div className="p-5">
        <h3 className="text-[17px] font-semibold text-navy">{name}</h3>
        <p className="text-[11px] font-semibold text-warm uppercase tracking-wider mt-1">
          {credentials} &middot; {role}
        </p>
        <p className="text-[14px] text-steel mt-3 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}

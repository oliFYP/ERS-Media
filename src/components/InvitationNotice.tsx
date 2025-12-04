import { Info } from "lucide-react";

export function InvitationNotice() {
  return (
    <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-lg flex gap-3">
      <Info className="h-5 w-5 text-[#d68a2d] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm text-white/90">
          <span className="font-semibold block mb-1">
            New users must be invited by an administrator.
          </span>
          If you've received an invitation email, click the link in that email
          to create your account.
        </p>
      </div>
    </div>
  );
}

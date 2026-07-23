"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Loader2, ArrowRight, Activity } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [role, setRole] = useState("Founder / Executive");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail("");
    setWebsite("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent onClose={onClose} className="glass-panel bg-[#0f0c1d] border-purple-500/40 p-6 sm:p-7 text-white max-w-md rounded-3xl shadow-2xl">
        {!isSubmitted ? (
          <>
            <DialogHeader className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold w-fit">
                <Activity className="size-3 text-purple-400" /> Interactive Waitlist Demo
              </div>
              <DialogTitle className="text-xl font-extrabold text-white">
                Join Priority Access Demo
              </DialogTitle>
              <DialogDescription className="text-xs text-gray-300">
                Test the early-access waitlist form flow and simulated queue reservation.
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono uppercase text-gray-400">
                  Email Address <span className="text-purple-400">*</span>
                </label>
                <Input
                  type="email"
                  required
                  placeholder="alex@company.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full bg-[#070510] border-white/15 text-white placeholder-gray-500 px-4 py-2 text-xs focus:border-purple-500 h-9"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono uppercase text-gray-400">
                  Company Domain
                </label>
                <Input
                  type="text"
                  placeholder="https://mybrand.io"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="rounded-full bg-[#070510] border-white/15 text-white placeholder-gray-500 px-4 py-2 text-xs focus:border-purple-500 h-9"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono uppercase text-gray-400">
                  Primary Role
                </label>
                <NativeSelect
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-full bg-[#070510] border-white/15 text-white text-xs h-9"
                >
                  <NativeSelectOption value="Founder / Executive">Founder / Executive</NativeSelectOption>
                  <NativeSelectOption value="VP of Product / Growth">VP of Product / Growth</NativeSelectOption>
                  <NativeSelectOption value="Lead Engineer / Architect">Lead Engineer / Architect</NativeSelectOption>
                  <NativeSelectOption value="UX Designer / Strategist">UX Designer / Strategist</NativeSelectOption>
                </NativeSelect>
              </div>

              <Button
                type="submit"
                variant="glow"
                size="md"
                disabled={isSubmitting}
                className="w-full mt-3 rounded-full py-2.5 text-xs flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Demo Reservation</span>
                    <ArrowRight className="size-3.5" />
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="py-4 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="size-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="size-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Priority Pass Reserved!</h3>
              <p className="text-xs text-gray-300 max-w-xs mx-auto">
                Simulated confirmation sent for <span className="text-purple-300 font-mono">{email}</span>.
              </p>
            </div>

            <div className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-gray-400 font-mono">
              Queue Spot: <span className="text-emerald-400 font-bold text-xs">#42 Demo Queue</span>
            </div>

            <Button variant="secondary" size="md" onClick={handleReset} className="w-full rounded-full text-xs">
              Close Window
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

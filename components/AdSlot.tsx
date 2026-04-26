/**
 * AdSlot — placeholder for Google AdSense units.
 *
 * To go live: replace the inner div with the real <ins> tag from AdSense dashboard.
 * Example:
 *   <ins
 *     className="adsbygoogle"
 *     style={{ display: "block" }}
 *     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *     data-ad-slot="XXXXXXXXXX"
 *     data-ad-format="auto"
 *     data-full-width-responsive="true"
 *   />
 */

interface AdSlotProps {
  label?: string;
  slotId?: string;
  className?: string;
}

export default function AdSlot({ label = "Ad Slot — Google AdSense", slotId: _slotId, className = "" }: AdSlotProps) {
  return (
    <div
      className={`w-full border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg flex items-center justify-center py-6 px-4 my-4 ${className}`}
      aria-hidden="true"
    >
      <span className="text-sm text-gray-400 font-medium tracking-wide">{label}</span>
    </div>
  );
}

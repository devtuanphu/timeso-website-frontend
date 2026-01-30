"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountUpStatsProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
  separator?: string;
}

export function CountUpStats({
  value,
  suffix = "",
  prefix = "",
  duration = 2.5,
  className = "",
  decimals = 0,
  separator = ".",
}: CountUpStatsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator={separator}
          useEasing={true}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}

// Preset for common stats patterns
interface StatItemProps {
  value: string; // e.g., "12", "30%", "5.000+"
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function AnimatedStatItem({
  value,
  label,
  className = "",
  valueClassName = "mb-2 text-[32px] font-bold text-[#212121] md:text-[40px] lg:text-[48px]",
  labelClassName = "text-[14px] leading-[20px] text-[#475467]",
}: StatItemProps) {
  // Parse value to extract number and suffix
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  const numericValue = match ? parseFloat(match[1].replace(".", "")) : 0;
  const suffix = match ? match[2] : "";

  return (
    <div className={className}>
      <p className={valueClassName}>
        <CountUpStats value={numericValue} suffix={suffix} />
      </p>
      <p className={labelClassName}>{label}</p>
    </div>
  );
}

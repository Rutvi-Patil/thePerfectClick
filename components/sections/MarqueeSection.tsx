import styles from './MarqueeSection.module.css';

const items = [
  "Analysis",
  "Strategy",
  "Business",
  "Marketing",
  "Innovation",
  "Growth",
  "Digital",
  "Creative",
  "Solutions",
  "Excellence",
];

export default function MarqueeSection() {
  return (
    <div className="w-full bg-transparent">
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          
          {/* First loop */}
          {items.map((item, index) => (
            <span
              key={index}
              className={`${styles.marqueeItem} text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-gray-800`}
            >
              {item}
              {index !== items.length - 1 && " • "}
            </span>
          ))}

          {/* Second loop for seamless scroll */}
          {items.map((item, index) => (
            <span
              key={`dup-${index}`}
              className={`${styles.marqueeItem} text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-gray-800`}
            >
              {item}
              {index !== items.length - 1 && " • "}
            </span>
          ))}

        </div>
      </div>
    </div>
  );
}

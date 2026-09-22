import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jack -- 3D Creator" },
      {
        name: "description",
        content:
          "Jack is a 3D creator crafting memorable digital worlds, identities, motion, and web experiences.",
      },
      { property: "og:title", content: "Jack -- 3D Creator" },
      {
        property: "og:description",
        content: "3D worlds, motion, branding, and digital experiences by Jack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const portrait =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const galleryImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const services = [
  ["3D Modeling", "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."],
  ["Rendering", "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."],
  ["Motion Design", "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."],
  ["Branding", "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence."],
  ["Web Design", "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."],
];

const projects = [
  {
    name: "Nextlevel Studio",
    category: "Client",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    name: "Aura Brand Identity",
    category: "Personal",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    name: "Solaris Digital",
    category: "Client",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
];

const aboutDecorations = [
  { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png", alt: "Metallic moon", className: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]", delay: 0.1, x: -80 },
  { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png", alt: "Abstract chrome object", className: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]", delay: 0.25, x: -80 },
  { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png", alt: "3D building block", className: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]", delay: 0.15, x: 80 },
  { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png", alt: "Floating 3D forms", className: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]", delay: 0.3, x: 80 },
];

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
};

function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = "div", className }: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const MotionElement = motion.create(as);
  return (
    <MotionElement
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0.2 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionElement>
  );
}

function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = event.clientX - (bounds.left + bounds.width / 2);
    const y = event.clientY - (bounds.top + bounds.height / 2);
    const padding = 150;
    const within = Math.abs(x) <= bounds.width / 2 + padding && Math.abs(y) <= bounds.height / 2 + padding;
    setActive(within);
    setPosition(within ? { x: x / 3, y: y / 3 } : { x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => { setActive(false); setPosition({ x: 0, y: 0 }); }}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: active ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

function ContactButton() {
  return (
    <a href="mailto:hello@jack.design" className="contact-gradient inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-paper transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base">
      Contact Me <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-project-border px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-frost transition-colors hover:bg-frost/10 sm:px-10 sm:py-3.5 sm:text-base">
      Live Project <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[620px] flex-col overflow-x-clip bg-ink px-6 md:px-10">
      <FadeIn y={-20} as="nav" className="relative z-30 flex justify-between pt-6 text-sm font-medium uppercase tracking-wider text-frost md:pt-8 md:text-lg lg:text-[1.4rem]" aria-label="Main navigation">
        <a className="transition-opacity duration-200 hover:opacity-70" href="#about">About</a>
        <a className="transition-opacity duration-200 hover:opacity-70" href="#services">Price</a>
        <a className="transition-opacity duration-200 hover:opacity-70" href="#projects">Projects</a>
        <a className="transition-opacity duration-200 hover:opacity-70" href="#contact">Contact</a>
      </FadeIn>
      <div className="relative z-0 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black leading-none tracking-tight uppercase sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">Hi, i&apos;m jack</h1>
        </FadeIn>
      </div>
      <FadeIn delay={0.6} y={30} className="absolute top-1/2 left-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <Magnet><img src={portrait} alt="Jack, 3D creator" className="h-auto w-full object-contain" /></Magnet>
      </FadeIn>
      <div id="contact" className="relative z-20 mt-auto flex items-end justify-between gap-4 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}><p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] leading-snug font-light tracking-wide text-frost uppercase sm:max-w-[220px] md:max-w-[260px]">a 3d creator driven by crafting striking and unforgettable projects</p></FadeIn>
        <FadeIn delay={0.5} y={20}><ContactButton /></FadeIn>
      </div>
    </section>
  );
}

function MarqueeRow({ images, direction, offset }: { images: string[]; direction: 1 | -1; offset: number }) {
  const repeated = [...images, ...images, ...images];
  const x = direction === 1 ? offset - 200 : -(offset - 200);
  return (
    <div className="flex w-max gap-3" style={{ transform: `translate3d(${x}px,0,0)`, willChange: "transform" }}>
      {repeated.map((src, index) => <img key={`${src}-${index}`} src={src} alt="3D motion project preview" loading="lazy" className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover" />)}
    </div>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const top = ref.current?.offsetTop ?? 0;
        setOffset((window.scrollY - top + window.innerHeight) * 0.3);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); };
  }, [reduceMotion]);
  return <section ref={ref} aria-label="Selected work reel" className="overflow-hidden bg-ink pt-24 pb-10 sm:pt-32 md:pt-40"><div className="flex flex-col gap-3"><MarqueeRow images={galleryImages.slice(0, 11)} direction={1} offset={offset} /><MarqueeRow images={galleryImages.slice(11)} direction={-1} offset={offset} /></div></section>;
}

function AnimatedCharacter({ char, progress, start, end }: { char: string; progress: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <span className="relative inline-block"><span className="invisible">{char}</span><motion.span className="absolute inset-0" style={{ opacity }}>{char}</motion.span></span>;
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  return <p ref={ref} className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] leading-relaxed font-medium text-frost">{text.split("").map((char, index) => { const start = index / text.length; return <AnimatedCharacter key={`${char}-${index}`} char={char === " " ? "\u00A0" : char} progress={scrollYProgress} start={start} end={Math.min(start + 0.12, 1)} />; })}</p>;
}

function AboutSection() {
  const copy = "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 py-20 sm:px-8 md:px-10">
      {aboutDecorations.map((item) => <FadeIn key={item.src} delay={item.delay} duration={0.9} x={item.x} y={0} className={`pointer-events-none absolute z-0 ${item.className}`}><img src={item.src} alt={item.alt} className="h-auto w-full object-contain" loading="lazy" /></FadeIn>)}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}><h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black leading-none tracking-tight uppercase">About me</h2></FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24"><AnimatedText text={copy} /><FadeIn y={20}><ContactButton /></FadeIn></div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-paper px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={40}><h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black leading-none tracking-tight uppercase sm:mb-20 md:mb-28">Services</h2></FadeIn>
      <div className="mx-auto max-w-5xl border-t border-ink/15">
        {services.map(([name, description], index) => <FadeIn key={name} delay={index * 0.1} y={24} className="grid grid-cols-[minmax(80px,0.45fr)_1fr] gap-5 border-b border-ink/15 py-8 sm:grid-cols-[minmax(150px,0.45fr)_1fr] sm:gap-8 sm:py-10 md:py-12"><div className="text-[clamp(3rem,10vw,140px)] font-black leading-none">{String(index + 1).padStart(2, "0")}</div><div className="flex flex-col justify-center gap-3 sm:gap-4"><h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">{name}</h3><p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] leading-relaxed font-light opacity-60">{description}</p></div></FadeIn>)}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: typeof projects[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0.35, 0.9], [1, targetScale]);
  return (
    <div ref={ref} className="relative h-[85vh] min-h-[610px]">
      <motion.article style={{ scale, top: `calc(6rem + ${index * 28}px)` }} className="project-surface sticky mx-auto h-[calc(85vh-4rem)] min-h-[560px] max-w-7xl overflow-hidden rounded-[40px] border-2 p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
        <div className="flex h-full flex-col gap-4 sm:gap-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-6">
            <div className="text-[clamp(3rem,8vw,110px)] font-black leading-none text-frost">{String(index + 1).padStart(2, "0")}</div>
            <div><p className="text-xs font-light uppercase tracking-widest text-frost/60 sm:text-sm">{project.category}</p><h3 className="max-w-[16ch] text-[clamp(1.1rem,2.6vw,2.7rem)] leading-tight font-medium text-frost uppercase">{project.name}</h3></div>
            <LiveProjectButton />
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-[40%_60%] gap-3 pr-3">
            <div className="grid min-h-0 grid-rows-[clamp(130px,16vw,230px)_minmax(0,1fr)] gap-3"><img src={project.images[0]} alt={`${project.name} detail one`} loading="lazy" className="h-full w-full rounded-[28px] object-cover sm:rounded-[40px] md:rounded-[60px]" /><img src={project.images[1]} alt={`${project.name} detail two`} loading="lazy" className="h-full min-h-[clamp(160px,22vw,340px)] w-full rounded-[28px] object-cover sm:rounded-[40px] md:rounded-[60px]" /></div>
            <img src={project.images[2]} alt={`${project.name} showcase`} loading="lazy" className="h-full min-h-0 w-full rounded-[28px] object-cover sm:rounded-[40px] md:rounded-[60px]" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-4 pt-20 pb-10 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"><FadeIn y={40}><h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black leading-none tracking-tight uppercase md:mb-24">Project</h2></FadeIn><div>{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} total={projects.length} />)}</div></section>;
}

function Index() {
  return <main className="overflow-x-clip bg-ink"><HeroSection /><MarqueeSection /><AboutSection /><ServicesSection /><ProjectsSection /></main>;
}

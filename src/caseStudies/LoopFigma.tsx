const LOOP_EMBED =
  "https://embed.figma.com/proto/sdZUYRDCglwipReYRHOUTN/IxD-301?node-id=357-917&starting-point-node-id=357%3A917&page-id=184%3A756&scaling=scale-down&content-scaling=fixed&hide-ui=1&bg-color=1d4739&embed-host=share"
const LOOP_FULL =
  "https://www.figma.com/proto/sdZUYRDCglwipReYRHOUTN/IxD-301?node-id=357-917&starting-point-node-id=357%3A917&page-id=184%3A756&scaling=scale-down&content-scaling=fixed"
const LOOP_NOTION =
  "https://whip-saguaro-8cb.notion.site/SDG-Project-411342d08ee580b3ac54d0c274fc9176"

const H2 = "font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1]"
const EYEBROW =
  "font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase"
const BODY = "font-['Stack_Sans_Text:Regular'] text-[20px] leading-[1.6]"

const stats = [
  [
    "55%",
    "of students are committed recyclers, compared with 75% of the UK as a whole.",
    "SUEZ and NUS",
  ],
  [
    "30%",
    "of students who don't recycle say it's simply too much hassle.",
    "SUEZ and NUS",
  ],
  [
    "42.4%",
    "Belfast had the lowest household recycling rate in Northern Ireland in 2024/25.",
    "Resource",
  ],
]
const process = [
  [
    "I researched why students don't recycle.",
    "Online research showed students recycle less than the rest of the UK, mostly because it feels like hassle, and Belfast has the lowest recycling rate in Northern Ireland.",
  ],
  [
    "I looked at what already exists.",
    "Bower in Sweden already rewards recycling, Ireland's deposit scheme shows how well a small reward works, and Recyclebank shows reward schemes fail when they cost too much to run.",
  ],
  [
    "My first flow made people scan at the bin.",
    "Checking in at the bin and scanning every item there proved the recycling really happened, but nobody wants to stand at a public bin scanning cans one by one.",
  ],
  [
    "I moved the scanning home.",
    "Items are scanned into a basket at home, so at the bin there's just one check-in and the bin counts what goes in. It keeps the proof without the awkward part.",
  ],
]
const screens = [
  [
    "/sorted-screens-1.jpg",
    "Find and fill",
    "Four iPhones showing Sorted's Discover map with material filters, the Holyland Hub bin details, the item scanner and a basket of three items worth 30 points.",
  ],
  [
    "/sorted-screens-2.jpg",
    "Drop off",
    "Four iPhones showing the bin check-in scanner, the drop-off counter at 3 of 3, the drop-off complete screen with points and impact, and the Rewards screen.",
  ],
  [
    "/sorted-screens-3.jpg",
    "Get rewarded",
    "Four iPhones showing a free coffee reward ready to redeem, the Sorted wallet, points history and Zach's profile with his recycling stats.",
  ],
]
const swatches = [
  ["Dark Green", "#1d4739", "#ffffff"],
  ["Bright Green", "#d8f86f", "#17362d"],
  ["Background", "#f5f6ef", "#17362d"],
  ["Green Black", "#17362d", "#ffffff"],
  ["Gray Green", "#829089", "#ffffff"],
  ["Map Green", "#bfd5aa", "#17362d"],
  ["Streak Orange", "#f5d782", "#17362d"],
]
const reflections = [
  [
    "Design for where the person actually is.",
    "Sorting rubbish in your kitchen and standing at a bin on the street need very different interactions. Moving the scanning home, and keeping the bin to one quick check-in, was the decision that made the whole flow work.",
  ],
  [
    "Be upfront about what already exists.",
    "Finding Bower felt like a setback at first, but it showed me where Sorted could be different: proving items actually went in the bin, covering glass and paper, and focusing on students in Belfast.",
  ],
  [
    "Rewards have to be cheap to run.",
    "Recyclebank showed that reward schemes close when councils can't afford them, so Sorted's rewards come from local partners like Belfast Bikes and Sojourn Coffee, who get new customers in return.",
  ],
]

export default function LoopPage() {
  return (
    <div
      className="loop-page content-stretch flex flex-col items-start relative w-[1920px] bg-[#f5f6ef]"
      data-node-id="12:35"
      data-name="Loop page"
    >
      <div
        className="content-stretch flex h-[109px] items-center justify-between pl-[77px] pr-[105px] py-[18px] relative shrink-0 w-full"
        data-node-id="12:36"
        data-name="Nav"
      >
        <div
          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#2b2a3d] text-[16px] whitespace-nowrap"
          data-node-id="12:37"
        >
          <p className="leading-[normal]">←back to portfolio</p>
        </div>
        <div
          className="content-stretch flex flex-col items-start relative shrink-0"
          data-node-id="12:38"
          data-name="Container"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Unbounded:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#2b2a3d] text-[26px] whitespace-nowrap"
            data-node-id="12:39"
          >
            <p>
              <span className="leading-[normal] text-[#2b2a3d]">jill macc</span>
              <span className="leading-[normal] text-[#e36559]">.</span>
            </p>
          </div>
        </div>
      </div>
      <section
        className="loop-hero relative w-full bg-[#1d4739] px-[96px] pt-[96px] pb-[0px] flex flex-col gap-[56px] overflow-hidden"
        data-name="Loop hero"
      >
        <div className="loop-hero__top flex items-end justify-between gap-[80px]">
          <div className="flex flex-col gap-[20px] max-w-[900px]">
            <div className="flex items-center gap-[12px]">
              <span className="block size-[8px] rounded-[4px] bg-[#d8f86f]" />
              <p className={`${EYEBROW} text-[#d8f86f]`}>Sorted · IxD 301</p>
            </div>
            <p className="font-['Unbounded:Bold'] font-bold text-[120px] leading-[1] tracking-[-2.4px] text-[#d8f86f]">
              Sorted
            </p>
            <p className="font-['Stack_Sans_Text:Medium'] font-medium text-[36px] leading-[1.2] text-white">
              Recycling that pays you back.
            </p>
          </div>
          <p className={`${BODY} text-white/80 max-w-[640px]`}>
            A recycling rewards app for university students in Belfast. Scan
            your recycling at home, check in at a Sorted bin to drop it off, and
            earn rewards from local businesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-[12px]">
          {["UX / UI", "Mobile app", "Sustainability", "Working prototype"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/[0.08] px-[14px] py-[8px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[13px] text-white"
              >
                {t}
              </span>
            ),
          )}
        </div>
        <img
          src="/sorted-cover.jpg"
          alt="Three iPhones showing Sorted: the drop-off counter at 3 of 3, the Discover map of Sorted bins around Queen's University, and a basket of three items ready to drop off."
          className="loop-hero__img block w-full h-auto rounded-t-[32px]"
        />
      </section>
      <div className="contents">
        <div
          className="relative shrink-0 w-full bg-[#f5f6ef] px-[93px] py-[51px] flex flex-col gap-[10px]"
          data-name="Project at a glance"
        >
          <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#1d4739]">
            Project snapshot
          </p>
          <p className="font-['Unbounded:Bold'] font-bold text-[34px] leading-[1.25] text-[#17362d]">
            Project at a glance
          </p>
          <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[16px] text-[#17362d]">
            The brief, the focus and the tools behind the work.
          </p>
          <div className="grid grid-cols-3 gap-[115px] mt-[16px]">
            <div className="rounded-[20px] border border-[#dfe6df] bg-white p-[24px] flex flex-col gap-[10px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#1d4739]">
                Project brief
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[13px] text-[#625c6b]">
                Project 02 - Year 2 IxD 301
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[14px] leading-[1.45] text-[#17362d]">
                Design a brand and a digital product for an adult audience that
                responds to one of the UN Sustainable Development Goals, taking
                it from research through to a working prototype.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#dfe6df] bg-white p-[24px] flex flex-col gap-[10px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#1d4739]">
                Focus
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[17px] leading-[1.35] text-[#17362d]">
                <span className="block font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[30px] text-[#1d4739]">
                  SDG 12,
                </span>
                Responsible Consumption and Production, aimed at university
                students in Belfast.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#dfe6df] bg-white p-[24px] flex flex-col gap-[10px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#1d4739]">
                Tools used
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[13px] text-[#625c6b]">
                The tools and methods behind the outcome
              </p>
              <div className="grid grid-cols-2 gap-[12px] mt-[6px]">
                {[
                  "Figma",
                  "Online research",
                  "Competitor analysis",
                  "Prototyping",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-[10px] border border-[#bfd5aa] bg-[#e9f1e8] px-[16px] py-[11px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#17362d]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="loop-problem relative w-full bg-[#17362d] px-[96px] py-[110px] flex flex-col gap-[56px]"
        data-name="Loop problem"
      >
        <div className="flex items-end justify-between gap-[80px] loop-head">
          <div className="flex flex-col gap-[12px]">
            <p className={`${EYEBROW} text-[#d8f86f]`}>The problem</p>
            <p className={`${H2} text-white`}>Recycling feels like hassle</p>
          </div>
          <p className={`${BODY} text-white/80 max-w-[560px]`}>
            Students recycle less than the rest of the UK, and Belfast recycles
            less than anywhere else in Northern Ireland. Sorted is designed to
            make recycling quick and worth doing.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[24px] loop-stats">
          {stats.map(([n, t, s]) => (
            <div
              key={n}
              className="rounded-[24px] bg-[#1d4739] p-[40px] flex flex-col gap-[16px]"
            >
              <p className="font-['Unbounded:Bold'] font-bold text-[64px] leading-none text-[#d8f86f]">
                {n}
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] text-[20px] leading-[1.5] text-white">
                {t}
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-white/50">
                Source: {s}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="contents">
        <section
          className="relative z-[2] w-full bg-[#d8f86f] px-[96px] py-[110px] flex flex-col gap-[56px]"
          data-name="Process"
        >
          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase text-[#1d4739]">
                Process
              </p>
              <p className="font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1] text-[#17362d]">
                How I got there
              </p>
            </div>
            <p className="w-[420px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[17px] leading-[1.4] text-[#17362d] opacity-75">
              From why students don't recycle to a flow that works at home and
              at the bin.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[24px] w-full">
            {process.map(([t, b], i) => (
              <div
                key={i}
                className="rounded-[24px] bg-[#1d4739] px-[32px] py-[36px] flex flex-col gap-[16px] transition-transform duration-300 hover:-translate-y-[6px]"
              >
                <p className="font-['Unbounded:Bold'] font-bold text-[64px] leading-none text-[#d8f86f]">
                  0{i + 1}
                </p>
                <span className="block w-[48px] h-[4px] rounded-[2px] bg-[#d8f86f]" />
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[20px] leading-[1.3] text-white">
                  {t}
                </p>
                <p className="font-['Stack_Sans_Text:Regular'] text-[16px] leading-[1.55] text-white opacity-85">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section
        className="loop-decision relative w-full bg-[#f5f6ef] px-[96px] py-[110px] flex flex-col gap-[56px]"
        data-name="Loop decision"
      >
        <div className="flex flex-col gap-[12px] max-w-[900px]">
          <p className={`${EYEBROW} text-[#1d4739]`}>The key decision</p>
          <p className={`${H2} text-[#17362d]`}>Scan at home, not at the bin</p>
        </div>
        <div className="grid grid-cols-2 gap-[24px] loop-compare">
          <div className="rounded-[24px] border-2 border-[#dfe6df] bg-white p-[40px] flex flex-col gap-[20px]">
            <p className={`${EYEBROW} text-[#829089]`}>Before</p>
            <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[28px] leading-[1.25] text-[#17362d]">
              Check in at the bin, then scan every item there
            </p>
            <div className="loop-steps flex flex-wrap gap-[10px]">
              {[
                "Walk to bin",
                "Check in",
                "Scan item 1",
                "Scan item 2",
                "Scan item 3",
                "Drop off",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[#e9f1e8] px-[16px] py-[10px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#829089]"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="font-['Stack_Sans_Text:Regular'] text-[18px] leading-[1.55] text-[#17362d]">
              It proved the recycling happened, but it meant standing at a
              public bin scanning cans one at a time.
            </p>
          </div>
          <div className="rounded-[24px] bg-[#1d4739] p-[40px] flex flex-col gap-[20px]">
            <p className={`${EYEBROW} text-[#d8f86f]`}>After</p>
            <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[28px] leading-[1.25] text-white">
              Scan into a basket at home, check in once at the bin
            </p>
            <div className="loop-steps flex flex-wrap gap-[10px]">
              {[
                "Scan at home",
                "Basket",
                "Check in at bin",
                "Drop off",
                "Reward",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[#d8f86f] px-[16px] py-[10px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#17362d]"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="font-['Stack_Sans_Text:Regular'] text-[18px] leading-[1.55] text-white/85">
              The slow part happens at home. At the bin it's one scan of the
              Sorted tag, and the bin counts each item as it goes in, so the
              points are still earned honestly.
            </p>
          </div>
        </div>
      </section>
      <SortedLogo />
      <section
        className="loop-screens relative w-full bg-[#1d4739] px-[96px] py-[110px] flex flex-col gap-[48px]"
        data-name="Loop screens"
      >
        <div className="flex items-end justify-between gap-[80px] loop-head">
          <div className="flex flex-col gap-[12px]">
            <p className={`${EYEBROW} text-[#d8f86f]`}>Screens</p>
            <p className={`${H2} text-white`}>Scan. Drop off. Get rewarded.</p>
          </div>
          <p className={`${BODY} text-white/80 max-w-[560px]`}>
            The full journey from finding a bin to spending your points, plus
            the wallet, points history and profile that keep track of everything
            you've recycled.
          </p>
        </div>
        <div className="flex flex-col gap-[32px] w-full">
          {screens.map(([src, label, alt]) => (
            <figure key={src} className="flex flex-col gap-[14px] m-0">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="block w-full h-auto rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
              />
              <figcaption className={`${EYEBROW} text-[#d8f86f]`}>
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section
        className="loop-brand relative w-full bg-[#f5f6ef] px-[96px] py-[110px] flex flex-col gap-[48px]"
        data-name="Loop brand"
      >
        <div className="flex items-end justify-between gap-[80px] loop-head">
          <div className="flex flex-col gap-[12px]">
            <p className={`${EYEBROW} text-[#1d4739]`}>Brand and style</p>
            <p className={`${H2} text-[#17362d]`}>
              Fresh, calm and a bit bright
            </p>
          </div>
          <p className={`${BODY} text-[#17362d] max-w-[560px]`}>
            Deep greens keep the app calm and easy to read, and a bright lime
            picks out the things you can act on, like the Scan button, points
            and rewards.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-[16px] loop-swatches">
          {swatches.map(([name, hex, ink]) => (
            <div
              key={hex}
              className="rounded-[20px] h-[200px] p-[20px] flex flex-col justify-end border border-[#dfe6df]"
              style={{ background: hex, color: ink }}
            >
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[16px]">
                {name}
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] text-[14px] opacity-80 uppercase">
                {hex}
              </p>
            </div>
          ))}
        </div>
        <div className="loop-type rounded-[24px] bg-white border border-[#dfe6df] p-[40px] flex items-center justify-between gap-[40px]">
          <div className="flex flex-col gap-[8px]">
            <p className={`${EYEBROW} text-[#829089]`}>Typeface</p>
            <p
              className="text-[64px] leading-none text-[#17362d]"
              style={{
                fontFamily: "'Avenir Next', 'Avenir', sans-serif",
                fontWeight: 600,
              }}
            >
              Avenir Next
            </p>
          </div>
          <p
            className="text-[28px] leading-[1.3] text-[#17362d] max-w-[760px]"
            style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif" }}
          >
            Nice one, Zach! All 3 items are in at Elmwood.
          </p>
        </div>
      </section>
      <div className="contents">
        <section
          className="proto-section relative w-full bg-[#1d4739] px-[96px] py-[96px] flex items-center justify-between gap-[80px]"
          data-name="Prototype"
        >
          <div className="flex flex-col gap-[20px] max-w-[620px]">
            <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase text-[#d8f86f]">
              Prototype
            </p>
            <p className="font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1] text-white">
              Try it yourself
            </p>
            <p className="font-['Stack_Sans_Text:Regular'] text-[20px] leading-[1.6] text-white opacity-90">
              This is my working Figma prototype. Filter the map to find a bin,
              tap the Scan button to add items to your basket, then check in at
              the bin, drop everything off and spend your points on a reward.
            </p>
            <div className="flex flex-wrap gap-[12px] mt-[8px]">
              <a
                href={LOOP_FULL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d8f86f] px-[24px] py-[14px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[15px] text-[#17362d] transition-transform hover:-translate-y-[2px]"
              >
                Open full screen ↗
              </a>
            </div>
          </div>
          <div className="proto-phone shrink-0 w-[420px] h-[860px]">
            <iframe
              title="Sorted app prototype"
              src={LOOP_EMBED}
              className="block w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </div>
      <div
        className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[96px] py-[80px] relative shrink-0 w-full bg-[#fffcf6]"
        data-name="Reflections"
      >
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[760px]">
          <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] text-[#1d4739] text-[14px] tracking-[0.8px] uppercase whitespace-nowrap">
            Reflections
          </p>
          <p className="font-['Unbounded:Bold'] font-bold leading-[55.12px] text-[#2b2a3d] text-[52px] text-center w-[600px]">
            What I learnt
          </p>
          <p className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] min-w-full text-[#2b2a3d] text-[18px] text-center w-[min-content]">
            What this project taught me, and what I would do differently next
            time.
          </p>
        </div>
        <div className="contents">
          <div className="flex flex-col gap-[16px] items-start w-[760px]">
            {reflections.map(([t, b], i) => (
              <div
                key={i}
                className="bg-white border-2 border-solid border-[#d8f86f] flex gap-[16px] items-start p-[20px] rounded-[24px] w-full"
              >
                <div className="bg-[#d8f86f] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#17362d] text-[16px]">
                    {i + 1}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-[6px] text-[#2b2a3d]">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[16px]">
                    {t}
                  </p>
                  <p className="font-['Stack_Sans_Text:Regular'] text-[17px] leading-[1.5]">
                    {b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="[word-break:break-word] font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] text-[#2b2a3d] text-[20px] text-center w-[1216px]">
          Next I would test the flow with students on a real walk to the bin,
          and design what happens when the bin's count doesn't match the basket,
          so nobody loses points for an honest mistake.
        </p>
        <div className="flex flex-col items-center w-full mt-[8px]">
          <a
            className="nb"
            href={LOOP_NOTION}
            target="_blank"
            rel="noreferrer"
            aria-label="Open my full research notebook on Notion"
            style={
              {
                "--nb-ink": "#1d4739",
                "--nb-accent": "#d8f86f",
                "--nb-line": "rgba(29,71,57,0.12)",
              } as any
            }
          >
            <span className="nb-page nb-1">
              <small>Page 01</small>Initial Research
            </span>
            <span className="nb-page nb-2">
              <small>Page 02</small>App Planning
            </span>
            <span className="nb-page nb-3">
              <small>Page 03</small>Development
            </span>
            <span className="nb-page nb-4">
              <small>Peek inside the notebook</small>My full process, every
              messy page<em>My SDG research on Notion →</em>
            </span>
          </a>
          <span
            className="nb-hint"
            style={{ "--nb-ink": "#1d4739", "--nb-accent": "#d8f86f" } as any}
          >
            Hover to flick through · opens in a new tab
          </span>
        </div>
      </div>
      <div className="contents">
        <a
          className="next-case"
          href="#/watchpoint"
          style={
            {
              "--nc-bg": "#192c4f",
              "--nc-ink": "#ffffff",
              "--nc-accent": "#e6ff55",
            } as any
          }
        >
          <span className="next-case__text">
            <span className="next-case__label">Next case study</span>
            <span className="next-case__title">WatchPoint</span>
            <span className="next-case__sub">Apple Watch app · UX / UI</span>
          </span>
          <span className="next-case__media">
            <img src="/wp-cover-logo.jpg" alt="" />
          </span>
          <span className="next-case__arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
      <div
        className="bg-[#2b2a3d] border-[rgba(255,255,255,0.15)] border-solid border-t h-[198px] relative shrink-0 w-full"
        data-node-id="12:128"
        data-name="Footer"
      >
        <div
          className="absolute content-stretch flex flex-col items-start left-[96px] top-[79px]"
          data-node-id="12:129"
          data-name="Container"
        >
          <div
            className="[word-break:break-word] flex flex-col font-['Caveat:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#f4d892] text-[30px] whitespace-nowrap"
            data-node-id="12:130"
          >
            <p className="leading-[normal]">{`let's talk`}</p>
          </div>
        </div>
        <div
          className="absolute content-stretch flex gap-[22px] items-center left-[1646px] top-[89px]"
          data-node-id="12:131"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="12:132"
            data-name="Link"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap"
              data-node-id="12:133"
            >
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">
                Email
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="12:134"
            data-name="Link"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap"
              data-node-id="12:135"
            >
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">
                LinkedIn
              </p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start relative shrink-0"
            data-node-id="12:136"
            data-name="Link"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap"
              data-node-id="12:137"
            >
              <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">
                Instagram
              </p>
            </div>
          </div>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] left-[96px] text-[12px] text-white top-[156.5px] whitespace-nowrap"
          data-node-id="12:138"
        >
          <p className="leading-[normal]">© 2026 Jill MacCorkell</p>
        </div>
      </div>
    </div>
  )
}

const SORTED_S =
  "M53.55 60.7499C51.55 58.8499 49.2 57.2499 46.5 55.9499C43.8 54.6499 40.95 53.9999 37.95 53.9999C35.65 53.9999 33.5 54.4499 31.5 55.3499C29.6 56.2499 28.65 57.7999 28.65 59.9999C28.65 62.0999 29.7 63.5999 31.8 64.4999C34 65.3999 37.5 66.3999 42.3 67.4999C45.1 68.0999 47.9 68.9499 50.7 70.0499C53.6 71.1499 56.2 72.5999 58.5 74.3999C60.8 76.1999 62.65 78.3999 64.05 80.9999C65.45 83.5999 66.15 86.6999 66.15 90.2999C66.15 94.9999 65.2 98.9999 63.3 102.3C61.4 105.5 58.9 108.1 55.8 110.1C52.8 112.1 49.4 113.55 45.6 114.45C41.8 115.35 38 115.8 34.2 115.8C28.1 115.8 22.1 114.85 16.2 112.95C10.4 110.95 5.55 108.05 1.65 104.25L15.45 89.6999C17.65 92.0999 20.35 94.0999 23.55 95.6999C26.75 97.2999 30.15 98.0999 33.75 98.0999C35.75 98.0999 37.7 97.6499 39.6 96.7499C41.6 95.7499 42.6 94.0499 42.6 91.6499C42.6 89.3499 41.4 87.6499 39 86.5499C36.6 85.4499 32.85 84.2999 27.75 83.0999C25.15 82.4999 22.55 81.6999 19.95 80.6999C17.35 79.6999 15 78.3499 12.9 76.6499C10.9 74.9499 9.25 72.8499 7.95 70.3499C6.65 67.8499 6 64.8499 6 61.3499C6 56.8499 6.95 53.0499 8.85 49.9499C10.75 46.7499 13.2 44.1499 16.2 42.1499C19.2 40.1499 22.5 38.6999 26.1 37.7999C29.8 36.7999 33.45 36.2999 37.05 36.2999C42.65 36.2999 48.1 37.1999 53.4 38.9999C58.8 40.6999 63.35 43.2999 67.05 46.7999L53.55 60.7499Z"
const SORTED_REST =
  "M227.802 58.7999C226.702 58.4999 225.602 58.2999 224.502 58.1999C223.502 58.0999 222.502 58.0499 221.502 58.0499C218.202 58.0499 215.402 58.6499 213.102 59.8499C210.902 61.0499 209.102 62.4999 207.702 64.1999C206.402 65.8999 205.452 67.7499 204.852 69.7499C204.252 71.7499 203.952 73.4999 203.952 74.9999V113.4H179.352V38.6999H203.052V49.4999H203.352C205.252 45.6999 207.952 42.5999 211.452 40.1999C214.952 37.7999 219.002 36.5999 223.602 36.5999C224.602 36.5999 225.552 36.6499 226.452 36.7499C227.452 36.8499 228.252 36.9999 228.852 37.1999L227.802 58.7999ZM277.267 57.1499V85.6499C277.267 89.1499 277.917 91.7999 279.217 93.5999C280.617 95.2999 283.067 96.1499 286.567 96.1499C287.767 96.1499 289.017 96.0499 290.317 95.8499C291.717 95.6499 292.867 95.3499 293.767 94.9499L294.067 112.95C292.367 113.55 290.217 114.05 287.617 114.45C285.017 114.95 282.417 115.2 279.817 115.2C274.817 115.2 270.617 114.6 267.217 113.4C263.817 112.1 261.067 110.3 258.967 108C256.967 105.6 255.517 102.8 254.617 99.5999C253.717 96.2999 253.267 92.6499 253.267 88.6499V57.1499H241.267V38.6999H253.117V19.0499H277.267V38.6999H294.817V57.1499H277.267ZM357.827 67.4999C357.827 63.5999 356.577 60.2499 354.077 57.4499C351.677 54.6499 348.027 53.2499 343.127 53.2499C340.727 53.2499 338.527 53.6499 336.527 54.4499C334.527 55.1499 332.777 56.1499 331.277 57.4499C329.777 58.7499 328.577 60.2999 327.677 62.0999C326.777 63.7999 326.277 65.5999 326.177 67.4999H357.827ZM380.477 76.9499C380.477 77.9499 380.477 78.9499 380.477 79.9499C380.477 80.9499 380.427 81.8999 380.327 82.7999H326.177C326.377 84.8999 326.977 86.7999 327.977 88.4999C329.077 90.1999 330.427 91.6999 332.027 92.9999C333.727 94.1999 335.577 95.1499 337.577 95.8499C339.677 96.5499 341.827 96.8999 344.027 96.8999C347.927 96.8999 351.227 96.1999 353.927 94.7999C356.627 93.2999 358.827 91.3999 360.527 89.0999L377.627 99.8999C374.127 105 369.477 108.95 363.677 111.75C357.977 114.45 351.327 115.8 343.727 115.8C338.127 115.8 332.827 114.95 327.827 113.25C322.827 111.45 318.427 108.9 314.627 105.6C310.927 102.2 307.977 98.0499 305.777 93.1499C303.677 88.2499 302.627 82.6499 302.627 76.3499C302.627 70.2499 303.677 64.7499 305.777 59.8499C307.877 54.8499 310.727 50.6499 314.327 47.2499C317.927 43.7499 322.177 41.0499 327.077 39.1499C331.977 37.2499 337.277 36.2999 342.977 36.2999C348.477 36.2999 353.527 37.2499 358.127 39.1499C362.727 40.9499 366.677 43.5999 369.977 47.0999C373.277 50.5999 375.827 54.8499 377.627 59.8499C379.527 64.8499 380.477 70.5499 380.477 76.9499ZM452.283 113.4V103.65H451.983C449.583 107.45 446.133 110.4 441.633 112.5C437.233 114.5 432.533 115.5 427.533 115.5C421.933 115.5 416.933 114.4 412.533 112.2C408.133 110 404.383 107.1 401.283 103.5C398.283 99.7999 395.983 95.5499 394.383 90.7499C392.783 85.9499 391.983 80.9499 391.983 75.7499C391.983 70.5499 392.783 65.5999 394.383 60.8999C396.083 56.0999 398.433 51.8999 401.433 48.2999C404.533 44.6999 408.233 41.8499 412.533 39.7499C416.933 37.6499 421.833 36.5999 427.233 36.5999C432.733 36.5999 437.383 37.6499 441.183 39.7499C444.983 41.8499 447.933 44.1499 450.033 46.6499H450.333V-0.000103951H474.933V113.4H452.283ZM451.383 75.8999C451.383 73.4999 450.933 71.1499 450.033 68.8499C449.233 66.5499 448.033 64.4999 446.433 62.6999C444.933 60.8999 443.083 59.4499 440.883 58.3499C438.683 57.2499 436.183 56.6999 433.383 56.6999C430.483 56.6999 427.933 57.2499 425.733 58.3499C423.533 59.4499 421.683 60.8999 420.183 62.6999C418.683 64.3999 417.533 66.3999 416.733 68.6999C416.033 70.9999 415.683 73.3499 415.683 75.7499C415.683 78.1499 416.033 80.5499 416.733 82.9499C417.533 85.2499 418.683 87.2999 420.183 89.0999C421.683 90.8999 423.533 92.3499 425.733 93.4499C427.933 94.5499 430.483 95.0999 433.383 95.0999C436.183 95.0999 438.683 94.5499 440.883 93.4499C443.083 92.3499 444.933 90.8999 446.433 89.0999C448.033 87.2999 449.233 85.2499 450.033 82.9499C450.933 80.6499 451.383 78.2999 451.383 75.8999Z"
const SORTED_TICK = "M106.7 80.875L116.645 90.82L137.3 69.4"

function SortedTick({
  circle,
  tick,
  glow,
}: {
  circle: string
  tick: string
  glow: number
}) {
  return (
    <>
      <circle cx="122" cy="78.4" r="45" fill={circle} fillOpacity={glow} />
      <circle cx="122" cy="78.4" r="36" fill={circle} />
      <path
        d={SORTED_TICK}
        fill="none"
        stroke={tick}
        strokeWidth="5.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

function SortedWordmark({ ink, glow = 0.14 }: any) {
  return (
    <svg
      viewBox="0 0 493 124"
      className="block w-full h-auto"
      role="img"
      aria-label="Sorted wordmark"
    >
      <path d={SORTED_S + SORTED_REST} fill={ink} />
      <SortedTick circle="#D8F86F" tick="#17362D" glow={glow} />
    </svg>
  )
}

function SortedIcon({
  bg,
  ink,
  circle,
  tick,
}: {
  bg: string
  ink: string
  circle: string
  tick: string
}) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="block w-full h-auto"
      role="img"
      aria-label="Sorted app icon"
    >
      <rect width="1024" height="1024" rx="228" fill={bg} />
      <g transform="translate(182 202) scale(3.952)">
        <path d={SORTED_S} fill={ink} />
        <SortedTick circle={circle} tick={tick} glow={0.14} />
      </g>
    </svg>
  )
}

function SortedLogo() {
  const tile = "rounded-[32px] flex items-center justify-center overflow-hidden"
  return (
    <section
      className="loop-logo relative w-full bg-[#f5f6ef] px-[96px] py-[110px] flex flex-col gap-[48px]"
      data-name="Loop logo"
    >
      <div className="flex items-end justify-between gap-[80px] loop-head">
        <div className="flex flex-col gap-[12px]">
          <p className={`${EYEBROW} text-[#1d4739]`}>Logo</p>
          <p className={`${H2} text-[#17362d]`}>A tick for a job done</p>
        </div>
        <p className={`${BODY} text-[#17362d] max-w-[560px]`}>
          “Sorted” means done and all good, so the o in the wordmark is a tick.
          The same tick becomes the app icon, so the brand still works when it’s
          tiny on a home screen.
        </p>
      </div>
      <div className="loop-logo-grid grid grid-cols-4 auto-rows-[260px] gap-[20px]">
        <div className={`${tile} col-span-2 row-span-2 bg-[#1d4739] p-[80px]`}>
          <div className="w-full max-w-[600px]">
            <SortedWordmark ink="#FFFFFF" />
          </div>
        </div>
        <div className={`${tile} bg-[#17362d]`}>
          <div className="w-[150px]">
            <SortedIcon
              bg="#1d4739"
              ink="#FFFFFF"
              circle="#D8F86F"
              tick="#17362D"
            />
          </div>
        </div>
        <div className={`${tile} bg-[#dfe6df]`}>
          <div className="w-[150px]">
            <SortedIcon
              bg="#d8f86f"
              ink="#1D4739"
              circle="#1D4739"
              tick="#D8F86F"
            />
          </div>
        </div>
        <div
          className={`${tile} col-span-2 bg-white border border-[#dfe6df] p-[60px]`}
        >
          <div className="w-full max-w-[420px]">
            <SortedWordmark ink="#1D4739" glow={0.3} />
          </div>
        </div>
        <div className={`${tile} bg-[#d8f86f]`}>
          <svg
            viewBox="77 33.4 90 90"
            className="block w-[110px] h-auto"
            role="img"
            aria-label="Sorted tick symbol"
          >
            <SortedTick circle="#1D4739" tick="#D8F86F" glow={0.14} />
          </svg>
        </div>
        <div
          className={`${tile} col-span-3 bg-[#17362d] gap-[48px] justify-start px-[56px]`}
        >
          <div className="flex items-end gap-[28px]">
            {[120, 80, 48].map((size) => (
              <div key={size} style={{ width: size }}>
                <SortedIcon
                  bg="#1d4739"
                  ink="#FFFFFF"
                  circle="#D8F86F"
                  tick="#17362D"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className={`${EYEBROW} text-[#d8f86f]`}>Any size</p>
            <p className="font-['Stack_Sans_Text:Regular'] text-[20px] leading-[1.5] text-white/85 max-w-[460px]">
              The icon is just the s and the tick, so it stays clear even at
              notification size.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

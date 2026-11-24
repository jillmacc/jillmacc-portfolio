import { useState } from "react"
const assetPathPrefix = "/assets/watchpoint"
const imgWatchPointPrimaryLogo1 = `${assetPathPrefix}/9da5d.png`
const imgMatch1 = `${assetPathPrefix}/4cb2a.png`
const imgPoint1 = `${assetPathPrefix}/a0e6d.png`
const imgLanding3 = `${assetPathPrefix}/e44f9.png`
const imgScore1 = `${assetPathPrefix}/aae95.png`
const imgEllipse8 = `${assetPathPrefix}/54eea.svg`
const imgEllipse9 = `${assetPathPrefix}/2da01.svg`
const imgLink = `${assetPathPrefix}/50460.svg`

const WP_EMBED = "https://embed.figma.com/proto/sdZUYRDCglwipReYRHOUTN/IxD-301?"
const WP_WATCH =
  WP_EMBED +
  "node-id=240-129&starting-point-node-id=240%3A129&page-id=0%3A1&scaling=contain&content-scaling=fixed&hide-ui=1&bg-color=192c4f&embed-host=share"
const WP_PHONE =
  WP_EMBED +
  "node-id=297-743&starting-point-node-id=297%3A743&page-id=297%3A742&scaling=contain&content-scaling=fixed&hide-ui=1&bg-color=192c4f&embed-host=share"

// Two Figma embeds of the same file on one page share one player, so only one
// prototype is shown at a time with a toggle to switch between them.
function WpProtoSwitch() {
  const [device, setDevice] = useState<"watch" | "phone">("watch")
  const btn = (d: "watch" | "phone", label: string) => (
    <button
      type="button"
      onClick={() => setDevice(d)}
      aria-pressed={device === d}
      className={`rounded-full px-[22px] py-[10px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[15px] transition-colors ${
        device === d ? "bg-[#e6ff55] text-[#192c4f]" : "text-white"
      }`}
    >
      {label}
    </button>
  )
  return (
    <div className="proto-devices flex flex-col items-center gap-[28px] shrink-0">
      <div className="flex gap-[4px] rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] p-[4px]">
        {btn("watch", "Apple Watch")}
        {btn("phone", "iPhone app")}
      </div>
      {device === "watch" ? (
        <div className="proto-watch shrink-0" key="watch">
          <iframe
            title="WatchPoint Apple Watch prototype"
            src={WP_WATCH}
            className="block w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="proto-phone shrink-0 w-[420px] h-[860px]" key="phone">
          <iframe
            title="WatchPoint iPhone app prototype"
            src={WP_PHONE}
            className="block w-full h-full border-0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default function WatchPointPage() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative w-[1920px]"
      data-node-id="12:35"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(255, 252, 246) 0%, rgb(255, 252, 246) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="WatchPoint page"
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
      <div
        className="bg-[#192c4f] h-[790px] relative shrink-0 w-full"
        data-node-id="12:40"
        data-name="Hero"
      >
        <div
          className="absolute bg-[#192c4f] h-[791px] left-0 overflow-clip top-0 w-[1920px]"
          data-node-id="12:41"
          data-name="WatchPoint Cover - original artwork"
        >
          <div
            className="absolute h-[651.6px] left-[-324.9px] top-[calc(60%-25.6px)] w-[1231.304px]"
            data-node-id="12:42"
          >
            <div className="absolute inset-[-48.31%_-25.57%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgEllipse8}
              />
            </div>
          </div>
          <div
            className="absolute h-[844.726px] left-[calc(40%+86.6px)] top-[-359.1px] w-[1441.257px]"
            data-node-id="12:43"
          >
            <div className="absolute inset-[-37.27%_-21.84%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgEllipse9}
              />
            </div>
          </div>
          <div
            className="absolute h-[315.9px] left-[calc(20%+82px)] top-[calc(20%+79.8px)] w-[988.316px]"
            data-node-id="12:44"
            data-name="WatchPoint - Primary logo 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgWatchPointPrimaryLogo1}
            />
          </div>
        </div>
      </div>
      <div className="contents">
        <div
          className="relative shrink-0 w-full bg-[#192c4f] px-[93px] py-[51px] flex flex-col gap-[10px]"
          data-name="Project at a glance"
        >
          <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#e6ff55]">
            Project snapshot
          </p>
          <p className="font-['Unbounded:Bold'] font-bold text-[34px] leading-[1.25] text-[#ffffff]">
            Project at a glance
          </p>
          <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[16px] text-[#e7edf5]">
            The brief, the process and the tools behind the work.
          </p>
          <div className="grid grid-cols-3 gap-[115px] mt-[16px]">
            <div className="rounded-[20px] border border-[#456080] bg-[#243b63] p-[24px] flex flex-col gap-[10px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#b8d94a]">
                Project brief
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[13px] text-[#aab7c9]">
                Project 01 - Year 2 IxD 301
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[14px] leading-[1.45] text-[#ffffff]">
                Design a smartwatch application, exploring how digital
                experiences can be adapted for a smaller screen. The project
                focused on developing an intuitive interface, considering
                usability, interaction and how users navigate and access
                information on a smartwatch.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#456080] bg-[#243b63] p-[24px] flex flex-col gap-[10px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#b8d94a]">
                Project duration
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[17px] leading-[1.35] text-[#ffffff]">
                A university design project completed over{" "}
                <span className="block font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[30px] text-[#e6ff55]">
                  2 weeks,
                </span>
                taking the project from initial research and idea development
                through to interface design, prototyping and final refinements.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#456080] bg-[#243b63] p-[24px] flex flex-col gap-[10px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#b8d94a]">
                Tools used
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] font-normal text-[13px] text-[#aab7c9]">
                The tools and methods behind the outcome
              </p>
              <div className="grid grid-cols-2 gap-[12px] mt-[6px]">
                <span className="rounded-[10px] border border-[#60748e] bg-[#192c4f] px-[16px] py-[11px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#ffffff]">
                  Figma
                </span>
                <span className="rounded-[10px] border border-[#60748e] bg-[#192c4f] px-[16px] py-[11px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#ffffff]">
                  In person research
                </span>
                <span className="rounded-[10px] border border-[#60748e] bg-[#192c4f] px-[16px] py-[11px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#ffffff]">
                  PadelCounter review
                </span>
                <span className="rounded-[10px] border border-[#60748e] bg-[#192c4f] px-[16px] py-[11px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[15px] text-[#ffffff]">
                  Player interviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#192c4f] content-stretch flex flex-col h-[1184px] items-center justify-center relative shrink-0 w-full"
        data-node-id="12:45"
        data-name="Mockup showcase"
      >
        <div
          className="bg-[#192c4f] content-stretch flex flex-col h-[716px] items-start px-[96px] py-[60px] relative shrink-0 w-full"
          data-node-id="12:46"
          data-name="Hero"
        >
          <div
            className="content-stretch flex gap-[115px] items-center relative shrink-0 w-full"
            data-node-id="12:47"
            data-name="Hero content"
          >
            <div
              className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[760px]"
              data-node-id="12:48"
              data-name="Hero copy"
            >
              <div
                className="content-stretch flex gap-[12px] items-center relative shrink-0"
                data-node-id="12:49"
                data-name="Eyebrow"
              >
                <div
                  className="bg-[#e6ff55] relative rounded-[4px] shrink-0 size-[8px]"
                  data-node-id="12:50"
                  data-name="Rectangle"
                />
                <p
                  className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#e6ff55] text-[14px] tracking-[0.8px] uppercase whitespace-nowrap"
                  data-node-id="12:51"
                >
                  WatchPoint
                </p>
              </div>
              <p
                className="[word-break:break-word] font-['Unbounded:Bold'] font-bold leading-[97.92px] min-w-full relative shrink-0 text-[96px] text-white tracking-[-1.92px] w-[min-content]"
                data-node-id="12:52"
              >
                WatchPoint
              </p>
              <p
                className="[word-break:break-word] font-['Stack_Sans_Text:Medium'] font-medium leading-[1.2] min-w-full relative shrink-0 text-[36px] text-white w-[min-content]"
                data-node-id="12:53"
              >
                The court watches. You play.
              </p>
              <p
                className="[word-break:break-word] font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[min-content]"
                data-node-id="12:54"
              >
                A padel scoring app that lets players focus on the game, not the
                score. Tap your side of the court on your Apple Watch when you
                win a point and WatchPoint handles the rest: games, sets, deuce,
                tiebreaks and changing ends. A companion iPhone app keeps your
                match history and stats.
              </p>
              <div
                className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full"
                data-node-id="12:55"
                data-name="Hero tags"
              >
                <div
                  className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0"
                  data-node-id="12:56"
                  data-name="Frame"
                >
                  <p
                    className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap"
                    data-node-id="12:57"
                  >
                    Smart padel scoring
                  </p>
                </div>
                <div
                  className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0"
                  data-node-id="12:58"
                  data-name="Frame"
                >
                  <p
                    className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap"
                    data-node-id="12:59"
                  >
                    Apple Watch app
                  </p>
                </div>
                <div
                  className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0"
                  data-node-id="12:60"
                  data-name="Frame"
                >
                  <p
                    className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap"
                    data-node-id="12:61"
                  >
                    Manual scoring
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">
                    iPhone app
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex items-start px-[14px] py-[8px] relative rounded-[999px] shrink-0">
                  <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">
                    Working prototype
                  </p>
                </div>
              </div>
              <div
                className="bg-white border-2 border-[#e6ff55] border-solid content-stretch flex gap-[12px] items-center p-[20px] relative rounded-[24px] shrink-0 w-full"
                data-node-id="12:62"
                data-name="Notion link"
              >
                <div
                  className="bg-[#e6ff55] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]"
                  data-node-id="12:63"
                  data-name="Frame"
                >
                  <div
                    className="relative shrink-0 size-[20px]"
                    data-node-id="12:64"
                    data-name="link"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgLink}
                    />
                  </div>
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative"
                  data-node-id="12:66"
                  data-name="Frame"
                >
                  <p
                    className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#192c4f] text-[14px] tracking-[0.8px] uppercase whitespace-nowrap"
                    data-node-id="12:67"
                  >
                    <a
                      href="https://whip-saguaro-8cb.notion.site/WatchPoint-40f342d08ee580b4a088fc187d8e67d6?source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline cursor-pointer"
                    >
                      Click me to see all my reseach...
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-[422px] relative shrink-0 w-[344px]"
              data-node-id="12:70"
              data-name="match 1"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgMatch1}
              />
            </div>
            <div
              className="h-[422px] relative shrink-0 w-[344px]"
              data-node-id="12:71"
              data-name="point 1"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={imgPoint1}
              />
            </div>
          </div>
        </div>
        <div
          className="h-[469px] relative shrink-0 w-[1728px]"
          data-node-id="12:72"
          data-name="Overview header"
        >
          <div
            className="[word-break:break-word] absolute content-stretch flex flex-col gap-[24px] items-start left-[902px] top-[21.5px] w-[760px]"
            data-node-id="12:73"
            data-name="Overview copy"
          >
            <p
              className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] relative shrink-0 text-[20px] text-white w-full"
              data-node-id="12:74"
            >
              The project uses a bold navy and yellow-green palette to create
              instant recognition and energy. The watch screens are structured
              around clear score states, simple actions, and a consistent visual
              language that mirrors the rhythm of a padel match.
            </p>
            <div
              className="content-stretch flex gap-[12px] items-start leading-[normal] relative shrink-0 w-full"
              data-node-id="12:75"
              data-name="Frame"
            >
              <div
                className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[24px]"
                data-node-id="12:76"
                data-name="Frame"
              >
                <p
                  className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#192c4f] text-[12px] tracking-[0.8px] uppercase whitespace-nowrap"
                  data-node-id="12:77"
                >
                  Core idea
                </p>
                <p
                  className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#2b2a3d] text-[16px] w-[min-content]"
                  data-node-id="12:78"
                >
                  Keep the score visible, but keep the interface quiet.
                </p>
              </div>
              <div
                className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[24px]"
                data-node-id="12:79"
                data-name="Frame"
              >
                <p
                  className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#192c4f] text-[12px] tracking-[0.8px] uppercase whitespace-nowrap"
                  data-node-id="12:80"
                >
                  Visual system
                </p>
                <p
                  className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#2b2a3d] text-[16px] w-[min-content]"
                  data-node-id="12:81"
                >
                  Navy, yellow-green, and high-contrast watch UI.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[12px] items-start leading-[normal] relative shrink-0 w-full"
              data-node-id="12:82"
              data-name="Frame"
            >
              <div
                className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[24px]"
                data-node-id="12:83"
                data-name="Frame"
              >
                <p
                  className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#192c4f] text-[12px] tracking-[0.8px] uppercase whitespace-nowrap"
                  data-node-id="12:84"
                >
                  Watch-first thinking
                </p>
                <p
                  className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#2b2a3d] text-[16px] w-[min-content]"
                  data-node-id="12:85"
                >
                  Big numbers, simple actions, and minimal cognitive load.
                </p>
              </div>
              <div
                className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[24px]"
                data-node-id="12:86"
                data-name="Frame"
              >
                <p
                  className="font-['Plus_Jakarta_Sans:Bold'] font-bold relative shrink-0 text-[#192c4f] text-[12px] tracking-[0.8px] uppercase whitespace-nowrap"
                  data-node-id="12:87"
                >
                  Next step
                </p>
                <p
                  className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold min-w-full relative shrink-0 text-[#2b2a3d] text-[16px] w-[min-content]"
                  data-node-id="12:88"
                >
                  Code it as a real Apple Watch app, then add court cameras.
                </p>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Bold'] font-bold h-[18px] leading-[normal] left-0 text-[#e6ff55] text-[14px] top-0 tracking-[0.8px] uppercase w-[82px]"
            data-node-id="12:89"
          >
            Overview
          </p>
          <p
            className="[word-break:break-word] absolute font-['Unbounded:Bold'] font-bold h-[166px] leading-[55.12px] left-0 text-[52px] text-white top-[30px] w-[760px]"
            data-node-id="12:90"
          >
            A scoring system designed to stay out of the way.
          </p>
          <div
            className="absolute content-stretch flex items-center justify-center left-0 top-[208px]"
            data-node-id="12:91"
          >
            <p
              className="[word-break:break-word] font-['Stack_Sans_Text:Regular'] font-normal h-[120px] leading-[1.5] relative shrink-0 text-[20px] text-white w-[760px]"
              data-node-id="12:92"
            >
              WatchPoint is built around a simple promise: players shouldn't
              have to remember the score. The two court halves on the watch are
              the buttons, so one quick tap is all it takes, and the interface
              stays compact, high-contrast and easy to read at a glance during a
              fast-moving match.
            </p>
          </div>
        </div>
      </div>
      <div className="contents">
        <section
          className="relative z-[2] w-full bg-[#e6ff55] px-[96px] py-[110px] flex flex-col gap-[56px]"
          data-name="Process"
        >
          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase text-[#192c4f]">
                Process
              </p>
              <p className="font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1] text-[#192c4f]">
                How I got there
              </p>
            </div>
            <p className="w-[420px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[17px] leading-[1.4] text-[#192c4f] opacity-75">
              The research and decisions that shaped WatchPoint, from the court
              to the watch.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[24px] w-full">
            {[
              [
                "I played a match and watched how we kept score.",
                "We called the score out before every serve and still lost track when points came quickly. Keeping score was an extra job on top of playing.",
              ],
              [
                "I interviewed another padel player.",
                "She said she often forgets the score in competitive games and would rather focus on tactics. She wanted quick vibrations, not loud alerts, and to look back at past matches.",
              ],
              [
                "I tested PadelCounter in a real match.",
                "It still relied on someone tapping a small button after every point, and the watch screen showed too much at once. It made scoring easier but did not remove it.",
              ],
              [
                "I explored four ways to track the score.",
                "Tapping the screen, using the side buttons, filming with phones, and using the cameras already installed on many padel courts. The court cameras needed nothing from the players, so that was my first concept. I couldn't build camera tracking yet, so I made the court halves on the watch into the buttons and let the app handle the rules.",
              ],
            ].map(([t, b], i) => (
              <div
                key={i}
                className="rounded-[24px] bg-[#192c4f] px-[32px] py-[36px] flex flex-col gap-[16px] transition-transform duration-300 hover:-translate-y-[6px]"
              >
                <p className="font-['Unbounded:Bold'] font-bold text-[64px] leading-none text-[#e6ff55]">
                  0{i + 1}
                </p>
                <span className="block w-[48px] h-[4px] rounded-[2px] bg-[#e6ff55]" />
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[20px] leading-[1.3] text-[#ffffff]">
                  {t}
                </p>
                <p className="font-['Stack_Sans_Text:Regular'] text-[16px] leading-[1.55] text-[#ffffff] opacity-85">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        className="bg-[#192c4f] content-stretch flex flex-col gap-[48px] items-start px-[96px] py-[80px] relative shrink-0 w-full"
        data-node-id="12:93"
        data-name="Screens"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[760px]"
          data-node-id="12:94"
          data-name="Screens header"
        >
          <p
            className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#e6ff55] text-[14px] tracking-[0.8px] uppercase whitespace-nowrap"
            data-node-id="12:95"
          >
            Screens
          </p>
          <p
            className="font-['Unbounded:Bold'] font-bold leading-[55.12px] relative shrink-0 text-[40px] text-white w-[1348px]"
            data-node-id="12:96"
          >
            Every moment of a match, on your wrist.
          </p>
          <p
            className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-[min-content]"
            data-node-id="12:97"
          >
            From setting up a match to the final score, these are the watch
            screens in my working prototype, including the workout and the Smart
            Stack score on the watch face.
          </p>
        </div>
        <div className="mock-stack flex flex-col gap-[32px] w-full">
          <img
            src="/wp-watch-1.jpg"
            alt="Four Apple Watches showing Match setup with golden point and first serve, the Live match court halves at 15-30, the neon Point! flash, and the Score page with set scores for Us and Them."
            className="block w-full h-auto rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <img
            src="/wp-watch-2.jpg"
            alt="Four Apple Watches showing the Change ends reminder, Set won at 6-4, Match over with a trophy and set-by-set grid, and the Fix score screen for undoing a wrong tap."
            className="block w-full h-auto rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <img
            src="/wp-watch-3.jpg"
            alt="Four Apple Watches showing the 3, 2, 1 workout countdown, the live Padel workout with time, heart rate and calories, the Smart Stack score on the watch face, and Settings toggles."
            className="block w-full h-auto rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="contents">
        <section
          className="wp-brand relative w-full bg-[#192c4f] px-[96px] py-[110px] flex flex-col gap-[48px]"
          data-name="Brand and style"
        >
          <div className="wp-brand__head flex items-end justify-between gap-[80px]">
            <div className="flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase text-[#e6ff55]">
                Colour and type
              </p>
              <p className="font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1] text-white">
                The court and the ball
              </p>
            </div>
            <p className="font-['Stack_Sans_Text:Regular'] text-[20px] leading-[1.6] text-white/80 max-w-[620px]">
              The two main colours come straight from padel itself: the blue of
              the court and the yellow of the ball. Players see both colours on
              court, so the app feels connected to the game, and the bright
              yellow makes the most important things, like who won the point,
              stand out on a small screen.
            </p>
          </div>
          <div className="wp-swatches grid grid-cols-4 gap-[16px]">
            {[
              ["Court Blue", "#0544B7", "#ffffff", "The colour of the court, used for each team's half of the screen."],
              ["Ball Yellow", "#E6FF55", "#192c4f", "The colour of the ball, used for points, your team and anything you can tap."],
              ["Watch Black", "#000000", "#ffffff", "The watch background, so the screen blends into the Apple Watch."],
              ["White", "#FFFFFF", "#192c4f", "Scores and text, for the strongest contrast at a glance."],
            ].map(([name, hex, ink, use]) => (
              <div
                key={hex}
                className="rounded-[20px] min-h-[220px] p-[24px] flex flex-col justify-end gap-[6px] border border-white/15"
                style={{ background: hex, color: ink }}
              >
                <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[18px]">{name}</p>
                <p className="font-['Stack_Sans_Text:Regular'] text-[14px] opacity-80">{hex}</p>
                <p className="font-['Stack_Sans_Text:Regular'] text-[14px] leading-[1.45] opacity-90">{use}</p>
              </div>
            ))}
          </div>
          <div className="wp-type grid grid-cols-2 gap-[16px]">
            <div className="rounded-[24px] bg-white/[0.06] border border-white/15 p-[36px] flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#e6ff55]">
                Typeface
              </p>
              <p className="font-['Stack_Sans_Text:SemiBold'] font-semibold text-[64px] leading-none text-white">
                Stack Sans Text
              </p>
              <p className="font-['Stack_Sans_Text:Bold'] font-bold text-[40px] leading-none text-[#e6ff55] tracking-[2px]">
                15 · 30 · 40
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] text-[17px] leading-[1.55] text-white/80">
                A clean, simple sans serif with clear, wide numbers, so the score
                can be read in a split second, even mid-rally.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/[0.06] border border-white/15 p-[36px] flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[12px] tracking-[0.8px] uppercase text-[#e6ff55]">
                Keeping it simple
              </p>
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[28px] leading-[1.25] text-white">
                Big numbers, two colours and nothing extra.
              </p>
              <p className="font-['Stack_Sans_Text:Regular'] text-[17px] leading-[1.55] text-white/80">
                Players only glance at the watch between points, so every screen
                is kept as simple as possible: the score is the biggest thing on
                screen, each team gets its own half of the court, and extra
                detail like games and sets stays hidden until you want it.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="contents">
        <section
          className="relative w-full bg-[#e6ff55] px-[96px] py-[96px] flex flex-col gap-[48px]"
          data-name="Phone app"
        >
          <div className="flex items-end justify-between w-full gap-[80px]">
            <div className="flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase text-[#192c4f]">
                iPhone app
              </p>
              <p className="font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1] text-[#192c4f]">
                Your matches, after the match
              </p>
            </div>
            <p className="w-[520px] font-['Stack_Sans_Text:Regular'] text-[18px] leading-[1.5] text-[#192c4f]">
              The player I interviewed wanted to look back at past matches, so I
              designed a companion app. It picks up the result from the watch
              and shows your stats, form and a game-by-game breakdown of every
              match.
            </p>
          </div>
          <div className="wp-mockup w-full rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(25,44,79,0.35)]">
            <img
              src="/wp-iphone-mockup.jpg"
              alt="Three iPhones showing the WatchPoint app: the home screen with the last match card, your stats with win rate and recent matches, and a match detail page with a set-by-set score and a chart of how the game went."
              className="block w-full h-auto"
            />
          </div>
        </section>
      </div>
      <div className="contents">
        <section
          className="proto-section wp-proto relative w-full bg-[#192c4f] px-[96px] py-[96px] flex items-center justify-between gap-[80px]"
          data-name="Prototype"
        >
          <div className="flex flex-col gap-[20px] max-w-[620px]">
            <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[1.4px] uppercase text-[#e6ff55]">
              Prototype
            </p>
            <p className="font-['Unbounded:Bold'] font-bold text-[56px] leading-[1.1] text-white">
              Try it yourself
            </p>
            <p className="font-['Stack_Sans_Text:Regular'] text-[20px] leading-[1.6] text-white opacity-90">
              These are my real Figma prototypes. On the watch, tap Start Match,
              then tap the bottom court when your team wins a point and the top
              court when the other team does. The score, games, sets, deuce and
              change of ends all work. Switch to the iPhone app to click through
              your stats and match history.
            </p>
            <div className="flex flex-wrap gap-[12px] mt-[8px]">
              <a
                href="https://www.figma.com/proto/sdZUYRDCglwipReYRHOUTN/IxD-301?node-id=240-129&starting-point-node-id=240%3A129&page-id=0%3A1&scaling=contain&content-scaling=fixed"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#e6ff55] px-[24px] py-[14px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[15px] text-[#192c4f] transition-transform hover:-translate-y-[2px]"
              >
                Open watch full screen ↗
              </a>
              <a
                href="https://www.figma.com/proto/sdZUYRDCglwipReYRHOUTN/IxD-301?node-id=297-743&starting-point-node-id=297%3A743&page-id=297%3A742&scaling=scale-down&content-scaling=fixed"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-[#e6ff55] px-[24px] py-[12px] font-['Plus_Jakarta_Sans:Bold'] font-bold text-[15px] text-[#e6ff55] transition-transform hover:-translate-y-[2px]"
              >
                Open iPhone app ↗
              </a>
            </div>
          </div>
          <WpProtoSwitch />
        </section>
      </div>
      <div
        className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[96px] py-[80px] relative shrink-0 w-full"
        data-node-id="12:103"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(255, 252, 246) 0%, rgb(255, 252, 246) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
        }}
        data-name="Reflections"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[760px]"
          data-node-id="12:104"
          data-name="Reflections header"
        >
          <p
            className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#192c4f] text-[14px] tracking-[0.8px] uppercase whitespace-nowrap"
            data-node-id="12:105"
          >
            Reflections
          </p>
          <p
            className="font-['Unbounded:Bold'] font-bold leading-[55.12px] relative shrink-0 text-[#2b2a3d] text-[52px] w-[434px]"
            data-node-id="12:106"
          >
            What I learnt
          </p>
          <p className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#2b2a3d] text-[18px] text-center w-[min-content]">
            What this project taught me, and what I would do differently next
            time.
          </p>
          <p className="hidden" data-node-id="12:107">
            This case study is still being written. These are honest early
            observations from the design decisions visible in the concept.
          </p>
        </div>
        <div className="contents">
          <div className="flex flex-col gap-[16px] items-start w-[760px]">
            {[
              [
                "Talk to players before you design.",
                "I assumed keeping score was a small annoyance. Interviewing another player showed it actually pulls her focus away from tactics and her own game. That changed my goal from making scoring easier to removing it completely.",
              ],
              [
                "Test competitors in the real situation.",
                "PadelCounter looked fine in screenshots, but when I used it in an actual match the tap targets were too small and we still argued about the score. Using it on court taught me more than any review could.",
              ],
              [
                "Play your own prototype, a lot.",
                "Once the scoring worked I played match after match on it and found problems the static screens never showed: toggles that missed taps, page dots that slid away and a Point! animation that never appeared. Fixing them taught me how prototypes really behave, and the player I interviewed was right that accuracy matters most, so I added a Fix score screen for wrong taps.",
              ],
            ].map(([t, b], i) => (
              <div
                key={i}
                className="bg-white border-2 border-solid border-[#e6ff55] flex gap-[16px] items-start p-[20px] rounded-[24px] w-full"
              >
                <div className="bg-[#e6ff55] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
                  <p className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[#192c4f] text-[16px]">
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
        <div className="hidden" data-node-id="12:108" data-name="Frame">
          <div
            className="bg-white border-2 border-[#e6ff55] border-solid content-stretch flex gap-[16px] items-start p-[20px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="12:109"
            data-name="Frame"
          >
            <div
              className="bg-[#e6ff55] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]"
              data-node-id="12:110"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#192c4f] text-[16px] whitespace-nowrap"
                data-node-id="12:111"
              >
                1
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative text-[#2b2a3d]"
              data-node-id="12:112"
              data-name="Frame"
            >
              <p
                className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] w-full"
                data-node-id="12:113"
              >
                Keep the score visible, but keep the interface quiet.
              </p>
              <p
                className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] relative shrink-0 text-[17px] w-full"
                data-node-id="12:114"
              >
                WatchPoint works best when the score is the main event and the
                rest of the UI stays calm and easy to read at a glance.
              </p>
            </div>
          </div>
          <div
            className="bg-white border-2 border-[#e6ff55] border-solid content-stretch flex gap-[16px] items-start p-[20px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="12:115"
            data-name="Frame"
          >
            <div
              className="bg-[#e6ff55] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]"
              data-node-id="12:116"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#192c4f] text-[16px] whitespace-nowrap"
                data-node-id="12:117"
              >
                2
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative text-[#2b2a3d]"
              data-node-id="12:118"
              data-name="Frame"
            >
              <p
                className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] w-full"
                data-node-id="12:119"
              >
                Yellow-green is a strong signal, so use it sparingly.
              </p>
              <p
                className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] relative shrink-0 text-[17px] w-full"
                data-node-id="12:120"
              >
                The bright accent works well for alerts, highlights, and brand
                moments. The navy background keeps the rest of the interface
                calm by contrast.
              </p>
            </div>
          </div>
          <div
            className="bg-white border-2 border-[#e6ff55] border-solid content-stretch flex gap-[16px] items-start p-[20px] relative rounded-[24px] shrink-0 w-full"
            data-node-id="12:121"
            data-name="Frame"
          >
            <div
              className="bg-[#e6ff55] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]"
              data-node-id="12:122"
              data-name="Frame"
            >
              <p
                className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#192c4f] text-[16px] whitespace-nowrap"
                data-node-id="12:123"
              >
                3
              </p>
            </div>
            <div
              className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative text-[#2b2a3d]"
              data-node-id="12:124"
              data-name="Frame"
            >
              <p
                className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] w-full"
                data-node-id="12:125"
              >
                Watch-first means big numbers, simple actions, minimal load.
              </p>
              <p
                className="font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] relative shrink-0 text-[17px] w-full"
                data-node-id="12:126"
              >
                Every screen should answer the same question quickly: what is
                the score, what just happened, and what next?
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Stack_Sans_Text:Regular'] font-normal leading-[1.5] relative shrink-0 text-[#2b2a3d] text-[20px] text-center w-[1216px]">
          Next I would test WatchPoint with players during a real match, add the
          new Star Point rule and haptic taps for each point, and code it as a
          SwiftUI watch app. The camera idea is still the long-term goal, and
          because the scoring rules are already built, cameras could plug
          straight into them later.
        </p>
        <p className="hidden" data-node-id="12:127">
          The strongest part of the concept is its clarity. The score is always
          the main event, and the watch-first layout keeps the interface simple
          enough to read during a fast-moving match. If this project were to
          continue, the next step would be to expand the flow into more states,
          more screens, and a companion app that supports setup, review, and
          post-match sharing.
        </p>
        <div className="flex flex-col items-center w-full mt-[8px]">
          <a
            className="nb"
            href="https://whip-saguaro-8cb.notion.site/WatchPoint-40f342d08ee580b4a088fc187d8e67d6?source=copy_link"
            target="_blank"
            rel="noreferrer"
            aria-label="Open my full research notebook on Notion"
            style={
              {
                "--nb-ink": "#192c4f",
                "--nb-accent": "#e6ff55",
                "--nb-line": "rgba(25,44,79,0.12)",
              } as any
            }
          >
            <span className="nb-page nb-1">
              <small>Page 01</small>Discovering Padel
            </span>
            <span className="nb-page nb-2">
              <small>Page 02</small>User Research
            </span>
            <span className="nb-page nb-3">
              <small>Page 03</small>Padel App Competitor Analysis
            </span>
            <span className="nb-page nb-4">
              <small>Peek inside the notebook</small>My full process, every
              messy page<em>5 research pages on Notion →</em>
            </span>
          </a>
          <span
            className="nb-hint"
            style={{ "--nb-ink": "#192c4f", "--nb-accent": "#e6ff55" } as any}
          >
            Hover to flick through · opens in a new tab
          </span>
        </div>
        <div className="hidden">
          <a
            href="https://whip-saguaro-8cb.notion.site/WatchPoint-40f342d08ee580b4a088fc187d8e67d6?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[43px] w-[732px] rounded-[24px] border-[7px] border-solid border-[#e6ff55] bg-[#192c4f] px-[20px] py-[32px] transition-transform hover:-translate-y-[3px]"
            data-name="Notion link"
          >
            <span className="flex items-center justify-center size-[40px] rounded-[20px] bg-[#e6ff55] shrink-0">
              <img alt="" className="size-[20px]" src={imgLink} />
            </span>
            <span className="flex flex-col gap-[4px] w-[420px] text-white">
              <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] tracking-[0.8px] uppercase">
                Notion case study
              </span>
              <span className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[16px] underline">
                View the full WatchPoint case study →
              </span>
              <span className="font-['Plus_Jakarta_Sans:Regular'] text-[14px] opacity-80">
                Research, process and development on Notion.
              </span>
            </span>
          </a>
        </div>
        <p className="hidden"></p>
      </div>
      <div className="contents">
        <a
          className="next-case"
          href="#/music"
          style={
            {
              "--nc-bg": "#3b4e38",
              "--nc-ink": "#faf7f2",
              "--nc-accent": "#ffad72",
            } as any
          }
        >
          <span className="next-case__text">
            <span className="next-case__label">Next case study</span>
            <span className="next-case__title">Worship</span>
            <span className="next-case__sub">Music app · UI design</span>
          </span>
          <span className="next-case__media">
            <img src="/assets/portfolio/2df89.png" alt="" />
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

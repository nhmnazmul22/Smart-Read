import { categories } from "@/db/category";
import { tags } from "@/db/tag";
import Link from "next/link";
import Category from "./Sidebar/Category";
import SidebarPost from "./Sidebar/SidebarPost";
import Tags from "./Sidebar/Tags";
const Sidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-3 bg-white rounded-lg px-4 py-8 shadow-lg">
      <div className="">
        <p className="text-sm font-semibold uppercase">Social Media</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 16 16"
              id="facebook"
              className="w-[40px]"
            >
              <path
                fill="#1976D2"
                d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
              />
              <path
                fill="#FAFAFA"
                fillRule="evenodd"
                d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38.51 38.51"
              id="x"
              className="w-[40px]"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1=".66"
                  x2="37.84"
                  y1="3.65"
                  y2="34.85"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#646464" />
                  <stop offset=".72" stopColor="#1d1d1d" />
                  <stop offset={1} />
                </linearGradient>
              </defs>
              <g>
                <g>
                  <g>
                    <path
                      fill="url(#a)"
                      d="M16.16,20.54L6.82,6.95h8.09l6.94,6.98,6-6.98h3.36l7.29,7.44v-7.42c0-3.83-3.14-6.97-6.97-6.97H6.97C3.14,0,0,3.14,0,6.97v24.57c0,3.83,3.14,6.97,6.97,6.97h6.79l-7.08-6.95,9.48-11.02Z"
                    />
                    <path
                      fill="#161616"
                      d="M38.51,31.54V14.38l-7.29-7.44h-3.36l-6,6.98-6.94-6.98H6.82l9.34,13.6-9.48,11.02,7.08,6.95h17.78c3.83,0,6.97-3.14,6.97-6.97Z"
                    />
                  </g>
                  <path
                    fill="#fff"
                    d="M31.83,31.56h-8.09l-6.08-8.85-7.61,8.85h-3.36l9.48-11.02L6.82,6.95h8.09l5.75,8.36,7.2-8.36h3.36l-9.06,10.53,9.68,14.08ZM24.26,30.56h5.67l-9.04-13.15,8.14-9.47h-.72l-7.74,9-6.19-9h-5.67l8.7,12.66-8.56,9.95h.72l8.16-9.49,6.52,9.49ZM29.05,30.1h-4.35L9.58,8.48h4.35l15.11,21.62ZM25.22,29.1h1.91L13.41,9.48h-1.91l13.71,19.62Z"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              id="linkedin"
              className="w-[40]"
            >
              <g
                id="providers-list"
                fill="none"
                fillRule="evenodd"
                stroke="none"
                strokeWidth={1}
              >
                <g id="linkedin">
                  <rect
                    id="Rectangle-2"
                    width={72}
                    height={72}
                    x={0}
                    y={0}
                    fill="#117EB8"
                    rx={4}
                  />
                  <path
                    id="Shape"
                    fill="#FFF"
                    d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Reddit"
              viewBox="0 0 512 512"
              id="reddit"
              className="w-[40px]"
            >
              <rect width={512} height={512} fill="#f40" rx="15%" />
              <g fill="#fff">
                <ellipse cx={256} cy={307} rx={166} ry={117} />
                <circle cx={106} cy={256} r={42} />
                <circle cx={407} cy={256} r={42} />
                <circle cx={375} cy={114} r={32} />
              </g>
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                  stroke="#fff"
                  strokeWidth={16}
                  d="m256 196 23-101 73 15"
                />
                <path
                  stroke="#f40"
                  strokeWidth={13}
                  d="m191 359c33 25 97 26 130 0"
                />
              </g>
              <g fill="#f40">
                <circle cx={191} cy={287} r={31} />
                <circle cx={321} cy={287} r={31} />
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28.87 28.87"
              id="pinterest"
              className="w-[40px]"
            >
              <g>
                <g>
                  <rect
                    width="28.87"
                    height="28.87"
                    fill="#ff3635"
                    rx="3.48"
                    ry="3.48"
                    style={{ fill: "#ff3635" }}
                  />
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M13.45 16.82v.12a13.14 13.14 0 0 1-1.23 3.79 11.65 11.65 0 0 1-.95 1.42c0 .05-.08.12-.16.1s-.09-.1-.1-.17a12.11 12.11 0 0 1-.16-2.08c0-.9.14-1.21 1.3-6.08a.34.34 0 0 0 0-.2 3.43 3.43 0 0 1-.15-2.26c.52-1.66 2.41-1.79 2.74-.42.2.85-.33 2-.75 3.6C13.68 16 15.28 17 16.64 16s1.74-3.1 1.65-4.64c-.18-3.09-3.57-3.75-5.71-2.76-2.46 1.14-3 4.19-1.91 5.58.14.18.25.29.2.47s-.13.56-.21.84a.3.3 0 0 1-.44.2 2.52 2.52 0 0 1-1-.77 4.87 4.87 0 0 1 0-5.44 6.53 6.53 0 0 1 6.3-2.78 5.34 5.34 0 0 1 4.91 4.41 7.34 7.34 0 0 1-1.35 5.16c-1.6 2-4.19 2.11-5.39.9-.08-.17-.15-.24-.24-.35z"
                    style={{ fill: "#fff", fillRule: "evenodd" }}
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="VK"
              viewBox="0 0 512 512"
              id="vk"
              className="w-[40px]"
            >
              <rect width={512} height={512} fill="#5281b8" rx="5%" />
              <path
                fill="#fff"
                d="M274 363c5-1 14-3 14-15 0 0-1-30 13-34s32 29 51 42c14 9 25 8 25 8l51-1s26-2 14-23c-1-2-9-15-39-42-31-30-26-25 11-76 23-31 33-50 30-57-4-7-20-6-20-6h-57c-6 0-9 1-12 6 0 0-9 25-21 45-25 43-35 45-40 42-9-5-7-24-7-37 0-45 7-61-13-65-13-2-59-4-73 3-7 4-11 11-8 12 3 0 12 1 17 7 8 13 9 75-2 81-15 11-53-62-62-86-2-6-5-7-12-9H79c-6 0-15 1-11 13 27 56 83 193 184 192z"
              />
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="instagram"
              className="w-[40px]"
            >
              <linearGradient
                id="a"
                x1="-37.094"
                x2="-26.555"
                y1="-72.719"
                y2="-84.047"
                gradientTransform="matrix(0 -1.982 -1.8439 0 -132.522 -51.077)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#fd5" />
                <stop offset=".5" stopColor="#ff543e" />
                <stop offset={1} stopColor="#c837ab" />
              </linearGradient>
              <path
                fill="url(#a)"
                d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 6.336-.158 7.499.602 9.075.635 1.318 1.848 2.308 3.276 2.677 1.144.294 1.904.253 8.1.253 5.194 0 6.81.093 8.157-.255 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.56-.081-.672-.105-3.54-.11-10.173.005-12.403-.448-14.41 1.633z"
              />
              <path
                fill="#fff"
                d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c4.346-.007 7.811-.607 8.006 3.683.072 1.589.072 5.571 0 7.16-.189 4.137-3.339 3.683-7.211 3.683-3.412 0-5.104.121-6.244-1.02-1.157-1.157-1.019-2.811-1.019-6.245 0-4.071-.385-7.026 3.683-7.213.817-.037 1.134-.048 2.785-.05zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c1.631 0 2.953 1.323 2.953 2.954s-1.322 2.954-2.953 2.954-2.953-1.323-2.953-2.954c0-1.632 1.322-2.954 2.953-2.954z"
              />
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              id="linkedin"
              className="w-[40]"
            >
              <g
                id="providers-list"
                fill="none"
                fillRule="evenodd"
                stroke="none"
                strokeWidth={1}
              >
                <g id="linkedin">
                  <rect
                    id="Rectangle-2"
                    width={72}
                    height={72}
                    x={0}
                    y={0}
                    fill="#117EB8"
                    rx={4}
                  />
                  <path
                    id="Shape"
                    fill="#FFF"
                    d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Reddit"
              viewBox="0 0 512 512"
              id="reddit"
              className="w-[40px]"
            >
              <rect width={512} height={512} fill="#f40" rx="15%" />
              <g fill="#fff">
                <ellipse cx={256} cy={307} rx={166} ry={117} />
                <circle cx={106} cy={256} r={42} />
                <circle cx={407} cy={256} r={42} />
                <circle cx={375} cy={114} r={32} />
              </g>
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                  stroke="#fff"
                  strokeWidth={16}
                  d="m256 196 23-101 73 15"
                />
                <path
                  stroke="#f40"
                  strokeWidth={13}
                  d="m191 359c33 25 97 26 130 0"
                />
              </g>
              <g fill="#f40">
                <circle cx={191} cy={287} r={31} />
                <circle cx={321} cy={287} r={31} />
              </g>
            </svg>
          </Link>
          <Link href="/" className="hover:opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28.87 28.87"
              id="pinterest"
              className="w-[40px]"
            >
              <g>
                <g>
                  <rect
                    width="28.87"
                    height="28.87"
                    fill="#ff3635"
                    rx="3.48"
                    ry="3.48"
                    style={{ fill: "#ff3635" }}
                  />
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M13.45 16.82v.12a13.14 13.14 0 0 1-1.23 3.79 11.65 11.65 0 0 1-.95 1.42c0 .05-.08.12-.16.1s-.09-.1-.1-.17a12.11 12.11 0 0 1-.16-2.08c0-.9.14-1.21 1.3-6.08a.34.34 0 0 0 0-.2 3.43 3.43 0 0 1-.15-2.26c.52-1.66 2.41-1.79 2.74-.42.2.85-.33 2-.75 3.6C13.68 16 15.28 17 16.64 16s1.74-3.1 1.65-4.64c-.18-3.09-3.57-3.75-5.71-2.76-2.46 1.14-3 4.19-1.91 5.58.14.18.25.29.2.47s-.13.56-.21.84a.3.3 0 0 1-.44.2 2.52 2.52 0 0 1-1-.77 4.87 4.87 0 0 1 0-5.44 6.53 6.53 0 0 1 6.3-2.78 5.34 5.34 0 0 1 4.91 4.41 7.34 7.34 0 0 1-1.35 5.16c-1.6 2-4.19 2.11-5.39.9-.08-.17-.15-.24-.24-.35z"
                    style={{ fill: "#fff", fillRule: "evenodd" }}
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase">Popular Posts</p>
        <div className="flex flex-col gap-3 mt-3">
          <SidebarPost />
          <SidebarPost />
          <SidebarPost />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase">Tags</p>
        <div className="flex justify-start items-start gap-2 flex-wrap mt-3">
          {tags.length > 0 ? (
            tags.map((tag) => <Tags key={tag.id} tag={tag} />)
          ) : (
            <p>No Tags Found!!</p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase">Categories</p>
        <div className="flex flex-col gap-2 mt-3 ">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Category key={category.id} category={category} />
            ))
          ) : (
            <p>No Category Found!!</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
//    <svg width="40" height="45" viewBox="0 0 132 108" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M126.589 33.0486H117.563L117.635 32.8603L116.665 30.8608C113.673 24.7031 103.263 4.31008 95.0045 0.514018L94.0268 0.0576172H38.2249L37.2469 0.514018C28.9741 4.31008 18.5789 24.7031 15.5799 30.8608L14.6089 32.8603L14.6888 33.0486H5.66266C2.93885 33.0486 0.714844 34.9683 0.714844 37.3445V41.9013C0.714844 44.2702 2.93885 46.1972 5.66266 46.1972H8.53131C8.2343 47.6461 8.03858 49.1384 8.03858 50.7032V71.1614C8.03858 77.3046 10.4871 82.709 14.2106 86.0487V102.957C14.2106 105.695 16.4272 107.898 19.151 107.898H30.2853C33.0091 107.898 35.2261 105.695 35.2261 102.957V89.5622H97.0185V102.957C97.0185 105.695 99.2353 107.898 101.966 107.898H113.086C115.832 107.898 118.034 105.695 118.034 102.957V86.0487C121.772 82.709 124.213 77.3046 124.213 71.1614V50.7032C124.213 49.1384 124.018 47.6461 123.713 46.1972H126.589C129.32 46.1972 131.53 44.2702 131.53 41.9085V37.3445C131.53 34.9683 129.32 33.0486 126.589 33.0486ZM40.6302 9.94624H91.607C94.99 12.4963 101.38 22.6529 106.327 32.2952H25.9389C30.8721 22.6529 37.2617 12.4963 40.6302 9.94624Z" fill="#532AE5"/>
// </svg>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">


  <circle cx="30" cy="15" r="4" fill="#532AE5"/>
  <circle cx="45" cy="30" r="4" fill="#532AE5"/>
  <circle cx="30" cy="45" r="4" fill="#532AE5"/>
  <circle cx="15" cy="30" r="4" fill="#532AE5"/>


  <path d="M30 15 L45 30" stroke="#532AE5" strokeWidth="2" strokeLinecap="round"/>
  <path d="M45 30 L30 45" stroke="#532AE5" strokeWidth="2" strokeLinecap="round"/>
  <path d="M30 45 L15 30" stroke="#532AE5" strokeWidth="2" strokeLinecap="round"/>
  <path d="M15 30 L30 15" stroke="#532AE5" strokeWidth="2" strokeLinecap="round"/>


  <circle cx="30" cy="15" r="4" fill="#532AE5">
    <animate 
      attributeName="r"
      values="4;6;4"
      dur="1.5s"
      repeatCount="indefinite"
    />
    <animate 
      attributeName="opacity"
      values="1;0.5;1"
      dur="1.5s"
      repeatCount="indefinite"
    />
  </circle>

</svg>



    ),
    title: "Fully Automated Workflow",
    paragraph:
      "Automate every deal to minimize manual work and increase dealership operational efficiency.",
  },
  {
    id: 2,
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    
    >
     
      <circle cx="24" cy="24" r="18" stroke="#532AE5" strokeWidth="2" />
      <path
        d="M24 6v4M24 38v4M6 24h4M38 24h4M10 10l3 3M35 35l3 3M10 38l3-3M35 13l3-3"
        stroke="#532AE5"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M16 28h16l-2-6c-.4-1.2-1.4-2-2.6-2H18.6c-1.2 0-2.2.8-2.6 2l-2 6Z"
        stroke="#532AE5"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="18" cy="30" r="2" fill="#532AE5" />
      <circle cx="30" cy="30" r="2" fill="#532AE5" />
    </svg>
    ),
    title: "Designed for Dealer Groups",
    paragraph:
      "Integrate easily with CRM and inventory platforms to manage dealership networks effectively. ",
  },
  {
    id: 3,
    icon: (
      <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="48" 
  height="48" 
  viewBox="0 0 48 48" 
  fill="none"
>
  
  <path 
    d="M24 4L10 12v14c0 8 6 14 14 14s14-6 14-14V12L24 4Z" 
    stroke="#532AE5" 
    strokeWidth="3" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />


  <path 
    d="M17 24l6 6 12-12" 
    stroke="#532AE5" 
    strokeWidth="3" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
</svg>

    ),
    title: "Launch 80% Faster to Market",
    paragraph:
      "Speed up onboarding and vehicle listings with AI tools that eliminate traditional delays.",
  },
  {
    id: 4,
    icon: (
      <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="48" 
  height="48" 
  viewBox="0 0 48 48" 
  fill="none"
>
 
  <circle cx="24" cy="24" r="18" stroke="#532AE5" strokeWidth="3" />

  <circle cx="24" cy="24" r="12" stroke="#532AE5" strokeWidth="2" fill="none" />

  
  <path 
    d="M31 17a3 3 0 0 1-4 4l-2 2 2 2 2-2a3 3 0 0 1 4-4l-2-2Z" 
    fill="#532AE5"
  />
</svg>

    ),
    title: "Complete Sales Funnel Management ",
    paragraph:
      "Manage inquiries, leads, follow-ups, and sales to guide buyers through purchase journeys.",
  },
  {
    id: 5,
    icon: (
//      <svg 
//   xmlns="http://www.w3.org/2000/svg" 
//   width="48" 
//   height="48" 
//   viewBox="0 0 48 48" 
//   fill="none"
// >
 
//   <circle cx="24" cy="24" r="22" stroke="#532AE5" strokeWidth="2" />

 
//   <path 
//     d="M14 28h20l-2-7c-.4-1.2-1.4-2-2.6-2H18.6c-1.2 0-2.2.8-2.6 2l-2 7Z" 
//     stroke="#532AE5" 
//     strokeWidth="2" 
//     fill="none" 
//     strokeLinecap="round" 
//     strokeLinejoin="round"
//   />
//   <circle cx="18" cy="30" r="2" fill="#532AE5"/>
//   <circle cx="30" cy="30" r="2" fill="#532AE5"/>

//   <path 
//     d="M33 15a4 4 0 0 1-5 5l-3 3 3 3 3-3a4 4 0 0 1 5-5l-3-3Z" 
//     fill="#532AE5"
//   />
// </svg>

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="48" 
  height="48" 
  viewBox="0 0 48 48" 
  fill="none"
>
  
  <circle cx="24" cy="24" r="22" stroke="#532AE5" strokeWidth="2" />

  
  <path 
    d="M14 28h20l-2-7c-.4-1.2-1.4-2-2.6-2H18.6c-1.2 0-2.2.8-2.6 2l-2 7Z" 
    stroke="#532AE5" 
    strokeWidth="2" 
    fill="none" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  />

 
  <circle cx="18" cy="30" r="2" fill="#532AE5">
    <animateTransform 
      attributeName="transform" 
      type="rotate" 
      from="0 18 30" 
      to="360 18 30" 
      dur="1s" 
      repeatCount="indefinite"/>
  </circle>
  <circle cx="30" cy="30" r="2" fill="#532AE5">
    <animateTransform 
      attributeName="transform" 
      type="rotate" 
      from="0 30 30" 
      to="360 30 30" 
      dur="1s" 
      repeatCount="indefinite"/>
  </circle>

 
  <path 
    d="M33 15a4 4 0 0 1-5 5l-3 3 3 3 3-3a4 4 0 0 1 5-5l-3-3Z" 
    fill="#532AE5"
  >
    <animate 
      attributeName="opacity" 
      values="1;0.5;1" 
      dur="1.5s" 
      repeatCount="indefinite"
    />
    <animateTransform
      attributeName="transform"
      type="scale"
      values="1;1.2;1"
      dur="1.5s"
      repeatCount="indefinite"
      additive="sum"
    />
  </path>
</svg>

    ),
    title: "100% Accurate Damage Detection",
    paragraph:
      "AI-powered inspections identify dents, scratches, and damages for dependable vehicle assessments.               ",
  },
  {
    id: 6,
    icon: (
     <svg width="40" height="45" viewBox="0 0 179 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M161.538 27.3579H148.585L125.469 0.213135H74.0429L48.6667 25.257L24.8696 4.74089C17.6254 -1.51104 8.79459 1.33599 5.13629 3.71215C3.14414 5.0089 2.57928 7.68208 3.87599 9.68154C5.17994 11.6738 7.84578 12.2388 9.83792 10.9348C9.88863 10.9058 15.032 7.63141 19.2408 11.2609L37.9091 27.3579H16.843C7.59942 27.3579 0.101807 35.1819 0.101807 44.8314V48.1566C0.101807 57.8062 7.59942 65.623 16.843 65.623H23.1165C25.1811 73.7367 32.505 79.7423 41.256 79.7423C50.0069 79.7423 57.338 73.7367 59.3954 65.623H121.767C123.839 73.7367 131.163 79.7423 139.914 79.7423C148.665 79.7423 155.989 73.7367 158.054 65.623H161.538C170.789 65.623 178.279 57.8062 178.279 48.1566V44.8314C178.279 35.1819 170.789 27.3579 161.538 27.3579V27.3579Z" fill="#532AE5"/>
</svg>

    ),
    title: "Lead management & CRM",
    paragraph:
      "Track, nurture, and manage customer relationships from enquiry to sale within your CRM.",
  },

  {
    id: 7,
    icon: (
   <svg width="70" height="70" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  
  <path d="M10 45 H30 L45 25 H75 L90 45 H110" stroke="#532AE5" strokeWidth="4" fill="none" strokeLinecap="round"/>
  

  <circle cx="35" cy="65" r="10" stroke="#532AE5" strokeWidth="4"/>
  <circle cx="85" cy="65" r="10" stroke="#532AE5" strokeWidth="4"/>

 
  <line x1="50" y1="25" x2="50" y2="5" stroke="#532AE5" strokeWidth="3"/>
  <circle cx="50" cy="5" r="4" fill="#532AE5"/>

  <line x1="70" y1="25" x2="70" y2="10" stroke="#532AE5" strokeWidth="3"/>
  <circle cx="70" cy="10" r="4" fill="#532AE5"/>
</svg>

    ),
    title: "Automotive Industry IT Solutions ",
    paragraph:
      "Grow your automotive business with simple, smart technology that makes everything work better and faster.",
  },
  {
    id: 8,
    icon: (
   <svg width="80" height="80" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 55 H25 L35 40 H65 L75 55 H100" stroke="#532AE5" strokeWidth="4" fill="none" stroke-linecap="round"/>
  <circle cx="30" cy="75" r="9" fill="#532AE5"/>
  <circle cx="70" cy="75" r="9" fill="#532AE5"/>

 
  <path d="M90 20 L110 50 L100 48 L97 60 L90 20Z" fill="#532AE5"/>
</svg>


    ),
    title: "Auto Retail Software ",
    paragraph:
      "Helps car dealers sell cars online smoothly, from research to delivery, with better sales management.",
  },
    {
    id: 9,
    icon: (
 <svg width="120" height="120" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
 
  <circle cx="65" cy="65" r="25" stroke="#532AE5" strokeWidth="4"/>
  
  
  <circle cx="65" cy="65" r="40" stroke="#532AE5" strokeWidth="3" stroke-dasharray="6 6">
    <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="65" cy="65" r="55" stroke="#532AE5" strokeWidth="2" stroke-dasharray="6 6">
    <animate attributeName="r" values="55;60;55" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
  </circle>
  

  <g transform="rotate(0 65 65)">
    <path d="M65 5 L65 20 M65 5 L60 10 M65 5 L70 10" stroke="#532AE5" strokeWidth="3" stroke-linecap="round"/>
    <path d="M65 125 L65 110 M65 125 L60 120 M65 125 L70 120" stroke="#532AE5" strokeWidth="3" stroke-linecap="round"/>
    <path d="M5 65 L20 65 M5 65 L10 60 M5 65 L10 70" stroke="#532AE5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M125 65 L110 65 M125 65 L120 60 M125 65 L120 70" stroke="#532AE5" strokeWidth="3" strokeLinecap="round"/>
    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 65 65" to="360 65 65" dur="20s" repeatCount="indefinite"/>
  </g>
</svg>



    ),
    title: "Global Scalability",
    paragraph:
      "Easily expand and adapt AI solutions to new markets and languages as your dealership network grows.",
  },

];

export default featuresData;

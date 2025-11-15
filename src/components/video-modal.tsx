import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | { channel: "youtube"; videoId: string }
  | { channel?: "custom"; src: string }
);

export default function VideoModal({ isOpen, onClose }: PropsType) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-4xl text-white z-50"
        >
          &times;
        </button>

        {/* Video */}
        <video width="100%" height="500" controls autoPlay className="rounded-md">
          <source
            src="images/logo/Revolutionize Your Dealership Today with Frondesk Technologies-VEED.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>,
    document.body
  );
}


// import { createPortal } from "react-dom";

// type PropsType = {
//   isOpen: boolean;
//   onClose: () => void;
// } & (
//   | {
//       channel: "youtube";
//       videoId: string;
//     }
//   | {
//       channel?: "custom";
//       src: string;
//     }
// );


// export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
//   if (!isOpen) return null;

//   let src = "";

//   // if (props.channel === "youtube") {
//   //   src = `https://www.youtube.com/embed/${props.videoId}`;
//   // } else {
//   //   src = props.src;
//   // }

//   return createPortal(
//     <div className="fixed inset-0 flex  justify-center bg-black/60">
     
//       <div className="relative">
//          <div className="absolute w-0 max-w-4xl bg-gray-900" style={{top:"100px",left:"1100px"}}>

//         <button
        
//           onClick={onClose}
//           className="absolute translate-x-full text-7xl leading-none text-white"
//         >
//           <span className="sr-only">Close modal</span>
//           &times;
//         </button>
//         {/* <iframe width="100%" height="500" allowFullScreen /> */}
//       </div>
//       <video width="100%" height="500"  controls autoPlay>
//   <source src="images/logo/Revolutionize Your Dealership Today with Frondesk Technologies-VEED.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video></div>
//     </div>,
//     document.body,
//   );
// }

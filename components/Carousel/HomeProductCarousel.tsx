// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { DeviceCards } from "../Cards";

// const latestDevices = [
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-1.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-2.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-1.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-2.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-1.png"

//     },
//     {
//         id: 1,
//         deviceName: "Honor X7",
//         contractPrice: "479",
//         contractTerm: "24",
//         planName: "On Infinite 15GB",
//         productUrl: "honor-x7",
//         ctaText: "Learn more",
//         deviceImage: "/images/devices/honor-device-2.png"

//     }
// ]


// export const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 2,
//     partialVisibilityGutter: 120
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 640 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 640, min: 0 },
//     items: 1,
//   },
// };


// const HomeProductCarousel: React.FC<{}> = () => {


//       return(
//       <Carousel
//       infinite={true}
//       ssr={true}
//       autoPlay={ true}
//       partialVisible={true}
//       responsive={responsive}
//       itemClass="px-2"
//       >

//         {latestDevices.map((item, index) => (
//           <DeviceCards key={index}
//           deviceName={item.deviceName}
//           contractPrice={item.contractPrice}
//           contractTerm={item.contractTerm}
//           planName={item.planName}
//           productUrl={item.productUrl}
//           ctaText={item.ctaText}
//           deviceImage={item.deviceImage}
//       />
//         ))}


//   </Carousel>
// )
// }
// export default HomeProductCarousel;

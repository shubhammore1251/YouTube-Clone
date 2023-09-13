// import React from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getSubscriptionChannels } from "../redux/actions/channel.actions";
// import { Container } from "react-bootstrap";
// import VideoVertical from "../components/VideoVertical";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import HelmetCustom from "../components/HelmetCustom";
// import { MdSubscriptions} from "react-icons/md";

// const SubsciptionScreen = () => {
//   const accessToken = useSelector((state) => state.auth?.accessToken);

//   const SubsTitle = "Subscriptions";

//   const dispatch = useDispatch();

//   //Requesting the Channel that users is Subscribed to
//   useEffect(() => {
//     // if (accessToken) {
//     //   dispatch(getSubscriptionChannels());
//     // }
//     dispatch(getSubscriptionChannels());
//   }, [dispatch]);

//   const { channel, loading } = useSelector(
//     (state) => state.SubscriptionChannel
//   );

//   return accessToken ? (
//     <Container fluid>
//       <HelmetCustom title={`${SubsTitle} - YouTube`} />
//       {!loading ? (
//         channel?.map((video, i) => (
//           <VideoVertical video={video} key={i} subpsScreen />
//         ))
//       ) : (
//         <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
//           <Skeleton width="100%" height="160px" count={20} />
//         </SkeletonTheme>
//       )}
//     </Container>
//   ) : (
//     <div className="notSubscribed">
//       <MdSubscriptions className="notSubscribed-icon" />
//       <h3>Sign in to see your {SubsTitle}</h3>
//     </div>
//   );
// };

// export default SubsciptionScreen;

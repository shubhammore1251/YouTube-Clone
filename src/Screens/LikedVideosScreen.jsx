import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLikedVideosofUser } from '../redux/actions/video.actions';
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import VideoVertical from '../components/VideoVertical';
import { Helmet } from 'react-helmet';
import { MdThumbUp } from "react-icons/md";

const LikedVideosScreen = () => {
    
    const accessToken = useSelector((state) => state.auth?.accessToken);
    
    const LikedPageTitle = "Liked Videos" 
    
    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(getLikedVideosofUser())
    }, [dispatch])

    const { videos, loading } = useSelector(state => state.likedVideos);

    return accessToken ? (
        <Container fluid>
            <Helmet title={`${LikedPageTitle} - YouTube`}/>
            {!loading ? (
                 videos?.map((video) => (
                     <VideoVertical video={video} key={video.id} likedVideoScreen/>
                 ))
             ) : (
                 <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
                     <Skeleton width="100%" height="160px" count={20} />
                 </SkeletonTheme>
             )
             }
        </Container>
    )
    :
    (
      <div className="notSubscribed">
        <MdThumbUp className="notSubscribed-icon" />
        <h3>Sign in to see your {LikedPageTitle}</h3>
     </div>
    )
}

export default LikedVideosScreen

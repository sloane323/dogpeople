
import { useState } from "react";
import "./Css/Course.css";
import { MdFmdGood } from "react-icons/md"; 
import "./Css/Course.css";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


const Course = () => {


    return ( <div className="cos-ti">
   
   <div><br></br><br></br><br></br><br></br>
    <span  className="sub-title">Course 
     코스 안내 </span> </div> <br /> <br />

<div className="photoboxB">
<div className="photobox">
     <div className="box"></div>
     <div className="box2"></div>
     <div className="box3"></div>
     <div className="box4"></div> 
     </div></div>


<div> <br />
<Timeline position="alternate"  className="timebox" >

      <TimelineItem style={{fontFamily: 'GmarketSansMedium' , backgroundColor:"#DFDFDF"}} >

        <TimelineOppositeContent sx={{ m: 'auto 0' }}
          variant="body2" style={{fontFamily: 'GmarketSansMedium'}}>
          부산역은 서울과 부산을 잇는 철도인 경부선의 종점이다.
          기차뿐만 아니라 버스, 지하철, 택시 등을 이용할 수 있는
          부산 교통의 중심지 역할을 한다. 총 3층 규모의 역으로
          여행자들을 위한 편의시설까지 잘 갖추고 있다.
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot>
            <AddLocationAltIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{fontFamily: 'GmarketSansMedium'}}>
            01 
          </Typography>
          <Typography style={{fontFamily: 'GmarketSansMedium'}}>부산역</Typography>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2" style={{fontFamily: 'GmarketSansMedium' }}>
        부산항의 관문 오륙도, 태종대, 신선대, 용두산공원
        등이 한눈에 바라볼 수 있는 부산항대교는 부산항 일대의
        풍경을 바꾸어 놓은 부산항을 상징하는 대표 건축물로 우아한 곡선과
        웅장한 외형은 수평선 넘어 떠오르는 일출과 조화를 이루는 새로운 명소입니다
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AddLocationAltIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{fontFamily: 'GmarketSansMedium' }}>
            02
          </Typography>
          <Typography style={{fontFamily: 'GmarketSansMedium'}}>부산항</Typography>
        </TimelineContent>
      </TimelineItem>




      <TimelineItem style={{backgroundColor:"#DFDFDF"}}>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"  style={{fontFamily: 'GmarketSansMedium'}}>
                    광안리해수욕장 전면을 가로지르는 웅장한 규모와 함께 시간대별,
        요일별, 계절별로 10만 가지 이상의 다양한 색상을 낼 수 있는
        조명시설을 갖추어 탁월한 해상경관을 연출하고 있으며,
        특히 여름 피서철 및 부산국제영화제 등 관광 특수기에는 국내외
        많은 방문객들이 찾는 대표적인 관광명소입니다.
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <AddLocationAltIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{fontFamily: 'GmarketSansMedium'}}>
            03
          </Typography>
          <Typography style={{fontFamily: 'GmarketSansMedium'}}>광안리</Typography>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"  style={{fontFamily: 'GmarketSansMedium'}}>
        부산 해운대구에 위치한 해운대
        해수욕장은 넓은 백사장과
        아름다운 해안선을 자랑하고 있으며 얕은
        수심과 잔잔한 물결로 해수욕장의 최적 조건을 갖추고 있다.
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot >
          <AddLocationAltIcon />
          </TimelineDot>
  
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{fontFamily: 'GmarketSansMedium'}}>
            04
          </Typography>
          <Typography style={{fontFamily: 'GmarketSansMedium'}}>해운대</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

</div>

    <div className="footerspace"></div>

    </div> );
}
 
export default Course;
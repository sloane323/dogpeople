import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import "./Css/Place.css";

import busanmap from '../img/redline2.png';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 7}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  

const Place = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return ( <div className='placemainT'>   <br></br><br></br><br></br><br></br>
    <div className='placemain'>

        <span  className="sub-title">Place 
        장소 안내 </span> 
     <br></br><br></br>     <br></br><br></br>


     <img src={busanmap} alt={`busanmap`} className="busanmap"/>
<br></br><div className="text-boxb">
<div className="text-box">

     <Box
      sx={{ textAline:'left', flexGrow: 2,  display: 'flex', height: 600 , fontFamily: 'GmarketSansMedium' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '30em' }}
      >
        <Tab label="01 부산역" {...a11yProps(0)}   sx={{ fontFamily: 'GmarketSansMedium' }} />
        <Tab label="02 부산대교 부산항대교" {...a11yProps(1)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="03 UN기념공원" {...a11yProps(2)}sx={{ fontFamily: 'GmarketSansMedium' }} />
        <Tab label="04 부산박물관" {...a11yProps(3)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="05 용호만 유람선터미널" {...a11yProps(4)}sx={{ fontFamily: 'GmarketSansMedium' }} />
        <Tab label="06 마린시티" {...a11yProps(5)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="07 동백섬" {...a11yProps(6)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="08 해운대해수욕장" {...a11yProps(7)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="09 센텀시티" {...a11yProps(8)}sx={{ fontFamily: 'GmarketSansMedium' }} />
        <Tab label="10 시립미술관.벡스코" {...a11yProps(9)}sx={{ fontFamily: 'GmarketSansMedium' }} />
        <Tab label="11 광안대교" {...a11yProps(10)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="12 평화공원" {...a11yProps(11)} sx={{ fontFamily: 'GmarketSansMedium' }}/>
        <Tab label="13 광복로" {...a11yProps(12)}sx={{ fontFamily: 'GmarketSansMedium' }} />
      </Tabs>

      <TabPanel value={value} index={0} className="styletab"   sx={{ fontFamily: 'GmarketSansMedium' }}> 
      현재의 부산역사는 2004년 경부고속철도 개통에 맞추어 증·개축되어, 대지면적 21만 1,536㎡, 건축면적 3만 8,946㎡, 연면적 6만 1,880㎡이다. 지상 5층, 지하 1층에 철골 및 철근콘크리트 구조로 건축되었으며, 중앙집중식 냉난방 및 공조시설과 에스컬레이터 10대, 엘리베이터 11대가 설치되어 있다. 1만 6,457㎡의 선상주차장에는 승용차 기준으로 총 245대가 동시에 주차할 수 있다. 역을 중심으로 한 관광지로서는 범어사가 26km, 동래온천이 16km, 태종대가 11.4km, 송도가 5.4km, 해운대가 20.7km 지점에 있습니다.
      </TabPanel>
      <TabPanel value={value} index={1} style={{ fontFamily: 'GmarketSansMedium' }} className="styletab">
        부산대교는 1934년 준공된 영도대교와 더불어 영도와 육지를 연결하는 교통로이며, 조선공업단지 및 신흥항만으로 성장하는 영도지구의 물동량을 신속히 처리할 수 있는 산업도로 겸 임항도로로서의 기능을 발휘하고 있습니다.
      </TabPanel>
      <TabPanel value={value} index={2} className="styletab">
      이곳 유엔기념공원은 세계 유일의 유엔군 묘지로서, 세계평화와 자유의 대의를 위해 생명을 바친 유엔군 전몰 장병들이 잠들어 있는 곳이다.

이곳 묘지는 한국전쟁이 일어난 이듬해인 1951 년 1 월, 전사자 매장을 위하여 유엔군 사령부가 조성하였으며, 같은 해 4 월 묘지가 완공됨에 따라 개성, 인천, 대전, 대구, 밀양, 마산 등지에 가매장되어 있던 유엔군 전몰장병들의 유해가 안장되기 시작하였다.

1955 년 11 월 대한민국 국회는, 유엔군의 희생에 보답하기 위해 이곳 토지를 유엔에 영구히 기증하고, 아울러 묘지를 성지로 지정할 것을 결의하였다. 1955 년 12 월 15 일, 한국정부로부터 국회의 결의 사항을 전달 받은 유엔은, 이 묘지를 유엔이 영구적으로 관리하기로 유엔총회에서 결의문 제 977(X)호를 채택하였다.

이에 따라 1959년 11월 유엔과 대한민국간에 ‘유엔 기념 묘지 설치 및 관리 유지를 위한 대한민국과 유엔간의 협정’ 이 체결됨으로써 지금의 유엔기념묘지로 출발하게 되었다.

      </TabPanel>
      <TabPanel value={value} index={3} className="styletab">
      멀고 먼 선사시대부터 삼한/삼국 시대를 거쳐 조선시대와 근대에 이르기 까지, 부산 지역의 역사를 한 눈에 살펴 볼 수 있는 부산시립박물관.

부산 지역의 향토 유물을 발굴해 새 역사를 만들고, 전통 문화 체험 프로그램과 민속 교실을 열어 우리 전통을 알리는 곳이기도 하다.

부산의 역사를 조명하는 공간, 부산시립박물관에서 살아 숨쉬는 부산의 어제와 오늘, 그리고 미래를 만나보자.
      </TabPanel>
      <TabPanel value={value} index={4} className="styletab">
      용호만 유람선 터미널은  이기대 동생말에서  용호만 매립부두쪽으로 분포로에 위치한 터미널입니다. 터미널이 위치한  지역 일대를   다이아몬드 베이라고 호칭합니다.

다이아몬드 베이는 용호만 유람선터미널에서 승선하여 오륙도, 해운대, 누리마루(동백섬), 다이아몬드브릿지(광안대교)까지 즐길 수가 있으며 코스 및 시간대에 따라 이용금액에 차이가 있습니다. 터미널은 100% 예약제로 운영되기 때문에 “삼주트리콜” 앱을 이용하여 간편하게 예약을 하시는 것이 좋습니다.
      </TabPanel>
      <TabPanel value={value} index={5} className="styletab">
      럭셔리한 고층 빌딩들이 모여 화려한 야경을 만들어내는 '부산의 맨해튼'
      고급 레스토랑과 카페가 즐비한, 부산의 손꼽히는 번화가
하늘을 찌를 듯이 높은 빌딩과 고급 아파트들이 모여 있는 중심 번화가. 높은 집값과 럭셔리한 외관으로 '부산의 맨해튼'이라고 불리기도 한다. 이곳의 매력은 고층 빌딩들이 만들어내는 화려한 야경으로, 밤 바다에 풍경이 반사된 그림 같은 모습을 감상할 수 있는 '더 베이 101', 웅장한 스카이 라인을 한 프레임 안에 담을 수 있는 '수영 요트 경기장'이 유명 포인트로 사랑받고 있다. 이외에도 세계의 요리를 판매하는 레스토랑과 감각적인 카페가 모여 있어 구경하기 좋으며, 해안선을 따라 자리한 '영화의 거리'를 걸으며 여유를 만끽할 수도 있다.
      </TabPanel>
      <TabPanel value={value} index={6} className="styletab">
      해운대해수욕장에서 탁 트인 바다를 바라보다 오른편으로 눈길을 돌리면 백사장이 끝나는 지점에 조선비치호텔이 있고 그 뒤편에 아담하게 동백섬이 자리하고 있다.

원래는 섬이었던 이곳은 오랜 세월 퇴적작용으로 육지와 연결되었지만 아직도 동백섬이라고 부르고 있어 옛날 지형을 연상시켜 주고 있다.

일찍이 최치원 선생을 비롯한 많은 시인 묵객들은 바다와 숲이 어우러진 이곳의 절경을 찾아 노닐고 그 감흥을 읊어 후세에 전하고 있다. 동백섬을 둘러 산책로가 조성되어 시민들의 발길이 끊이지 않고 최치원의 해운대 각자, 동상, 시비를 비롯해서 황옥공주 전설의 주인공 인어상과 누리마루 APEC하우스 등 과거와 현재에 걸친 인적이 곳곳에 베여있다.

또한 동백섬에서 보는 부산의 근원경은 인상적인데 건너편 미포쪽 해안끝선과 달맞이 언덕, 바다와 하늘을 가로지르는 광안대교, 부산바다의 상징 오륙도 등이 한눈에 들어온다. 이름 그대로 예전에 말발굽에 차일 정도로 동백꽃이 지천으로 피고 지던 곳에는 지금도 변함없이 겨울에서 봄 사이에 꽃망울을 맺고 빨간 꽃이 통으로 떨어져 운치를 더하고 있다 .        </TabPanel>
        <TabPanel value={value} index={7} className="styletab">
        부산 해운대구에 위치한 해운대 해수욕장은 넓은 백사장과 아름다운 해안선을 자랑하고 있으며 얕은 수심과 잔잔한 물결로 해수욕장의 최적 조건을 갖추고 있다.

‘부산’ 하면 제일 먼저 떠올리는 곳이 해운대 해수욕장이라고 할 만큼 부산을 대표하는 명소이며, 해마다 여름철 피서객의 규모를 가늠하는 척도로 이용될 만큼 국내 최대 인파가 몰리는 곳이기도 하다.

특히 해안선 주변에 크고 작은 빌딩들과 고급 호텔들이 우뚝 솟아 있어 현대적이고 세련된 분위기의 해수욕장으로 유명하기 때문에 여름 휴가철뿐만 아니라 사시사철 젊은 열기로 붐비고 해외 관광객들에게도 잘 알려져 있어 외국인들이 많이 찾는 곳이다. 또한 국내 1급 해수욕장답게 주변에는 일급 호텔을 비롯한 숙박, 오락시설 및 유흥 시설들이 잘 정비되어 있다.

매년 정월 대보름날의 달맞이 축제를 비롯하여 북극곰수영대회, 모래 작품전, 부산 바다축제 등 각종 크고 작은 행사들이 열리고 해수욕장 주변에 동백섬, 오륙도, 아쿠아리움 , 요트경기장, 벡스코, 달맞이고개, 드라이브코스 등 즐길거리와 볼거리가 많다.
      </TabPanel>
      <TabPanel value={value} index={8} className="styletab">
      센텀시티가 조성된 지역은 예전에 수영 비행장[또는 부산 비행장]이 있던 자리로, 해운대구 재송동에서 우동까지의 수영강변 구역이다. 1976년 8월 김해 국제 공항이 조성되어 비행장이 옮겨 가고 난 후 군용 항공 기지로 사용되다가 1996년 4월 1일 부산광역시로 부지가 이전되었다. 센텀시티 조성 지역은 비행장으로 사용이 중단된 이후에는 개발에서 제외되어 컨테이너 야적장으로 쓰이며 도시 개발에서 소외된 지역이었다.

센텀시티는 해운대 관광 특구 및 해운대 신시가지와 인접해 있고, 수영 강변 대로와 충렬 대로 사이에 자리하고 있어 번영로와 바로 연결되며, 수영 강변 대로에서는 광안 대로와도 바로 연결된다. 또한 해운대 신시가지로 향하는 장산로를 타고 가면 부산 울산 고속 도로와 이어지고, 해운로를 따라 이동하면 해운대 관광 특구와 송정, 기장 지역으로 연결된다. 동부산 지역의 개발과 함께 부산의 구 시가지와 동부산 지역을 연결하는 거점 역할을 수행할 것으로 기대되는 지역이다.
      </TabPanel>
      <TabPanel value={value} index={9} className="styletab">
      제2전시장은 연면적92,273㎡로 1층과 3층 전시장과 회의실을 함께 갖추고 있습니다.

1층 전시장과 회의실은 전문전시회 및 대형회의, 각종 이벤트, 스포츠행사, 초대형기업행사 등에 적합하며 전시장면적은 9,936㎡, 회의실은 756㎡ 입니다.

3층 전시장과 회의실은 특별전시회, 문화전시회, 작품발표회, 미술전, 이벤트행사에 이용되며 전시장면적 9,936㎡, 회의실 756㎡ 정도의 규모를 갖추고 있습니다.
      </TabPanel>
      <TabPanel value={value} index={10} className="styletab">
      광안리해수욕장 전면을 가로지르는 웅장한 규모와 함께 시간대별, 요일별, 계절별로 10만 가지 이상의 다양한 색상을 낼 수 있는 조명시설을 갖추어 탁월한 해상경관을 연출하고 있으며, 특히 여름 피서철 및 부산국제영화제 등 관광 특수기에는 국내외 많은 방문객들이 찾는 대표적인 관광명소입니다.
      </TabPanel>
      <TabPanel value={value} index={11} className="styletab">
      부산 시민들의 대표적인 쉼터 UN평화공원.

동백나무, 소나무 등 수목 3만 그루를 심어 더욱 푸른 공간이 되었다. 공원 한가운데 하늘로 솟구쳐 오르는 분수가에서 여름에는 이곳에서 물놀이를 즐길 수 있고 밤에는 아름답게 빛나는 분수가를 배경으로 달콤한 시간을 보낼 수도 있다.

찾는 이에게 평화를 선사하는 UN평화공원, 이곳에서 한 때의 여유를 즐겨보자.
      </TabPanel>
      <TabPanel value={value} index={12} className="styletab">
      광복로에는 다양한 패션 센터와 음식점이 신규로 오픈하고 있어 다양한 볼거리와 먹거리를 제공하고 있다.
      </TabPanel>

    </Box>

    </div>    </div>
    </div>

    </div>  );
}
 
export default Place;
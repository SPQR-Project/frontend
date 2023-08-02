<div align="center">
  <img src="./README_Assets/logo.jpg" alt="Logo" width="600" />
</div>

<H3 align="center"> <i> An Easy-to-use Scan & Order System for Restaruants  </i></H3>
<br>

## Table of Contents
1. [Description](#introduction)
2. [Features](#features)
3. [Design](#design)
4. [Tech Stack](#techstack)
    1. [Cloud](#cloud)
    2. [Backend](#backend)
    3. [Frontend](#frontend)

<br>

## Description <a name="introduction"></a>
"QR Mondrian" is a QR ordering system that boosts the dining experience and simplifies restaurant operations. Using QR code technology, customers can view menus and place orders directly from their phones.

For customers, this system removes the usual wait for a server to provide the menu or take an order. They just scan a QR code, view the menu on their phones, and place their orders right away, saving time and increasing convenience.

For restaurant owners, "QR Mondrian" brings a new level of efficiency. Owners can make real-time updates to menus and immediately stop orders when a dish runs out. This effective order management helps reduce errors and can also help decrease operational costs.

In conclusion, "QR Mondrian" stands as a time-saving and cost-effective solution, redefining the dining and ordering process for customers and restaurant owners alike.


### **User Flow**
<table>
    <tr>
        <td width="50%">
            <img src="./asset/readme/service_flow.png">
        </td>
	<td width="50%">
            <img src="./asset/readme/service_flow.png">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a>User-side</a>
        </td>
    </tr>
</table>

<br>

## Features <a name="features"></a>




<table>
        <tbody>
		<tr>
			<td colspan=2>
				<br>
				<b>설문조사는 그만! 이제 스캔하세요.</b><br>
				<br>
			</td>
		</tr>
		<tr>
            <td rowspan="1"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/init.gif"><img src="./asset/readme//init.gif" width="60%" height="60%"></a></div></td>
            <td width="33%"> 1. (간부) 식사시간 전 initData 생성용 정량 배식된 식판 스캔 </td>
        </tr>
        <tr>
            <td rowspan="1"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/qr.gif"><img src="./asset/readme/qr.gif" width="60%" height="60%"></a></div></td>
           <td>2. (병사) 식사 후 본인식별용 QR코드 스캔</td>
        </tr>
        <tr>
            <td rowspan="1"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/finished_meal.gif"><img src="./asset/readme/finished_meal.gif" width="60%" height="60%"></a></div></td>
           <td>3. (병사) 잔반 버리기 전 화면 속 규격에 식판 맞추고 스캔 </td>
        </tr>
   </tbody>
</table>



<table>
        <tbody>
		<tr>
			<td colspan=2>
				<br>
				<b>잔반도 줄이고 포상도 얻고, 일석이조의 챌린지</b><br>
				<br>
			</td>
		</tr>
		<tr>
            <td rowspan="1"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/challenge.gif"><img src="./asset/readme/challenge.gif" width="60%" height="60%"></a></div></td>
            <td width="33%"> 챌린지 등록 및 삭제 </td>
        </tr>
        <tr>
            <td rowspan="1"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/info.gif"><img src="./asset/readme/info.gif" width="60%" height="60%"></a></div></td>
           <td>챌린지 정보 확인 (포상, 진행기간 등) </td>
        </tr>
        <tr>
            <td rowspan="1"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/leaderboard.gif"><img src="./asset/readme/leaderboard.gif" width="60%" height="60%"></a></div></td>
           <td>리더보드에서 챌린지 최신 순위 확인</td>
        </tr>
   </tbody>
</table>

<table>
        <tbody>
		<tr>
			<td colspan=2>
				<br>
				<b> 너 자신을 알라: 잔반 현황 및 식습관 파악하세요. </b><br>
				<br>
			</td>
		</tr>
		<tr>
            <td rowspan="2"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/explore.gif"><img src="./asset/readme/explore.gif" width="90%" height="90%"></a></div></td>
            <td width="33%">끼니별 배식량 추천</td>
        </tr>
        <tr>
            <td>다양한 차트 + 애니메이션을 이용한 데이터 시각화 </td>
        </tr>
   </tbody>
</table>

<table>
        <tbody>
		<tr>
			<td colspan=2>
				<br>
				<b> ➕ 내 식판 (흑)역사 불러오기, 잔반앨범  </b><br>
				<br>
			</td>
		</tr>
		<tr>
            <td rowspan="2"><div align="center"><a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/asset/readme/album.gif"><img src="./asset/readme/album.gif" width="90%" height="90%"></a></div></td>
            <td width="33%">스캔한 식판 사진 모두 조회 가능</td>
        </tr>
        <tr>
            <td>각 식판 사진별 잔반 클리어률 확인하여 밀스캔 알고리즘의 합리성 확인 </td>
        </tr>
   </tbody>
</table>

<br>

## 기대효과 <a name="goals"></a>

✨ **장병들의 자발적, 적극적 참여**
* 식단별 배식량을 추천해줌으로서 자연스럽게 병사들의 올바른 배식문화 유도 (넛지효과)
* 챌린지 포상을 통해 동기부여 제공
* 잔반 줄이기를 게임화하여 장병들이 잔반 감축을 즐기고 하나의 문화로 인식
* 이런 명확한 동기부여로 앱의 지속가능성 확립 (잔반 데이터만 제공하면 사용자 유지율(리텐션)이 낮아질 수 밖에 없음)

💖 **식판 데이터 기반 장병 선호도 파악**
* 매 끼니 데이터를 기반으로하여 기존 월 1회 설문조사 방식보다 정확함
* 해당 데이터를 국방부와 공유하여 호응도에 부응하는 효과적인 식단 편성
* 스캔만 하면 완료되는 선호도 조사로 기존 종이 설문조사 필요없이 과정을 무인화, 자동화하여 간부 및 병사의 수고로움를 덜고, 설문조사에 사용되는 종이 낭비를 막아 환경보호까지 일석이조의 효과
* 급식 만족도를 높이고 급식 관련 논란 및 갈등을 해결하려는 국방부의 의지를 보여줄 수 있음


## 발전방향 <a name="forward"></a>

[온실가스 주범 음식물 쓰레기...연간 885만톤 배출](http://www.greenpostkorea.co.kr/news/articleView.html?idxno=127566)\
[음식물 쓰레기 처리로 연간 8000억 낭비](http://www.hkbs.co.kr/news/articleView.html?idxno=530572)\
['음쓰' 물기 빼기가 경제에 미치는 영향](http://www.ohmynews.com/NWS_Web/View/at_pg_w.aspx?CNTN_CD=A0002725580)


위와 같이 음식물 쓰레기 배출량 문제는 비단 군대에서만이 아니라 사회 전반에서 주목하는 이슈입니다. 사회 다양한 곳에서 이루어지고 있는 잔반 줄이기 캠페인에도 불구하고, 매일 1만4400톤 가량의 음식물쓰레기가 배출되고 있고, 매년 상승하는 처리비용으로 연간 8000억의 혈세낭비가 있고 더 증가할 것으로 예상됩니다. 이런 현실 속에 밀스캔은 군대, 학교 등 국내 다양한 공공기관에서 잔반 챌린지와 데이터 분석을 개시하는 초석이 될 수 있습니다. 특히 학교는 군대와 급식 환경이 가장 비슷하면서 (배식 및 식사 동선, 취사장 구조) 챌린지 적용이 수월한 단체생활 (반, 학년, 동아리)로 이루어져 밀스캔의 다음 목적지로 적합합니다. 기존 포스터 배포나 교육 위주의 방식에서 탈피하면서 2021년에 알맞고 MZ세대의 눈높이에 맞춘, 데이터 기반의 챌린지 기능과 모바일 앱으로서의 접근성을 가진 밀스캔이 대한민국 음식물 쓰레기 감축의 미래라고 믿어 의심치 않습니다.


<br>

## 기술 스택 (Tech Stack) <a name="techstack"></a>

### **Backend** <a name="backend"></a>

|Firebase|
|:---:|
|<a href="https://firebase.google.com/"><img src="asset/firebase.jpg" height="70px"></a>|

<table>
    <tr>
        <td width="100%">
            <img src="asset/fbstructure.png">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a>Firebase Structure</a>
        </td>
    </tr>
</table>

#### Backend Dependencies 및 Collection 분류는 [App readme](https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/APP(Android)/README.md)에서 확인하세요.

<br>

### **Frontend** <a name="frontend"></a>

|Dart|Flutter UI Framework|Figma
|:---:|:---:|:---:|
|<a href="https://dart.dev/"><img src="asset/dart.png" height="30px"></a>|<a href="https://flutter.dev/"><img src="asset/flutter-logo.png" height="30px"></a>|<a href="https://www.figma.com/"><img src="asset/figma.png" height="50px"></a>|

<table>
    <tr>
        <td width="40%">
            <img src="./asset/readme/figma_screenshot.png">
        </td>
        <td width="20%">
            <img src="./asset/readme/figma_prototype.png">
        </td>
	<td width="40%">
            <img src="asset/ServiceFlowChart.jpg">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://www.figma.com/file/p1Ln3TPyICmkYXUJTXS2bI/MealScan?node-id=0%3A1">Figma Viewport</a>
        </td>
        <td align="center">
            <a href="https://www.figma.com/proto/p1Ln3TPyICmkYXUJTXS2bI/MealScan?node-id=9%3A39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A39&show-proto-sidebar=1">Figma Prototype</a>
        </td>
	<td align="center">
            <a>User Flow</a>
        </td>
    </tr>
</table>

#### Frontend Dependencies 및 Dir 분류는 [App readme](https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/APP(Android)/README.md)에서 확인하세요.

<br>

### **IOT + Image Processing** <a name="IOT"></a>

#### ☑️☑️☑️더 자세한 내용과 알고리즘 관련 내용은 [IoT -Raspberry Pi readme](https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/tree/master/IoT(Raspberry%20Pi))를 참고하세요❕❕❕


|Raspberry Pi|Python|OpenCV|
|:---:|:---:|:---:|
|<a href="https://www.raspberrypi.org/"><img src="asset/raspberrypi_logo_icon_168030.png" height="50px"></a>|<a href="https://www.python.org/"><img src="asset/python.png" height="30px"></a>|<a href="https://www.opencv.org/"><img src="asset/OpenCV_Logo.png" height="50px"></a>|
<br>

**How to Run**

```bash
$ git clone https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS.git
$ cd APP_IOT_MealScan_FOODFIGHTERS.git/IoT(Raspberry Pi)
$ python main.py
```

<table>
    <tr>
        <td width="60%">
            <img src="asset/flow_chart.png">
        </td>
        <td width="40%">
            <img src="asset/plate_image.png">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a>IOT Flow Chart</a>
        </td>
        <td align="center">
            <a>Image Processing</a>
        </td>
    </tr>
</table>


|사용한 오픈소스 기술|용도 
|:---:|:---:|
|[BackProjection](https://docs.opencv.org/3.4.15/da/d7f/tutorial_back_projection.html)| 잔반 측정 및 Classification 알고리즘에 들어가는 역투영 기술
|[opencv Webcam](https://docs.opencv.org/4.5.3/d8/dfe/classcv_1_1VideoCapture.html)| 라즈베리파이 실시간 잔반 측정을 위한 기술
|[opencv Class index](https://docs.opencv.org/master/annotated.html)| Transfer Colorspace Class (HSV,GRAY,GRB ...)


**오픈소스 및 테스트**\
[Jupyter Notebook](https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/IoT(Raspberry%20Pi)/test_ImageProcess_.ipynb) 또는 [Colab](https://colab.research.google.com/drive/18UU9G10e4-TagV8DNqqpHqynXzzTFJOD?usp=sharing)에서 실행해보세요! <br>

<br>

### **3D Modeling & Printing** <a name="3d"></a>

#### ☑️☑️☑️3D Modeling & Printing 관련 자세한 내용은 [IoT - 3D Print readme](https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/tree/master/IoT(3D%20PRINT))를 참고하세요❕❕❕

|Tinkercad|Cura|Ultimaker
|:---:|:---:|:---:|
|<a href="https://www.tinkercad.com/"><img src="asset/tinkercad_logo.png" height="30px"></a>|<a href="https://ultimaker.com/software/ultimaker-cura"><img src="asset/Cura_logo.jpg" height="70px"></a>|<a href="https://ultimaker.com//"><img src="asset/Ultimaker%20logo.png" height="50px"></a>|

<table>
    <tr>
        <td width="100%">
             <img src="/IoT(3D PRINT)/asset/3d_gif.gif" width="450" height="450">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a>3D Model Structure</a>
        </td>
    </tr>
</table>

<br>

### **Communications/Project Management** <a name="comm"></a>

|Github Projects|Slack|
|:---:|:---:|
|<a href="https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/projects/1"><img src="asset/GitHub-logo.png" height="50px"></a>|<a href="https://www.slack.com/"><img src="asset/slack.jpg" height="60px"></a>|

<table>
    <tr>
        <td width="50%">
            <img src="asset/kanban.png">
        </td>
        <td width="50%">
            <img src="asset/chat.png">
        </td>
    </tr>
    <tr>
        <td align="center">
            <a>Github Projects Kanban Board</a>
        </td>
        <td align="center">
            <a>Slack Workspace</a>
        </td>
    </tr>
</table>
<br>


## 안드로이드 필수 조건 안내 (Prerequisites) <a name="prereqs"></a>
* Android 5.0 (Lollipop: API level 21)
* 권장: Android 10.0 (Q: API level 29)

## 설치 안내 (Installation Process) <a name="install"></a>
```bash
$ git clone https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS.git

$ cd "APP(Android)"

$ flutter run --web-renderer html -v -d web-server --web-hostname=0.0.0.0

$...lib/main.dart is being served at http://0.0.0.0:*****...
```
```
http://0.0.0.0:XXXXX
```
해당 링크 Ctrl/Command + Click

## 프로젝트 사용법 (Getting Started) <a name="start"></a>
* App은 Web에서 Run하여 사용해보세요!
* Image Processing은 [Jupyter Notebook](https://github.com/osamhack2021/APP_IOT_MealScan_FOODFIGHTERS/blob/master/IoT(Raspberry%20Pi)/test_ImageProcess_.ipynb) 또는 [Colab](https://colab.research.google.com/drive/18UU9G10e4-TagV8DNqqpHqynXzzTFJOD?usp=sharing)에서 실행해보세요!

 
## 팀 정보 (Team Information) <a name="team"></a>

<table align="left" width="788">
<thead>
<tr>
<th width="100" align="center">사진</th>
<th width="100" align="center">성명</th>
<th width="150" align="center">역할</th>
<th width="100" align="center">깃허브</th>
<th width="175" align="center">이메일</th>
</tr> 
</thead>
<tbody>
<tr>
<td width="100" align="center">
	<img src="/asset/1.png">
</td>
<td width="100" align="center">김석현<br/>(팀장)</td>
<td width="150">Image Process<br>IoT<br></td>
<td width="100" align="center">
	<a href="https://github.com/sh0116">
		<img src="https://img.shields.io/badge/sh0116-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="175" align="center">
	<a href="mailto:seokhyeon116@naver.com">
                <img src="https://img.shields.io/static/v1?label=&message=seokhyeon116@naver.com&color=green&style=flat-square&logo=naver"/>
        </a>
</td>
</tr>
<tr>
<td width="100" align="center">
	<img src="/asset/2.png">
</td>
<td width="100" align="center">이승준</td>
<td width="150">Frontend<br></td>
<td width="100" align="center">
	<a href="https://github.com/seansungjoonlee">
		<img src="https://img.shields.io/badge/seansungjoonlee-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="175" align="center">
	<a href="mailto:slee1040@gmail.com">
                <img src="https://img.shields.io/static/v1?label=&message=slee1040@gmail.com&color=orange&style=flat-square&logo=gmail"/>
        </a>
</td>
</tr>
<tr>
<td width="100" align="center">
	<img src="/asset/3.png">
</td>
<td width="100" align="center">이형민</td>
<td width="150">Backend<br></td>
<td width="100" align="center">
	<a href="https://github.com/alee2022">
		<img src="https://img.shields.io/badge/alee2022-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="175" align="center">
	<a href="mailto:alee19825@gmail.com">
                <img src="https://img.shields.io/static/v1?label=&message=alee19825@gmail.com&color=orange&style=flat-square&logo=gmail"/>
        </a>
</td>
</tr>
	<tr>
<td width="100" align="center">
	<img src="/asset/4.png">
</td>
<td width="100" align="center">박세연</td>
<td width="150">Backend<br>IoT<br></td>
<td width="100" align="center">
	<a href="https://github.com/seanpark98">
		<img src="https://img.shields.io/badge/seanpark98-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="175" align="center">
	<a href="mailto:seyeonpark@berkeley.edu">
                <img src="https://img.shields.io/static/v1?label=&message=seyeonpark@berkeley.edu&color=orange&style=flat-square&logo=gmail"/>
        </a>
</td>
</tr>

</tbody>
</table>
</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>
<div align="left">
	
## 저작권 및 사용권 정보 (Copyleft / End User License)  <a name="license"></a>
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)
	
</div>

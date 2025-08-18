"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      console.log("🗺️ KakaoMap: loadKakaoMap 호출됨");
      console.log("🔑 API Key:", process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY);

      if (window.kakao && window.kakao.maps) {
        console.log("✅ KakaoMap: 카카오맵 SDK 로드 완료");

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9784), // 서울특별시 중구 을지로 100번지 정확한 좌표
          level: 3,
        };

        try {
          const map = new window.kakao.maps.Map(mapContainer.current, options);
          console.log("✅ KakaoMap: 지도 생성 완료");

          // 마커 생성
          const markerPosition = new window.kakao.maps.LatLng(
            37.5665,
            126.9784
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);
          console.log("✅ KakaoMap: 마커 생성 완료");

          // 인포윈도우 생성
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `
              <div style="padding:12px;font-size:13px;text-align:center;min-width:180px;font-family:'Inter', sans-serif;">
                <div style="font-weight:bold;font-size:15px;color:#E07A5F;margin-bottom:4px;">SPARROW</div>
                <div style="color:#333;margin-bottom:6px;">서울특별시 중구 을지로 100번지</div>
                <div style="font-size:11px;color:#666;line-height:1.3;">
                  <div>☀️ Day: 06:00 - 18:00 (카페)</div>
                  <div>🌙 Night: 18:00 - 02:00 (펍)</div>
                </div>
              </div>
            `,
          });

          // 마커 클릭 이벤트
          window.kakao.maps.event.addListener(marker, "click", () => {
            infowindow.open(map, marker);
          });

          // 기본적으로 인포윈도우 열기
          infowindow.open(map, marker);
          console.log("✅ KakaoMap: 인포윈도우 설정 완료");
        } catch (error) {
          console.error("❌ KakaoMap: 지도 생성 중 오류:", error);
        }
      } else {
        console.error("❌ KakaoMap: 카카오맵 SDK가 로드되지 않았습니다");
      }
    };

    // 카카오 맵 스크립트 로드
    if (!window.kakao) {
      console.log("🔄 KakaoMap: 카카오맵 스크립트 로딩 시작");
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
      script.onload = () => {
        console.log("✅ KakaoMap: 스크립트 로드 완료");
        window.kakao.maps.load(loadKakaoMap);
      };
      script.onerror = () => {
        console.error("❌ KakaoMap: 스크립트 로드 실패");
      };
      document.head.appendChild(script);
    } else {
      loadKakaoMap();
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
      style={{ minHeight: "320px" }}
    />
  );
};

export default KakaoMap;

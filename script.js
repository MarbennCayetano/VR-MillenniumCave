TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_t.jpg",
    "overlays": [
     {
      "angle": 0,
      "id": "panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0",
      "image": {
       "levels": [
        {
         "width": 850,
         "height": 850,
         "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "inertia": false,
      "distance": 100,
      "hfov": 36,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false
     },
     {
      "maps": [],
      "rollOverDisplay": false,
      "items": [
       {
        "pitch": -42.42,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -11.67,
        "hfov": 8.47,
        "distance": 100,
        "image": {
         "levels": [
          {
           "width": 205,
           "height": 206,
           "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_0D460C42_1B97_DAB6_41B6_5F06DDE10C48",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304, this.camera_0EAD10E8_3901_6ABB_417E_A5808AEA10C6); this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "width": 6434,
       "height": 3217,
       "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "width": 4002,
       "height": 2001,
       "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "id": "panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C",
  "thumbnailUrl": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_t.jpg",
  "adjacentPanoramas": [
   {
    "yaw": -11.67,
    "panorama": {
     "hfovMin": 60,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_t.jpg",
       "overlays": [
        {
         "angle": 0,
         "id": "panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_tcap0",
         "image": {
          "levels": [
           {
            "width": 850,
            "height": 850,
            "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "inertia": false,
         "distance": 100,
         "hfov": 36,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "items": [
          {
           "pitch": 53.08,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -97.31,
           "hfov": 3.32,
           "distance": 100,
           "image": {
            "levels": [
             {
              "width": 98,
              "height": 99,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_0DE32221_1B96_4EF2_41B1_F451AE12BAC2",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C, this.camera_0EE8C15F_3901_6B95_414B_4C1256B76A1F); this.mainPlayList.set('selectedIndex', 0)"
          }
         ]
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "items": [
          {
           "pitch": -10.29,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -30.16,
           "hfov": 5.44,
           "distance": 100,
           "image": {
            "levels": [
             {
              "width": 98,
              "height": 99,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_0AB858BB_1C6A_7BD6_41AB_EE73DA4B494D",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142, this.camera_0EFC0180_3901_6B6B_4190_C99B086E1C5C); this.mainPlayList.set('selectedIndex', 9)"
          }
         ]
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "items": [
          {
           "pitch": -13.6,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -83.52,
           "hfov": 5.38,
           "distance": 100,
           "image": {
            "levels": [
             {
              "width": 98,
              "height": 99,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_0B0F3B61_1C6E_5D72_41B9_9C7FA969FF73",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13, this.camera_0EE58170_3901_6BAB_41A4_4D424FFDED8C); this.mainPlayList.set('selectedIndex', 2)"
          }
         ]
        },
        {
         "maps": [],
         "rollOverDisplay": false,
         "items": [
          {
           "pitch": -10.94,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -117.51,
           "hfov": 5.29,
           "distance": 100,
           "image": {
            "levels": [
             {
              "width": 96,
              "height": 99,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_0C37FD6E_1CE9_B17E_41BA_D907349AB86D",
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.showPopupMedia(this.window_0DCD18BB_1CF8_BFE6_41AA_9C91D5CEBD23, this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9, this.playList_E7442C3A_F70F_799F_41EA_49AF276CADB7, '90%', '90%', false, false); this.playList_E7442C3A_F70F_799F_41EA_49AF276CADB7.set('selectedIndex', 0); "
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "width": 6434,
          "height": 3217,
          "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "width": 4002,
          "height": 2001,
          "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "mapLocations": [
      {
       "x": 506.74,
       "angle": 339.42,
       "map": {
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "width": 721,
        "minimumZoomFactor": 0.5,
        "fieldOfViewOverlayOutsideColor": "#000000",
        "overlays": [
         {
          "data": {
           "label": "Observation Point"
          },
          "id": "overlay_E196792A_EEB8_85D6_41D3_7A47D78D9B5A",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 16.73,
           "x": 327.73,
           "offsetY": 0,
           "y": 408.96,
           "width": 25.74,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 13,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_1_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 3)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 16.73,
           "x": 327.73,
           "y": 408.96,
           "width": 25.74,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 27,
              "height": 18,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_1.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Observing"
          },
          "id": "overlay_E0A55672_EE78_8C37_41E7_B54A1D5361B0",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 18.66,
           "x": 377.14,
           "offsetY": 0,
           "y": 352.08,
           "width": 26.38,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 14,
              "height": 10,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_2_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 2)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 18.66,
           "x": 377.14,
           "y": 352.08,
           "width": 26.38,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 28,
              "height": 20,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_2.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_01ECE7F7_0D93_AC83_41A3_7787118BA647",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 17.15,
           "x": 404.83,
           "offsetY": 0,
           "y": 245.3,
           "width": 26.34,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 14,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_3_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 9)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 17.15,
           "x": 404.83,
           "y": 245.3,
           "width": 26.34,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 28,
              "height": 19,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_3.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_19E93500_0DB1_AD7D_4193_1E19A4AD0D50",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 16.48,
           "x": 206.2,
           "offsetY": 0,
           "y": 327.07,
           "width": 28.01,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 15,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_4_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 5)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 16.48,
           "x": 206.2,
           "y": 327.07,
           "width": 28.01,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 30,
              "height": 18,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_4.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_1D437C41_0D90_63FF_41A7_F309D5D02408",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 16.7,
           "x": 200.2,
           "offsetY": 0,
           "y": 180.7,
           "width": 27.25,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 14,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_5_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 6)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 16.7,
           "x": 200.2,
           "y": 180.7,
           "width": 27.25,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 29,
              "height": 18,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_5.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_1E95D06B_0DF0_6383_4191_8FFD083D481B",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 16,
           "x": 205.25,
           "offsetY": 0,
           "y": 127.25,
           "width": 25.34,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 13,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_6_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 7)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 16,
           "x": 205.25,
           "y": 127.25,
           "width": 25.34,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 27,
              "height": 18,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_6.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_1E5A8B9A_0D91_E48D_4187_15A97A496FF0",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 17.13,
           "x": 288.4,
           "offsetY": 0,
           "y": 251.19,
           "width": 27.53,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 14,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_7_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 8)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 17.13,
           "x": 288.4,
           "y": 251.19,
           "width": 27.53,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 29,
              "height": 19,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_7.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_1EABA0CC_0D90_A485_4199_CF77E08D40D3",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 14.7,
           "x": 495.1,
           "offsetY": 0,
           "y": 276.7,
           "width": 23.28,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 12,
              "height": 8,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_8_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 14.7,
           "x": 495.1,
           "y": 276.7,
           "width": 23.28,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 25,
              "height": 16,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_8.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         },
         {
          "data": {
           "label": "Polygon"
          },
          "id": "overlay_0F974A03_1BED_DEB6_41AA_CFF7CD69C220",
          "useHandCursor": true,
          "map": {
           "offsetX": 0,
           "height": 17,
           "x": 284.05,
           "offsetY": 0,
           "y": 444,
           "width": 30,
           "class": "HotspotMapOverlayMap",
           "image": {
            "levels": [
             {
              "width": 16,
              "height": 9,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_9_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 4)"
           }
          ],
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 17,
           "x": 284.05,
           "y": 444,
           "width": 30,
           "class": "HotspotMapOverlayImage",
           "image": {
            "levels": [
             {
              "width": 32,
              "height": 19,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_9.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          },
          "rollOverDisplay": false
         }
        ],
        "id": "map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
        "thumbnailUrl": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_t.jpg",
        "image": {
         "levels": [
          {
           "width": 721,
           "height": 543,
           "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A.jpeg",
           "class": "ImageResourceLevel"
          },
          {
           "width": 360,
           "height": 271,
           "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_lq.jpeg",
           "class": "ImageResourceLevel",
           "grayscale": true
          }
         ],
         "class": "ImageResource"
        },
        "scaleMode": "fit_inside",
        "height": 543,
        "class": "Map",
        "initialZoomFactor": 1,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "fieldOfViewOverlayRadiusScale": 0.25,
        "label": "millennium_cave_floorplan",
        "fieldOfViewOverlayInsideColor": "#000000",
        "maximumZoomFactor": 1.2
       },
       "y": 284.05,
       "class": "PanoramaMapLocation"
      }
     ],
     "partial": false,
     "id": "panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
     "thumbnailUrl": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_t.jpg",
     "adjacentPanoramas": [
      {
       "yaw": -97.31,
       "panorama": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C",
       "class": "AdjacentPanorama",
       "backwardYaw": -11.67,
       "distance": 1
      },
      {
       "yaw": -83.52,
       "panorama": {
        "hfovMin": 60,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_t.jpg",
          "overlays": [
           {
            "angle": 0,
            "id": "panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_tcap0",
            "image": {
             "levels": [
              {
               "width": 850,
               "height": 850,
               "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "inertia": false,
            "distance": 100,
            "hfov": 36,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false
           },
           {
            "maps": [
             {
              "hfov": 13.87,
              "yaw": 148.35,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 1.24,
              "image": {
               "levels": [
                {
                 "width": 35,
                 "height": 16,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "image": {
               "levels": [
                {
                 "width": 247,
                 "height": 110,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 1.24,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.87,
              "yaw": 148.35,
              "distance": 100
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "3D enhanced\u000dimage"
            },
            "id": "overlay_1BF00C3B_0CF1_A382_416D_65F1405CB4C1",
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "toolTip": "This image can be viewed in stereoscopic, 3D with a VR headset!",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000"
             }
            ]
           },
           {
            "maps": [],
            "rollOverDisplay": false,
            "items": [
             {
              "pitch": -17.98,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -27.93,
              "hfov": 5.31,
              "distance": 100,
              "image": {
               "levels": [
                {
                 "width": 99,
                 "height": 100,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_0B08A3AC_1C6A_CDF2_418C_E0C1726385FF",
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304, this.camera_0C951044_3901_69EB_4171_D22000CFC71F); this.mainPlayList.set('selectedIndex', 1)"
             }
            ]
           },
           {
            "maps": [],
            "rollOverDisplay": false,
            "items": [
             {
              "pitch": -14.39,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -170.31,
              "hfov": 5.41,
              "distance": 100,
              "image": {
               "levels": [
                {
                 "width": 99,
                 "height": 100,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              }
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_0B7D2C7C_1C6A_FB52_41B4_00B2D9C883E1",
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC, this.camera_0C922035_3901_6995_41B5_F005271C109B); this.mainPlayList.set('selectedIndex', 3)"
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "stereoSphere": {
           "levels": [
            {
             "width": 6434,
             "height": 6434,
             "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "width": 4002,
             "height": 4002,
             "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "mapLocations": [
         {
          "x": 390.33,
          "angle": 42.03,
          "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
          "y": 361.41,
          "class": "PanoramaMapLocation"
         }
        ],
        "partial": false,
        "id": "panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
        "thumbnailUrl": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_t.jpg",
        "adjacentPanoramas": [
         {
          "yaw": -170.31,
          "panorama": {
           "hfovMin": 60,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_t.jpg",
             "overlays": [
              {
               "angle": 0,
               "id": "panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_tcap0",
               "image": {
                "levels": [
                 {
                  "width": 850,
                  "height": 850,
                  "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                  "class": "ImageResourceLevel"
                 }
                ],
                "class": "ImageResource"
               },
               "inertia": false,
               "distance": 100,
               "hfov": 36,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "items": [
                {
                 "pitch": -25.97,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -45.72,
                 "hfov": 10.32,
                 "distance": 100,
                 "image": {
                  "levels": [
                   {
                    "width": 205,
                    "height": 206,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_0B00A987_1C76_7DBE_418F_2FD00BFB90AA",
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8, this.camera_0EBEA10B_3901_6B7D_41B0_3BC3A106B512); this.mainPlayList.set('selectedIndex', 4)"
                }
               ]
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "items": [
                {
                 "pitch": -14.87,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 99.66,
                 "hfov": 11.09,
                 "distance": 100,
                 "image": {
                  "levels": [
                   {
                    "width": 205,
                    "height": 206,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_0BC509FD_1C7B_BD52_41AF_1777A1DCE6CD",
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13, this.camera_0EA740F9_3901_6A9D_41B6_ED166075DE1A); this.mainPlayList.set('selectedIndex', 2)"
                }
               ]
              },
              {
               "maps": [],
               "rollOverDisplay": false,
               "items": [
                {
                 "pitch": -9.3,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 10.2,
                 "hfov": 5.32,
                 "distance": 100,
                 "image": {
                  "levels": [
                   {
                    "width": 96,
                    "height": 96,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 }
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_0B8907A7_1C23_DF41_41AB_10AA447925C4",
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.showPopupMedia(this.window_0BD44083_1C20_5141_41AA_04C2D3C4D7F1, this.album_09379898_1CE1_F14F_4193_2F70D849DF0F, this.playList_E75C7C41_F70F_79ED_41AB_20057641F39C, '90%', '90%', false, false); this.playList_E75C7C41_F70F_79ED_41AB_20057641F39C.set('selectedIndex', 0); ; this.showPopupMedia(this.window_118D8D24_1CE8_B6E2_41AF_9A026A0548F7, this.album_09379898_1CE1_F14F_4193_2F70D849DF0F, this.playList_E75A1C3F_F70F_7995_41C4_77407150A804, '90%', '90%', false, false); this.playList_E75A1C3F_F70F_7995_41C4_77407150A804.set('selectedIndex', 0); "
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "width": 6434,
                "height": 3217,
                "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "mapLocations": [
            {
             "x": 340.6,
             "angle": -63.78,
             "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
             "y": 417.33,
             "class": "PanoramaMapLocation"
            }
           ],
           "partial": false,
           "id": "panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
           "thumbnailUrl": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_t.jpg",
           "adjacentPanoramas": [
            {
             "yaw": 99.66,
             "panorama": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
             "class": "AdjacentPanorama",
             "backwardYaw": -170.31,
             "distance": 1
            },
            {
             "yaw": -45.72,
             "panorama": {
              "hfovMin": 60,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_t.jpg",
                "overlays": [
                 {
                  "angle": 0,
                  "id": "panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_tcap0",
                  "image": {
                   "levels": [
                    {
                     "width": 850,
                     "height": 850,
                     "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "inertia": false,
                  "distance": 100,
                  "hfov": 36,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "pitch": -26.73,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 112.67,
                    "hfov": 10.25,
                    "distance": 100,
                    "image": {
                     "levels": [
                      {
                       "width": 205,
                       "height": 206,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_046EF00C_1C7E_CAB2_4191_72EDA6734158",
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC, this.camera_0E87B0A5_3901_6AB5_41B5_A803DC369F69); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ]
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "pitch": -19.85,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 11.67,
                    "hfov": 10.8,
                    "distance": 100,
                    "image": {
                     "levels": [
                      {
                       "width": 205,
                       "height": 206,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_04206C88_1C7A_7BB2_418F_E17C3B6A8DE8",
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ]
                 },
                 {
                  "maps": [],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "pitch": -4.57,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -98.51,
                    "hfov": 5.37,
                    "distance": 100,
                    "image": {
                     "levels": [
                      {
                       "width": 96,
                       "height": 96,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    }
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_12DAE53C_1CE9_96E2_4187_F400236FEA5D",
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.showPopupMedia(this.window_13769AFE_1CE9_F35E_41AD_2854A6F542F2, this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D, this.playList_E75D4C43_F70F_79ED_41E7_21ECAC9EF458, '90%', '90%', false, false); this.playList_E75D4C43_F70F_79ED_41E7_21ECAC9EF458.set('selectedIndex', 0); "
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "width": 6434,
                   "height": 3217,
                   "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "mapLocations": [
               {
                "x": 299.05,
                "angle": -45.55,
                "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                "y": 452.5,
                "class": "PanoramaMapLocation"
               }
              ],
              "partial": false,
              "id": "panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8",
              "thumbnailUrl": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_t.jpg",
              "adjacentPanoramas": [
               {
                "panorama": {
                 "hfovMin": 60,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_t.jpg",
                   "overlays": [
                    {
                     "angle": 0,
                     "id": "panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_tcap0",
                     "image": {
                      "levels": [
                       {
                        "width": 850,
                        "height": 850,
                        "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "inertia": false,
                     "distance": 100,
                     "hfov": 36,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false
                    },
                    {
                     "maps": [
                      {
                       "hfov": 13.74,
                       "yaw": 107.28,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 5.18,
                       "image": {
                        "levels": [
                         {
                          "width": 37,
                          "height": 16,
                          "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ],
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "width": 245,
                          "height": 105,
                          "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 5.18,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 13.74,
                       "yaw": 107.28,
                       "distance": 100
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "3D enhanced\u000dimage"
                     },
                     "id": "overlay_0828CAD0_1BAA_BF52_4166_688C2C867560",
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "toolTip": "This image can be viewed in stereoscopic, 3D with a VR headset!",
                       "class": "HotspotPanoramaOverlayArea",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000"
                      }
                     ]
                    },
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "pitch": -18.32,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 98.51,
                       "hfov": 10.9,
                       "distance": 100,
                       "image": {
                        "levels": [
                         {
                          "width": 205,
                          "height": 206,
                          "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_04E9E3A1_1C7A_CDF5_41B9_37E78D0CB12A",
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ]
                    },
                    {
                     "maps": [],
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "pitch": -20.23,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -55.28,
                       "hfov": 10.77,
                       "distance": 100,
                       "image": {
                        "levels": [
                         {
                          "width": 205,
                          "height": 206,
                          "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       }
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_04763AC9_1C76_5FB2_41B6_D642E1EC0AD4",
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F, this.camera_0E9410D7_3901_6A95_4182_1DE94FBE9DCC); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "stereoSphere": {
                    "levels": [
                     {
                      "width": 6434,
                      "height": 6434,
                      "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "width": 4002,
                      "height": 4002,
                      "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "x": 220.21,
                   "angle": 45.38,
                   "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                   "y": 335.31,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "partial": false,
                 "id": "panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
                 "thumbnailUrl": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_t.jpg",
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
                   "class": "AdjacentPanorama"
                  },
                  {
                   "yaw": -55.28,
                   "panorama": {
                    "hfovMin": 60,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_t.jpg",
                      "overlays": [
                       {
                        "angle": 0,
                        "id": "panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_tcap0",
                        "image": {
                         "levels": [
                          {
                           "width": 850,
                           "height": 850,
                           "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                           "class": "ImageResourceLevel"
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "inertia": false,
                        "distance": 100,
                        "hfov": 36,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false
                       },
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "pitch": -35.15,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 114.2,
                          "hfov": 9.38,
                          "distance": 100,
                          "image": {
                           "levels": [
                            {
                             "width": 205,
                             "height": 206,
                             "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_04F974A5_1C76_4BF2_4184_CAA03C631FE7",
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D, this.camera_0ED3714E_3901_6BF7_41B4_250E21C2C84A); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ]
                       },
                       {
                        "maps": [],
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "pitch": -21.38,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -77.47,
                          "hfov": 10.69,
                          "distance": 100,
                          "image": {
                           "levels": [
                            {
                             "width": 205,
                             "height": 206,
                             "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          }
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_04A963B7_1C75_CDDE_41A9_C067EFF38134",
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6, this.camera_0EC4C13D_3901_6B95_419F_7B99098B3761); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "levels": [
                        {
                         "width": 6434,
                         "height": 3217,
                         "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "width": 4002,
                         "height": 2001,
                         "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ],
                       "class": "ImageResource"
                      }
                     }
                    ],
                    "mapLocations": [
                     {
                      "x": 213.83,
                      "angle": 267.18,
                      "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                      "y": 189.05,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "partial": false,
                    "id": "panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
                    "thumbnailUrl": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_t.jpg",
                    "adjacentPanoramas": [
                     {
                      "yaw": -77.47,
                      "panorama": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
                      "class": "AdjacentPanorama",
                      "backwardYaw": -55.28,
                      "distance": 1
                     },
                     {
                      "yaw": 114.2,
                      "panorama": {
                       "hfovMin": 60,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_t.jpg",
                         "overlays": [
                          {
                           "angle": 0,
                           "id": "panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_tcap0",
                           "image": {
                            "levels": [
                             {
                              "width": 850,
                              "height": 850,
                              "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                              "class": "ImageResourceLevel"
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "inertia": false,
                           "distance": 100,
                           "hfov": 36,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false
                          },
                          {
                           "maps": [],
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "pitch": -32.85,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -100.04,
                             "hfov": 9.64,
                             "distance": 100,
                             "image": {
                              "levels": [
                               {
                                "width": 205,
                                "height": 206,
                                "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "id": "overlay_05267AAA_1C6F_BFF6_41B5_089F78B320B9",
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F, this.camera_0CAD3054_3901_69EB_41B4_323E09E6AD10); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ]
                          },
                          {
                           "maps": [],
                           "rollOverDisplay": false,
                           "items": [
                            {
                             "pitch": -9.52,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -139.45,
                             "hfov": 11.32,
                             "distance": 100,
                             "image": {
                              "levels": [
                               {
                                "width": 205,
                                "height": 206,
                                "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             }
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "data": {
                            "label": "Image"
                           },
                           "id": "overlay_04F83A06_1C6E_5EBE_41AC_F06EAF1766E9",
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55, this.camera_0E8D7094_3901_696B_41A4_2F88B9D1FDFD); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "sphere": {
                          "levels": [
                           {
                            "width": 6434,
                            "height": 3217,
                            "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "width": 4002,
                            "height": 2001,
                            "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ],
                          "class": "ImageResource"
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "x": 217.92,
                         "angle": 282.47,
                         "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                         "y": 135.25,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "partial": false,
                       "id": "panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
                       "thumbnailUrl": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_t.jpg",
                       "adjacentPanoramas": [
                        {
                         "yaw": -100.04,
                         "panorama": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
                         "class": "AdjacentPanorama",
                         "backwardYaw": 114.2,
                         "distance": 1
                        },
                        {
                         "yaw": -139.45,
                         "panorama": {
                          "hfovMin": 60,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_t.jpg",
                            "overlays": [
                             {
                              "angle": 0,
                              "id": "panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_tcap0",
                              "image": {
                               "levels": [
                                {
                                 "width": 850,
                                 "height": 850,
                                 "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                                 "class": "ImageResourceLevel"
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "inertia": false,
                              "distance": 100,
                              "hfov": 36,
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false
                             },
                             {
                              "maps": [
                               {
                                "hfov": 12.99,
                                "yaw": -109.99,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 9.86,
                                "image": {
                                 "levels": [
                                  {
                                   "width": 32,
                                   "height": 16,
                                   "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ],
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "width": 235,
                                   "height": 115,
                                   "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": 9.86,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 12.99,
                                "yaw": -109.99,
                                "distance": 100
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "data": {
                               "label": "3D enhanced\u000dimage"
                              },
                              "id": "overlay_098C6E17_1B9B_F6DE_41AE_2F40B5E8B9FE",
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "toolTip": "This image can be viewed in stereoscopic, 3D with a VR headset!",
                                "class": "HotspotPanoramaOverlayArea",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000"
                               }
                              ]
                             },
                             {
                              "maps": [],
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "pitch": -23.67,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -8.61,
                                "hfov": 10.51,
                                "distance": 100,
                                "image": {
                                 "levels": [
                                  {
                                   "width": 205,
                                   "height": 206,
                                   "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_1_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Image"
                              },
                              "id": "overlay_0581E24E_1C6A_4F4E_41B7_AC704F7BBA37",
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D, this.camera_0E9C50C6_3901_6AF7_417E_02EE29FB26AE); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ]
                             },
                             {
                              "maps": [],
                              "rollOverDisplay": false,
                              "items": [
                               {
                                "pitch": -23.67,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 120.7,
                                "hfov": 10.51,
                                "distance": 100,
                                "image": {
                                 "levels": [
                                  {
                                   "width": 205,
                                   "height": 206,
                                   "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                }
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "data": {
                               "label": "Image"
                              },
                              "id": "overlay_05276107_1C6A_CABE_4194_01FA5435D559",
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142, this.camera_0E9A50B5_3901_6A95_41A1_5574F0DBFDE1); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "stereoSphere": {
                             "levels": [
                              {
                               "width": 6434,
                               "height": 6434,
                               "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "width": 4002,
                               "height": 4002,
                               "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ],
                             "class": "ImageResource"
                            }
                           }
                          ],
                          "mapLocations": [
                           {
                            "x": 302.16,
                            "angle": -31.45,
                            "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                            "y": 259.76,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "partial": false,
                          "id": "panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
                          "thumbnailUrl": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_t.jpg",
                          "adjacentPanoramas": [
                           {
                            "yaw": 120.7,
                            "panorama": {
                             "hfovMin": 60,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_t.jpg",
                               "overlays": [
                                {
                                 "angle": 0,
                                 "id": "panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_tcap0",
                                 "image": {
                                  "levels": [
                                   {
                                    "width": 850,
                                    "height": 850,
                                    "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png",
                                    "class": "ImageResourceLevel"
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "inertia": false,
                                 "distance": 100,
                                 "hfov": 36,
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false
                                },
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "pitch": -8.75,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -159.34,
                                   "hfov": 11.34,
                                   "distance": 100,
                                   "image": {
                                    "levels": [
                                     {
                                      "width": 205,
                                      "height": 206,
                                      "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "id": "overlay_0771B928_1C97_BAF2_41B7_1CF249450FE4",
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55, this.camera_0ECF612D_3901_6BB5_41B8_A18EBF99763B); this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ]
                                },
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "pitch": -12.58,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 40.74,
                                   "hfov": 11.2,
                                   "distance": 100,
                                   "image": {
                                    "levels": [
                                     {
                                      "width": 205,
                                      "height": 206,
                                      "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_1_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "id": "overlay_074EB8FD_1C96_BB52_41B8_23EE3BE55B14",
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304, this.camera_0EB7B11C_3901_6B9B_41B5_42F5325AB54F); this.mainPlayList.set('selectedIndex', 1)"
                                  }
                                 ]
                                },
                                {
                                 "maps": [],
                                 "rollOverDisplay": false,
                                 "items": [
                                  {
                                   "pitch": -4.57,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -127.1,
                                   "hfov": 5.37,
                                   "distance": 100,
                                   "image": {
                                    "levels": [
                                     {
                                      "width": 96,
                                      "height": 96,
                                      "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   }
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 },
                                 "id": "overlay_0F404132_1CEB_8EE6_41B4_5FEA93AAFAC6",
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.showPopupMedia(this.window_0FE6D0CB_1CEB_8FA5_4196_AC11051ABA84, this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3, this.playList_E752CC48_F70F_79FB_41C2_E00EA272CCE8, '90%', '90%', false, false); this.playList_E752CC48_F70F_79FB_41C2_E00EA272CCE8.set('selectedIndex', 0); "
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame",
                               "sphere": {
                                "levels": [
                                 {
                                  "width": 6434,
                                  "height": 3217,
                                  "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_hq.jpeg",
                                  "class": "ImageResourceLevel"
                                 },
                                 {
                                  "width": 4002,
                                  "height": 2001,
                                  "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142.jpeg",
                                  "class": "ImageResourceLevel"
                                 }
                                ],
                                "class": "ImageResource"
                               }
                              }
                             ],
                             "mapLocations": [
                              {
                               "x": 418,
                               "angle": 92.5,
                               "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                               "y": 253.88,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "partial": false,
                             "id": "panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
                             "thumbnailUrl": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_t.jpg",
                             "adjacentPanoramas": [
                              {
                               "yaw": 40.74,
                               "panorama": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
                               "class": "AdjacentPanorama",
                               "backwardYaw": -30.16,
                               "distance": 1
                              },
                              {
                               "yaw": -159.34,
                               "panorama": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
                               "class": "AdjacentPanorama",
                               "backwardYaw": 120.7,
                               "distance": 1
                              }
                             ],
                             "pitch": 0,
                             "class": "Panorama",
                             "vfov": 180,
                             "label": "MC 9",
                             "hfovMax": 120,
                             "cardboardMenu": {
                              "children": [
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 0)",
                                "class": "MenuItem",
                                "label": "MC Entrance"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 1)",
                                "class": "MenuItem",
                                "label": "MC 1"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 2)",
                                "class": "MenuItem",
                                "label": "MC 2 - in 3D"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 3)",
                                "class": "MenuItem",
                                "label": "MC 3"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 4)",
                                "class": "MenuItem",
                                "label": "MC 4"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 5)",
                                "class": "MenuItem",
                                "label": "MC 5 - in 3D"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 6)",
                                "class": "MenuItem",
                                "label": "MC 6"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 7)",
                                "class": "MenuItem",
                                "label": "MC 7"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 8)",
                                "class": "MenuItem",
                                "label": "MC 8 - in 3D"
                               },
                               {
                                "click": "this.mainPlayList.set('selectedIndex', 9)",
                                "class": "MenuItem",
                                "label": "MC 9"
                               }
                              ],
                              "selectedBackgroundColor": "#202020",
                              "rollOverOpacity": 0.8,
                              "fontFamily": "Arial",
                              "class": "Menu",
                              "rollOverBackgroundColor": "#000000",
                              "label": "Media",
                              "backgroundColor": "#404040",
                              "rollOverFontColor": "#FFFFFF",
                              "id": "Menu_0C867019_3901_699D_418E_63EB7DAC727E",
                              "fontColor": "#FFFFFF",
                              "selectedFontColor": "#FFFFFF",
                              "opacity": 0.4
                             },
                             "hfov": 360
                            },
                            "class": "AdjacentPanorama",
                            "backwardYaw": -159.34,
                            "distance": 1
                           },
                           {
                            "yaw": -8.61,
                            "panorama": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
                            "class": "AdjacentPanorama",
                            "backwardYaw": -139.45,
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "class": "Panorama",
                          "vfov": 180,
                          "label": "MC 8 - in 3D",
                          "hfovMax": 120,
                          "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
                          "hfov": 360
                         },
                         "class": "AdjacentPanorama",
                         "backwardYaw": -8.61,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "class": "Panorama",
                       "vfov": 180,
                       "label": "MC 7",
                       "hfovMax": 120,
                       "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
                       "hfov": 360
                      },
                      "class": "AdjacentPanorama",
                      "backwardYaw": -100.04,
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "class": "Panorama",
                    "vfov": 180,
                    "label": "MC 6",
                    "hfovMax": 120,
                    "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
                    "hfov": 360
                   },
                   "class": "AdjacentPanorama",
                   "backwardYaw": -77.47,
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "class": "Panorama",
                 "vfov": 180,
                 "label": "MC 5 - in 3D",
                 "hfovMax": 120,
                 "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
                 "hfov": 360
                },
                "class": "AdjacentPanorama"
               },
               {
                "yaw": 112.67,
                "panorama": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
                "class": "AdjacentPanorama",
                "backwardYaw": -45.72,
                "distance": 1
               }
              ],
              "pitch": 0,
              "class": "Panorama",
              "vfov": 180,
              "label": "MC 4",
              "hfovMax": 120,
              "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
              "hfov": 360
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 112.67,
             "distance": 1
            }
           ],
           "pitch": 0,
           "class": "Panorama",
           "vfov": 180,
           "label": "MC 3",
           "hfovMax": 120,
           "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
           "hfov": 360
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 99.66,
          "distance": 1
         },
         {
          "yaw": -27.93,
          "panorama": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
          "class": "AdjacentPanorama",
          "backwardYaw": -83.52,
          "distance": 1
         }
        ],
        "pitch": 0,
        "class": "Panorama",
        "vfov": 180,
        "label": "MC 2 - in 3D",
        "hfovMax": 120,
        "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
        "hfov": 360
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -27.93,
       "distance": 1
      },
      {
       "yaw": -30.16,
       "panorama": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
       "class": "AdjacentPanorama",
       "backwardYaw": 40.74,
       "distance": 1
      }
     ],
     "pitch": 0,
     "class": "Panorama",
     "vfov": 180,
     "label": "MC 1",
     "hfovMax": 120,
     "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
     "hfov": 360
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -97.31,
    "distance": 1
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "vfov": 180,
  "label": "MC Entrance",
  "hfovMax": 120,
  "cardboardMenu": "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
  "hfov": 360
 },
 {
  "viewerArea": {
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipPaddingLeft": 6,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "right": 25,
   "progressOpacity": 1,
   "progressBorderColor": "#000000",
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadow": true,
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "borderRadius": 0,
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "progressBorderSize": 0,
   "playbackBarHeadBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "shadow": false,
   "toolTipOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "toolTipBorderColor": "#767676",
   "progressBottom": 0,
   "class": "ViewerArea",
   "playbackBarHeadHeight": 15,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarBottom": 5,
   "paddingTop": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarHeadOpacity": 1,
   "playbackBarBackgroundColorDirection": "vertical",
   "bottom": 100,
   "top": 25,
   "toolTipFontSize": 15,
   "propagateClick": false,
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "id": "MainViewer",
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipFontWeight": "normal",
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "progressBarBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "progressHeight": 10,
   "toolTipShadowColor": "#333333",
   "minHeight": 50,
   "transitionMode": "blending",
   "toolTipFontColor": "#606060",
   "paddingBottom": 0,
   "playbackBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "borderSize": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 100,
   "toolTipBorderSize": 1,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarBorderSize": 0,
   "transitionDuration": 500,
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeight": 10,
   "playbackBarBackgroundOpacity": 1,
   "toolTipShadowSpread": 0,
   "toolTipDisplayTime": 1000,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "left": 25
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "buttonCardboardView": {
   "paddingTop": 0,
   "width": 35,
   "right": 75,
   "propagateClick": false,
   "bottom": 40,
   "id": "IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB",
   "mode": "push",
   "maxWidth": 35,
   "paddingRight": 0,
   "maxHeight": 23,
   "height": 23,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minHeight": 1,
   "iconURL": "skin/IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB.png",
   "shadow": false,
   "paddingBottom": 0,
   "verticalAlign": "bottom",
   "horizontalAlign": "right",
   "borderSize": 0,
   "cursor": "hand",
   "minWidth": 1,
   "backgroundOpacity": 0,
   "class": "IconButton",
   "data": {
    "name": "IconButton1773"
   },
   "transparencyActive": false
  },
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -15.79,
   "class": "PanoramaCameraPosition",
   "pitch": -12.61
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
 {
  "viewerArea": {
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipPaddingLeft": 6,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "right": 0,
   "progressOpacity": 1,
   "progressBorderColor": "#000000",
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadow": true,
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "borderRadius": 0,
   "paddingRight": 0,
   "height": 200,
   "toolTipPaddingBottom": 4,
   "playbackBarOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "progressBarOpacity": 1,
   "progressBorderSize": 0,
   "playbackBarHeadBorderSize": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipBorderRadius": 3,
   "shadow": false,
   "toolTipOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "toolTipBorderColor": "#767676",
   "progressBottom": 2,
   "class": "ViewerArea",
   "playbackBarHeadHeight": 15,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadWidth": 6,
   "playbackBarBottom": 0,
   "paddingTop": 0,
   "playbackBarHeadOpacity": 1,
   "playbackBarBackgroundColorDirection": "vertical",
   "width": 300,
   "top": 10,
   "toolTipFontSize": 15,
   "propagateClick": false,
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "id": "MapViewer",
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipFontWeight": "normal",
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "toolTipFontFamily": "Arial",
   "progressBarBorderSize": 0,
   "toolTipPaddingRight": 6,
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "progressHeight": 10,
   "toolTipShadowColor": "#333333",
   "minHeight": 1,
   "transitionMode": "blending",
   "toolTipFontColor": "#606060",
   "paddingBottom": 0,
   "playbackBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "borderSize": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 1,
   "toolTipBorderSize": 1,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarBorderSize": 0,
   "transitionDuration": 500,
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeight": 10,
   "playbackBarBackgroundOpacity": 1,
   "toolTipShadowSpread": 0,
   "toolTipDisplayTime": 1000,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000"
  },
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer"
 },
 {
  "id": "panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -89.71,
   "class": "PanoramaCameraPosition",
   "pitch": 9.07
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 165.44,
   "class": "PanoramaCameraPosition",
   "pitch": 1.47
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -57.27,
   "class": "PanoramaCameraPosition",
   "pitch": -17.77
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -97.38,
   "class": "PanoramaCameraPosition",
   "pitch": -11.11
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -77.49,
   "class": "PanoramaCameraPosition",
   "pitch": -10.38
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 109.09,
   "class": "PanoramaCameraPosition",
   "pitch": -8.88
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 160.58,
   "class": "PanoramaCameraPosition",
   "pitch": -9.55
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 113.39,
   "class": "PanoramaCameraPosition",
   "pitch": -9.97
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 102.2,
   "class": "PanoramaCameraPosition",
   "pitch": 5.8
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C",
    "camera": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C89E00A_3901_697F_4194_19DE8223C5EB",
    "media": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
    "camera": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C89E00A_3901_697F_4194_19DE8223C5EB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C89700B_3901_697D_41B0_A91E1476B3F9",
    "media": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
    "camera": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C89700B_3901_697D_41B0_A91E1476B3F9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C88F00B_3901_697C_41B2_B15737451519",
    "media": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
    "camera": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C88F00B_3901_697C_41B2_B15737451519, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C88200C_3901_697B_4198_CCB4036531A6",
    "media": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8",
    "camera": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C88200C_3901_697B_4198_CCB4036531A6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C8FB00D_3901_6975_41B9_A3AD12678FD4",
    "media": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
    "camera": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C8FB00D_3901_6975_41B9_A3AD12678FD4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C8F300D_3901_6975_419F_246B61B92416",
    "media": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
    "camera": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C8F300D_3901_6975_419F_246B61B92416, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C8F400E_3901_6977_41A8_112D32B4BE73",
    "media": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
    "camera": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C8F400E_3901_6977_41A8_112D32B4BE73, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C8ED00E_3901_6977_41B2_C3AB8E51331F",
    "media": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
    "camera": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C8ED00E_3901_6977_41B2_C3AB8E51331F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_0C8E500F_3901_6975_41A9_DEBC3ECDF852",
    "media": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C8E500F_3901_6975_41A9_DEBC3ECDF852, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 0)"
   }
  ]
 },
 {
  "id": "ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C",
    "camera": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
    "camera": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
    "camera": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
    "camera": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8",
    "camera": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
    "camera": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
    "camera": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
    "camera": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
    "camera": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
    "camera": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 9, 0)"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
  "label": "Gearing Up",
  "id": "album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108",
  "thumbnailUrl": "media/album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108_t.png",
  "playList": {
   "id": "album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1367,
      "class": "Photo",
      "width": 2048,
      "id": "photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA",
      "label": "1",
      "thumbnailUrl": "media/photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 4016,
      "class": "Photo",
      "width": 6016,
      "id": "photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92",
      "label": "Millennium-5",
      "thumbnailUrl": "media/photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2048,
      "class": "Photo",
      "width": 1367,
      "id": "photo_E4137992_F269_84F6_41E6_54A3E23F93F2",
      "label": "4",
      "thumbnailUrl": "media/photo_E4137992_F269_84F6_41E6_54A3E23F93F2_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E4137992_F269_84F6_41E6_54A3E23F93F2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694",
      "label": "6",
      "thumbnailUrl": "media/photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E53DC568_F258_8C52_41DC_7182E755B0AE",
      "label": "Millennium-17",
      "thumbnailUrl": "media/photo_E53DC568_F258_8C52_41DC_7182E755B0AE_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E53DC568_F258_8C52_41DC_7182E755B0AE.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7",
      "label": "Millennium-23",
      "thumbnailUrl": "media/photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 {
  "viewerArea": {
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipPaddingLeft": 6,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "right": 25,
   "progressOpacity": 1,
   "progressBorderColor": "#000000",
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadow": true,
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "borderRadius": 0,
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "progressBorderSize": 0,
   "playbackBarHeadBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "shadow": false,
   "toolTipOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "toolTipBorderColor": "#767676",
   "progressBottom": 2,
   "class": "ViewerArea",
   "playbackBarHeadHeight": 15,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarBottom": 0,
   "paddingTop": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarHeadOpacity": 1,
   "playbackBarBackgroundColorDirection": "vertical",
   "bottom": 100,
   "top": 25,
   "toolTipFontSize": 15,
   "propagateClick": false,
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "id": "ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612B",
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipFontWeight": "normal",
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "progressBarBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "progressBarBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "progressHeight": 10,
   "toolTipShadowColor": "#333333",
   "minHeight": 1,
   "transitionMode": "blending",
   "toolTipFontColor": "#606060",
   "paddingBottom": 0,
   "playbackBarBorderRadius": 0,
   "progressBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "borderSize": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 1,
   "toolTipBorderSize": 1,
   "playbackBarProgressOpacity": 1,
   "progressLeft": 0,
   "playbackBarBorderSize": 0,
   "transitionDuration": 500,
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeight": 10,
   "playbackBarBackgroundOpacity": 1,
   "toolTipShadowSpread": 0,
   "toolTipDisplayTime": 1000,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
   "left": 25
  },
  "id": "ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer"
 },
 "this.photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA",
 "this.photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92",
 "this.photo_E4137992_F269_84F6_41E6_54A3E23F93F2",
 "this.photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694",
 "this.photo_E53DC568_F258_8C52_41DC_7182E755B0AE",
 "this.photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7",
 {
  "class": "PhotoAlbum",
  "label": "The Descent",
  "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B",
  "thumbnailUrl": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_t.png",
  "playList": {
   "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E4045852_F259_8476_41CC_8EC3286A6EAA",
      "label": "Millennium-15",
      "thumbnailUrl": "media/photo_E4045852_F259_8476_41CC_8EC3286A6EAA_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E4045852_F259_8476_41CC_8EC3286A6EAA.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3",
      "label": "21",
      "thumbnailUrl": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 3936,
      "class": "Photo",
      "width": 2624,
      "id": "photo_E472C1EE_F3D8_842E_41E2_668800975D99",
      "label": "Millennium-206",
      "thumbnailUrl": "media/photo_E472C1EE_F3D8_842E_41E2_668800975D99_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E472C1EE_F3D8_842E_41E2_668800975D99.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 3936,
      "class": "Photo",
      "width": 2624,
      "id": "photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873",
      "label": "Millennium-225",
      "thumbnailUrl": "media/photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE",
      "label": "Millennium-28",
      "thumbnailUrl": "media/photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2",
      "label": "20",
      "thumbnailUrl": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA",
      "label": "Millennium-201",
      "thumbnailUrl": "media/photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.photo_E4045852_F259_8476_41CC_8EC3286A6EAA",
 "this.album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3",
 "this.photo_E472C1EE_F3D8_842E_41E2_668800975D99",
 "this.photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873",
 "this.photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE",
 "this.album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2",
 "this.photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA",
 {
  "class": "PhotoAlbum",
  "label": "Setting Up",
  "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F",
  "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_t.png",
  "playList": {
   "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1",
      "label": "Millennium-115",
      "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA",
      "label": "Millennium-162",
      "thumbnailUrl": "media/photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 3936,
      "class": "Photo",
      "width": 2624,
      "id": "photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2",
      "label": "Millennium-173",
      "thumbnailUrl": "media/photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127",
      "label": "Millennium-157",
      "thumbnailUrl": "media/photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0",
      "label": "Millennium-103",
      "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7",
      "label": "Millennium-109",
      "thumbnailUrl": "media/photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2",
      "label": "Millennium-119",
      "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1",
 "this.photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA",
 "this.photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2",
 "this.photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127",
 "this.album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0",
 "this.photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7",
 "this.album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2",
 {
  "class": "PhotoAlbum",
  "label": "The Cave",
  "id": "album_FADF1122_E912_30EA_41E5_F98BE5570FF3",
  "thumbnailUrl": "media/album_FADF1122_E912_30EA_41E5_F98BE5570FF3_t.png",
  "playList": {
   "id": "album_FADF1122_E912_30EA_41E5_F98BE5570FF3_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0",
      "label": "10",
      "thumbnailUrl": "media/album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "photo_FA797335_E911_D0EF_41C1_DB53A6680A42",
      "label": "7",
      "thumbnailUrl": "media/photo_FA797335_E911_D0EF_41C1_DB53A6680A42_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_FA797335_E911_D0EF_41C1_DB53A6680A42.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2048,
      "class": "Photo",
      "width": 1365,
      "id": "photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9",
      "label": "12",
      "thumbnailUrl": "media/photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "photo_ECA11B56_F269_847E_41C9_0F826C520A98",
      "label": "13",
      "thumbnailUrl": "media/photo_ECA11B56_F269_847E_41C9_0F826C520A98_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_ECA11B56_F269_847E_41C9_0F826C520A98.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "photo_ECA130AE_F269_842E_41ED_49FF726CAEDA",
      "label": "16",
      "thumbnailUrl": "media/photo_ECA130AE_F269_842E_41ED_49FF726CAEDA_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_ECA130AE_F269_842E_41ED_49FF726CAEDA.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "photo_E59655BE_F3D8_8C2E_41E4_813907748531",
      "label": "11",
      "thumbnailUrl": "media/photo_E59655BE_F3D8_8C2E_41E4_813907748531_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E59655BE_F3D8_8C2E_41E4_813907748531.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 3936,
      "class": "Photo",
      "width": 2624,
      "id": "photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040",
      "label": "Millennium-77",
      "thumbnailUrl": "media/photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1",
      "label": "Millennium-84",
      "thumbnailUrl": "media/photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1_t.jpg",
      "duration": 3500,
      "image": {
       "levels": [
        {
         "url": "media/photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0",
 "this.photo_FA797335_E911_D0EF_41C1_DB53A6680A42",
 "this.photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9",
 "this.photo_ECA11B56_F269_847E_41C9_0F826C520A98",
 "this.photo_ECA130AE_F269_842E_41ED_49FF726CAEDA",
 "this.photo_E59655BE_F3D8_8C2E_41E4_813907748531",
 "this.photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040",
 "this.photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1",
 {
  "id": "ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "media": "this.album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 0, '#666666')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 0, 1); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   },
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "media": "this.album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 1, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 1, 2); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   },
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "media": "this.album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 2, '#666666')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 2, 3); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   },
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "media": "this.album_FADF1122_E912_30EA_41E5_F98BE5570FF3",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 3, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 3, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
  "label": "Toad",
  "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9",
  "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_t.png",
  "playList": {
   "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.62",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.28"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0",
      "label": "Toad 1",
      "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.54",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.70"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1",
      "label": "Toad 2",
      "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.41",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.28"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2",
      "label": "Toad 3",
      "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0",
 "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1",
 "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2",
 {
  "id": "playList_E7442C3A_F70F_799F_41EA_49AF276CADB7",
  "items": [
   {
    "player": {
     "viewerArea": {
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "progressRight": 0,
      "progressOpacity": 1,
      "borderRadius": 0,
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "class": "ViewerArea",
      "playbackBarHeadHeight": 15,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarBottom": 0,
      "paddingTop": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": "1.11vh",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "width": "100%",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "id": "viewer_uid0F7DDFF9_3901_769D_41B8_8079E12C1A55",
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "progressHeight": 10,
      "toolTipShadowColor": "#333333",
      "minHeight": 50,
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "paddingBottom": 0,
      "progressBorderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "transitionDuration": 500,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipDisplayTime": 1000,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000"
     },
     "id": "viewer_uidE7457C3A_F70F_799F_41E5_41F2FA21D6B0PhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer"
    },
    "id": "albumitem_E745EC3C_F70F_799B_41E3_79439C2541D7",
    "media": "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_E7442C3A_F70F_799F_41EA_49AF276CADB7, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList, this.htmltext_0F7D5FFA_3901_769F_41B7_BA084D9FDF91, this.albumitem_E745EC3C_F70F_799B_41E3_79439C2541D7); this.loopAlbum(this.playList_E7442C3A_F70F_799F_41EA_49AF276CADB7, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ],
  "change": "this.showComponentsWhileMouseOver(this.container_0F7D0FF9_3901_769D_41B7_62BFDAF29DB1, [this.htmltext_0F7D5FFA_3901_769F_41B7_BA084D9FDF91,this.component_0F7CFFFA_3901_769F_41A8_D8CEA616C10A,this.component_0F7CCFFA_3901_769F_417F_F1DD9D14199A], 2000)",
  "class": "PlayList"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Millennium-89",
  "id": "album_09379898_1CE1_F14F_4193_2F70D849DF0F",
  "thumbnailUrl": "media/album_09379898_1CE1_F14F_4193_2F70D849DF0F_t.png",
  "playList": {
   "id": "album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.48",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.32"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 3936,
      "class": "Photo",
      "width": 2624,
      "id": "album_09379898_1CE1_F14F_4193_2F70D849DF0F_0",
      "label": "Millennium-89",
      "thumbnailUrl": "media/album_09379898_1CE1_F14F_4193_2F70D849DF0F_0_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_09379898_1CE1_F14F_4193_2F70D849DF0F_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.50"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70",
      "label": "Millennium-85",
      "thumbnailUrl": "media/photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_0",
 "this.photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70",
 {
  "id": "playList_E75A1C3F_F70F_7995_41C4_77407150A804",
  "items": [
   {
    "player": {
     "viewerArea": {
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "progressRight": 0,
      "progressOpacity": 1,
      "borderRadius": 0,
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "class": "ViewerArea",
      "playbackBarHeadHeight": 15,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarBottom": 0,
      "paddingTop": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": "1.11vh",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "width": "100%",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "id": "viewer_uid0F730FFC_3901_769B_41AB_2A56D4F3BA80",
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "progressHeight": 10,
      "toolTipShadowColor": "#333333",
      "minHeight": 50,
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "paddingBottom": 0,
      "progressBorderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "transitionDuration": 500,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipDisplayTime": 1000,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000"
     },
     "id": "viewer_uidE75AAC3F_F70F_7995_41E7_C6DBE7418A06PhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer"
    },
    "id": "albumitem_E75A8C3F_F70F_7995_41E5_43DD326627E7",
    "media": "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_E75A1C3F_F70F_7995_41C4_77407150A804, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, this.htmltext_0F729FFD_3901_7695_41B7_E6BFFF56A76C, this.albumitem_E75A8C3F_F70F_7995_41E5_43DD326627E7); this.loopAlbum(this.playList_E75A1C3F_F70F_7995_41C4_77407150A804, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ],
  "change": "this.showComponentsWhileMouseOver(this.container_0F737FFC_3901_769B_41B4_72F20FA65753, [this.htmltext_0F729FFD_3901_7695_41B7_E6BFFF56A76C,this.component_0F726FFD_3901_7695_41AC_574F86F9D6C2,this.component_0F724FFD_3901_7695_417C_E4D5A298FA0A], 2000)",
  "class": "PlayList"
 },
 {
  "id": "playList_E75C7C41_F70F_79ED_41AB_20057641F39C",
  "items": [
   {
    "player": {
     "viewerArea": {
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "progressRight": 0,
      "progressOpacity": 1,
      "borderRadius": 0,
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "class": "ViewerArea",
      "playbackBarHeadHeight": 15,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarBottom": 0,
      "paddingTop": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": "1.11vh",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "width": "100%",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "id": "viewer_uid0F718FFE_3901_7697_41B9_F0084BC3DD93",
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "progressHeight": 10,
      "toolTipShadowColor": "#333333",
      "minHeight": 50,
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "paddingBottom": 0,
      "progressBorderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "transitionDuration": 500,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipDisplayTime": 1000,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000"
     },
     "id": "viewer_uidE75C8C41_F70F_79ED_41E8_56ED26B694FCPhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer"
    },
    "id": "albumitem_E75CFC41_F70F_79ED_41DF_4673B627D930",
    "media": "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_E75C7C41_F70F_79ED_41AB_20057641F39C, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, this.htmltext_0F713FFE_3901_7697_41A5_4275EED7B7E6, this.albumitem_E75CFC41_F70F_79ED_41DF_4673B627D930); this.loopAlbum(this.playList_E75C7C41_F70F_79ED_41AB_20057641F39C, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ],
  "change": "this.showComponentsWhileMouseOver(this.container_0F71FFFE_3901_7697_41B9_D49D40A425C7, [this.htmltext_0F713FFE_3901_7697_41A5_4275EED7B7E6,this.component_0F70AFFF_3901_7695_41A7_7B08FA1D8841,this.component_0F70BFFF_3901_7695_41A1_362427DA12B8], 2000)",
  "class": "PlayList"
 },
 {
  "class": "PhotoAlbum",
  "label": "Thermometer",
  "id": "album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D",
  "thumbnailUrl": "media/album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_t.png",
  "playList": {
   "id": "album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.70",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.31"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1365,
      "class": "Photo",
      "width": 2048,
      "id": "album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0",
      "label": "Thermometer",
      "thumbnailUrl": "media/album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0",
 {
  "id": "playList_E75D4C43_F70F_79ED_41E7_21ECAC9EF458",
  "items": [
   {
    "player": {
     "viewerArea": {
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "progressRight": 0,
      "progressOpacity": 1,
      "borderRadius": 0,
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "class": "ViewerArea",
      "playbackBarHeadHeight": 15,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarBottom": 0,
      "paddingTop": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": "1.11vh",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "width": "100%",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "id": "viewer_uid0F707000_3901_696B_4181_497009C13C00",
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "progressHeight": 10,
      "toolTipShadowColor": "#333333",
      "minHeight": 50,
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "paddingBottom": 0,
      "progressBorderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "transitionDuration": 500,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipDisplayTime": 1000,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000"
     },
     "id": "viewer_uidE75D9C43_F70F_79ED_41B9_4B7C8068448CPhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer"
    },
    "id": "albumitem_E75DCC43_F70F_79ED_41E8_59102272C08D",
    "media": "this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_E75D4C43_F70F_79ED_41E7_21ECAC9EF458, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList, this.htmltext_0F778001_3901_696D_41B6_343140634701, this.albumitem_E75DCC43_F70F_79ED_41E8_59102272C08D); this.loopAlbum(this.playList_E75D4C43_F70F_79ED_41E7_21ECAC9EF458, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ],
  "change": "this.showComponentsWhileMouseOver(this.container_0F704000_3901_696B_419E_E6263C496380, [this.htmltext_0F778001_3901_696D_41B6_343140634701,this.component_0F777001_3901_696D_41B5_513E9B1D6000,this.component_0F776001_3901_696D_41B1_41CC30E8F432], 2000)",
  "class": "PlayList"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Millennium-152",
  "id": "album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3",
  "thumbnailUrl": "media/album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_t.png",
  "playList": {
   "id": "album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.74",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.57"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 6016,
      "class": "Photo",
      "width": 4016,
      "id": "album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0",
      "label": "Millennium-152",
      "thumbnailUrl": "media/album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    },
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.44",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.67"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 2624,
      "class": "Photo",
      "width": 3936,
      "id": "photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6",
      "label": "Millennium-195",
      "thumbnailUrl": "media/photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0",
 "this.photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6",
 {
  "id": "playList_E752CC48_F70F_79FB_41C2_E00EA272CCE8",
  "items": [
   {
    "player": {
     "viewerArea": {
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "progressRight": 0,
      "progressOpacity": 1,
      "borderRadius": 0,
      "progressBorderColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "toolTipBorderColor": "#767676",
      "progressBottom": 2,
      "class": "ViewerArea",
      "playbackBarHeadHeight": 15,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarBottom": 0,
      "paddingTop": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": "1.11vh",
      "propagateClick": false,
      "toolTipTextShadowBlurRadius": 3,
      "width": "100%",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "id": "viewer_uid0F74B005_3901_6975_41A0_99A33348653C",
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "progressBarBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarProgressBorderSize": 0,
      "playbackBarRight": 0,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "paddingLeft": 0,
      "toolTipShadowBlurRadius": 3,
      "progressHeight": 10,
      "toolTipShadowColor": "#333333",
      "minHeight": 50,
      "transitionMode": "blending",
      "toolTipFontColor": "#606060",
      "paddingBottom": 0,
      "progressBorderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipShadowOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "transitionDuration": 500,
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipDisplayTime": 1000,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowColor": "#000000"
     },
     "id": "viewer_uidE7536C48_F70F_79FB_41D9_6205914974D7PhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer"
    },
    "id": "albumitem_E7534C48_F70F_79FB_41E8_350B90E6624E",
    "media": "this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_E752CC48_F70F_79FB_41C2_E00EA272CCE8, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList, this.htmltext_0F74E006_3901_6977_41B3_AD456B122C9E, this.albumitem_E7534C48_F70F_79FB_41E8_350B90E6624E); this.loopAlbum(this.playList_E752CC48_F70F_79FB_41C2_E00EA272CCE8, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ],
  "change": "this.showComponentsWhileMouseOver(this.container_0F74A005_3901_6975_41B6_9902142B695C, [this.htmltext_0F74E006_3901_6977_41B3_AD456B122C9E,this.component_0F745006_3901_6977_4198_6FBA25A420FF,this.component_0C8BB006_3901_6977_4194_CCEF382483EF], 2000)",
  "class": "PlayList"
 },
 "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
 {
  "id": "playList_0C8A7008_3901_697B_41AF_47645115295B",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
  "label": "Millennium Cave",
  "id": "album_114D2279_125B_8432_4174_627614C1991C",
  "thumbnailUrl": "media/album_114D2279_125B_8432_4174_627614C1991C_t.png",
  "playList": {
   "id": "album_114D2279_125B_8432_4174_627614C1991C_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "camera": {
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "duration": 5000,
      "targetPosition": {
       "x": "0.65",
       "class": "PhotoCameraPosition",
       "zoomFactor": 1.1,
       "y": "0.39"
      }
     },
     "class": "PhotoPlayListItem",
     "media": {
      "height": 1187,
      "class": "Photo",
      "width": 1000,
      "id": "album_114D2279_125B_8432_4174_627614C1991C_0",
      "label": "Millennium Cave",
      "thumbnailUrl": "media/album_114D2279_125B_8432_4174_627614C1991C_0_t.jpg",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_114D2279_125B_8432_4174_627614C1991C_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      }
     }
    }
   ]
  }
 },
 "this.album_114D2279_125B_8432_4174_627614C1991C_0",
 {
  "id": "playList_0C8B0009_3901_697D_41A1_C2005DEE0D4A",
  "class": "PlayList",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "media": "this.album_114D2279_125B_8432_4174_627614C1991C",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_0C8B0009_3901_697D_41A1_C2005DEE0D4A, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_0C8B0009_3901_697D_41A1_C2005DEE0D4A, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ]
 },
 {
  "id": "playList_0C8B7009_3901_697D_41B0_D19C2E7D490B",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer"
 },
 {
  "id": "playList_0C8B6009_3901_697D_41AD_B55386B7D52B",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_0C8B6009_3901_697D_41AD_B55386B7D52B, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ]
 },
 {
  "id": "playList_0C8AB009_3901_697D_41B0_7C601D0C4033",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_0C8AB009_3901_697D_41B0_7C601D0C4033, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ]
 },
 {
  "id": "playList_0C8A9009_3901_697D_4156_8F1EF3D04512",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_0C8A9009_3901_697D_4156_8F1EF3D04512, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ]
 },
 {
  "id": "playList_0C8AF009_3901_697D_41B2_2133128B9385",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "start": "this.changeBackgroundWhilePlay(this.playList_0C8AF009_3901_697D_41B2_2133128B9385, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)"
   }
  ]
 },
 "this.Menu_0C867019_3901_699D_418E_63EB7DAC727E",
 {
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "bodyPaddingRight": 0,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "backgroundColor": [],
  "headerBackgroundColorDirection": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "shadowVerticalLength": 0,
  "modal": true,
  "borderRadius": 5,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "bodyBackgroundOpacity": 0,
  "headerPaddingBottom": 5,
  "titleFontColor": "#000000",
  "title": "",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "propagateClick": false,
    "borderRadius": 0,
    "id": "container_0F7D0FF9_3901_769D_41B7_62BFDAF29DB1",
    "gap": 10,
    "backgroundColor": [],
    "backgroundColorRatios": [],
    "paddingRight": 0,
    "contentOpaque": false,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid0F7DDFF9_3901_769D_41B8_8079E12C1A55",
     {
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "scrollBarColor": "#FFFFFF",
      "bottom": 0,
      "right": 0,
      "propagateClick": false,
      "backgroundColor": [],
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "gap": 10,
      "paddingRight": 0,
      "borderRadius": 0,
      "height": "30%",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
        },
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "width": "100%",
        "propagateClick": false,
        "borderRadius": 0,
        "id": "htmltext_0F7D5FFA_3901_769F_41B7_BA084D9FDF91",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10,
        "paddingLeft": 10,
        "visible": false,
        "minHeight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "shadow": false,
        "paddingBottom": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "backgroundOpacity": 0.7,
        "class": "HTMLText",
        "data": {
         "name": "HTMLText9580"
        },
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical"
       }
      ],
      "minHeight": 20,
      "scrollBarMargin": 2,
      "scrollBarWidth": 7,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "bottom",
      "horizontalAlign": "left",
      "borderSize": 0,
      "layout": "vertical",
      "minWidth": 20,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "class": "Container",
      "data": {
       "name": "Container9579"
      },
      "creationPolicy": "delayed",
      "backgroundColorDirection": "vertical",
      "left": 0
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "top": "45%",
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F7CFFFA_3901_769F_41A8_D8CEA616C10A",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList, -1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9581"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false,
      "left": 10
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "right": 10,
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F7CCFFA_3901_769F_417F_F1DD9D14199A",
      "top": "45%",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList, 1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9582"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.3,
    "class": "Container",
    "data": {
     "name": "Container9578"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   }
  ],
  "titlePaddingTop": 5,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorRatios": [],
  "shadow": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleTextDecoration": "none",
  "bodyPaddingBottom": 0,
  "headerBorderColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "shadowColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowOpacity": 0.5,
  "titleFontWeight": "normal",
  "class": "Window",
  "titleFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "shadowBlurRadius": 6,
  "width": 400,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [],
  "id": "window_0DCD18BB_1CF8_BFE6_41AA_9C91D5CEBD23",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 0,
  "gap": 10,
  "titlePaddingRight": 5,
  "titlePaddingLeft": 5,
  "titleFontSize": 14,
  "titleFontFamily": "Arial",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColor": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "shadowHorizontalLength": 3,
  "minHeight": 20,
  "closeButtonIconColor": "#B2B2B2",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "borderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "close": "this.playList_E7442C3A_F70F_799F_41EA_49AF276CADB7.set('selectedIndex', -1);",
  "headerBorderSize": 0,
  "headerPaddingTop": 10,
  "overflow": "scroll",
  "minWidth": 20,
  "headerPaddingRight": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerVerticalAlign": "middle",
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "data": {
   "name": "Window9941"
  },
  "headerBackgroundOpacity": 0,
  "headerPaddingLeft": 10,
  "scrollBarOpacity": 0.5,
  "footerBackgroundOpacity": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "bodyPaddingRight": 0,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "backgroundColor": [],
  "headerBackgroundColorDirection": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "shadowVerticalLength": 0,
  "modal": true,
  "borderRadius": 5,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "bodyBackgroundOpacity": 0,
  "headerPaddingBottom": 5,
  "titleFontColor": "#000000",
  "title": "",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "propagateClick": false,
    "borderRadius": 0,
    "id": "container_0F737FFC_3901_769B_41B4_72F20FA65753",
    "gap": 10,
    "backgroundColor": [],
    "backgroundColorRatios": [],
    "paddingRight": 0,
    "contentOpaque": false,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid0F730FFC_3901_769B_41AB_2A56D4F3BA80",
     {
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "scrollBarColor": "#FFFFFF",
      "bottom": 0,
      "right": 0,
      "propagateClick": false,
      "backgroundColor": [],
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "gap": 10,
      "paddingRight": 0,
      "borderRadius": 0,
      "height": "30%",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
        },
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "width": "100%",
        "propagateClick": false,
        "borderRadius": 0,
        "id": "htmltext_0F729FFD_3901_7695_41B7_E6BFFF56A76C",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10,
        "paddingLeft": 10,
        "visible": false,
        "minHeight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "shadow": false,
        "paddingBottom": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "backgroundOpacity": 0.7,
        "class": "HTMLText",
        "data": {
         "name": "HTMLText9586"
        },
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical"
       }
      ],
      "minHeight": 20,
      "scrollBarMargin": 2,
      "scrollBarWidth": 7,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "bottom",
      "horizontalAlign": "left",
      "borderSize": 0,
      "layout": "vertical",
      "minWidth": 20,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "class": "Container",
      "data": {
       "name": "Container9585"
      },
      "creationPolicy": "delayed",
      "backgroundColorDirection": "vertical",
      "left": 0
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "top": "45%",
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F726FFD_3901_7695_41AC_574F86F9D6C2",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, -1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9587"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false,
      "left": 10
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "right": 10,
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F724FFD_3901_7695_417C_E4D5A298FA0A",
      "top": "45%",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, 1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9588"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.3,
    "class": "Container",
    "data": {
     "name": "Container9584"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   }
  ],
  "titlePaddingTop": 5,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorRatios": [],
  "shadow": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleTextDecoration": "none",
  "bodyPaddingBottom": 0,
  "headerBorderColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "shadowColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowOpacity": 0.5,
  "titleFontWeight": "normal",
  "class": "Window",
  "titleFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "shadowBlurRadius": 6,
  "width": 400,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [],
  "id": "window_118D8D24_1CE8_B6E2_41AF_9A026A0548F7",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 0,
  "gap": 10,
  "titlePaddingRight": 5,
  "titlePaddingLeft": 5,
  "titleFontSize": 14,
  "titleFontFamily": "Arial",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColor": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "shadowHorizontalLength": 3,
  "minHeight": 20,
  "closeButtonIconColor": "#B2B2B2",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "borderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "close": "this.playList_E75A1C3F_F70F_7995_41C4_77407150A804.set('selectedIndex', -1);",
  "headerBorderSize": 0,
  "headerPaddingTop": 10,
  "overflow": "scroll",
  "minWidth": 20,
  "headerPaddingRight": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerVerticalAlign": "middle",
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "data": {
   "name": "Window1979"
  },
  "headerBackgroundOpacity": 0,
  "headerPaddingLeft": 10,
  "scrollBarOpacity": 0.5,
  "footerBackgroundOpacity": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "bodyPaddingRight": 0,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "backgroundColor": [],
  "headerBackgroundColorDirection": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "shadowVerticalLength": 0,
  "modal": true,
  "borderRadius": 5,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "bodyBackgroundOpacity": 0,
  "headerPaddingBottom": 5,
  "titleFontColor": "#000000",
  "title": "",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "propagateClick": false,
    "borderRadius": 0,
    "id": "container_0F71FFFE_3901_7697_41B9_D49D40A425C7",
    "gap": 10,
    "backgroundColor": [],
    "backgroundColorRatios": [],
    "paddingRight": 0,
    "contentOpaque": false,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid0F718FFE_3901_7697_41B9_F0084BC3DD93",
     {
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "scrollBarColor": "#FFFFFF",
      "bottom": 0,
      "right": 0,
      "propagateClick": false,
      "backgroundColor": [],
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "gap": 10,
      "paddingRight": 0,
      "borderRadius": 0,
      "height": "30%",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
        },
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "width": "100%",
        "propagateClick": false,
        "borderRadius": 0,
        "id": "htmltext_0F713FFE_3901_7697_41A5_4275EED7B7E6",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10,
        "paddingLeft": 10,
        "visible": false,
        "minHeight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "shadow": false,
        "paddingBottom": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "backgroundOpacity": 0.7,
        "class": "HTMLText",
        "data": {
         "name": "HTMLText9592"
        },
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical"
       }
      ],
      "minHeight": 20,
      "scrollBarMargin": 2,
      "scrollBarWidth": 7,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "bottom",
      "horizontalAlign": "left",
      "borderSize": 0,
      "layout": "vertical",
      "minWidth": 20,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "class": "Container",
      "data": {
       "name": "Container9591"
      },
      "creationPolicy": "delayed",
      "backgroundColorDirection": "vertical",
      "left": 0
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "top": "45%",
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F70AFFF_3901_7695_41A7_7B08FA1D8841",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, -1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9593"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false,
      "left": 10
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "right": 10,
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F70BFFF_3901_7695_41A1_362427DA12B8",
      "top": "45%",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, 1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9594"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.3,
    "class": "Container",
    "data": {
     "name": "Container9590"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   }
  ],
  "titlePaddingTop": 5,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorRatios": [],
  "shadow": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleTextDecoration": "none",
  "bodyPaddingBottom": 0,
  "headerBorderColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "shadowColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowOpacity": 0.5,
  "titleFontWeight": "normal",
  "class": "Window",
  "titleFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "shadowBlurRadius": 6,
  "width": 400,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [],
  "id": "window_0BD44083_1C20_5141_41AA_04C2D3C4D7F1",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 0,
  "gap": 10,
  "titlePaddingRight": 5,
  "titlePaddingLeft": 5,
  "titleFontSize": 14,
  "titleFontFamily": "Arial",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColor": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "shadowHorizontalLength": 3,
  "minHeight": 20,
  "closeButtonIconColor": "#B2B2B2",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "borderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "close": "this.playList_E75C7C41_F70F_79ED_41AB_20057641F39C.set('selectedIndex', -1);",
  "headerBorderSize": 0,
  "headerPaddingTop": 10,
  "overflow": "scroll",
  "minWidth": 20,
  "headerPaddingRight": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerVerticalAlign": "middle",
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "data": {
   "name": "Window15145"
  },
  "headerBackgroundOpacity": 0,
  "headerPaddingLeft": 10,
  "scrollBarOpacity": 0.5,
  "footerBackgroundOpacity": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "bodyPaddingRight": 0,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "backgroundColor": [],
  "headerBackgroundColorDirection": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "shadowVerticalLength": 0,
  "modal": true,
  "borderRadius": 5,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "bodyBackgroundOpacity": 0,
  "headerPaddingBottom": 5,
  "titleFontColor": "#000000",
  "title": "",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "propagateClick": false,
    "borderRadius": 0,
    "id": "container_0F704000_3901_696B_419E_E6263C496380",
    "gap": 10,
    "backgroundColor": [],
    "backgroundColorRatios": [],
    "paddingRight": 0,
    "contentOpaque": false,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid0F707000_3901_696B_4181_497009C13C00",
     {
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "scrollBarColor": "#FFFFFF",
      "bottom": 0,
      "right": 0,
      "propagateClick": false,
      "backgroundColor": [],
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "gap": 10,
      "paddingRight": 0,
      "borderRadius": 0,
      "height": "30%",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
        },
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "width": "100%",
        "propagateClick": false,
        "borderRadius": 0,
        "id": "htmltext_0F778001_3901_696D_41B6_343140634701",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10,
        "paddingLeft": 10,
        "visible": false,
        "minHeight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "shadow": false,
        "paddingBottom": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "backgroundOpacity": 0.7,
        "class": "HTMLText",
        "data": {
         "name": "HTMLText9598"
        },
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical"
       }
      ],
      "minHeight": 20,
      "scrollBarMargin": 2,
      "scrollBarWidth": 7,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "bottom",
      "horizontalAlign": "left",
      "borderSize": 0,
      "layout": "vertical",
      "minWidth": 20,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "class": "Container",
      "data": {
       "name": "Container9597"
      },
      "creationPolicy": "delayed",
      "backgroundColorDirection": "vertical",
      "left": 0
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "top": "45%",
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F777001_3901_696D_41B5_513E9B1D6000",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList, -1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9599"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false,
      "left": 10
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "right": 10,
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F776001_3901_696D_41B1_41CC30E8F432",
      "top": "45%",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList, 1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9600"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.3,
    "class": "Container",
    "data": {
     "name": "Container9596"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   }
  ],
  "titlePaddingTop": 5,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorRatios": [],
  "shadow": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleTextDecoration": "none",
  "bodyPaddingBottom": 0,
  "headerBorderColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "shadowColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowOpacity": 0.5,
  "titleFontWeight": "normal",
  "class": "Window",
  "titleFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "shadowBlurRadius": 6,
  "width": 400,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [],
  "id": "window_13769AFE_1CE9_F35E_41AD_2854A6F542F2",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 0,
  "gap": 10,
  "titlePaddingRight": 5,
  "titlePaddingLeft": 5,
  "titleFontSize": 14,
  "titleFontFamily": "Arial",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColor": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "shadowHorizontalLength": 3,
  "minHeight": 20,
  "closeButtonIconColor": "#B2B2B2",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "borderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "close": "this.playList_E75D4C43_F70F_79ED_41E7_21ECAC9EF458.set('selectedIndex', -1);",
  "headerBorderSize": 0,
  "headerPaddingTop": 10,
  "overflow": "scroll",
  "minWidth": 20,
  "headerPaddingRight": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerVerticalAlign": "middle",
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "data": {
   "name": "Window6665"
  },
  "headerBackgroundOpacity": 0,
  "headerPaddingLeft": 10,
  "scrollBarOpacity": 0.5,
  "footerBackgroundOpacity": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "bodyPaddingRight": 0,
  "veilColorDirection": "horizontal",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "backgroundColor": [],
  "headerBackgroundColorDirection": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "shadowVerticalLength": 0,
  "modal": true,
  "borderRadius": 5,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "height": 600,
  "bodyBackgroundOpacity": 0,
  "headerPaddingBottom": 5,
  "titleFontColor": "#000000",
  "title": "",
  "children": [
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "propagateClick": false,
    "borderRadius": 0,
    "id": "container_0F74A005_3901_6975_41B6_9902142B695C",
    "gap": 10,
    "backgroundColor": [],
    "backgroundColorRatios": [],
    "paddingRight": 0,
    "contentOpaque": false,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.viewer_uid0F74B005_3901_6975_41A0_99A33348653C",
     {
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "scrollBarColor": "#FFFFFF",
      "bottom": 0,
      "right": 0,
      "propagateClick": false,
      "backgroundColor": [],
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "gap": 10,
      "paddingRight": 0,
      "borderRadius": 0,
      "height": "30%",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarVisible": "rollOver",
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
        },
        "paddingTop": 5,
        "scrollBarColor": "#000000",
        "width": "100%",
        "propagateClick": false,
        "borderRadius": 0,
        "id": "htmltext_0F74E006_3901_6977_41B3_AD456B122C9E",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10,
        "paddingLeft": 10,
        "visible": false,
        "minHeight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "shadow": false,
        "paddingBottom": 5,
        "borderSize": 0,
        "html": "",
        "minWidth": 0,
        "backgroundOpacity": 0.7,
        "class": "HTMLText",
        "data": {
         "name": "HTMLText9604"
        },
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "backgroundColorDirection": "vertical"
       }
      ],
      "minHeight": 20,
      "scrollBarMargin": 2,
      "scrollBarWidth": 7,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "bottom",
      "horizontalAlign": "left",
      "borderSize": 0,
      "layout": "vertical",
      "minWidth": 20,
      "overflow": "scroll",
      "backgroundOpacity": 0.3,
      "class": "Container",
      "data": {
       "name": "Container9603"
      },
      "creationPolicy": "delayed",
      "backgroundColorDirection": "vertical",
      "left": 0
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "top": "45%",
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0F745006_3901_6977_4198_6FBA25A420FF",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList, -1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9605"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false,
      "left": 10
     },
     {
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "paddingTop": 0,
      "right": 10,
      "propagateClick": false,
      "borderRadius": 0,
      "id": "component_0C8BB006_3901_6977_4194_CCEF382483EF",
      "top": "45%",
      "mode": "push",
      "paddingRight": 0,
      "visible": false,
      "paddingLeft": 0,
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList, 1)",
      "backgroundOpacity": 0,
      "class": "IconButton",
      "data": {
       "name": "IconButton9606"
      },
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "transparencyActive": false
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.3,
    "class": "Container",
    "data": {
     "name": "Container9602"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   }
  ],
  "titlePaddingTop": 5,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "closeButtonBackgroundColorRatios": [],
  "shadow": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleTextDecoration": "none",
  "bodyPaddingBottom": 0,
  "headerBorderColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "shadowColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "shadowOpacity": 0.5,
  "titleFontWeight": "normal",
  "class": "Window",
  "titleFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColor": [],
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "paddingTop": 0,
  "shadowBlurRadius": 6,
  "width": 400,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColor": [],
  "id": "window_0FE6D0CB_1CEB_8FA5_4196_AC11051ABA84",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 0,
  "gap": 10,
  "titlePaddingRight": 5,
  "titlePaddingLeft": 5,
  "titleFontSize": 14,
  "titleFontFamily": "Arial",
  "closeButtonBorderRadius": 11,
  "closeButtonIconHeight": 20,
  "bodyBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColor": [],
  "layout": "vertical",
  "veilOpacity": 0.4,
  "shadowHorizontalLength": 3,
  "minHeight": 20,
  "closeButtonIconColor": "#B2B2B2",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "horizontalAlign": "center",
  "borderSize": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "close": "this.playList_E752CC48_F70F_79FB_41C2_E00EA272CCE8.set('selectedIndex', -1);",
  "headerBorderSize": 0,
  "headerPaddingTop": 10,
  "overflow": "scroll",
  "minWidth": 20,
  "headerPaddingRight": 0,
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerVerticalAlign": "middle",
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "data": {
   "name": "Window13868"
  },
  "headerBackgroundOpacity": 0,
  "headerPaddingLeft": 10,
  "scrollBarOpacity": 0.5,
  "footerBackgroundOpacity": 0
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0C922035_3901_6995_41B5_F005271C109B",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -80.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0C951044_3901_69EB_4171_D22000CFC71F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 96.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0CAD3054_3901_69EB_41B4_323E09E6AD10",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -65.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0E8D7094_3901_696B_41A4_2F88B9D1FDFD",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 171.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0E87B0A5_3901_6AB5_41B5_A803DC369F69",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 134.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0E9A50B5_3901_6A95_41A1_5574F0DBFDE1",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 20.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0E9C50C6_3901_6AF7_417E_02EE29FB26AE",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 40.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0E9410D7_3901_6A95_4182_1DE94FBE9DCC",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 102.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0EAD10E8_3901_6ABB_417E_A5808AEA10C6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 82.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0EA740F9_3901_6A9D_41B6_ED166075DE1A",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 9.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0EBEA10B_3901_6B7D_41B0_3BC3A106B512",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -67.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_0EB7B11C_3901_6B9B_41B5_42F5325AB54F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 149.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0ECF612D_3901_6BB5_41B8_A18EBF99763B",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -59.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0EC4C13D_3901_6B95_419F_7B99098B3761",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 124.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0ED3714E_3901_6BF7_41B4_250E21C2C84A",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 79.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0EE8C15F_3901_6B95_414B_4C1256B76A1F",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 168.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0EE58170_3901_6BAB_41A4_4D424FFDED8C",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": 152.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_0EFC0180_3901_6B6B_4190_C99B086E1C5C",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "yaw": -139.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
  "duration": 1000,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
  "duration": 1000,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
 "this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF"
], "children": [
 {
  "scrollBarVisible": "rollOver",
  "selectedTabBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "tabsBackgroundColor": [
   "#999999"
  ],
  "top": "0%",
  "propagateClick": false,
  "borderRadius": 1,
  "width": "100%",
  "id": "TabPanel_E67A7708_E972_50A5_41D7_8A26273D3E85",
  "tabsFontFamily": "Arial",
  "paddingRight": 0,
  "pagePaddingRight": 0,
  "contentOpaque": false,
  "tabsFontSize": 15,
  "pages": [
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "label": "Millennium Cave VR",
    "propagateClick": false,
    "borderRadius": 0,
    "gap": 10,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0
    ],
    "contentOpaque": false,
    "paddingRight": 0,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.MainViewer",
     {
      "paddingTop": 0,
      "width": 125,
      "top": "0%",
      "propagateClick": false,
      "id": "Image_F9A71E16_E916_50AD_41E3_AAAC27F2587D",
      "borderRadius": 0,
      "paddingRight": 0,
      "maxHeight": 235,
      "maxWidth": 235,
      "height": 125,
      "paddingLeft": 0,
      "minHeight": 1,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "left",
      "borderSize": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "url": "skin/Image_F9A71E16_E916_50AD_41E3_AAAC27F2587D.png",
      "scaleMode": "fit_inside",
      "class": "Image",
      "data": {
       "name": "Beta Logo Main"
      },
      "left": "0%"
     },
     {
      "backgroundColorDirection": "vertical",
      "itemThumbnailShadowSpread": 1,
      "itemPaddingRight": 3,
      "right": "30%",
      "selectedItemLabelFontColor": "#0099FF",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "itemPaddingLeft": 3,
      "backgroundColorRatios": [
       0
      ],
      "itemLabelFontColor": "#000000",
      "borderRadius": 10,
      "paddingRight": 20,
      "height": 125,
      "itemThumbnailShadow": true,
      "scrollBarOpacity": 0.5,
      "itemLabelPosition": "bottom",
      "rollOverItemLabelFontWeight": "bold",
      "itemLabelTextDecoration": "none",
      "itemThumbnailShadowColor": "#000000",
      "itemThumbnailHeight": 75,
      "scrollBarMargin": 2,
      "scrollBarWidth": 10,
      "shadow": false,
      "itemPaddingBottom": 3,
      "backgroundOpacity": 1,
      "class": "ThumbnailList",
      "itemThumbnailShadowBlurRadius": 8,
      "scrollBarVisible": "rollOver",
      "itemThumbnailShadowOpacity": 0.27,
      "itemMode": "normal",
      "paddingTop": 10,
      "itemThumbnailShadowHorizontalLength": 3,
      "itemLabelFontWeight": "normal",
      "scrollBarColor": "#666666",
      "bottom": 0,
      "propagateClick": false,
      "itemLabelFontStyle": "normal",
      "id": "ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA",
      "gap": 13,
      "itemLabelHorizontalAlign": "center",
      "playList": "this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist",
      "itemThumbnailBorderRadius": 5,
      "itemOpacity": 1,
      "itemLabelFontSize": 14,
      "itemThumbnailShadowVerticalLength": 3,
      "selectedItemLabelFontWeight": "bold",
      "itemHorizontalAlign": "center",
      "itemBackgroundOpacity": 0,
      "itemThumbnailScaleMode": "fit_outside",
      "paddingLeft": 20,
      "layout": "horizontal",
      "rollOverItemBackgroundOpacity": 0,
      "minHeight": 20,
      "paddingBottom": 10,
      "verticalAlign": "top",
      "horizontalAlign": "left",
      "itemPaddingTop": 3,
      "borderSize": 0,
      "itemThumbnailWidth": 75,
      "itemVerticalAlign": "middle",
      "minWidth": 20,
      "itemLabelFontFamily": "Arial",
      "itemBackgroundColorDirection": "vertical",
      "data": {
       "name": "ThumbnailList35762"
      },
      "itemLabelGap": 8,
      "itemBorderRadius": 0,
      "selectedItemThumbnailShadow": true,
      "left": "30%",
      "itemBackgroundColorRatios": [],
      "itemThumbnailOpacity": 1,
      "itemBackgroundColor": []
     },
     {
      "paddingTop": 0,
      "width": 285,
      "propagateClick": false,
      "bottom": 15,
      "id": "Image_F9BC7CFC_E911_D15D_41A7_A8128140A49B",
      "maxWidth": 448,
      "paddingRight": 0,
      "maxHeight": 108,
      "height": 70,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 1,
      "click": "this.openLink('http://www.austintexas.gov/watershed/YouthEd', '_blank')",
      "backgroundOpacity": 0,
      "url": "skin/Image_F9BC7CFC_E911_D15D_41A7_A8128140A49B.jpg",
      "scaleMode": "fit_inside",
      "class": "Image",
      "data": {
       "name": "WP Logo Main"
      },
      "left": 25
     },
     "this.MapViewer",
     "this.IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB"
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 1,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.3,
    "borderColor": "#000000",
    "class": "TabPanelPage",
    "data": {
     "name": "TabPanelPage74480"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   },
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "label": "Millennium Cave Media",
    "propagateClick": false,
    "borderRadius": 0,
    "gap": 10,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0
    ],
    "contentOpaque": false,
    "paddingRight": 0,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612B",
     {
      "itemPaddingRight": 3,
      "itemMode": "normal",
      "paddingTop": 10,
      "scrollBarColor": "#666666",
      "bottom": 0,
      "right": "30%",
      "gap": 10,
      "propagateClick": false,
      "itemThumbnailShadowHorizontalLength": 3,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "itemLabelFontStyle": "normal",
      "itemBackgroundColor": [],
      "id": "ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3",
      "itemPaddingLeft": 3,
      "itemThumbnailShadowVerticalLength": 3,
      "backgroundColorRatios": [
       0
      ],
      "playList": "this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist",
      "itemThumbnailBorderRadius": 5,
      "itemLabelFontColor": "#000000",
      "itemLabelFontSize": 14,
      "borderRadius": 10,
      "paddingRight": 20,
      "itemLabelHorizontalAlign": "center",
      "itemOpacity": 1,
      "height": 125,
      "itemThumbnailShadow": true,
      "scrollBarOpacity": 0.5,
      "selectedItemLabelFontWeight": "bold",
      "itemLabelPosition": "bottom",
      "itemBackgroundOpacity": 0,
      "itemThumbnailScaleMode": "fit_outside",
      "paddingLeft": 20,
      "itemLabelTextDecoration": "none",
      "itemThumbnailShadowColor": "#000000",
      "itemThumbnailHeight": 75,
      "itemPaddingTop": 3,
      "minHeight": 1,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "shadow": false,
      "itemPaddingBottom": 3,
      "paddingBottom": 10,
      "scrollBarMargin": 2,
      "itemHorizontalAlign": "center",
      "verticalAlign": "top",
      "horizontalAlign": "left",
      "borderSize": 0,
      "itemVerticalAlign": "middle",
      "minWidth": 1,
      "itemLabelFontFamily": "Arial",
      "itemThumbnailWidth": 100,
      "backgroundOpacity": 1,
      "itemBackgroundColorRatios": [],
      "class": "ThumbnailList",
      "itemLabelGap": 5,
      "scrollBarVisible": "rollOver",
      "itemThumbnailShadowBlurRadius": 4,
      "itemBorderRadius": 0,
      "itemBackgroundColorDirection": "vertical",
      "left": "30%",
      "itemThumbnailShadowSpread": 1,
      "backgroundColorDirection": "vertical",
      "itemThumbnailOpacity": 1,
      "data": {
       "name": "ThumbnailList21541"
      },
      "itemThumbnailShadowOpacity": 0.8,
      "itemLabelFontWeight": "normal"
     },
     {
      "paddingTop": 0,
      "width": 285,
      "propagateClick": false,
      "bottom": 15,
      "id": "Image_EB2E659D_F1DB_8CF2_41EB_8601309BA408",
      "maxWidth": 448,
      "paddingRight": 0,
      "maxHeight": 108,
      "height": 70,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minHeight": 1,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "minWidth": 1,
      "click": "this.openLink('http://www.austintexas.gov/watershed/YouthEd', '_blank')",
      "backgroundOpacity": 0,
      "url": "skin/Image_EB2E659D_F1DB_8CF2_41EB_8601309BA408.jpg",
      "scaleMode": "fit_inside",
      "class": "Image",
      "data": {
       "name": "Image11118"
      },
      "left": 25
     },
     {
      "paddingTop": 0,
      "width": 125,
      "top": "0%",
      "propagateClick": false,
      "id": "Image_EBFC1D44_F2B8_7C52_41EC_D1A929E28ADA",
      "borderRadius": 0,
      "paddingRight": 0,
      "maxHeight": 235,
      "maxWidth": 235,
      "height": 125,
      "paddingLeft": 0,
      "minHeight": 1,
      "shadow": false,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "borderSize": 0,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "url": "skin/Image_EBFC1D44_F2B8_7C52_41EC_D1A929E28ADA.png",
      "scaleMode": "fit_inside",
      "class": "Image",
      "data": {
       "name": "Image16190"
      },
      "left": "0%"
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.91,
    "class": "TabPanelPage",
    "data": {
     "name": "TabPanelPage75924"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   },
   {
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "width": "100%",
    "label": "About",
    "propagateClick": false,
    "borderRadius": 0,
    "gap": 10,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0
    ],
    "contentOpaque": false,
    "paddingRight": 0,
    "height": "100%",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingTop": 20,
      "shadowBlurRadius": 7,
      "bottom": 100,
      "right": 100,
      "propagateClick": false,
      "backgroundColor": [
       "#CCCCCC",
       "#CCCCCC"
      ],
      "shadowSpread": 1,
      "id": "HTMLText_EC2EB9FE_F2E9_842E_41C3_76797D21F3CB",
      "scrollBarColor": "#000000",
      "backgroundColorRatios": [
       0.73,
       1
      ],
      "shadowVerticalLength": 2,
      "paddingRight": 20,
      "borderRadius": 0,
      "height": "73.508%",
      "paddingLeft": 20,
      "minHeight": 1,
      "scrollBarMargin": 2,
      "scrollBarWidth": 10,
      "shadow": true,
      "paddingBottom": 10,
      "borderSize": 3,
      "shadowHorizontalLength": 2,
      "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>City of Austin VR Cave Viewer</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Watershed Protection Department</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"><B>VR Cave Expedition Team:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Jessica Gordon</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Vivian Loftin</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Trent Atkins</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Marbenn Cayetano</SPAN></SPAN></DIV></div>",
      "minWidth": 1,
      "backgroundOpacity": 0.91,
      "shadowColor": "#000000",
      "borderColor": "#000000",
      "shadowOpacity": 0.19,
      "class": "HTMLText",
      "data": {
       "name": "HTMLText53815"
      },
      "backgroundColorDirection": "vertical",
      "left": 100
     }
    ],
    "minHeight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "shadow": false,
    "paddingBottom": 0,
    "horizontalAlign": "left",
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 20,
    "overflow": "scroll",
    "verticalAlign": "top",
    "backgroundOpacity": 0.91,
    "class": "TabPanelPage",
    "data": {
     "name": "TabPanelPage75940"
    },
    "creationPolicy": "delayed",
    "backgroundColorDirection": "vertical"
   }
  ],
  "tabsAlign": "normal",
  "tabsTextDecoration": "none",
  "height": "100%",
  "tabsRollOverFontStyle": "normal",
  "paddingLeft": 0,
  "tabsFontStyle": "italic",
  "selectedTabBackgroundOpacity": 0.91,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "selectedTabFontSize": 20,
  "tabsRollOverFontWeight": "normal",
  "shadow": false,
  "paddingBottom": 0,
  "tabsFontWeight": "normal",
  "borderSize": 1,
  "tabsRollOverBackgroundColor": [
   "#FFFFFF"
  ],
  "tabsFontColor": "#000000",
  "minWidth": 1,
  "tabsBackgroundColorRatios": [
   0
  ],
  "tabsRollOverBackgroundColorRatios": [
   0
  ],
  "overflow": "visible",
  "backgroundOpacity": 0,
  "selectedTabBackgroundColorRatios": [
   0
  ],
  "borderColor": "#000000",
  "pagePaddingTop": 0,
  "pagePaddingBottom": 0,
  "class": "TabPanel",
  "pagePaddingLeft": 0,
  "selectedTabFontWeight": "bold",
  "tabsPosition": "top",
  "selectedTabFontColor": "#000000",
  "creationPolicy": "delayed",
  "tabsRollOverFontColor": "#000000",
  "tabsBackgroundOpacity": 0.8,
  "scrollBarOpacity": 0.5,
  "tabsSize": 40,
  "data": {
   "name": "TabPanel74479"
  },
  "left": "0%"
 }
], 
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "borderRadius": 0,
 "width": "100%",
 "id": "rootPlayer",
 "data": {
  "name": "Player3798"
 },
 "gap": 10,
 "paddingRight": 0,
 "contentOpaque": false,
 "vrPolyfillScale": 1,
 "height": "100%",
 "paddingLeft": 0,
 "layout": "absolute",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadow": false,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "borderSize": 0,
 "minWidth": 20,
 "backgroundPreloadEnabled": false,
 "overflow": "visible",
 "verticalAlign": "top",
 "class": "Player",
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || !url.startsWith('http')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); }
 },
 "creationPolicy": "delayed",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist,this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_0C8B0009_3901_697D_41A1_C2005DEE0D4A.set('selectedIndex', 0); this.playList_0C8B7009_3901_697D_41B0_D19C2E7D490B.set('selectedIndex', 0)",
 "mobileMipmappingEnabled": false
})
TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_t.jpg",
    "overlays": [
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
        }
       ]
      },
      "inertia": false,
      "hfov": 36,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0",
      "angle": 0
     },
     {
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 103,
           "width": 102,
           "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "yaw": -11.67,
        "hfov": 8.47,
        "pitch": -42.42
       }
      ],
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0D460C42_1B97_DAB6_41B6_5F06DDE10C48",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304, this.camera_2D40A186_2336_1374_41B4_CF9F69961454); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -11.67,
        "hfov": 8.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 206,
           "width": 205,
           "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -42.42
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C",
  "hfovMin": 60,
  "hfov": 360,
  "vfov": 180,
  "cardboardMenu": {
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "fontFamily": "Arial",
   "id": "Menu_2D536148_2336_13FC_41B3_1237BC94E607",
   "label": "Media",
   "backgroundColor": "#404040",
   "selectedFontColor": "#FFFFFF",
   "fontColor": "#FFFFFF",
   "children": [
    {
     "class": "MenuItem",
     "label": "MC Entrance",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "MC 1",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "MC 2 - in 3D",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "MC 3",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "MC 4",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "MC 5 - in 3D",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "MC 6",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "MC 7",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "MC 8 - in 3D",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "MC 9",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8
  },
  "pitch": 0,
  "partial": false,
  "label": "MC Entrance",
  "hfovMax": 120,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_t.jpg",
       "overlays": [
        {
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
           }
          ]
         },
         "inertia": false,
         "hfov": 36,
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_tcap0",
         "angle": 0
        },
        {
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 49,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "yaw": -97.31,
           "hfov": 3.32,
           "pitch": 53.08
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0DE32221_1B96_4EF2_41B1_F451AE12BAC2",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C, this.camera_2C963221_2336_11AC_41B1_03D58682CBA5); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -97.31,
           "hfov": 3.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 99,
              "width": 98,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 53.08
          }
         ]
        },
        {
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 49,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "yaw": -30.16,
           "hfov": 5.44,
           "pitch": -10.29
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0AB858BB_1C6A_7BD6_41AB_EE73DA4B494D",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142, this.camera_2C836242_2336_11EC_41BF_EA4DBAD3B622); this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -30.16,
           "hfov": 5.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 99,
              "width": 98,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -10.29
          }
         ]
        },
        {
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 49,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "yaw": -83.52,
           "hfov": 5.38,
           "pitch": -13.6
          }
         ],
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0B0F3B61_1C6E_5D72_41B9_9C7FA969FF73",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13, this.camera_2CBFA268_2336_11BC_41B8_F020520651D0); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -83.52,
           "hfov": 5.38,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 99,
              "width": 98,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -13.6
          }
         ]
        },
        {
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 48,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "yaw": -117.51,
           "hfov": 5.29,
           "pitch": -10.94
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0C37FD6E_1CE9_B17E_41BA_D907349AB86D",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.showPopupMedia(this.window_0DCD18BB_1CF8_BFE6_41AA_9C91D5CEBD23, this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9, this.playList_1415C944_1EEE_33F5_41AA_5D179FDEB4AF, '90%', '90%', false, false); this.playList_1415C944_1EEE_33F5_41AA_5D179FDEB4AF.set('selectedIndex', 0); "
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -117.51,
           "hfov": 5.29,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 99,
              "width": 96,
              "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -10.94
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
     "hfovMin": 60,
     "hfov": 360,
     "mapLocations": [
      {
       "x": 506.74,
       "y": 284.05,
       "class": "PanoramaMapLocation",
       "map": {
        "id": "map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
        "width": 721,
        "height": 543,
        "minimumZoomFactor": 0.5,
        "maximumZoomFactor": 1.2,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "scaleMode": "fit_inside",
        "fieldOfViewOverlayRadiusScale": 0.25,
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "overlays": [
         {
          "map": {
           "offsetY": 0,
           "x": 327.83,
           "height": 16.73,
           "y": 409.05,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 13,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_1_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 25.74
          },
          "image": {
           "x": 327.73,
           "height": 16.73,
           "y": 408.96,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 18,
              "width": 27,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_1.png"
             }
            ]
           },
           "width": 25.74
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_E196792A_EEB8_85D6_41D3_7A47D78D9B5A",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 3)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Observation Point"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 377.25,
           "height": 18.66,
           "y": 352.19,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 10,
              "width": 14,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_2_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 26.38
          },
          "image": {
           "x": 377.14,
           "height": 18.66,
           "y": 352.08,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 20,
              "width": 28,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_2.png"
             }
            ]
           },
           "width": 26.38
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_E0A55672_EE78_8C37_41E7_B54A1D5361B0",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 2)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Observing"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 404.92,
           "height": 17.15,
           "y": 245.38,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 14,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_3_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 26.34
          },
          "image": {
           "x": 404.83,
           "height": 17.15,
           "y": 245.3,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 19,
              "width": 28,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_3.png"
             }
            ]
           },
           "width": 26.34
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_01ECE7F7_0D93_AC83_41A3_7787118BA647",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 9)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 206.28,
           "height": 16.48,
           "y": 327.16,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 15,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_4_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 28.01
          },
          "image": {
           "x": 206.2,
           "height": 16.48,
           "y": 327.07,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 18,
              "width": 30,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_4.png"
             }
            ]
           },
           "width": 28.01
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_19E93500_0DB1_AD7D_4193_1E19A4AD0D50",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 5)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 200.32,
           "height": 16.7,
           "y": 180.82,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 14,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_5_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 27.25
          },
          "image": {
           "x": 200.2,
           "height": 16.7,
           "y": 180.7,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 18,
              "width": 29,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_5.png"
             }
            ]
           },
           "width": 27.25
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_1D437C41_0D90_63FF_41A7_F309D5D02408",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 6)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 205.36,
           "height": 16,
           "y": 127.37,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 13,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_6_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 25.34
          },
          "image": {
           "x": 205.25,
           "height": 16,
           "y": 127.25,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 18,
              "width": 27,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_6.png"
             }
            ]
           },
           "width": 25.34
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_1E95D06B_0DF0_6383_4191_8FFD083D481B",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 7)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 288.48,
           "height": 17.13,
           "y": 251.32,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 14,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_7_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 27.53
          },
          "image": {
           "x": 288.4,
           "height": 17.13,
           "y": 251.19,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 19,
              "width": 29,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_7.png"
             }
            ]
           },
           "width": 27.53
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_1E5A8B9A_0D91_E48D_4187_15A97A496FF0",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 8)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 495.22,
           "height": 14.7,
           "y": 276.8,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 8,
              "width": 12,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_8_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 23.28
          },
          "image": {
           "x": 495.1,
           "height": 14.7,
           "y": 276.7,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 25,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_8.png"
             }
            ]
           },
           "width": 23.28
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_1EABA0CC_0D90_A485_4199_CF77E08D40D3",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         },
         {
          "map": {
           "offsetY": 0,
           "x": 284.13,
           "height": 17,
           "y": 444.13,
           "class": "HotspotMapOverlayMap",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 9,
              "width": 16,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_9_map.gif"
             }
            ]
           },
           "offsetX": 0,
           "width": 30
          },
          "image": {
           "x": 284.05,
           "height": 17,
           "y": 444,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 19,
              "width": 32,
              "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_HS_9.png"
             }
            ]
           },
           "width": 30
          },
          "class": "AreaHotspotMapOverlay",
          "id": "overlay_0F974A03_1BED_DEB6_41AA_CFF7CD69C220",
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 4)"
           }
          ],
          "rollOverDisplay": false,
          "data": {
           "label": "Polygon"
          },
          "useHandCursor": true
         }
        ],
        "fieldOfViewOverlayOutsideColor": "#000000",
        "fieldOfViewOverlayInsideColor": "#000000",
        "label": "millennium_cave_floorplan",
        "class": "Map",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 543,
           "width": 721,
           "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A.jpeg"
          },
          {
           "class": "ImageResourceLevel",
           "grayscale": true,
           "height": 271,
           "width": 360,
           "url": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_lq.jpeg"
          }
         ]
        },
        "thumbnailUrl": "media/map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A_t.jpg",
        "initialZoomFactor": 1
       },
       "angle": 339.42
      }
     ],
     "vfov": 180,
     "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
     "pitch": 0,
     "partial": false,
     "label": "MC 1",
     "hfovMax": 120,
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C",
       "yaw": -97.31,
       "backwardYaw": -11.67,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_t.jpg",
          "overlays": [
           {
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
              }
             ]
            },
            "inertia": false,
            "hfov": 36,
            "rotate": false,
            "class": "TripodCapPanoramaOverlay",
            "id": "panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_tcap0",
            "angle": 0
           },
           {
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 103,
                 "width": 102,
                 "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "yaw": -159.34,
              "hfov": 11.34,
              "pitch": -8.75
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0771B928_1C97_BAF2_41B7_1CF249450FE4",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55, this.camera_2CA3B2A7_2336_16B4_41AA_409B148A6FE4); this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -159.34,
              "hfov": 11.34,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 206,
                 "width": 205,
                 "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -8.75
             }
            ]
           },
           {
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 103,
                 "width": 102,
                 "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": 40.74,
              "hfov": 11.2,
              "pitch": -12.58
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_074EB8FD_1C96_BB52_41B8_23EE3BE55B14",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304, this.camera_2CB5E282_2336_116C_4193_467A04219621); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 40.74,
              "hfov": 11.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 206,
                 "width": 205,
                 "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -12.58
             }
            ]
           },
           {
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 48,
                 "width": 48,
                 "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": -127.1,
              "hfov": 5.37,
              "pitch": -4.57
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0F404132_1CEB_8EE6_41B4_5FEA93AAFAC6",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.showPopupMedia(this.window_0FE6D0CB_1CEB_8FA5_4196_AC11051ABA84, this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3, this.playList_15EAF95D_1EEE_3394_41B7_BAE7C0E8CE74, '90%', '90%', false, false); this.playList_15EAF95D_1EEE_3394_41B7_BAE7C0E8CE74.set('selectedIndex', 0); "
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -127.1,
              "hfov": 5.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 96,
                 "width": 96,
                 "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -4.57
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
        "hfovMin": 60,
        "hfov": 360,
        "mapLocations": [
         {
          "x": 418,
          "y": 253.88,
          "class": "PanoramaMapLocation",
          "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
          "angle": 92.5
         }
        ],
        "vfov": 180,
        "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
        "pitch": 0,
        "partial": false,
        "label": "MC 9",
        "hfovMax": 120,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
          "yaw": 40.74,
          "backwardYaw": -30.16,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_t.jpg",
             "overlays": [
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
                 }
                ]
               },
               "inertia": false,
               "hfov": 36,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "id": "panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_tcap0",
               "angle": 0
              },
              {
               "data": {
                "label": "3D enhanced\u000dimage"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 32,
                    "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -109.99,
                 "hfov": 12.99,
                 "pitch": 9.86
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_098C6E17_1B9B_F6DE_41AE_2F40B5E8B9FE",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "This image can be viewed in stereoscopic, 3D with a VR headset!",
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -109.99,
                 "hfov": 12.99,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 115,
                    "width": 235,
                    "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": 9.86
                }
               ]
              },
              {
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 103,
                    "width": 102,
                    "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -8.61,
                 "hfov": 10.51,
                 "pitch": -23.67
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0581E24E_1C6A_4F4E_41B7_AC704F7BBA37",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D, this.camera_2CCAF2C9_2336_16FC_4133_7586F18DB690); this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -8.61,
                 "hfov": 10.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 206,
                    "width": 205,
                    "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -23.67
                }
               ]
              },
              {
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 103,
                    "width": 102,
                    "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 120.7,
                 "hfov": 10.51,
                 "pitch": -23.67
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_05276107_1C6A_CABE_4194_01FA5435D559",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142, this.camera_2CC532D8_2336_169C_41A7_58525C19A11C); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 120.7,
                 "hfov": 10.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 206,
                    "width": 205,
                    "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -23.67
                }
               ]
              }
             ],
             "stereoSphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 6434,
                "width": 6434,
                "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 4002,
                "width": 4002,
                "url": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
           "hfovMin": 60,
           "hfov": 360,
           "mapLocations": [
            {
             "x": 302.16,
             "y": 259.76,
             "class": "PanoramaMapLocation",
             "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
             "angle": -31.45
            }
           ],
           "vfov": 180,
           "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
           "pitch": 0,
           "partial": false,
           "label": "MC 8 - in 3D",
           "hfovMax": 120,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_t.jpg",
                "overlays": [
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
                    }
                   ]
                  },
                  "inertia": false,
                  "hfov": 36,
                  "rotate": false,
                  "class": "TripodCapPanoramaOverlay",
                  "id": "panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_tcap0",
                  "angle": 0
                 },
                 {
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 103,
                       "width": 102,
                       "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -100.04,
                    "hfov": 9.64,
                    "pitch": -32.85
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_05267AAA_1C6F_BFF6_41B5_089F78B320B9",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F, this.camera_2D492168_2336_13BC_41A2_9751218A4531); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -100.04,
                    "hfov": 9.64,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 206,
                       "width": 205,
                       "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -32.85
                   }
                  ]
                 },
                 {
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 103,
                       "width": 102,
                       "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -139.45,
                    "hfov": 11.32,
                    "pitch": -9.52
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_04F83A06_1C6E_5EBE_41AC_F06EAF1766E9",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55, this.camera_2D4DD177_2336_1394_41B9_7A384A8AB43B); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -139.45,
                    "hfov": 11.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 206,
                       "width": 205,
                       "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -9.52
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
              "hfovMin": 60,
              "hfov": 360,
              "mapLocations": [
               {
                "x": 217.92,
                "y": 135.25,
                "class": "PanoramaMapLocation",
                "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                "angle": 282.47
               }
              ],
              "vfov": 180,
              "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
              "pitch": 0,
              "partial": false,
              "label": "MC 7",
              "hfovMax": 120,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_t.jpg",
                   "overlays": [
                    {
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
                       }
                      ]
                     },
                     "inertia": false,
                     "hfov": 36,
                     "rotate": false,
                     "class": "TripodCapPanoramaOverlay",
                     "id": "panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_tcap0",
                     "angle": 0
                    },
                    {
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 103,
                          "width": 102,
                          "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": 114.2,
                       "hfov": 9.38,
                       "pitch": -35.15
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_04F974A5_1C76_4BF2_4184_CAA03C631FE7",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D, this.camera_2D7A4195_2336_1294_41AD_A987D16BD039); this.mainPlayList.set('selectedIndex', 7)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 114.2,
                       "hfov": 9.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 206,
                          "width": 205,
                          "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -35.15
                      }
                     ]
                    },
                    {
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 103,
                          "width": 102,
                          "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "yaw": -77.47,
                       "hfov": 10.69,
                       "pitch": -21.38
                      }
                     ],
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_04A963B7_1C75_CDDE_41A9_C067EFF38134",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6, this.camera_2D7CC1A4_2336_12B4_41B1_57002E74B0B2); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "rollOverDisplay": false,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -77.47,
                       "hfov": 10.69,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 206,
                          "width": 205,
                          "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -21.38
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
                 "hfovMin": 60,
                 "hfov": 360,
                 "mapLocations": [
                  {
                   "x": 213.83,
                   "y": 189.05,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                   "angle": 267.18
                  }
                 ],
                 "vfov": 180,
                 "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
                 "pitch": 0,
                 "partial": false,
                 "label": "MC 6",
                 "hfovMax": 120,
                 "class": "Panorama",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
                   "yaw": 114.2,
                   "backwardYaw": -100.04,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_t.jpg",
                      "overlays": [
                       {
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
                          }
                         ]
                        },
                        "inertia": false,
                        "hfov": 36,
                        "rotate": false,
                        "class": "TripodCapPanoramaOverlay",
                        "id": "panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_tcap0",
                        "angle": 0
                       },
                       {
                        "data": {
                         "label": "3D enhanced\u000dimage"
                        },
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 37,
                             "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 107.28,
                          "hfov": 13.74,
                          "pitch": 5.18
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_0828CAD0_1BAA_BF52_4166_688C2C867560",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "toolTip": "This image can be viewed in stereoscopic, 3D with a VR headset!",
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true
                         }
                        ],
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 107.28,
                          "hfov": 13.74,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 106,
                             "width": 246,
                             "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": 5.18
                         }
                        ]
                       },
                       {
                        "data": {
                         "label": "Image"
                        },
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 103,
                             "width": 102,
                             "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": 98.51,
                          "hfov": 10.9,
                          "pitch": -18.32
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_04E9E3A1_1C7A_CDF5_41B9_37E78D0CB12A",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 3)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 98.51,
                          "hfov": 10.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 206,
                             "width": 205,
                             "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -18.32
                         }
                        ]
                       },
                       {
                        "data": {
                         "label": "Image"
                        },
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 103,
                             "width": 102,
                             "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "yaw": -55.28,
                          "hfov": 10.77,
                          "pitch": -20.23
                         }
                        ],
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_04763AC9_1C76_5FB2_41B6_D642E1EC0AD4",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F, this.camera_2CF132E9_2336_16BC_41B6_3561A2DA8945); this.mainPlayList.set('selectedIndex', 6)"
                         }
                        ],
                        "rollOverDisplay": false,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -55.28,
                          "hfov": 10.77,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 206,
                             "width": 205,
                             "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -20.23
                         }
                        ]
                       }
                      ],
                      "stereoSphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 6434,
                         "width": 6434,
                         "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 4002,
                         "width": 4002,
                         "url": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
                    "hfovMin": 60,
                    "hfov": 360,
                    "mapLocations": [
                     {
                      "x": 220.21,
                      "y": 335.31,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                      "angle": 45.38
                     }
                    ],
                    "vfov": 180,
                    "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
                    "pitch": 0,
                    "partial": false,
                    "label": "MC 5 - in 3D",
                    "hfovMax": 120,
                    "class": "Panorama",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
                      "yaw": -55.28,
                      "backwardYaw": -77.47,
                      "distance": 1
                     }
                    ],
                    "thumbnailUrl": "media/panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_t.jpg"
                   },
                   "yaw": -77.47,
                   "backwardYaw": -55.28,
                   "distance": 1
                  }
                 ],
                 "thumbnailUrl": "media/panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_t.jpg"
                },
                "yaw": -100.04,
                "backwardYaw": 114.2,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
                "yaw": -139.45,
                "backwardYaw": -8.61,
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_t.jpg"
             },
             "yaw": -8.61,
             "backwardYaw": -139.45,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
             "yaw": 120.7,
             "backwardYaw": -159.34,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_t.jpg"
          },
          "yaw": -159.34,
          "backwardYaw": 120.7,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_t.jpg"
       },
       "yaw": -30.16,
       "backwardYaw": 40.74,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_t.jpg",
          "overlays": [
           {
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
              }
             ]
            },
            "inertia": false,
            "hfov": 36,
            "rotate": false,
            "class": "TripodCapPanoramaOverlay",
            "id": "panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_tcap0",
            "angle": 0
           },
           {
            "data": {
             "label": "3D enhanced\u000dimage"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 35,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_0_0_map.gif"
                }
               ]
              },
              "yaw": 148.35,
              "hfov": 13.87,
              "pitch": 1.24
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1BF00C3B_0CF1_A382_416D_65F1405CB4C1",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "This image can be viewed in stereoscopic, 3D with a VR headset!",
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 148.35,
              "hfov": 13.87,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 111,
                 "width": 247,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_0_0.png"
                }
               ]
              },
              "pitch": 1.24
             }
            ]
           },
           {
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 50,
                 "width": 49,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "yaw": -27.93,
              "hfov": 5.31,
              "pitch": -17.98
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0B08A3AC_1C6A_CDF2_418C_E0C1726385FF",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304, this.camera_2D6E81C9_2336_12FF_41B2_3CE3CEDC1A99); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -27.93,
              "hfov": 5.31,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 100,
                 "width": 99,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -17.98
             }
            ]
           },
           {
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 50,
                 "width": 49,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "yaw": -170.31,
              "hfov": 5.41,
              "pitch": -14.39
             }
            ],
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0B7D2C7C_1C6A_FB52_41B4_00B2D9C883E1",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC, this.camera_2D75D1BB_2336_129C_41A2_9BDDDF73C4C6); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -170.31,
              "hfov": 5.41,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 100,
                 "width": 99,
                 "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -14.39
             }
            ]
           }
          ],
          "stereoSphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 6434,
             "width": 6434,
             "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 4002,
             "width": 4002,
             "url": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
        "hfovMin": 60,
        "hfov": 360,
        "mapLocations": [
         {
          "x": 390.33,
          "y": 361.41,
          "class": "PanoramaMapLocation",
          "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
          "angle": 42.03
         }
        ],
        "vfov": 180,
        "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
        "pitch": 0,
        "partial": false,
        "label": "MC 2 - in 3D",
        "hfovMax": 120,
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_t.jpg",
             "overlays": [
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
                 }
                ]
               },
               "inertia": false,
               "hfov": 36,
               "rotate": false,
               "class": "TripodCapPanoramaOverlay",
               "id": "panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_tcap0",
               "angle": 0
              },
              {
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 103,
                    "width": 102,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": -45.72,
                 "hfov": 10.32,
                 "pitch": -25.97
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0B00A987_1C76_7DBE_418F_2FD00BFB90AA",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8, this.camera_2D6011D9_2336_129C_41A7_B29D5F414B68); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -45.72,
                 "hfov": 10.32,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 206,
                    "width": 205,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -25.97
                }
               ]
              },
              {
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 103,
                    "width": 102,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 99.66,
                 "hfov": 11.09,
                 "pitch": -14.87
                }
               ],
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0BC509FD_1C7B_BD52_41AF_1777A1DCE6CD",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13, this.camera_2C984201_2336_116F_41B5_E79BBF6EC4AD); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 99.66,
                 "hfov": 11.09,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 206,
                    "width": 205,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -14.87
                }
               ]
              },
              {
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 48,
                    "width": 48,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "yaw": 10.2,
                 "hfov": 5.32,
                 "pitch": -9.3
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0B8907A7_1C23_DF41_41AB_10AA447925C4",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.showPopupMedia(this.window_0BD44083_1C20_5141_41AA_04C2D3C4D7F1, this.album_09379898_1CE1_F14F_4193_2F70D849DF0F, this.playList_15EE8950_1EEE_33EC_41B6_59F69010DCEB, '90%', '90%', false, false); this.playList_15EE8950_1EEE_33EC_41B6_59F69010DCEB.set('selectedIndex', 0); ; this.showPopupMedia(this.window_118D8D24_1CE8_B6E2_41AF_9A026A0548F7, this.album_09379898_1CE1_F14F_4193_2F70D849DF0F, this.playList_15EE094D_1EEE_33F4_416C_2DB3C8B5B446, '90%', '90%', false, false); this.playList_15EE094D_1EEE_33F4_416C_2DB3C8B5B446.set('selectedIndex', 0); "
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 10.2,
                 "hfov": 5.32,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 96,
                    "width": 96,
                    "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -9.3
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
           "hfovMin": 60,
           "hfov": 360,
           "mapLocations": [
            {
             "x": 340.6,
             "y": 417.33,
             "class": "PanoramaMapLocation",
             "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
             "angle": -63.78
            }
           ],
           "vfov": 180,
           "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
           "pitch": 0,
           "partial": false,
           "label": "MC 3",
           "hfovMax": 120,
           "class": "Panorama",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_t.jpg",
                "overlays": [
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_tcap0.png"
                    }
                   ]
                  },
                  "inertia": false,
                  "hfov": 36,
                  "rotate": false,
                  "class": "TripodCapPanoramaOverlay",
                  "id": "panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_tcap0",
                  "angle": 0
                 },
                 {
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 103,
                       "width": 102,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 112.67,
                    "hfov": 10.25,
                    "pitch": -26.73
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_046EF00C_1C7E_CAB2_4191_72EDA6734158",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC, this.camera_2CDE12B9_2336_169C_41A5_1F35A8C508FC); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 112.67,
                    "hfov": 10.25,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 206,
                       "width": 205,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -26.73
                   }
                  ]
                 },
                 {
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 103,
                       "width": 102,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": 11.67,
                    "hfov": 10.8,
                    "pitch": -19.85
                   }
                  ],
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_04206C88_1C7A_7BB2_418F_E17C3B6A8DE8",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 11.67,
                    "hfov": 10.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 206,
                       "width": 205,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -19.85
                   }
                  ]
                 },
                 {
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 48,
                       "width": 48,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "yaw": -98.51,
                    "hfov": 5.37,
                    "pitch": -4.57
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_12DAE53C_1CE9_96E2_4187_F400236FEA5D",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.showPopupMedia(this.window_13769AFE_1CE9_F35E_41AD_2854A6F542F2, this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D, this.playList_15EFE954_1EEE_3394_41B1_7845B6FBE58F, '90%', '90%', false, false); this.playList_15EFE954_1EEE_3394_41B1_7845B6FBE58F.set('selectedIndex', 0); "
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -98.51,
                    "hfov": 5.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 96,
                       "width": 96,
                       "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -4.57
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8",
              "hfovMin": 60,
              "hfov": 360,
              "mapLocations": [
               {
                "x": 299.05,
                "y": 452.5,
                "class": "PanoramaMapLocation",
                "map": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
                "angle": -45.55
               }
              ],
              "vfov": 180,
              "cardboardMenu": "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
              "pitch": 0,
              "partial": false,
              "label": "MC 4",
              "hfovMax": 120,
              "class": "Panorama",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
                "yaw": 112.67,
                "backwardYaw": -45.72,
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_t.jpg"
             },
             "yaw": -45.72,
             "backwardYaw": 112.67,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
             "yaw": 99.66,
             "backwardYaw": -170.31,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_t.jpg"
          },
          "yaw": -170.31,
          "backwardYaw": 99.66,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
          "yaw": -27.93,
          "backwardYaw": -83.52,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_t.jpg"
       },
       "yaw": -83.52,
       "backwardYaw": -27.93,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_t.jpg"
    },
    "yaw": -11.67,
    "backwardYaw": -97.31,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_t.jpg"
 },
 {
  "viewerArea": {
   "toolTipFontFamily": "Arial",
   "transitionDuration": 500,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipDisplayTime": 1000,
   "toolTipPaddingLeft": 6,
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "shadow": false,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "borderSize": 0,
   "playbackBarBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "class": "ViewerArea",
   "toolTipOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBorderSize": 0,
   "playbackBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "progressHeight": 10,
   "progressBottom": 0,
   "progressOpacity": 1,
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontSize": 15,
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "borderRadius": 0,
   "progressBackgroundOpacity": 1,
   "top": 25,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarOpacity": 1,
   "bottom": 100,
   "playbackBarHeadShadow": true,
   "progressBarOpacity": 1,
   "paddingLeft": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderColor": "#767676",
   "id": "MainViewer",
   "progressBorderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarBorderColor": "#FFFFFF",
   "minHeight": 50,
   "progressBorderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontColor": "#606060",
   "playbackBarHeadShadowBlurRadius": 3,
   "minWidth": 100,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "playbackBarBottom": 5,
   "playbackBarHeadHeight": 15,
   "progressBorderColor": "#000000",
   "toolTipFontWeight": "normal",
   "progressBarBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingBottom": 0,
   "left": 25,
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "playbackBarRight": 0,
   "toolTipBorderRadius": 3,
   "right": 25
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeEnabled": true,
  "buttonCardboardView": {
   "bottom": 43,
   "verticalAlign": "middle",
   "paddingLeft": 0,
   "maxHeight": 23,
   "iconURL": "skin/IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB.png",
   "id": "IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB",
   "minHeight": 1,
   "backgroundOpacity": 0,
   "shadow": false,
   "borderSize": 0,
   "minWidth": 1,
   "mode": "push",
   "class": "IconButton",
   "horizontalAlign": "center",
   "cursor": "hand",
   "width": 35,
   "height": 23,
   "paddingBottom": 0,
   "data": {
    "name": "IconButton1773"
   },
   "paddingRight": 0,
   "paddingTop": 0,
   "borderRadius": 0,
   "maxWidth": 35,
   "right": 279,
   "transparencyActive": false
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.79,
   "pitch": -12.61
  },
  "class": "PanoramaCamera",
  "id": "panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304",
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "toolTipFontFamily": "Arial",
   "transitionDuration": 500,
   "playbackBarProgressBorderSize": 0,
   "toolTipDisplayTime": 1000,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingLeft": 6,
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "shadow": false,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "borderSize": 0,
   "playbackBarBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "class": "ViewerArea",
   "toolTipOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBorderSize": 0,
   "playbackBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "width": "25%",
   "height": "30%",
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "progressHeight": 10,
   "progressBottom": 2,
   "progressOpacity": 1,
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontSize": 15,
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "borderRadius": 0,
   "progressBackgroundOpacity": 1,
   "top": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarOpacity": 1,
   "toolTipFontStyle": "normal",
   "playbackBarHeadShadow": true,
   "progressBarOpacity": 1,
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "id": "MapViewer",
   "progressBorderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarBorderColor": "#FFFFFF",
   "minHeight": 1,
   "progressBorderRadius": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontColor": "#606060",
   "playbackBarHeadShadowBlurRadius": 3,
   "minWidth": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "playbackBarBottom": 0,
   "playbackBarHeadHeight": 15,
   "progressBorderColor": "#000000",
   "toolTipFontWeight": "normal",
   "progressBarBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingBottom": 0,
   "playbackBarHeight": 10,
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "playbackBarRight": 0,
   "toolTipBorderRadius": 3,
   "right": 0.05
  },
  "movementMode": "constrained"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.71,
   "pitch": 9.07
  },
  "class": "PanoramaCamera",
  "id": "panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.44,
   "pitch": 1.47
  },
  "class": "PanoramaCamera",
  "id": "panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -57.27,
   "pitch": -17.77
  },
  "class": "PanoramaCamera",
  "id": "panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.38,
   "pitch": -11.11
  },
  "class": "PanoramaCamera",
  "id": "panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -77.49,
   "pitch": -10.38
  },
  "class": "PanoramaCamera",
  "id": "panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.09,
   "pitch": -8.88
  },
  "class": "PanoramaCamera",
  "id": "panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.58,
   "pitch": -9.55
  },
  "class": "PanoramaCamera",
  "id": "panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 113.39,
   "pitch": -9.97
  },
  "class": "PanoramaCamera",
  "id": "panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_camera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142",
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 102.2,
   "pitch": 5.8
  },
  "class": "PanoramaCamera",
  "id": "panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_camera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D5AD130_2336_13AC_418C_B7306134188A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D5AD130_2336_13AC_418C_B7306134188A",
    "camera": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D5A2131_2336_13AC_4181_4F8DB8E9DEAA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D5A2131_2336_13AC_4181_4F8DB8E9DEAA",
    "camera": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D5A7132_2336_13AC_41B4_E385E85B7906, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D5A7132_2336_13AC_41B4_E385E85B7906",
    "camera": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D59C133_2336_1393_4185_0ADC06428B58, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D59C133_2336_1393_4185_0ADC06428B58",
    "camera": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D592134_2336_1395_41A6_5D537EAD1D9D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D592134_2336_1395_41A6_5D537EAD1D9D",
    "camera": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D597136_2336_1394_41B9_D97065736F87, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D597136_2336_1394_41B9_D97065736F87",
    "camera": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D58C137_2336_1394_41B0_E3C2E04AC1FA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D58C137_2336_1394_41B0_E3C2E04AC1FA",
    "camera": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D580138_2336_139C_4182_4D5EBC67A024, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D580138_2336_139C_4182_4D5EBC67A024",
    "camera": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2D585139_2336_139C_41A8_C3DB736258B7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2D585139_2336_139C_41A8_C3DB736258B7",
    "camera": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 0, 1)",
    "media": "this.panorama_E7375AC4_E91E_D1AD_41E7_DB32BDB7A62C"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 1, 2)",
    "media": "this.panorama_E737B991_E91E_53A7_41C9_573EEBB1A304"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 2, 3)",
    "media": "this.panorama_1E5F1DAC_0C90_9C85_419C_4231F7D18A13"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 3, 4)",
    "media": "this.panorama_E737A0D2_E91E_31A5_41D8_CC2DDEF9DDEC"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 4, 5)",
    "media": "this.panorama_E7361762_E91E_5F65_41E4_E3E3B8A473A8"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 5, 6)",
    "media": "this.panorama_0AC8679E_14B0_AC85_41B0_2B31CD91E9A6"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 6, 7)",
    "media": "this.panorama_E7362B44_E91E_30AD_41CE_EC47F27F158F"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 7, 8)",
    "media": "this.panorama_E737A810_E91F_D0A5_41DE_C12A5D2E3D1D"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 8, 9)",
    "media": "this.panorama_169F938C_1BBA_CDB2_41B2_46422D12DC55"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist, 9, 0)",
    "media": "this.panorama_E736638C_E91E_57BE_41DA_F0185E0A7142"
   }
  ]
 },
 {
  "id": "album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108",
  "label": "Gearing Up",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA",
      "label": "1",
      "width": 2048,
      "duration": 3500,
      "height": 1367,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92",
      "label": "Millennium-5",
      "width": 6016,
      "duration": 3500,
      "height": 4016,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E4137992_F269_84F6_41E6_54A3E23F93F2",
      "label": "4",
      "width": 1367,
      "duration": 3500,
      "height": 2048,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E4137992_F269_84F6_41E6_54A3E23F93F2.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E4137992_F269_84F6_41E6_54A3E23F93F2_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694",
      "label": "6",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E53DC568_F258_8C52_41DC_7182E755B0AE",
      "label": "Millennium-17",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E53DC568_F258_8C52_41DC_7182E755B0AE.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E53DC568_F258_8C52_41DC_7182E755B0AE_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7",
      "label": "Millennium-23",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7_t.jpg"
     }
    }
   ]
  }
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
  "viewerArea": {
   "toolTipFontFamily": "Arial",
   "transitionDuration": 500,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipDisplayTime": 1000,
   "toolTipPaddingLeft": 6,
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "shadow": false,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowBlurRadius": 3,
   "borderSize": 0,
   "playbackBarBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "class": "ViewerArea",
   "toolTipOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "progressLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBorderSize": 0,
   "playbackBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "progressHeight": 10,
   "progressBottom": 2,
   "progressOpacity": 1,
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontSize": 15,
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "borderRadius": 0,
   "progressBackgroundOpacity": 1,
   "top": 25,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarOpacity": 1,
   "bottom": 100,
   "playbackBarHeadShadow": true,
   "progressBarOpacity": 1,
   "paddingLeft": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderColor": "#767676",
   "id": "ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612B",
   "progressBorderSize": 0,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarBorderColor": "#FFFFFF",
   "minHeight": 1,
   "progressBorderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipFontColor": "#606060",
   "playbackBarHeadShadowBlurRadius": 3,
   "minWidth": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "playbackBarBottom": 0,
   "playbackBarHeadHeight": 15,
   "progressBorderColor": "#000000",
   "toolTipFontWeight": "normal",
   "progressBarBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingRight": 6,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingBottom": 0,
   "left": 25,
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingTop": 0,
   "playbackBarRight": 0,
   "toolTipBorderRadius": 3,
   "right": 25
  }
 },
 "this.photo_E12DB0A7_EED8_84DE_41ED_72E1169F3DFA",
 "this.photo_E76CE3A6_F1A8_84DE_41ED_467DF4B4FF92",
 "this.photo_E4137992_F269_84F6_41E6_54A3E23F93F2",
 "this.photo_E1895D47_EED8_BC5E_41E6_F9DBAFC3E694",
 "this.photo_E53DC568_F258_8C52_41DC_7182E755B0AE",
 "this.photo_E5AD29B4_F269_8432_41E8_34D4232AD5F7",
 {
  "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B",
  "label": "The Descent",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E4045852_F259_8476_41CC_8EC3286A6EAA",
      "label": "Millennium-15",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E4045852_F259_8476_41CC_8EC3286A6EAA.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E4045852_F259_8476_41CC_8EC3286A6EAA_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3",
      "label": "21",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_3_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E472C1EE_F3D8_842E_41E2_668800975D99",
      "label": "Millennium-206",
      "width": 2624,
      "duration": 3500,
      "height": 3936,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E472C1EE_F3D8_842E_41E2_668800975D99.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E472C1EE_F3D8_842E_41E2_668800975D99_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873",
      "label": "Millennium-225",
      "width": 2624,
      "duration": 3500,
      "height": 3936,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E5A7344F_F3D8_8C6E_41BB_2FEB419DD873_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE",
      "label": "Millennium-28",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E476A38E_F3D8_84EE_41D8_FE83EF5755BE_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2",
      "label": "20",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B_2_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA",
      "label": "Millennium-201",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E461928F_F3DB_84EE_41C9_5C829FAF7FFA_t.jpg"
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
  "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F",
  "label": "Setting Up",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1",
      "label": "Millennium-115",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_1_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA",
      "label": "Millennium-162",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E4B406FD_F3A8_8C32_41C9_04F011B075DA_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2",
      "label": "Millennium-173",
      "width": 2624,
      "duration": 3500,
      "height": 3936,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_08FA8AA2_1CE7_B140_41B7_80A844C3BFA2_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127",
      "label": "Millennium-157",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_08D82E65_1D18_9362_41BA_5CBC8A2E6127_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_outside"
     },
     "media": {
      "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0",
      "label": "Millennium-103",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_0_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7",
      "label": "Millennium-109",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_0847D59A_1CE1_D343_41A2_8C1A6FB6D4F7_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2",
      "label": "Millennium-119",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F_2_t.jpg"
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
  "id": "album_FADF1122_E912_30EA_41E5_F98BE5570FF3",
  "label": "The Cave",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_FADF1122_E912_30EA_41E5_F98BE5570FF3_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_FADF1122_E912_30EA_41E5_F98BE5570FF3_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0",
      "label": "10",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_FADF1122_E912_30EA_41E5_F98BE5570FF3_0_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_FA797335_E911_D0EF_41C1_DB53A6680A42",
      "label": "7",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_FA797335_E911_D0EF_41C1_DB53A6680A42.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_FA797335_E911_D0EF_41C1_DB53A6680A42_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9",
      "label": "12",
      "width": 1365,
      "duration": 3500,
      "height": 2048,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_ECA1F86A_F269_8456_41C0_4D3289B20EE9_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_ECA11B56_F269_847E_41C9_0F826C520A98",
      "label": "13",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_ECA11B56_F269_847E_41C9_0F826C520A98.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_ECA11B56_F269_847E_41C9_0F826C520A98_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_ECA130AE_F269_842E_41ED_49FF726CAEDA",
      "label": "16",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_ECA130AE_F269_842E_41ED_49FF726CAEDA.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_ECA130AE_F269_842E_41ED_49FF726CAEDA_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E59655BE_F3D8_8C2E_41E4_813907748531",
      "label": "11",
      "width": 2048,
      "duration": 3500,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E59655BE_F3D8_8C2E_41E4_813907748531.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E59655BE_F3D8_8C2E_41E4_813907748531_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040",
      "label": "Millennium-77",
      "width": 2624,
      "duration": 3500,
      "height": 3936,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E5FEA787_F3A7_8CDE_41E9_E4F98C331040_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "media": {
      "id": "photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1",
      "label": "Millennium-84",
      "width": 3936,
      "duration": 3500,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_E5D1996F_F3A8_842E_41C1_51B02C4B56E1_t.jpg"
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
  "class": "PlayList",
  "id": "ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 0, 1); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_FE0C3098_E97F_F1A5_41CC_2BFAFB5CB108"
   },
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 1, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 1, 2); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_FE69EC42_EEE7_BC56_41E1_CA4A78832A6B"
   },
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 2, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 2, 3); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_E55FA825_F3AB_83D2_41C8_0CC5E0FD842F"
   },
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "start": "this.changeBackgroundWhilePlay(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 3, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist, 3, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_FADF1122_E912_30EA_41E5_F98BE5570FF3"
   }
  ]
 },
 {
  "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9",
  "label": "Toad",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.62",
       "zoomFactor": 1.1,
       "y": "0.28"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0",
      "label": "Toad 1",
      "width": 3936,
      "duration": 5000,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.54",
       "zoomFactor": 1.1,
       "y": "0.70"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1",
      "label": "Toad 2",
      "width": 3936,
      "duration": 5000,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.41",
       "zoomFactor": 1.1,
       "y": "0.28"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2",
      "label": "Toad 3",
      "width": 3936,
      "duration": 5000,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2_t.jpg"
     }
    }
   ]
  }
 },
 "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_0",
 "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_1",
 "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_2",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_2D210116_2336_1394_41A8_6B485D9F9171, [this.htmltext_2D211117_2336_1394_41B0_AD4A26E4B355,this.component_2D214118_2336_139C_41B6_72902D93B360,this.component_2D215118_2336_139C_41B1_BE7B131585BB], 2000)",
  "class": "PlayList",
  "id": "playList_1415C944_1EEE_33F5_41AA_5D179FDEB4AF",
  "items": [
   {
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid1412E945_1EEE_33F4_4193_372703212948PhotoAlbumPlayer",
     "viewerArea": {
      "toolTipFontFamily": "Arial",
      "transitionDuration": 500,
      "playbackBarProgressBorderSize": 0,
      "toolTipDisplayTime": 1000,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingLeft": 6,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "shadow": false,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "class": "ViewerArea",
      "toolTipOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "progressHeight": 10,
      "progressBottom": 2,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderRadius": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "progressBarOpacity": 1,
      "paddingLeft": 0,
      "id": "viewer_uid2D21E115_2336_1397_418B_DE76B332CF19",
      "progressBorderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBorderColor": "#FFFFFF",
      "minHeight": 50,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontColor": "#606060",
      "playbackBarHeadShadowBlurRadius": 3,
      "minWidth": 100,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "playbackBarHeight": 10,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "playbackBarRight": 0,
      "toolTipBorderRadius": 3
     }
    },
    "start": "this.changeBackgroundWhilePlay(this.playList_1415C944_1EEE_33F5_41AA_5D179FDEB4AF, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_14123947_1EEE_33F4_419B_FF4142BB1AC5",
    "begin": "this.updateMediaLabelFromPlayList(this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList, this.htmltext_2D211117_2336_1394_41B0_AD4A26E4B355, this.albumitem_14123947_1EEE_33F4_419B_FF4142BB1AC5); this.loopAlbum(this.playList_1415C944_1EEE_33F5_41AA_5D179FDEB4AF, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9"
   }
  ]
 },
 {
  "id": "album_09379898_1CE1_F14F_4193_2F70D849DF0F",
  "label": "Photo Album Millennium-89",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_09379898_1CE1_F14F_4193_2F70D849DF0F_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.48",
       "zoomFactor": 1.1,
       "y": "0.32"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "album_09379898_1CE1_F14F_4193_2F70D849DF0F_0",
      "label": "Millennium-89",
      "width": 2624,
      "duration": 5000,
      "height": 3936,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_09379898_1CE1_F14F_4193_2F70D849DF0F_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_09379898_1CE1_F14F_4193_2F70D849DF0F_0_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1.1,
       "y": "0.50"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70",
      "label": "Millennium-85",
      "width": 3936,
      "duration": 5000,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70_t.jpg"
     }
    }
   ]
  }
 },
 "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_0",
 "this.photo_0FDC5724_1CFB_B2E2_4174_5BCD62264C70",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_2D27811B_2336_139C_41C0_8F1DFFFB1A77, [this.htmltext_2D27A11C_2336_1394_41A3_D69C44A0B738,this.component_2D27D11D_2336_1394_41B5_79D5BFE2DB74,this.component_2D27E11D_2336_1394_419A_AB15CEEA0A7E], 2000)",
  "class": "PlayList",
  "id": "playList_15EE094D_1EEE_33F4_416C_2DB3C8B5B446",
  "items": [
   {
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid15EE294D_1EEE_33F4_41B3_781CCF81381DPhotoAlbumPlayer",
     "viewerArea": {
      "toolTipFontFamily": "Arial",
      "transitionDuration": 500,
      "playbackBarProgressBorderSize": 0,
      "toolTipDisplayTime": 1000,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingLeft": 6,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "shadow": false,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "class": "ViewerArea",
      "toolTipOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "progressHeight": 10,
      "progressBottom": 2,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderRadius": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "progressBarOpacity": 1,
      "paddingLeft": 0,
      "id": "viewer_uid2D20611B_2336_139C_41B6_FE7BE28A8638",
      "progressBorderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBorderColor": "#FFFFFF",
      "minHeight": 50,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontColor": "#606060",
      "playbackBarHeadShadowBlurRadius": 3,
      "minWidth": 100,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "playbackBarHeight": 10,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "playbackBarRight": 0,
      "toolTipBorderRadius": 3
     }
    },
    "start": "this.changeBackgroundWhilePlay(this.playList_15EE094D_1EEE_33F4_416C_2DB3C8B5B446, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_15EE594D_1EEE_33F4_4189_6662F352EADB",
    "begin": "this.updateMediaLabelFromPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, this.htmltext_2D27A11C_2336_1394_41A3_D69C44A0B738, this.albumitem_15EE594D_1EEE_33F4_4189_6662F352EADB); this.loopAlbum(this.playList_15EE094D_1EEE_33F4_416C_2DB3C8B5B446, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F"
   }
  ]
 },
 {
  "change": "this.showComponentsWhileMouseOver(this.container_2D27211E_2336_1394_41B9_5F44DD6B2E9E, [this.htmltext_2D27411E_2336_1395_41B1_3CFC8A471831,this.component_2D27711F_2336_1394_419A_430572038C75,this.component_2D268120_2336_13AC_41AF_0FA3CB6D5580], 2000)",
  "class": "PlayList",
  "id": "playList_15EE8950_1EEE_33EC_41B6_59F69010DCEB",
  "items": [
   {
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid15EEA950_1EEE_33EC_417D_1E41BEA59C4CPhotoAlbumPlayer",
     "viewerArea": {
      "toolTipFontFamily": "Arial",
      "transitionDuration": 500,
      "playbackBarProgressBorderSize": 0,
      "toolTipDisplayTime": 1000,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingLeft": 6,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "shadow": false,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "class": "ViewerArea",
      "toolTipOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "progressHeight": 10,
      "progressBottom": 2,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderRadius": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "progressBarOpacity": 1,
      "paddingLeft": 0,
      "id": "viewer_uid2D27111D_2336_1394_41B7_2550CFB1BFD1",
      "progressBorderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBorderColor": "#FFFFFF",
      "minHeight": 50,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontColor": "#606060",
      "playbackBarHeadShadowBlurRadius": 3,
      "minWidth": 100,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "playbackBarHeight": 10,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "playbackBarRight": 0,
      "toolTipBorderRadius": 3
     }
    },
    "start": "this.changeBackgroundWhilePlay(this.playList_15EE8950_1EEE_33EC_41B6_59F69010DCEB, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_15EED951_1EEE_33EC_41A9_D86B0F58AE53",
    "begin": "this.updateMediaLabelFromPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, this.htmltext_2D27411E_2336_1395_41B1_3CFC8A471831, this.albumitem_15EED951_1EEE_33EC_41A9_D86B0F58AE53); this.loopAlbum(this.playList_15EE8950_1EEE_33EC_41B6_59F69010DCEB, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_09379898_1CE1_F14F_4193_2F70D849DF0F"
   }
  ]
 },
 {
  "id": "album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D",
  "label": "Thermometer",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.70",
       "zoomFactor": 1.1,
       "y": "0.31"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_outside",
      "duration": 5000
     },
     "media": {
      "id": "album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0",
      "label": "Thermometer",
      "width": 2048,
      "duration": 5000,
      "height": 1365,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0_t.jpg"
     }
    }
   ]
  }
 },
 "this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_0",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_2D263122_2336_13AC_41BE_98C321E456BE, [this.htmltext_2D265122_2336_13AC_4196_309BA5BCEC4E,this.component_2D259123_2336_13AC_41B5_4DB7FD788FEB,this.component_2D25A123_2336_13AC_4182_D3C8E09921B9], 2000)",
  "class": "PlayList",
  "id": "playList_15EFE954_1EEE_3394_41B1_7845B6FBE58F",
  "items": [
   {
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid15EF2954_1EEE_3394_4185_274406B53CD2PhotoAlbumPlayer",
     "viewerArea": {
      "toolTipFontFamily": "Arial",
      "transitionDuration": 500,
      "playbackBarProgressBorderSize": 0,
      "toolTipDisplayTime": 1000,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingLeft": 6,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "shadow": false,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "class": "ViewerArea",
      "toolTipOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "progressHeight": 10,
      "progressBottom": 2,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderRadius": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "progressBarOpacity": 1,
      "paddingLeft": 0,
      "id": "viewer_uid2D260121_2336_13AC_41A7_FD9467BFE036",
      "progressBorderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBorderColor": "#FFFFFF",
      "minHeight": 50,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontColor": "#606060",
      "playbackBarHeadShadowBlurRadius": 3,
      "minWidth": 100,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "playbackBarHeight": 10,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "playbackBarRight": 0,
      "toolTipBorderRadius": 3
     }
    },
    "start": "this.changeBackgroundWhilePlay(this.playList_15EFE954_1EEE_3394_41B1_7845B6FBE58F, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_15EF4955_1EEE_3394_41BD_2270D6223257",
    "begin": "this.updateMediaLabelFromPlayList(this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList, this.htmltext_2D265122_2336_13AC_4196_309BA5BCEC4E, this.albumitem_15EF4955_1EEE_3394_41BD_2270D6223257); this.loopAlbum(this.playList_15EFE954_1EEE_3394_41B1_7845B6FBE58F, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D"
   }
  ]
 },
 {
  "id": "album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3",
  "label": "Photo Album Millennium-152",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.74",
       "zoomFactor": 1.1,
       "y": "0.57"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0",
      "label": "Millennium-152",
      "width": 4016,
      "duration": 5000,
      "height": 6016,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0_t.jpg"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.44",
       "zoomFactor": 1.1,
       "y": "0.67"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6",
      "label": "Millennium-195",
      "width": 3936,
      "duration": 5000,
      "height": 2624,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6_t.jpg"
     }
    }
   ]
  }
 },
 "this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_0",
 "this.photo_081A80C6_1CE9_8FAE_4145_3357B94D5BA6",
 {
  "change": "this.showComponentsWhileMouseOver(this.container_2D246129_2336_13BC_41C0_059632959735, [this.htmltext_2D5B812A_2336_13BC_419D_BC001A3B4FC9,this.component_2D5BB12B_2336_13BC_41AF_6A49BFB7BA6E,this.component_2D5BC12B_2336_13BC_41BA_2DD65744FAD0], 2000)",
  "class": "PlayList",
  "id": "playList_15EAF95D_1EEE_3394_41B7_BAE7C0E8CE74",
  "items": [
   {
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid15EA095D_1EEE_3394_416C_17B13A4EC212PhotoAlbumPlayer",
     "viewerArea": {
      "toolTipFontFamily": "Arial",
      "transitionDuration": 500,
      "playbackBarProgressBorderSize": 0,
      "toolTipDisplayTime": 1000,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowOpacity": 0,
      "toolTipPaddingLeft": 6,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "shadow": false,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "borderSize": 0,
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "class": "ViewerArea",
      "toolTipOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderSize": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "progressHeight": 10,
      "progressBottom": 2,
      "progressOpacity": 1,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadow": true,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "borderRadius": 0,
      "progressBackgroundOpacity": 1,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "progressBarOpacity": 1,
      "paddingLeft": 0,
      "id": "viewer_uid2D244129_2336_13BC_41B9_0D6EF2AA67EE",
      "progressBorderSize": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBorderColor": "#FFFFFF",
      "minHeight": 50,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontColor": "#606060",
      "playbackBarHeadShadowBlurRadius": 3,
      "minWidth": 100,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarLeft": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadHeight": 15,
      "progressBorderColor": "#000000",
      "toolTipFontWeight": "normal",
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipPaddingRight": 6,
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "playbackBarHeight": 10,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "playbackBarRight": 0,
      "toolTipBorderRadius": 3
     }
    },
    "start": "this.changeBackgroundWhilePlay(this.playList_15EAF95D_1EEE_3394_41B7_BAE7C0E8CE74, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_15EA395E_1EEE_3394_41B5_665A67A3897B",
    "begin": "this.updateMediaLabelFromPlayList(this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList, this.htmltext_2D5B812A_2336_13BC_419D_BC001A3B4FC9, this.albumitem_15EA395E_1EEE_3394_41B5_665A67A3897B); this.loopAlbum(this.playList_15EAF95D_1EEE_3394_41B7_BAE7C0E8CE74, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3"
   }
  ]
 },
 "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A",
 {
  "class": "PlayList",
  "id": "playList_2D5B912E_2336_13B4_41B4_F9107AE50B97",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "media": "this.map_FECBD3B4_EE22_EF79_41E4_18FA1BB3E63A"
   }
  ]
 },
 {
  "id": "album_114D2279_125B_8432_4174_627614C1991C",
  "label": "Millennium Cave",
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_114D2279_125B_8432_4174_627614C1991C_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_114D2279_125B_8432_4174_627614C1991C_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.65",
       "zoomFactor": 1.1,
       "y": "0.39"
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "scaleMode": "fit_inside",
      "duration": 5000
     },
     "media": {
      "id": "album_114D2279_125B_8432_4174_627614C1991C_0",
      "label": "Millennium Cave",
      "width": 1000,
      "duration": 5000,
      "height": 1187,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_114D2279_125B_8432_4174_627614C1991C_0.jpg"
        }
       ]
      },
      "thumbnailUrl": "media/album_114D2279_125B_8432_4174_627614C1991C_0_t.jpg"
     }
    }
   ]
  }
 },
 "this.album_114D2279_125B_8432_4174_627614C1991C_0",
 {
  "class": "PlayList",
  "id": "playList_2D5BF12E_2336_13B4_4188_E21DB2B3C0D1",
  "items": [
   {
    "player": "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612BPhotoAlbumPlayer",
    "start": "this.changeBackgroundWhilePlay(this.playList_2D5BF12E_2336_13B4_4188_E21DB2B3C0D1, 0, '#999999')",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.loopAlbum(this.playList_2D5BF12E_2336_13B4_4188_E21DB2B3C0D1, 0); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, true, -1, this.effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3, false, -1, this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF, 'hideEffect', false)",
    "media": "this.album_114D2279_125B_8432_4174_627614C1991C"
   }
  ]
 },
 "this.Menu_2D536148_2336_13FC_41B3_1237BC94E607",
 {
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "veilColorDirection": "horizontal",
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "modal": true,
  "shadow": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingBottom": 5,
  "bodyBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "shadowOpacity": 0.5,
  "title": "",
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "class": "Window",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "headerPaddingLeft": 10,
  "children": [
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "id": "container_2D210116_2336_1394_41A8_6B485D9F9171",
    "minHeight": 20,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "Container",
    "horizontalAlign": "left",
    "children": [
     "this.viewer_uid2D21E115_2336_1397_418B_DE76B332CF19",
     {
      "gap": 10,
      "bottom": 0,
      "verticalAlign": "bottom",
      "paddingLeft": 0,
      "backgroundColor": [],
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "minHeight": 20,
      "backgroundOpacity": 0.3,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "class": "Container",
      "horizontalAlign": "left",
      "children": [
       {
        "paddingLeft": 10,
        "backgroundColor": [
         "#000000"
        ],
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "id": "htmltext_2D211117_2336_1394_41B0_AD4A26E4B355",
        "minHeight": 0,
        "visible": false,
        "backgroundOpacity": 0.7,
        "shadow": false,
        "showEffect": {
         "class": "FadeInEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "minWidth": 0,
        "class": "HTMLText",
        "borderSize": 0,
        "html": "",
        "hideEffect": {
         "class": "FadeOutEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "width": "100%",
        "scrollBarMargin": 2,
        "data": {
         "name": "HTMLText2181"
        },
        "scrollBarColor": "#000000",
        "paddingBottom": 5,
        "paddingRight": 10,
        "scrollBarOpacity": 0.5,
        "paddingTop": 5,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "layout": "vertical",
      "overflow": "scroll",
      "height": "30%",
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "contentOpaque": true,
      "scrollBarColor": "#FFFFFF",
      "paddingBottom": 0,
      "data": {
       "name": "Container2180"
      },
      "left": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 0,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical"
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_left.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D214118_2336_139C_41B6_72902D93B360",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList, -1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2182"
      },
      "left": 10,
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "transparencyActive": false
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_right.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D215118_2336_139C_41B1_BE7B131585BB",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FF11BE2_1CFB_F166_41B7_181473196FC9_AlbumPlayList, 1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2183"
      },
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 10,
      "transparencyActive": false
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "Container2179"
    },
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [],
    "backgroundColorDirection": "vertical"
   }
  ],
  "shadowBlurRadius": 6,
  "titleFontColor": "#000000",
  "width": 400,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "height": 600,
  "shadowVerticalLength": 0,
  "titlePaddingRight": 5,
  "scrollBarMargin": 2,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "bodyBackgroundOpacity": 0,
  "shadowColor": "#000000",
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconHeight": 20,
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 3,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarWidth": 10,
  "id": "window_0DCD18BB_1CF8_BFE6_41AA_9C91D5CEBD23",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "shadowSpread": 1,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "minWidth": 20,
  "titleFontWeight": "normal",
  "footerHeight": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "close": "this.playList_1415C944_1EEE_33F5_41AA_5D179FDEB4AF.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "contentOpaque": false,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingRight": 0,
  "closeButtonBackgroundColor": [],
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "scrollBarOpacity": 0.5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [],
  "verticalAlign": "middle",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "data": {
   "name": "Window9941"
  }
 },
 {
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "veilColorDirection": "horizontal",
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "modal": true,
  "shadow": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingBottom": 5,
  "bodyBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "shadowOpacity": 0.5,
  "title": "",
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "class": "Window",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "headerPaddingLeft": 10,
  "children": [
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "id": "container_2D27811B_2336_139C_41C0_8F1DFFFB1A77",
    "minHeight": 20,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "Container",
    "horizontalAlign": "left",
    "children": [
     "this.viewer_uid2D20611B_2336_139C_41B6_FE7BE28A8638",
     {
      "gap": 10,
      "bottom": 0,
      "verticalAlign": "bottom",
      "paddingLeft": 0,
      "backgroundColor": [],
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "minHeight": 20,
      "backgroundOpacity": 0.3,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "class": "Container",
      "horizontalAlign": "left",
      "children": [
       {
        "paddingLeft": 10,
        "backgroundColor": [
         "#000000"
        ],
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "id": "htmltext_2D27A11C_2336_1394_41A3_D69C44A0B738",
        "minHeight": 0,
        "visible": false,
        "backgroundOpacity": 0.7,
        "shadow": false,
        "showEffect": {
         "class": "FadeInEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "minWidth": 0,
        "class": "HTMLText",
        "borderSize": 0,
        "html": "",
        "hideEffect": {
         "class": "FadeOutEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "width": "100%",
        "scrollBarMargin": 2,
        "data": {
         "name": "HTMLText2187"
        },
        "scrollBarColor": "#000000",
        "paddingBottom": 5,
        "paddingRight": 10,
        "scrollBarOpacity": 0.5,
        "paddingTop": 5,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "layout": "vertical",
      "overflow": "scroll",
      "height": "30%",
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "contentOpaque": true,
      "scrollBarColor": "#FFFFFF",
      "paddingBottom": 0,
      "data": {
       "name": "Container2186"
      },
      "left": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 0,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical"
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_left.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D27D11D_2336_1394_41B5_79D5BFE2DB74",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, -1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2188"
      },
      "left": 10,
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "transparencyActive": false
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_right.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D27E11D_2336_1394_419A_AB15CEEA0A7E",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, 1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2189"
      },
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 10,
      "transparencyActive": false
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "Container2185"
    },
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [],
    "backgroundColorDirection": "vertical"
   }
  ],
  "shadowBlurRadius": 6,
  "titleFontColor": "#000000",
  "width": 400,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "height": 600,
  "shadowVerticalLength": 0,
  "titlePaddingRight": 5,
  "scrollBarMargin": 2,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "bodyBackgroundOpacity": 0,
  "shadowColor": "#000000",
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconHeight": 20,
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 3,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarWidth": 10,
  "id": "window_118D8D24_1CE8_B6E2_41AF_9A026A0548F7",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "shadowSpread": 1,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "minWidth": 20,
  "titleFontWeight": "normal",
  "footerHeight": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "close": "this.playList_15EE094D_1EEE_33F4_416C_2DB3C8B5B446.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "contentOpaque": false,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingRight": 0,
  "closeButtonBackgroundColor": [],
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "scrollBarOpacity": 0.5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [],
  "verticalAlign": "middle",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "data": {
   "name": "Window1979"
  }
 },
 {
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "veilColorDirection": "horizontal",
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "modal": true,
  "shadow": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingBottom": 5,
  "bodyBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "shadowOpacity": 0.5,
  "title": "",
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "class": "Window",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "headerPaddingLeft": 10,
  "children": [
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "id": "container_2D27211E_2336_1394_41B9_5F44DD6B2E9E",
    "minHeight": 20,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "Container",
    "horizontalAlign": "left",
    "children": [
     "this.viewer_uid2D27111D_2336_1394_41B7_2550CFB1BFD1",
     {
      "gap": 10,
      "bottom": 0,
      "verticalAlign": "bottom",
      "paddingLeft": 0,
      "backgroundColor": [],
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "minHeight": 20,
      "backgroundOpacity": 0.3,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "class": "Container",
      "horizontalAlign": "left",
      "children": [
       {
        "paddingLeft": 10,
        "backgroundColor": [
         "#000000"
        ],
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "id": "htmltext_2D27411E_2336_1395_41B1_3CFC8A471831",
        "minHeight": 0,
        "visible": false,
        "backgroundOpacity": 0.7,
        "shadow": false,
        "showEffect": {
         "class": "FadeInEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "minWidth": 0,
        "class": "HTMLText",
        "borderSize": 0,
        "html": "",
        "hideEffect": {
         "class": "FadeOutEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "width": "100%",
        "scrollBarMargin": 2,
        "data": {
         "name": "HTMLText2193"
        },
        "scrollBarColor": "#000000",
        "paddingBottom": 5,
        "paddingRight": 10,
        "scrollBarOpacity": 0.5,
        "paddingTop": 5,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "layout": "vertical",
      "overflow": "scroll",
      "height": "30%",
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "contentOpaque": true,
      "scrollBarColor": "#FFFFFF",
      "paddingBottom": 0,
      "data": {
       "name": "Container2192"
      },
      "left": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 0,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical"
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_left.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D27711F_2336_1394_419A_430572038C75",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, -1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2194"
      },
      "left": 10,
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "transparencyActive": false
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_right.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D268120_2336_13AC_41AF_0FA3CB6D5580",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_09379898_1CE1_F14F_4193_2F70D849DF0F_AlbumPlayList, 1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2195"
      },
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 10,
      "transparencyActive": false
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "Container2191"
    },
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [],
    "backgroundColorDirection": "vertical"
   }
  ],
  "shadowBlurRadius": 6,
  "titleFontColor": "#000000",
  "width": 400,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "height": 600,
  "shadowVerticalLength": 0,
  "titlePaddingRight": 5,
  "scrollBarMargin": 2,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "bodyBackgroundOpacity": 0,
  "shadowColor": "#000000",
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconHeight": 20,
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 3,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarWidth": 10,
  "id": "window_0BD44083_1C20_5141_41AA_04C2D3C4D7F1",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "shadowSpread": 1,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "minWidth": 20,
  "titleFontWeight": "normal",
  "footerHeight": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "close": "this.playList_15EE8950_1EEE_33EC_41B6_59F69010DCEB.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "contentOpaque": false,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingRight": 0,
  "closeButtonBackgroundColor": [],
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "scrollBarOpacity": 0.5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [],
  "verticalAlign": "middle",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "data": {
   "name": "Window15145"
  }
 },
 {
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "veilColorDirection": "horizontal",
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "modal": true,
  "shadow": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingBottom": 5,
  "bodyBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "shadowOpacity": 0.5,
  "title": "",
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "class": "Window",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "headerPaddingLeft": 10,
  "children": [
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "id": "container_2D263122_2336_13AC_41BE_98C321E456BE",
    "minHeight": 20,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "Container",
    "horizontalAlign": "left",
    "children": [
     "this.viewer_uid2D260121_2336_13AC_41A7_FD9467BFE036",
     {
      "gap": 10,
      "bottom": 0,
      "verticalAlign": "bottom",
      "paddingLeft": 0,
      "backgroundColor": [],
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "minHeight": 20,
      "backgroundOpacity": 0.3,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "class": "Container",
      "horizontalAlign": "left",
      "children": [
       {
        "paddingLeft": 10,
        "backgroundColor": [
         "#000000"
        ],
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "id": "htmltext_2D265122_2336_13AC_4196_309BA5BCEC4E",
        "minHeight": 0,
        "visible": false,
        "backgroundOpacity": 0.7,
        "shadow": false,
        "showEffect": {
         "class": "FadeInEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "minWidth": 0,
        "class": "HTMLText",
        "borderSize": 0,
        "html": "",
        "hideEffect": {
         "class": "FadeOutEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "width": "100%",
        "scrollBarMargin": 2,
        "data": {
         "name": "HTMLText2199"
        },
        "scrollBarColor": "#000000",
        "paddingBottom": 5,
        "paddingRight": 10,
        "scrollBarOpacity": 0.5,
        "paddingTop": 5,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "layout": "vertical",
      "overflow": "scroll",
      "height": "30%",
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "contentOpaque": true,
      "scrollBarColor": "#FFFFFF",
      "paddingBottom": 0,
      "data": {
       "name": "Container2198"
      },
      "left": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 0,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical"
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_left.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D259123_2336_13AC_41B5_4DB7FD788FEB",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList, -1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2200"
      },
      "left": 10,
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "transparencyActive": false
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_right.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D25A123_2336_13AC_4182_D3C8E09921B9",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_1308781F_1CE8_9EDE_41B2_202E7BFE7A2D_AlbumPlayList, 1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2201"
      },
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 10,
      "transparencyActive": false
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "Container2197"
    },
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [],
    "backgroundColorDirection": "vertical"
   }
  ],
  "shadowBlurRadius": 6,
  "titleFontColor": "#000000",
  "width": 400,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "height": 600,
  "shadowVerticalLength": 0,
  "titlePaddingRight": 5,
  "scrollBarMargin": 2,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "bodyBackgroundOpacity": 0,
  "shadowColor": "#000000",
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconHeight": 20,
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 3,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarWidth": 10,
  "id": "window_13769AFE_1CE9_F35E_41AD_2854A6F542F2",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "shadowSpread": 1,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "minWidth": 20,
  "titleFontWeight": "normal",
  "footerHeight": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "close": "this.playList_15EFE954_1EEE_3394_41B1_7845B6FBE58F.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "contentOpaque": false,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingRight": 0,
  "closeButtonBackgroundColor": [],
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "scrollBarOpacity": 0.5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [],
  "verticalAlign": "middle",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "data": {
   "name": "Window6665"
  }
 },
 {
  "gap": 10,
  "backgroundColorDirection": "vertical",
  "veilColorDirection": "horizontal",
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "scrollBarVisible": "rollOver",
  "modal": true,
  "shadow": true,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerPaddingBottom": 5,
  "bodyBackgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "shadowOpacity": 0.5,
  "title": "",
  "horizontalAlign": "center",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "class": "Window",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "headerPaddingLeft": 10,
  "children": [
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "id": "container_2D246129_2336_13BC_41C0_059632959735",
    "minHeight": 20,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "Container",
    "horizontalAlign": "left",
    "children": [
     "this.viewer_uid2D244129_2336_13BC_41B9_0D6EF2AA67EE",
     {
      "gap": 10,
      "bottom": 0,
      "verticalAlign": "bottom",
      "paddingLeft": 0,
      "backgroundColor": [],
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "minHeight": 20,
      "backgroundOpacity": 0.3,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 20,
      "class": "Container",
      "horizontalAlign": "left",
      "children": [
       {
        "paddingLeft": 10,
        "backgroundColor": [
         "#000000"
        ],
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "id": "htmltext_2D5B812A_2336_13BC_419D_BC001A3B4FC9",
        "minHeight": 0,
        "visible": false,
        "backgroundOpacity": 0.7,
        "shadow": false,
        "showEffect": {
         "class": "FadeInEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "minWidth": 0,
        "class": "HTMLText",
        "borderSize": 0,
        "html": "",
        "hideEffect": {
         "class": "FadeOutEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "width": "100%",
        "scrollBarMargin": 2,
        "data": {
         "name": "HTMLText2205"
        },
        "scrollBarColor": "#000000",
        "paddingBottom": 5,
        "paddingRight": 10,
        "scrollBarOpacity": 0.5,
        "paddingTop": 5,
        "borderRadius": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical"
       }
      ],
      "layout": "vertical",
      "overflow": "scroll",
      "height": "30%",
      "creationPolicy": "delayed",
      "scrollBarMargin": 2,
      "contentOpaque": true,
      "scrollBarColor": "#FFFFFF",
      "paddingBottom": 0,
      "data": {
       "name": "Container2204"
      },
      "left": 0,
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 0,
      "backgroundColorRatios": [],
      "backgroundColorDirection": "vertical"
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_left.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D5BB12B_2336_13BC_41AF_6A49BFB7BA6E",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList, -1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2206"
      },
      "left": 10,
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "transparencyActive": false
     },
     {
      "top": "45%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "iconURL": "skin/album_right.png",
      "minHeight": 0,
      "visible": false,
      "mode": "push",
      "backgroundOpacity": 0,
      "shadow": false,
      "id": "component_2D5BC12B_2336_13BC_41BA_2DD65744FAD0",
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "click": "this.loadFromCurrentMediaPlayList(this.album_0FB87E46_1CE8_B2AE_41BC_0F44637199B3_AlbumPlayList, 1)",
      "minWidth": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "borderSize": 0,
      "cursor": "hand",
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "paddingBottom": 0,
      "data": {
       "name": "IconButton2207"
      },
      "paddingRight": 0,
      "paddingTop": 0,
      "borderRadius": 0,
      "right": 10,
      "transparencyActive": false
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "Container2203"
    },
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [],
    "backgroundColorDirection": "vertical"
   }
  ],
  "shadowBlurRadius": 6,
  "titleFontColor": "#000000",
  "width": 400,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "height": 600,
  "shadowVerticalLength": 0,
  "titlePaddingRight": 5,
  "scrollBarMargin": 2,
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerVerticalAlign": "middle",
  "bodyBackgroundOpacity": 0,
  "shadowColor": "#000000",
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 14,
  "titlePaddingBottom": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonIconHeight": 20,
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "borderRadius": 5,
  "closeButtonPressedBackgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "shadowHorizontalLength": 3,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "scrollBarWidth": 10,
  "id": "window_0FE6D0CB_1CEB_8FA5_4196_AC11051ABA84",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "creationPolicy": "delayed",
  "titlePaddingLeft": 5,
  "shadowSpread": 1,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "minHeight": 20,
  "overflow": "scroll",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "headerBorderSize": 0,
  "minWidth": 20,
  "titleFontWeight": "normal",
  "footerHeight": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerBorderColor": "#000000",
  "closeButtonBorderRadius": 11,
  "veilOpacity": 0.4,
  "close": "this.playList_15EAF95D_1EEE_3394_41B7_BAE7C0E8CE74.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedIconLineWidth": 3,
  "closeButtonIconWidth": 20,
  "contentOpaque": false,
  "footerBackgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerPaddingRight": 0,
  "closeButtonBackgroundColor": [],
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "bodyPaddingTop": 0,
  "scrollBarOpacity": 0.5,
  "closeButtonIconLineWidth": 2,
  "closeButtonRollOverBackgroundColor": [],
  "verticalAlign": "middle",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "data": {
   "name": "Window13868"
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D492168_2336_13BC_41A2_9751218A4531",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.39,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D4DD177_2336_1394_41B9_7A384A8AB43B",
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.69,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D40A186_2336_1374_41B4_CF9F69961454",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 79.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D7A4195_2336_1294_41AD_A987D16BD039",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D7CC1A4_2336_12B4_41B1_57002E74B0B2",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D75D1BB_2336_129C_41A2_9BDDDF73C4C6",
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.48,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D6E81C9_2336_12FF_41B2_3CE3CEDC1A99",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.33,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2D6011D9_2336_129C_41A7_B29D5F414B68",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.69,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2C984201_2336_116F_41B5_E79BBF6EC4AD",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.33,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2C963221_2336_11AC_41B1_03D58682CBA5",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -139.26,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2C836242_2336_11EC_41BF_EA4DBAD3B622",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CBFA268_2336_11BC_41B8_F020520651D0",
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CB5E282_2336_116C_4193_467A04219621",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -59.3,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CA3B2A7_2336_16B4_41AA_409B148A6FE4",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.28,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CDE12B9_2336_169C_41A5_1F35A8C508FC",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.55,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CCAF2C9_2336_16FC_4133_7586F18DB690",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CC532D8_2336_169C_41A7_58525C19A11C",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 102.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "camera_2CF132E9_2336_16BC_41B6_3561A2DA8945",
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeInEffect",
  "id": "effect_FA307F25_E91E_D0EF_41E4_1E239A17C2CA",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF",
  "easing": "cubic_in_out",
  "duration": 1000
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
 "this.effect_FA318F25_E91E_D0EF_41DD_E5C9C1CF2FBF"
], "children": [
 {
  "tabsAlign": "normal",
  "tabsTextDecoration": "none",
  "top": "0%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "tabsBackgroundColorRatios": [
   0
  ],
  "tabsBackgroundOpacity": 0.8,
  "scrollBarVisible": "rollOver",
  "selectedTabBackgroundColor": [
   "#FFFFFF"
  ],
  "selectedTabBackgroundOpacity": 0.91,
  "minHeight": 1,
  "tabsFontWeight": "normal",
  "backgroundOpacity": 0,
  "tabsSize": 40,
  "tabsFontStyle": "italic",
  "shadow": false,
  "tabsRollOverBackgroundColor": [
   "#FFFFFF"
  ],
  "pagePaddingBottom": 0,
  "id": "TabPanel_E67A7708_E972_50A5_41D7_8A26273D3E85",
  "tabsFontFamily": "Arial",
  "selectedTabBackgroundColorRatios": [
   0
  ],
  "borderSize": 1,
  "minWidth": 1,
  "class": "TabPanel",
  "tabsFontColor": "#000000",
  "tabsRollOverFontColor": "#000000",
  "tabsRollOverBackgroundColorRatios": [
   0
  ],
  "tabsPosition": "top",
  "selectedTabFontSize": 20,
  "tabsRollOverFontStyle": "normal",
  "tabsBackgroundColor": [
   "#FFFFFF"
  ],
  "selectedTabFontColor": "#000000",
  "borderColor": "#333333",
  "height": "100%",
  "width": "100%",
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "creationPolicy": "delayed",
  "scrollBarColor": "#000000",
  "pagePaddingLeft": 0,
  "overflow": "visible",
  "tabsRollOverFontWeight": "normal",
  "paddingBottom": 0,
  "data": {
   "name": "TabPanel74479"
  },
  "pagePaddingTop": 0,
  "left": "0%",
  "paddingRight": 0,
  "pages": [
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 20,
    "backgroundOpacity": 0.3,
    "shadow": false,
    "borderSize": 1,
    "minWidth": 20,
    "class": "TabPanelPage",
    "horizontalAlign": "left",
    "children": [
     "this.MainViewer",
     {
      "top": "0%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "maxHeight": 235,
      "id": "Image_F9A71E16_E916_50AD_41E3_AAAC27F2587D",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 1,
      "class": "Image",
      "horizontalAlign": "left",
      "width": "12%",
      "height": "20%",
      "data": {
       "name": "Beta Logo Main"
      },
      "url": "skin/Image_F9A71E16_E916_50AD_41E3_AAAC27F2587D.png",
      "paddingBottom": 0,
      "left": "0%",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "paddingTop": 0,
      "borderRadius": 0,
      "maxWidth": 235
     },
     {
      "gap": 13,
      "backgroundColorDirection": "vertical",
      "itemLabelFontFamily": "Arial",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "itemLabelFontSize": 14,
      "itemThumbnailShadowHorizontalLength": 3,
      "scrollBarVisible": "rollOver",
      "itemPaddingBottom": 3,
      "itemVerticalAlign": "middle",
      "itemThumbnailShadow": true,
      "itemBackgroundColor": [],
      "itemLabelGap": 8,
      "itemThumbnailShadowBlurRadius": 8,
      "itemHorizontalAlign": "center",
      "itemThumbnailBorderRadius": 5,
      "backgroundOpacity": 1,
      "shadow": false,
      "horizontalAlign": "left",
      "selectedItemLabelFontColor": "#0099FF",
      "borderSize": 0,
      "class": "ThumbnailList",
      "itemBackgroundColorDirection": "vertical",
      "itemThumbnailOpacity": 1,
      "layout": "horizontal",
      "itemLabelPosition": "bottom",
      "itemBackgroundOpacity": 0,
      "itemThumbnailShadowColor": "#000000",
      "itemThumbnailHeight": 75,
      "itemThumbnailShadowOpacity": 0.27,
      "itemThumbnailShadowSpread": 1,
      "height": 125,
      "scrollBarMargin": 2,
      "itemBackgroundColorRatios": [],
      "itemPaddingRight": 3,
      "itemThumbnailWidth": 75,
      "borderRadius": 10,
      "itemPaddingTop": 3,
      "rollOverItemLabelFontWeight": "bold",
      "backgroundColorRatios": [
       0
      ],
      "itemMode": "normal",
      "bottom": 0,
      "paddingLeft": 20,
      "itemLabelTextDecoration": "none",
      "scrollBarWidth": 10,
      "id": "ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA",
      "itemLabelFontColor": "#000000",
      "minHeight": 20,
      "rollOverItemBackgroundOpacity": 0,
      "selectedItemThumbnailShadowVerticalLength": 3,
      "itemBorderRadius": 0,
      "selectedItemLabelFontWeight": "bold",
      "minWidth": 20,
      "selectedItemThumbnailShadow": true,
      "itemThumbnailShadowVerticalLength": 3,
      "selectedItemThumbnailShadowHorizontalLength": 3,
      "scrollBarColor": "#666666",
      "data": {
       "name": "ThumbnailList35762"
      },
      "itemLabelFontStyle": "normal",
      "paddingBottom": 10,
      "itemLabelHorizontalAlign": "center",
      "itemPaddingLeft": 3,
      "paddingRight": 20,
      "playList": "this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist",
      "scrollBarOpacity": 0.5,
      "paddingTop": 10,
      "left": "30%",
      "right": "30%",
      "verticalAlign": "top",
      "itemOpacity": 1,
      "itemLabelFontWeight": "normal",
      "itemThumbnailScaleMode": "fit_outside"
     },
     {
      "bottom": 12.41,
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "maxHeight": 108,
      "id": "Image_F9BC7CFC_E911_D15D_41A7_A8128140A49B",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 1,
      "class": "Image",
      "horizontalAlign": "center",
      "width": 250,
      "height": "10.923%",
      "data": {
       "name": "WP Logo Main"
      },
      "url": "skin/Image_F9BC7CFC_E911_D15D_41A7_A8128140A49B.jpg",
      "paddingBottom": 0,
      "left": 27,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "paddingTop": 0,
      "borderRadius": 0,
      "maxWidth": 448
     },
     "this.MapViewer",
     "this.IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB"
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "borderColor": "#000000",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingBottom": 0,
    "data": {
     "name": "TabPanelPage74480"
    },
    "label": "Millennium Cave VR",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical"
   },
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 20,
    "backgroundOpacity": 0.91,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "TabPanelPage",
    "horizontalAlign": "left",
    "children": [
     "this.ViewerAreaLabeled_F9E5F141_E932_50A7_41D7_4CF672DE612B",
     {
      "itemPaddingTop": 3,
      "gap": 10,
      "itemMode": "normal",
      "bottom": 0,
      "paddingLeft": 20,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarWidth": 10,
      "itemLabelFontSize": 14,
      "id": "ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3",
      "scrollBarVisible": "rollOver",
      "itemLabelFontColor": "#000000",
      "itemPaddingBottom": 3,
      "itemThumbnailShadowBlurRadius": 4,
      "itemVerticalAlign": "middle",
      "minHeight": 1,
      "itemLabelTextDecoration": "none",
      "itemBackgroundColor": [],
      "itemLabelGap": 5,
      "itemBorderRadius": 0,
      "itemThumbnailShadow": true,
      "itemThumbnailBorderRadius": 5,
      "backgroundOpacity": 1,
      "shadow": false,
      "selectedItemLabelFontWeight": "bold",
      "horizontalAlign": "left",
      "itemHorizontalAlign": "center",
      "itemLabelFontFamily": "Arial",
      "borderSize": 0,
      "minWidth": 1,
      "class": "ThumbnailList",
      "itemBackgroundOpacity": 0,
      "itemBackgroundColorDirection": "vertical",
      "itemThumbnailOpacity": 1,
      "layout": "horizontal",
      "itemLabelPosition": "bottom",
      "backgroundColorDirection": "vertical",
      "itemThumbnailShadowColor": "#000000",
      "itemThumbnailHeight": 75,
      "itemThumbnailShadowOpacity": 0.8,
      "itemThumbnailShadowSpread": 1,
      "height": 125,
      "scrollBarMargin": 2,
      "data": {
       "name": "ThumbnailList21541"
      },
      "itemLabelFontStyle": "normal",
      "playList": "this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist",
      "scrollBarColor": "#666666",
      "itemThumbnailShadowVerticalLength": 3,
      "itemBackgroundColorRatios": [],
      "itemPaddingRight": 3,
      "paddingBottom": 10,
      "borderRadius": 10,
      "itemPaddingLeft": 3,
      "itemThumbnailWidth": 100,
      "scrollBarOpacity": 0.5,
      "paddingTop": 10,
      "left": "30%",
      "paddingRight": 20,
      "right": "30%",
      "verticalAlign": "top",
      "itemOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "itemLabelFontWeight": "normal",
      "itemThumbnailScaleMode": "fit_outside",
      "itemLabelHorizontalAlign": "center",
      "itemThumbnailShadowHorizontalLength": 3
     },
     {
      "bottom": 12,
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "maxHeight": 108,
      "id": "Image_EB2E659D_F1DB_8CF2_41EB_8601309BA408",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 1,
      "class": "Image",
      "horizontalAlign": "center",
      "width": 250,
      "height": "10.92%",
      "data": {
       "name": "Image11118"
      },
      "url": "skin/Image_EB2E659D_F1DB_8CF2_41EB_8601309BA408.jpg",
      "paddingBottom": 0,
      "left": 27,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "paddingTop": 0,
      "borderRadius": 0,
      "maxWidth": 448
     },
     {
      "top": "0%",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "maxHeight": 235,
      "id": "Image_EBFC1D44_F2B8_7C52_41EC_D1A929E28ADA",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "shadow": false,
      "borderSize": 0,
      "minWidth": 1,
      "class": "Image",
      "horizontalAlign": "center",
      "width": "12%",
      "height": "20%",
      "data": {
       "name": "Image16190"
      },
      "url": "skin/Image_EBFC1D44_F2B8_7C52_41EC_D1A929E28ADA.png",
      "paddingBottom": 0,
      "left": "0%",
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "paddingTop": 0,
      "borderRadius": 0,
      "maxWidth": 235
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "TabPanelPage75924"
    },
    "label": "Millennium Cave Media",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical"
   },
   {
    "gap": 10,
    "verticalAlign": "top",
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "minHeight": 20,
    "backgroundOpacity": 0.91,
    "shadow": false,
    "borderSize": 0,
    "minWidth": 20,
    "class": "TabPanelPage",
    "horizontalAlign": "left",
    "children": [
     {
      "bottom": 100,
      "paddingLeft": 20,
      "backgroundColor": [
       "#FFFFFF",
       "#CCCCCC"
      ],
      "scrollBarWidth": 10,
      "shadowHorizontalLength": 2,
      "id": "HTMLText_EC2EB9FE_F2E9_842E_41C3_76797D21F3CB",
      "scrollBarVisible": "rollOver",
      "minHeight": 1,
      "shadow": true,
      "shadowSpread": 1,
      "backgroundOpacity": 0.91,
      "shadowOpacity": 0.19,
      "borderSize": 3,
      "minWidth": 1,
      "class": "HTMLText",
      "shadowVerticalLength": 2,
      "shadowBlurRadius": 7,
      "borderColor": "#000000",
      "height": "73.508%",
      "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0099ff;font-size:37px;\"><B>City of Austin VR Cave Viewer</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;\"><B>Watershed Protection Department</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\"><B>VR Cave Expedition Team:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Jessica Gordon</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Vivian Loftin</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Trent Atkins</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;\">Marbenn Cayetano</SPAN></SPAN></DIV></div>",
      "scrollBarMargin": 2,
      "data": {
       "name": "HTMLText53815"
      },
      "shadowColor": "#000000",
      "scrollBarColor": "#000000",
      "paddingBottom": 10,
      "left": 100,
      "paddingRight": 20,
      "scrollBarOpacity": 0.5,
      "paddingTop": 20,
      "borderRadius": 0,
      "right": 100,
      "backgroundColorRatios": [
       0.73,
       1
      ],
      "backgroundColorDirection": "vertical"
     }
    ],
    "layout": "absolute",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "height": "100%",
    "width": "100%",
    "scrollBarMargin": 2,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "data": {
     "name": "TabPanelPage75940"
    },
    "label": "About",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical"
   }
  ],
  "scrollBarOpacity": 0.5,
  "paddingTop": 0,
  "borderRadius": 1,
  "pagePaddingRight": 0,
  "tabsFontSize": 15,
  "selectedTabFontWeight": "bold"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FEEF93C1_EE23_AF1A_41E6_2AF5593887BB], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_E6A9BC00_E976_D0A5_41DA_21B2979904AA_playlist,this.ThumbnailList_FB646CEA_E916_3165_41D7_7BE079541FC3_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_2D5BF12E_2336_13B4_4188_E21DB2B3C0D1.set('selectedIndex', 0); this.playList_2D5B912E_2336_13B4_41B4_F9107AE50B97.set('selectedIndex', 0)",
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "minHeight": 20,
 "backgroundPreloadEnabled": false,
 "shadow": false,
 "vrPolyfillScale": 0.5,
 "borderSize": 0,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "minWidth": 20,
 "class": "Player",
 "horizontalAlign": "left",
 "layout": "absolute",
 "creationPolicy": "delayed",
 "overflow": "visible",
 "height": "100%",
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "Player3798"
 }
})
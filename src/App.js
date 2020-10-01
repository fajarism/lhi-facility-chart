import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    scaleOrdinal as d3ScaleOrdinal
} from "d3-scale"

import TimelinesChart from "./utilities/src/timelines"
import moment from 'moment';

const KAPAL_PERINTIS_JATIM = "Kapal Perintis"
const KAPAL_PENGAWAS_KKP = "Kapal Pengawas"
const BENCHMARKING_BALAI_PANTAI_BALI = "Balai Pantai Bali"
const LOMBA_OCEANO = "Lomba Oceano"
const WAHANA_ALPO = "Wahana Alpo"
const DIPA_HANKAM = "DIPA Hankam"
const PPT_MARITIM = "PPT Maritim"
const PPT_INA_TEWS = "PPT INA-TEWS"
const KPC60 = "Kapal Patroli Cepat 60M"
const BCM4 = "Kapal BCM-4"
const FERRYACEH1300 = "Ferry Aceh 1300GT"
const FERRY1500 = "Ferry RoRo 1500GT"
const TODAY = ""

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let todayDate = new moment().toDate()
    let dataJson = [
      // Produksi 
      {
        group : "Produksi", 
        data : [
            {
              label : FERRY1500,
              data : [
                  {
                    timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                    val : FERRY1500
                  }
              ]
            },

            {
              label : FERRYACEH1300,
              data : [
                  {
                    timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                    val : FERRYACEH1300
                  }
              ]
            },
        ]
      },


      // MWS 
      {
        group : "Mekanik", 
        data : [
            {
                label : PPT_MARITIM,
                data : [
                    {
                      timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                      val : PPT_MARITIM
                    }
                ]
            },
            {
                label : PPT_INA_TEWS,
                data : [
                    {
                      timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                      val : PPT_INA_TEWS
                    }
                ]
            },
            {
                label : KPC60,
                data : [
                    {
                      timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                      val : KPC60
                    }
                ]
            },
            {
                label : BCM4,
                data : [
                    {
                      timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                      val : BCM4
                    }
                ]
            },
        ]
      },

      // CNC 
      {
        group : "CNC 5-Axis", 
        data : [
            {
                label : KPC60,
                data : [
                    {
                      timeRange : [new Date("Sep 21 2020"), new Date("Sep 25 2020") ],
                      val : KPC60
                    }
                ]
            }
        ]
      },

      // Inskal 
      {
        group : "Instrumentasi", 
        data : [
            // {
            //     label : "Instrumentasi",
            //     data : [
            //         {
            //             timeRange : [new Date("Jul 06 2018"), new Date("Jul 13 2018") ],
            //             val : "Buoy Merah Putih"
            //         }
            //     ]
            // },

            // {
            //   label : "Instrumentasi",
            //   data : [
            //       {
            //           timeRange : [new Date("Sep 02 2018"), new Date("Sep 09 2018") ],
            //           val : "Kapal Patroli Cepat 75 M"
            //       }
            //   ]
            // },

            // {
            //   label : "Instrumentasi",
            //   data : [
            //       {
            //           timeRange : [new Date("Nov 02 2018"), new Date("Nov 05 2018") ],
            //           val : "Kapal Selam"
            //       }
            //   ]
            // }
        ]
      },

      // Towing Tank 
      {
        group : "Tow. Tank", 
        data : [
            {
                label : BCM4,
                data : [
                    {
                      timeRange : [new Date("Sep 30 2020"), todayDate ],
                      val : BCM4
                    }
                ]
            }
        ]
      },

      // MOB 
      {
        group : "MOB", 
        data : [
            {
                label : FERRYACEH1300,
                data : [
                    {
                      timeRange : [new Date("Sep 25 2020"), new Date("Sep 30 2020") ],
                      val : FERRYACEH1300
                    }
                ]
            }
        ]
      },

      // Cavitation Tunnel 
      {
        group : "CT", 
        data : [
            {
                label : TODAY,
                data : [
                    {
                      timeRange : [todayDate, todayDate],
                      val : KPC60
                    }
                ]
            }
        ]
      },
      
    ]

    let myColor = d3ScaleOrdinal([],["#B22222", "#14868C", "#FB9224", "#D35656", "#7f78d2", "#42b883", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"])
    let timelinesChart = TimelinesChart()

    console.log(myColor.domain())
    
    timelinesChart
      .data(dataJson)
      .zQualitative(true)
      .zColorScale(myColor)
      .topMargin("40")
      .width(window.innerWidth)
      .timeFormat('%Y-%m-%d')
      .enableOverview(false)
      (document.getElementById("facility-timeline-chart"))
  }
  
  render() {
    return (
      <div id="facility-timeline-chart"></div>
    );
  }
}

export default App;

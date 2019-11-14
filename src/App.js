import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    scaleOrdinal as d3ScaleOrdinal
} from "d3-scale"

import TimelinesChart from "./utilities/src/timelines"

const KAPAL_PERINTIS_JATIM = "Kapal Perintis"
const KAPAL_PENGAWAS_KKP = "Kapal Pengawas"
const BENCHMARKING_BALAI_PANTAI_BALI = "Balai Pantai Bali"
const LOMBA_OCEANO = "Lomba Oceano"
const WAHANA_ALPO = "Wahana Alpo"
const DIPA_HANKAM = "DIPA Hankam"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let dataJson = [
      // Produksi 
      {
        group : "Produksi", 
        data : [
            {
              label : KAPAL_PERINTIS_JATIM,
              data : [
                  {
                      timeRange : [new Date("Oct 01 2019"), new Date("Oct 03 2019") ],
                      val : KAPAL_PERINTIS_JATIM
                  }
              ]
            },

            {
              label : KAPAL_PENGAWAS_KKP,
              data : [
                  {
                      timeRange : [new Date("Oct 01 2019"), new Date("Oct 07 2019") ],
                      val : KAPAL_PENGAWAS_KKP
                  }
              ]
            },
        ]
      },

    //   // SMWS 
    //   {
    //     group : "SMWS", 
    //     data : [
    //         {
    //             label : "SMWS",
    //             data : [
    //                 {
    //                     timeRange : [new Date("Jun 15 2018"), new Date("Jul 01 2018") ],
    //                     val : "Buoy Merah Putih"
    //                 }
    //             ]
    //         },

    //         {
    //           label : "SMWS",
    //           data : [
    //               {
    //                   timeRange : [new Date("Jul 30 2018"), new Date("Aug 29 2018") ],
    //                   val : "Kapal Patroli Cepat 75 M"
    //               }
    //           ]
    //         },

    //         {
    //           label : "SMWS",
    //           data : [
    //               {
    //                   timeRange : [new Date("Sep 20 2018"), new Date("Oct 28 2018") ],
    //                   val : "Kapal Selam"
    //               }
    //           ]
    //         }
    //     ]
    //   },

      // MWS 
      {
        group : "MWS", 
        data : [
            {
                label : KAPAL_PENGAWAS_KKP,
                data : [
                    {
                        timeRange : [new Date("Oct 01 2019"), new Date("Oct 11 2019") ],
                        val : KAPAL_PENGAWAS_KKP
                    }
                ]
            },

            {
              label : DIPA_HANKAM,
              data : [
                  {
                      timeRange : [new Date("Oct 01 2019"), new Date("Oct 18 2019") ],
                      val : DIPA_HANKAM
                  }
              ]
            },
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
                label : KAPAL_PERINTIS_JATIM,
                data : [
                    {
                        timeRange : [new Date("Oct 01 2019"), new Date("Oct 04 2019") ],
                        val : KAPAL_PERINTIS_JATIM
                    }
                ]
            },

            {
              label : KAPAL_PENGAWAS_KKP,
              data : [
                  {
                      timeRange : [new Date("Oct 07 2019"), new Date("Oct 18 2019") ],
                      val : KAPAL_PENGAWAS_KKP
                  }
              ]
            },

            {
              label : DIPA_HANKAM,
              data : [
                  {
                      timeRange : [new Date("Oct 21 2019"), new Date("Oct 30 2019") ],
                      val : DIPA_HANKAM
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
                label : KAPAL_PERINTIS_JATIM,
                data : [
                    {
                        timeRange : [new Date("Oct 11 2019"), new Date("Oct 18 2019") ],
                        val : KAPAL_PERINTIS_JATIM
                    }
                ]
            },

            {
              label : KAPAL_PENGAWAS_KKP,
              data : [
                  {
                      timeRange : [new Date("Oct 21 2019"), new Date("Oct 28 2019") ],
                      val : KAPAL_PENGAWAS_KKP
                  }
              ]
            },

            {
              label : BENCHMARKING_BALAI_PANTAI_BALI,
              data : [
                  {
                      timeRange : [new Date("Oct 08 2019"), new Date("Oct 09 2019") ],
                      val : BENCHMARKING_BALAI_PANTAI_BALI
                  }
              ]
            },

            {
                label : LOMBA_OCEANO,
                data : [
                    {
                        timeRange : [new Date("Oct 04 2019"), new Date("Oct 07 2019") ],
                        val : LOMBA_OCEANO
                    },
                    {
                        timeRange : [new Date("Oct 10 2019"), new Date("Oct 11 2019") ],
                        val : LOMBA_OCEANO
                    }
                ]
            },

            {
                label : WAHANA_ALPO,
                data : [
                    {
                        timeRange : [new Date("Oct 25 2019"), new Date("Nov 08 2019") ],
                        val : WAHANA_ALPO
                    }
                ]
            },

            {
                label : DIPA_HANKAM,
                data : [
                    {
                        timeRange : [new Date("Nov 11 2019"), new Date("Nov 19 2019") ],
                        val : DIPA_HANKAM
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
                label : DIPA_HANKAM,
                data : [
                    {
                        timeRange : [new Date("Oct 31 2019"), new Date("Nov 08 2019") ],
                        val : DIPA_HANKAM
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TimelinesChart from "timelines-chart"

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
              label : "Produksi",
              data : [
                  {
                      timeRange : [new Date("Jun 09 2018"), new Date("Jun 14 2018") ],
                      val : "Buoy Merah Putih"
                  }
              ]
            },

            {
              label : "Produksi",
              data : [
                  {
                      timeRange : [new Date("Jul 25 2018"), new Date("Jul 30 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "Produksi",
              data : [
                  {
                      timeRange : [new Date("Sep 17 2018"), new Date("Sep 20 2018") ],
                      val : "Kapal Selam"
                  }
              ]
            }
        ]
      },

      // SMWS 
      {
        group : "SMWS", 
        data : [
            {
                label : "SMWS",
                data : [
                    {
                        timeRange : [new Date("Jun 15 2018"), new Date("Jul 01 2018") ],
                        val : "Buoy Merah Putih"
                    }
                ]
            },

            {
              label : "SMWS",
              data : [
                  {
                      timeRange : [new Date("Jul 30 2018"), new Date("Aug 29 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "SMWS",
              data : [
                  {
                      timeRange : [new Date("Sep 20 2018"), new Date("Oct 28 2018") ],
                      val : "Kapal Selam"
                  }
              ]
            }
        ]
      },

      // MWS 
      {
        group : "MWS", 
        data : [
            {
                label : "MWS",
                data : [
                    {
                        timeRange : [new Date("Jul 02 2018"), new Date("Jul 05 2018") ],
                        val : "Buoy Merah Putih"
                    }
                ]
            },

            {
              label : "MWS",
              data : [
                  {
                      timeRange : [new Date("Aug 30 2018"), new Date("Sep 02 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "MWS",
              data : [
                  {
                      timeRange : [new Date("Oct 29 2018"), new Date("Nov 01 2018") ],
                      val : "Kapal Selam"
                  }
              ]
            }
        ]
      },

      // Inskal 
      {
        group : "Instrumentasi", 
        data : [
            {
                label : "Instrumentasi",
                data : [
                    {
                        timeRange : [new Date("Jul 06 2018"), new Date("Jul 13 2018") ],
                        val : "Buoy Merah Putih"
                    }
                ]
            },

            {
              label : "Instrumentasi",
              data : [
                  {
                      timeRange : [new Date("Sep 02 2018"), new Date("Sep 09 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "Instrumentasi",
              data : [
                  {
                      timeRange : [new Date("Nov 02 2018"), new Date("Nov 05 2018") ],
                      val : "Kapal Selam"
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
                label : "MOB",
                data : [
                    {
                        timeRange : [new Date("Jul 14 2018"), new Date("Jul 21 2018") ],
                        val : "Buoy Merah Putih"
                    }
                ]
            },

            {
              label : "MOB",
              data : [
                  {
                      timeRange : [new Date("Sep 10 2018"), new Date("Sep 17 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "MOB",
              data : [
                  {
                      timeRange : [new Date("Nov 06 2018"), new Date("Nov 13 2018") ],
                      val : "Kapal Selam"
                  }
              ]
            }
        ]
      },

      // Towing Tank 
      {
        group : "Tow. Tank", 
        data : [
            {
                label : "Tow. Tank",
                data : [
                    {
                        timeRange : [new Date("Jul 15 2018"), new Date("Jul 25 2018") ],
                        val : "Buoy Merah Putih"
                    }
                ]
            },

            {
              label : "Tow. Tank",
              data : [
                  {
                      timeRange : [new Date("Sep 10 2018"), new Date("Sep 16 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "Tow. Tank",
              data : [
                  {
                      timeRange : [new Date("Nov 07 2018"), new Date("Nov 13 2018") ],
                      val : "Kapal Selam"
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
                label : "CT",
                data : [
                    {
                        timeRange : [new Date("Jul 27 2018"), new Date("Jul 30 2018") ],
                        val : "Buoy Merah Putih"
                    }
                ]
            },

            {
              label : "CT",
              data : [
                  {
                      timeRange : [new Date("Sep 18 2018"), new Date("Sep 20 2018") ],
                      val : "Kapal Patroli Cepat 75 M"
                  }
              ]
            },

            {
              label : "CT",
              data : [
                  {
                      timeRange : [new Date("Nov 14 2018"), new Date("Nov 17 2018") ],
                      val : "Kapal Selam"
                  }
              ]
            }
        ]
      },
      
    ]

    let timelinesChart = TimelinesChart()
    timelinesChart
      .data(dataJson)
      .zQualitative(true)
      .width("1200")
      .leftMargin("150")
      .rightMargin("150")
      (document.getElementById("facility-timeline-chart"))
  }
  
  render() {
    return (
      <div id="facility-timeline-chart"></div>
    );
  }
}

export default App;
